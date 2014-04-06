using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.IOC;
using MVCForum.Website.App_Start;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(AppStartUp), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(AppStartUp), "Stop")]

namespace MVCForum.Website.App_Start
{
    public static class AppStartUp
    {
        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            UnityMVC.Start();
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            // Nothing to do
        }
    }
}
