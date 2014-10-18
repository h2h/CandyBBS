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
using Candy.Web.Application;
using System.Web.Security;

namespace Candy.Web.Controllers
{
    public class UserController : BaseController
    {
        private readonly IPostService _postServive;
        private readonly ITopicService _topicService;
        private readonly IUserMetaService _userMetaService;

        private User LoggedOnUser;
        private Role UsersRole;


        public UserController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            IRoleService roleService,
            ISettingsService settingsService,
            IPostService postService,
            IUserMetaService userMetaService,
            ITopicService topicService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            this._postServive = postService;
            this._topicService = topicService;
            this._userMetaService = userMetaService;

            this.LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            this.UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Role;
        }
        public ActionResult Index(int id)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var userInfo = UserService.GetUser(id);
                return View(userInfo);
            }
        }
        public ActionResult Settings()
        {
            return View(LoggedOnUser);
        }
        [HttpPost]
        public ActionResult Settings(FormCollection collection)
        {
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var user = UserService.GetUser(User.Identity.Name);

                if (!string.IsNullOrWhiteSpace(collection["slug"]))
                {
                    user.Slug = collection["slug"];
                }
                if (!string.IsNullOrWhiteSpace(collection["website"]))
                {
                    user.Website = collection["website"];
                }
                if (!string.IsNullOrWhiteSpace(collection["Signature"]))
                {
                    user.Signature = collection["Signature"];
                }

                var metaList = new List<UserMeta>();

                var gender = new UserMeta();
                gender.MetaKey = AppConstants.UserGender;
                gender.MetaValue = collection[AppConstants.UserGender];
                metaList.Add(gender);

                var sexTrend = new UserMeta();
                sexTrend.MetaKey = AppConstants.UserSexTrend;
                sexTrend.MetaValue = collection[AppConstants.UserSexTrend];
                metaList.Add(sexTrend);

                var love = new UserMeta();
                love.MetaKey = AppConstants.UserLove;
                love.MetaValue = collection[AppConstants.UserLove];
                metaList.Add(love);

                var blood = new UserMeta();
                blood.MetaKey = AppConstants.UserBlood;
                blood.MetaValue = collection[AppConstants.UserBlood];
                metaList.Add(blood);

                var birthday = new UserMeta();
                birthday.MetaKey = AppConstants.UserBirthday;
                var birthdayValue = DateTime.UtcNow;
                DateTime.TryParse(collection[AppConstants.UserBirthday], out birthdayValue);
                birthday.MetaValue = birthdayValue.ToString();
                metaList.Add(birthday);

                var province = new UserMeta();
                province.MetaKey = AppConstants.UserProvince;
                province.MetaValue = collection[AppConstants.UserProvince];
                metaList.Add(province);

                var city = new UserMeta();
                city.MetaKey = AppConstants.UserCity;
                city.MetaValue = collection[AppConstants.UserCity];
                metaList.Add(city);

                var weibo = new UserMeta();
                weibo.MetaKey = AppConstants.UserWeibo;
                weibo.MetaValue = collection[AppConstants.UserWeibo];
                metaList.Add(weibo);

                var tencentWeibo = new UserMeta();
                tencentWeibo.MetaKey = AppConstants.UserTencentWeibo;
                tencentWeibo.MetaValue = collection[AppConstants.UserTencentWeibo];
                metaList.Add(tencentWeibo);

                var tencentQQ = new UserMeta();
                tencentQQ.MetaKey = AppConstants.UserTencentQQ;
                tencentQQ.MetaValue = collection[AppConstants.UserTencentQQ];
                metaList.Add(tencentQQ);

                var googlePlus = new UserMeta();
                googlePlus.MetaKey = AppConstants.UserGooglePlus;
                googlePlus.MetaValue = collection[AppConstants.UserGooglePlus];
                metaList.Add(googlePlus);

                var twitter = new UserMeta();
                twitter.MetaKey = AppConstants.UserTwitter;
                twitter.MetaValue = collection[AppConstants.UserTwitter];
                metaList.Add(twitter);

                var facebook = new UserMeta();
                facebook.MetaKey = AppConstants.UserFacebook;
                facebook.MetaValue = collection[AppConstants.UserFacebook];
                metaList.Add(facebook);

                user.UserMeta = metaList;
                user = _userMetaService.Create(user);

                try
                {
                    unitOfWork.SaveChanges();
                    unitOfWork.Commit();

                    var result = new LoginMessageViewModel();
                }
                catch (Exception ex)
                {
                    LoggingService.Error(ex);
                }

                return View(user);
            }
        }
        public ActionResult Security()
        {
            return View(LoggedOnUser);
        }
        public ActionResult Topics(int p = 1)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var user = LoggedOnUser;
                user.Topics = _topicService.GetPagedTopicsByUser(p, int.Parse(SettingsService.Get()[AppConstants.TopicsPerPage].Value), int.MaxValue, user.Id);
            }
            return View(LoggedOnUser);
        }
        public ActionResult Comments()
        {
            return View(LoggedOnUser);
        }
        public ActionResult LoginBox()
        {
            return View();
        }

        [HttpPost]
        public JsonResult LoginForJson(LoginViewModel model)
        {
            var result = new LoginMessageViewModel();
            result.Result = "false";
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
                                    result.Result = "true";
                                    result.Message = LocalizerHelper.Lang("登录成功");
                                    result.ReturnUrl = Url.Absolute(model.ReturnUrl);
                                }
                                result.Result = "true";
                                result.Message = LocalizerHelper.Lang("登录成功");
                                result.ReturnUrl = Url.Absolute("~/");
                            }
                            else
                            {
                                result.Result = "false";
                                result.Message = LocalizerHelper.Lang(string.Format("账号未激活，<a href=\"{0}\">现在激活</a>", Url.Absolute("~/Activation/")));
                            }
                        }
                        else
                        {
                            result.Result = "false";
                            result.Message = LocalizerHelper.Lang("账号或密码错误");
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
            return Json(result, JsonRequestBehavior.AllowGet);
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
            if (model.Password.IsNullEmpty())
            {
                ModelState.AddModelError(AppConstants.MessageViewBagName, LocalizerHelper.Lang("密码不能为空"));
                return View();
            }
            if (model.UserName.IsNullEmpty())
            {
                ModelState.AddModelError(AppConstants.MessageViewBagName, LocalizerHelper.Lang("用户名不能为空"));
                return View();
            }
            if (model.Email.IsNullEmpty())
            {
                ModelState.AddModelError(AppConstants.MessageViewBagName, LocalizerHelper.Lang("邮箱不能为空"));
                return View();
            }
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var user = new User();

                user.Email = model.Email;
                user.Password = model.Password;
                user.UserName = model.UserName;

                user.LastLoginDate = DateTime.UtcNow;
                user.CreateDate = DateTime.UtcNow;
                user.ActivationKey = string.Empty;

                var createStatus = UserService.CreateUser(user);

                if (createStatus != UserStatus.Success)
                {
                    ModelState.AddModelError(AppConstants.MessageViewBagName, UserService.ErrorCodeToString(createStatus));
                }
                else
                {
                    unitOfWork.Commit();
                    return RedirectToAction("Activation", new { email = model.Email });
                }
            }
            return View();
        }
        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            return Redirect("~/");
        }
        public ActionResult ForgetPassword()
        {
            return View();
        }
        /// <summary>
        /// 激活
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public ActionResult Activation(string key = "", string email = "")
        {
            if (key.IsNullEmpty() && !email.IsNullEmpty())
            {
                ViewBag.Email = email;
                ViewBag.Type = "Register";
                return View();
            }
            else if (!key.IsNullEmpty() && !email.IsNullEmpty())
            {
                using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
                {
                    var user = UserService.GetByActivation(key);
                    if (user == null)
                    {
                        ViewBag.Message = LocalizerHelper.Lang("激活码错误，请对比系统发送的邮件！");
                        ViewBag.Type = "Error";
                        return View();
                    }
                    if (user.LastLoginDate < DatesUI.GetLocalDate(DateTime.UtcNow.AddDays(-3)))
                    {
                        ViewBag.Message = LocalizerHelper.Lang("激活码已经过期，请重新获取。");
                        ViewBag.Type = "Error";
                        return View();
                    }

                    user.ActivationKey = string.Empty;

                    try
                    {
                        unitOfWork.Commit();
                        ViewBag.Message = LocalizerHelper.Lang("激活成功！");
                        ViewBag.Type = "Success";
                        return View();
                    }
                    catch (Exception ex)
                    {
                        LoggingService.Error(ex);
                        return RedirectToAction("Index", "Home");
                    }
                }
            }
            else
            {
                ViewBag.Message = LocalizerHelper.Lang("激活失败，请重新获取激活邮件!");
                ViewBag.Type = "Error";
                return View();
            }
        }
    }
}