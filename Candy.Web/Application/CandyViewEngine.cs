using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.Services;

namespace Candy.Web.Application
{
    public class CandyViewEngine : IViewEngine
    {
        private readonly RazorViewEngine _defaultViewEngine = new RazorViewEngine();
        private string _lastTheme;
        private RazorViewEngine _lastEngine;
        private readonly object _lock = new object();
        private readonly ISettingsService _settingsService;

        public CandyViewEngine(ISettingsService settingsService)
        {
            this._settingsService = settingsService;
        }
        private RazorViewEngine CreateRealViewEngine()
        {
            lock (_lock)
            {
                string settingsTheme;
                try
                {
                    settingsTheme = HttpContext.Current.Session[AppConstants.CurrentTheme].ToString();

                    if (settingsTheme == this._lastTheme)
                    {
                        return this._lastEngine;
                    }
                }
                catch (Exception)
                {
                    return this._defaultViewEngine;
                }
                this._lastEngine = new RazorViewEngine();

                this._lastEngine.PartialViewLocationFormats = new[]
                    {   
                        "~/Themes/" + settingsTheme + "/Views/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Shared/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Shared/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(this._lastEngine.PartialViewLocationFormats).ToArray();

                this._lastEngine.ViewLocationFormats = new[]
                    {
                        "~/Themes/" + settingsTheme + "/Views/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(this._lastEngine.ViewLocationFormats).ToArray();

                this._lastEngine.MasterLocationFormats = new[]
                    {
                        "~/Themes/" + settingsTheme + "/Views/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Extensions/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Shared/{1}/{0}.cshtml",
                        "~/Themes/" + settingsTheme + "/Views/Shared/{0}.cshtml"
                    }.Union(this._lastEngine.MasterLocationFormats).ToArray();

                this._lastEngine.AreaViewLocationFormats = new[] 
                    {
                        "~/Plugins/{2}/Views/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(this._lastEngine.AreaViewLocationFormats).ToArray();

                this._lastEngine.AreaMasterLocationFormats = new[]
                    {
                        "~/Plugins/{2}/Views/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(this._lastEngine.AreaMasterLocationFormats).ToArray();
                this._lastEngine.AreaPartialViewLocationFormats = new[]
                    {
                        "~/Plugins/{2}/Views/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{0}.cshtml",
                        "~/Plugins/{2}/Views/Shared/{1}/{0}.cshtml",
                        "~/Plugins/{2}/Views/Extensions/{1}/{0}.cshtml"
                    }.Union(this._lastEngine.AreaPartialViewLocationFormats).ToArray();
                this._lastTheme = settingsTheme;

                return this._lastEngine;
            }
        }
        public ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache)
        {
            return this.CreateRealViewEngine().FindPartialView(controllerContext, partialViewName, useCache);
        }

        public ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache)
        {
            return this.CreateRealViewEngine().FindView(controllerContext, viewName, masterName, useCache);
        }
        public void ReleaseView(ControllerContext controllerContext, IView view)
        {
            this.CreateRealViewEngine().ReleaseView(controllerContext, view);
        }
    }
}