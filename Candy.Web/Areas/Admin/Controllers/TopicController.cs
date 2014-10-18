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
    public class TopicController : BaseAdminController
    {
        private readonly ITopicService _topicService;
        private readonly ITopicTagService _topicTagService;
        public TopicController(ILoggingService loggingService, 
            IUnitOfWorkManager unitOfWorkManager, 
            IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            ICategoryService categoryService,
            ITopicService topicService,
            ITopicTagService topicTagService)
            : base(loggingService, unitOfWorkManager, userService, settingsService, localizationService)
        {
            this._topicService = topicService;
            this._topicTagService = topicTagService;
        }
        //
        // GET: /Admin/Topic/
        public ActionResult Index(int? p)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var pageIndex = p ?? 1;

                var topics = this._topicService.GetPagedTopics(pageIndex, int.Parse(SettingsService.Get()[AppConstants.PageSize].Value.ToString()), int.MaxValue);
                return View(topics);
                
            }
        }

        public ActionResult Tags()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var tags = this._topicTagService.GetAll().OrderByDescending(p => p.Topics.Count).ToList();
                return View(tags);
            }
        }
	}
}