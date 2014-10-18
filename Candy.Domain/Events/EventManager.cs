using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Candy.Domain.Interfaces.Events;
using Candy.Domain.Interfaces.Services;
using Candy.Utilities;

namespace Candy.Domain.Events
{
    public sealed class EventManager : IEventManager
    {
        private const string InterfaceTargetName = "Candy.Domain.Interfaces.Events.IEventHandler";

        private static volatile EventManager instance;
        private static readonly object SyncRoot = new object();

        public ILoggingService Logger { get; set; }
        private EventManager()
        {
        }
        /// <summary>
        /// Callback used when comparing objects to see if they implement an interface
        /// </summary>
        /// <param name="typeObj"></param>
        /// <param name="criteriaObj"></param>
        /// <returns></returns>
        private static bool InterfaceFilter(Type typeObj, object criteriaObj)
        {
            return typeObj.ToString() == criteriaObj.ToString();
        }

        public static EventManager Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (SyncRoot)
                    {
                        if (instance == null)
                            instance = new EventManager();
                    }
                }

                return instance;
            }
        }

        public void Initialize(ILoggingService loggingService)
        {
            this.Logger = loggingService;
            var interfaceFilter = new TypeFilter(InterfaceFilter);

            var path = AppDomain.CurrentDomain.RelativeSearchPath;

            var di = new DirectoryInfo(path);
            foreach (var file in di.GetFiles("*.dll"))
            {
                if (file.Name.ToLower().StartsWith("ecmascript"))
                {
                    continue;
                }

                Assembly nextAssembly;
                try
                {
                    nextAssembly = Assembly.LoadFrom(file.FullName);
                }
                catch (BadImageFormatException)
                {
                    continue;
                }
                if (nextAssembly.FullName.StartsWith("System") || nextAssembly.FullName.StartsWith("Microsoft"))
                {
                    // 跳过微软程序集
                    continue;
                }
                try
                {
                    foreach (var type in nextAssembly.GetTypes())
                    {
                        if (type.IsInterface)
                        {
                            continue;
                        }
                        var myInterfaces = type.FindInterfaces(interfaceFilter, InterfaceTargetName);
                        if (myInterfaces.Length <= 0)
                        {
                            continue;
                        }

                        var ctor = type.GetConstructors().First();
                        var createdActivator = ReflectionUtilities.GetActivator<IEventHandler>(ctor);

                        var instance = createdActivator();
                        instance.RegisterHandlers(this);
                    }
                }
                catch (ReflectionTypeLoadException rtle)
                {
                    var msg = string.Format(
                        "Unable to load assembly. Probably not an event assembly. In file named '{0}', loader exception was: '{1}':'{2}'.",
                        file.Name, rtle.LoaderExceptions[0].GetType(), rtle.LoaderExceptions[0].Message);
                    LogError(msg);
                }
                catch (Exception ex)
                {
                    LogError(string.Format("Error reflecting over event handlers: {0}", ex.Message));
                }
            }
        }
        public void LogError(string msg)
        {
            if (this.Logger != null)
            {
                this.Logger.Error(msg);
            }
        }
    }
}
