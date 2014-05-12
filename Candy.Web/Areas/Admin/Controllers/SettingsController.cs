using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Web.Areas.Admin.ViewModels;

namespace Candy.Web.Areas.Admin.Controllers
{
    public class SettingsController : BaseAdminController
    {
        private readonly IThemeService _themeService;
        private readonly IRoleService _roleService;
        private readonly IPermissionService _permissionService;
        private readonly ICategoryService _categoryService;
        public SettingsController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            IThemeService themeService,
            IRoleService roleService,
            IPermissionService permissionService,
            ICategoryService categoryService)
            : base(loggingService, unitOfWorkManager, userService, settingsService,localizationService)
        {
            this._themeService = themeService;
            this._roleService = roleService;
            this._permissionService = permissionService;
            this._categoryService = categoryService;
        }
        public ActionResult Index()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new BaseSettingsViewModels
                {
                    Settings = SettingsService.Get(),
                    Cultural = LocalizationService.LanguagesAll,
                    Themes = this._themeService.Themes,
                    Roles = this._roleService.AllRoles()
                });
            }
        }
        public ActionResult Email()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new SettingsViewModels { Settings = SettingsService.Get() });
            }
        }
        public ActionResult Theme()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new ThemeViewModels {
                    CurrentTheme = this._themeService.Get(SettingsService.Get(AppConstants.Theme).Value),
                    AllThemes = this._themeService.Themes
                });
            }
        }
        public ActionResult Points()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new SettingsViewModels { Settings = SettingsService.Get() });
            }
        }
        public ActionResult Permissions()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new PermissionsViewModels { 
                    Permissions = this._permissionService.GetAll(),
                    Categories = this._categoryService.GetAll(),
                    Roles = this._roleService.AllRoles()
                });
            }
        }
        public PartialViewResult GetPermissionByRole(int roleId)
        {
            if (Request.IsAjaxRequest())
            {
                using (UnitOfWorkManager.NewUnitOfWork())
                {
                    return PartialView(new PermissionsViewModels { 
                        Permissions = this._permissionService.GetAll(),
                        Categories = this._categoryService.GetAll(),
                        Role = this._roleService.GetRole(roleId)
                    });
                }
            }
            return null;
        }
        [HttpPost]
        public ActionResult Update(FormCollection collection)
        {
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                string returnUrl = collection["returnUrl"];
                foreach (var key in collection.AllKeys)
                {
                    var settings = SettingsService.Get(key);
                    if (settings != null)
                    {
                        settings.Value = collection[key];
                    }
                }
                try
                {
                    unitOfWork.Commit();
                }
                catch (Exception ex)
                {
                    unitOfWork.Rollback();
                    LoggingService.Error(ex);
                }
                if (string.IsNullOrEmpty(returnUrl))
                {
                    returnUrl = Request.UrlReferrer.AbsolutePath;
                }
                return Redirect(returnUrl);
            }
        }
	}
}