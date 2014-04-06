using System;
using System.Globalization;
using System.Reflection;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Candy.Domain;
using Candy.Domain.Events;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Utilities;
using Candy.Web.Application;
using EFCachingProvider;
using EFCachingProvider.Caching;

namespace Candy.Web
{
    public class Global : HttpApplication
    {
        public IUnitOfWorkManager UnitOfWorkManager
        {
            get { return DependencyResolver.Current.GetService<IUnitOfWorkManager>(); }
        }
        public ILoggingService LoggingService
        {
            get { return DependencyResolver.Current.GetService<ILoggingService>(); }
        }
        public ISettingsService SettingsService
        {
            get { return DependencyResolver.Current.GetService<ISettingsService>(); }
        }
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{*favicon}", new { favicon = @"(.*/)?favicon.ico(/.*)?" });

            routes.MapRoute(
                "Login",
                "login",
                new { controller = "User", action = "Login" },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Register",
                "register",
                new { controller = "User", action = "Register" },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Forum List",
                "forum",
                new { controller = "Category", action = "Index", id = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Category",
                string.Concat(AppConstants.CategoryUrlIdentifier, "/{slug}"),
                new { controller = "Category", action = "Show", slug = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Topic",
                string.Concat(AppConstants.TopicUrlIdentifier, "/{id}"),
                new { controller = "Topic", action = "Show", id = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "User",
                string.Concat(AppConstants.UserUrlIdentifier, "/{username}"),
                new { controller = "User", action = "Index", slug = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Settings",
                "settings",
                new { controller = "User", action = "Settings", slug = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Tag",
                string.Concat(AppConstants.TagsUrlIdentifier, "/{tag}"),
                new { controller = "Topic", action = "TopicsByTag", tag = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
            routes.MapRoute(
                "Default", // Route name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                new string[] { "Candy.Web.Controllers" }
            );
        }

        protected void Application_Start()
        {
            // Register routes
            AreaRegistration.RegisterAllAreas();
            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

            //Installer for new versions and first startup
            // Get the current version
            var version = Assembly.GetExecutingAssembly().GetName().Version;

            var theme = SettingsService.Get(AppConstants.Theme);
            Application[AppConstants.CurrentTheme] = theme == null ? AppConstants.DefaultTheme : theme.Value;

            // Store the value for use in the app
            Application["Version"] = string.Format("{0}.{1}", version.Major, version.Minor);
            Application["Installing"] = "True";

            // Now check the version in the web.config
            var currentVersion = ConfigUtils.GetAppSetting(AppConstants.Version);

            // If the same carry on as normal
            LoggingService.Initialise(ConfigUtils.GetAppSettingInt32("LogFileMaxSizeBytes", 10000));
            LoggingService.Error("START APP");

            // If the versions are different kick the installer into play
            if (currentVersion == Application["Version"].ToString())
            {
                Application["Installing"] = "False";

                // 添加视图引擎
                ViewEngines.Engines.Clear();
                ViewEngines.Engines.Add(new CandyViewEngine(this.SettingsService));

                 //Set up the EF Caching provider
                //EFCachingProviderConfiguration.DefaultCache = new AspNetCache();
                //EFCachingProviderConfiguration.DefaultCachingPolicy = CachingPolicy.CacheAll;

                // Initialise the events
                EventManager.Instance.Initialize(LoggingService);

                // Don't go to installer
                Application[AppConstants.GoToInstaller] = "False";
            }
            else
            {
                // Go to the installer
                Application[AppConstants.GoToInstaller] = "True";

            }
        }
        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (Application[AppConstants.GoToInstaller].ToString() == "True")
            {
                // Beford I redirect set it to false or we'll end up in a loop
                // But set the Session to true as we'll check this in the base controller
                // of the normal app to stop people breaking out of the installer before its 
                // completed correctly
                Application[AppConstants.GoToInstaller] = "False";
                Response.Redirect("~/install/");
            }
        }
        protected void Application_AcquireRequestState(object sender, EventArgs e)
        {

            //It's important to check whether session object is ready
            if (Application["Installing"].ToString() != "True")
            {
                if (HttpContext.Current.Session != null)
                {
                    var ci = (CultureInfo)this.Session["Culture"];
                    //Checking first if there is no value in session 
                    //and set default language 
                    //this can happen for first user's request
                    if (ci == null)
                    {
                        using (UnitOfWorkManager.NewUnitOfWork())
                        {
                            ci = new CultureInfo(SettingsService.Get()[AppConstants.LanguageCulture].Value);
                            this.Session["Culture"] = ci;
                        }
                    }
                    //Finally setting culture for each request
                    Thread.CurrentThread.CurrentUICulture = ci;
                    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(ci.Name);
                }
            }

        }
        protected void Application_Error(object sender, EventArgs e)
        {
            LoggingService.Error(Server.GetLastError());
        }
        protected void Session_Start(object sender, EventArgs e)
        {
            if (AppHelpers.IsMobileDevice())
            {
                Session[AppConstants.CurrentTheme] = AppConstants.MobileTheme;
            }
            else
            {
                Session[AppConstants.CurrentTheme] = Application[AppConstants.CurrentTheme];
            }
        }
    }
}