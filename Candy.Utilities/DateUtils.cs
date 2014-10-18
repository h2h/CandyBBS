using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Candy.Utilities
{
    public static class DateUtils
    {
        public static string FormatLongDate(DateTime theDate, bool removeYear = false)
        {
            return removeYear ? theDate.ToString("dd MMMM") : theDate.ToString("dd MMMM yyyy");
        }
        public static string FormatDateTime(string date, string format)
        {
            DateTime time;
            if (DateTime.TryParse(date, out time) && !string.IsNullOrEmpty(format))
            {
                format = Regex.Replace(format, @"(?<!\\)((\\\\)*)(S)", "$1" + GetDayNumberSuffix(time));
                return time.ToString(format);
            }
            return string.Empty;
        }
        private static string GetDayNumberSuffix(DateTime date)
        {
            switch (date.Day)
            {
                case 1:
                case 0x15:
                case 0x1f:
                    return @"\s\t";

                case 2:
                case 0x16:
                    return @"\n\d";

                case 3:
                case 0x17:
                    return @"\r\d";
            }
            return @"\t\h";
        }
        /// <summary>
        /// 将对象转换为时间类型，如果转换失败返回当前UTC时间
        /// </summary>
        /// <param name="theDate"></param>
        /// <returns></returns>
        public static DateTime ParseDate(object theDate)
        {
            DateTime date;
            return DateTime.TryParse(theDate.ToString(), out date) ? date : DateTime.UtcNow;
        }
    }
}
