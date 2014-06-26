using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Web.ViewModels;

namespace Candy.Web.Controllers
{
    public class WidgetController : BaseController
    {
        private readonly ITopicTagService TopicTagService;
        private readonly ITopicService TopicService;

        private User LoggedOnUser;
        private Role UsersRole;
        public WidgetController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            IRoleService roleService,
            ISettingsService settingsService,
            IPostService postService,
            ITopicTagService topicTagService,
            ITopicService topicService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            this.LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            this.UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Role;

            TopicTagService = topicTagService;
            TopicService = topicService;
        }
        public ActionResult LeftWidget()
        {
            return View();
        }
        public ActionResult CreateTopic()
        {
            return View();
        }
        public ActionResult NewUsers()
        {
            return View(UserService.GetLatestUsers(10));
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoginBox()
        {
            return View();
        }
        public ActionResult UserInfo()
        {
            return View(LoggedOnUser);
        }
        public ActionResult HotUsers()
        {
            return View(UserService.GetLatestUsers(10));
        }
        public ActionResult Status()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var result = new StatusViewModel();
                result.TopicConut = TopicService.TopicCount();
                result.UserCount = UserService.MemberCount();
                return View(result);
            }
        }
        public ActionResult HotTags()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(TopicTagService.GetPopularTags(20));
            }
        }
        public ActionResult NewTopics()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(TopicService.GetPagedTopics(1, 9, int.MaxValue));
            }
        }
	}
}