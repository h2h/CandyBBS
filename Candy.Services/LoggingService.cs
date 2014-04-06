using System;
using System.IO;
using System.Web;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;

namespace Candy.Services
{
    public class LoggingService : ILoggingService
    {
        private const string LogFileNameOnly = @"LogFile";
        private const string LogFileExtension = @".txt";
        private const string LogFileDirectory = @"~/App_Data";

        private const string DateTimeFormat = @"yyyy-MM-dd HH:mm:ss";
        private static readonly Object LogLock = new Object();
        private static string LogFileFolder;
        private static int MaxLogSize = 10000;
        private static string LogFileName;

        public LoggingService()
        {
            LogFileFolder = HttpContext.Current != null ? HttpContext.Current.Server.MapPath(LogFileDirectory) : ".";
            LogFileName = MakeLogFileName(false);
        }
        /// <summary>
        /// 生成日志文件名
        /// </summary>
        /// <param name="isArchive"></param>
        /// <returns></returns>
        private static string MakeLogFileName(bool isArchive)
        {
            return !isArchive ? String.Format("{0}//{1}{2}", LogFileFolder, LogFileNameOnly, LogFileExtension) :
                String.Format("{0}//{1}_{2}{3}", LogFileFolder, LogFileNameOnly, DateTime.UtcNow.ToString("yyyyMMdd_hhmmss"), LogFileExtension);
        }

        /// <summary>
        /// 如果文件不存在，就创建文件
        /// </summary>
        /// <param name="maxLogSize"></param>
        private static void CheckFileExists(int maxLogSize)
        {
            MaxLogSize = maxLogSize;

            if (!File.Exists(LogFileName))
            {
                using (File.Create(LogFileName))
                {
                    // Ensures is closed again after creation
                }
            }
        }
        /// <summary>
        /// 移动文件到归档
        /// </summary>
        private static void ArchiveLog()
        {
            // Move file
            File.Copy(LogFileName, MakeLogFileName(true));
            File.Delete(LogFileName);

            // Recreate file
            CheckFileExists(MaxLogSize);
        }
        /// <summary>
        /// Perform the write. Thread-safe.
        /// </summary>
        /// <param name="message"></param>
        private static void Write(string message)
        {
            if (message != "File does not exist.")
            {
                try
                {
                    // Note there is a lock here. This class is only suitable for error logging,
                    // not ANY form of trace logging...
                    lock (LogLock)
                    {
                        if (Length() >= MaxLogSize)
                        {
                            ArchiveLog();
                        }

                        using (var tw = TextWriter.Synchronized(File.AppendText(LogFileName)))
                        {
                            var callStack = new StackFrame(2, true); // Go back one stack frame to get module info

                            tw.WriteLine("{0} | {1} | {2} | {3}", DateTime.UtcNow.ToString(DateTimeFormat),
                                         callStack.GetMethod().Module.Name, callStack.GetMethod().Name, message);
                        }
                    }
                }
                catch (Exception)
                {
                    // Not much to do if logging failed...
                }
            }
        }
        /// <summary>
        /// Gets the file size, in medium trust
        /// </summary>
        /// <returns></returns>
        private static long Length()
        {
            // FileInfo not happy in medoum trust so just open the file
            using (var fs = File.OpenRead(LogFileName))
            {
                return fs.Length;
            }
        }
        /// <summary>
        /// Returns a list of log entries from the log file
        /// </summary>
        /// <returns></returns>
        private static List<Log> ReadLogFile()
        {
            // create empty log list
            var logs = new List<Log>();

            // Read the file and display it line by line.
            using (var file = new StreamReader(LogFileName, System.Text.Encoding.UTF8, true))
            {
                string line;
                while ((line = file.ReadLine()) != null)
                {
                    var logline = LogLineFormatter(line);
                    if (logline != null)
                    {
                        logs.Add(logline);
                    }
                }
            }

            // Order and take a max of 1000 entries
            return logs.OrderByDescending(x => x.Date).Take(100).ToList();
        }
        /// <summary>
        /// Formats a log line into a readable line
        /// </summary>
        /// <param name="line"></param>
        /// <returns></returns>
        private static Log LogLineFormatter(string line)
        {
            try
            {
                var lineSplit = line.Split('|');

                return new Log
                {
                    Date = DateTime.ParseExact(lineSplit[0].Trim(), DateTimeFormat, CultureInfo.InvariantCulture),
                    Module = lineSplit[1].Trim(),
                    Method = lineSplit[2].Trim(),
                    ErrorMessage = lineSplit[3].Trim(),
                };
            }
            catch (Exception)
            {
                return null;
            }
        }
        public void Initialise(int maxLogSize)
        {
            CheckFileExists(maxLogSize);
        }
        public void Recycle()
        {
            ArchiveLog();
        }
        public void ClearLogFiles()
        {
            ArchiveLog();
        }
        public void Error(string message)
        {
            Write(message);
        }
        public void Error(Exception ex)
        {
            const int maxExceptionDepth = 5;
            if (ex == null)
                return;

            var message = new StringBuilder(ex.Message);

            var inner = ex.InnerException;
            var depthCounter = 0;
            while (inner != null && depthCounter++ < maxExceptionDepth)
            {
                message.Append(" INNER EXCEPTION: ");
                message.Append(inner.Message);
                inner = inner.InnerException;
            }
            Write(message.ToString());
        }

        /// <summary>
        /// Returns all logs in the log file
        /// </summary>
        /// <returns></returns>
        public IList<Log> ListLogFile()
        {
            return ReadLogFile();
        }
    }
}
