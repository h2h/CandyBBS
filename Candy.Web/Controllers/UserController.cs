using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Web.ViewModels;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Utilities;
using System.Web.Security;

namespace Candy.Web.Controllers
{
    public class UserController : BaseController
    {
        private readonly IPostService _postServive;

        private User LoggedOnUser;
        private Role UsersRole;

        public UserController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            IRoleService roleService,
            ISettingsService settingsService,
            IPostService postService)
            :base(loggingService,unitOfWorkManager,userService,roleService,settingsService)
        {
            this._postServive = postService;

            this.LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            this.UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Roles.FirstOrDefault();
        }
        public ActionResult Index(string username)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var userInfo = UserService.GetUser(username);
                return View(userInfo);
            }
        }
        public ActionResult Settings()
        {
            return View(LoggedOnUser);
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(LoginViewModel model)
        {
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var username = model.UserName;
                var password = model.Password;
                try
                {
                    if (ModelState.IsValid)
                    {
                        var user = new User();
                        var loginAttemptStatus = UserService.ValidateUser(username, password, 3);
                        if (loginAttemptStatus == LoginAttemptStatus.LoginSuccessful)
                        {
                            user = UserService.GetUser(username);
                            if (user.ActivationKey.IsNullEmpty())
                            {
                                FormsAuthentication.SetAuthCookie(username, model.RememberMe);
                                user.LastLoginDate = DateTime.UtcNow;

                                if (Url.IsLocalUrl(model.ReturnUrl) && model.ReturnUrl.Length > 1 && model.ReturnUrl.StartsWith("/") && !model.ReturnUrl.StartsWith("//") && !model.ReturnUrl.StartsWith("/\\"))
                                {
                                    return Redirect(model.ReturnUrl);
                                }
                                return RedirectToAction("Index", "Home");
                            }
                        }
                    }
                }
                finally
                {
                    try
                    {
                        unitOfWork.Commit();
                    }
                    catch (Exception ex)
                    {
                        unitOfWork.Rollback();
                        LoggingService.Error(ex);
                    }
                }
            }
            return View(model);
        }
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(RegisterViewModel model)
        {
            if (!model.Password.Equals(model.RePassword))
            {
                ModelState.AddModelError(string.Empty, "");
                return View();
            }

            if (!model.PasswordQuestion.IsNullEmpty())
            {
                if (model.PasswordAnswer.IsNullEmpty())
                {
                    ModelState.AddModelError(string.Empty, "密码答案不能为空");
                    return View();
                }
            }
            else
            {
                model.PasswordAnswer = string.Empty;
            }
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var user = new User();

                user.Email = model.Email;
                user.Password = model.Password;
                user.PasswordAnswer = model.PasswordAnswer;
                user.PasswordQuestion = model.PasswordQuestion;
                user.UserName = model.UserName;
                user.Website = model.Website;

                user.Signature = string.Empty;
                user.Slug = string.Empty;
                user.LastLoginDate = DateTime.UtcNow;
                user.CreateDate = DateTime.UtcNow;
                user.ActivationKey = string.Empty;

                var createStatus = UserService.CreateUser(user);

                if (createStatus != UserStatus.Success)
                {
                    ModelState.AddModelError(string.Empty, UserService.ErrorCodeToString(createStatus));
                }
                else
                {
                    unitOfWork.Commit();

                    return RedirectToAction("Index", "Home");
                }
            }
            return View();
        }
	}
}