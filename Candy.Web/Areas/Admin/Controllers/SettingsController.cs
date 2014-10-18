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
        private readonly IEmailService _emailService;
        public SettingsController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            IThemeService themeService,
            IRoleService roleService,
            IPermissionService permissionService,
            ICategoryService categoryService,
            IEmailService emailService)
            : base(loggingService, unitOfWorkManager, userService, settingsService,localizationService)
        {
            this._themeService = themeService;
            this._roleService = roleService;
            this._permissionService = permissionService;
            this._categoryService = categoryService;
            this._emailService = emailService;
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
        [HttpPost,ValidateInput(false)]
        public ActionResult Update(FormCollection collection)
        {
            var msg = new GenericMessage();
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
                    msg.Message = "设置保存成功！";
                    msg.MessageType = GenericMessageType.success;
                }
                catch (Exception ex)
                {
                    unitOfWork.Rollback();
                    LoggingService.Error(ex);
                    msg.Message = "设置保存失败！";
                    msg.MessageType = GenericMessageType.warning;
                }
                if (string.IsNullOrEmpty(returnUrl))
                {
                    returnUrl = Request.UrlReferrer.AbsolutePath;
                }
                TempData[AppConstants.MessageViewBagName] = msg;
                return Redirect(returnUrl);
            }
        }
        [HttpPost]
        public ActionResult TestEmailSettings(FormCollection collection)
        {
            var msg = new GenericMessage();
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
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
                    var mail = new Email
                    {
                        Subject = string.Format("【{0}】测试邮件", SettingsService.Get()[AppConstants.SiteName].Value),
                        Body = "测试邮件，请勿回复",
                        NameTo = "Hubert",
                        EmailFrom = SettingsService.Get()[AppConstants.NotificationReplyEmail].Value,
                        EmailTo = SettingsService.Get()[AppConstants.NotificationReplyEmail].Value
                    };
                    _emailService.SendMail(mail);
                    msg.Message = "一份测试邮件已经发送到你的通知邮箱中。";
                    msg.MessageType = GenericMessageType.success;
                    TempData[AppConstants.MessageViewBagName] = msg;
                }
                catch (Exception ex)
                {
                    LoggingService.Error(ex);
                    msg.Message = "邮件发送失败，请检查你填写的信息是否正确。";
                    msg.MessageType = GenericMessageType.warning;
                }
            }
            return RedirectToAction("Email");
        }
	}
}