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
    public class HomeController : BaseAdminController
    {
        private readonly IPostService _postService;
        private readonly ITopicService _topicService;
        const int AmountToShow = 7;

        public HomeController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService, IPostService postService,
            ITopicService topicService,
            ILocalizationService localizationService)
            : base(loggingService,unitOfWorkManager,userService,settingsService,localizationService)
        {
            this._postService = postService;
            this._topicService = topicService;
        }
        public ActionResult TodaysTopics()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return PartialView(new TodaysTopics { Topics = this._topicService.GetTodaysTopics(AmountToShow) });
            }
        }
        public ActionResult LatestUsers()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return PartialView(new LatestUsersViewModels { Users = UserService.GetLatestUsers(AmountToShow) });
            }
        }
        public ActionResult Index()
        {
            return View();
        }
	}
}