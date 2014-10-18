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
    public class CommentController : BaseController
    {
        protected readonly ICategoryService _categoryService;
        protected readonly ITopicService _topicService;
        protected readonly IPostService _postService;

        private User LoggedUser;
        public CommentController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, 
            ICategoryService categoryService, 
            IUserService userService, 
            IRoleService roleService, 
            ISettingsService settingsService,
            ITopicService topicService,
            IPostService postService)
            : base(loggingService, unitOfWorkManager,userService,roleService,settingsService)
        {
            this._topicService = topicService;
            this._categoryService = categoryService;
            this._postService = postService;
            LoggedUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
        }
        public ActionResult Index(int topicId,int p = 0)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var result = _postService.GetPagedCommentsByTopic(p, int.Parse(SettingsService.Get()[AppConstants.PageSize].Value), int.MaxValue, topicId);
                return View(result);
            }
        }
        public ActionResult New()
        {
            return View();
        }
        [HttpPost]
        public ActionResult New(CreateCommentViewModel model)
        {
            PermissionSet permissions;
            Topic topic;
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                topic = _topicService.Get(model.Topic);

                var comment = new Post();

                comment = _postService.AddNewPost(model.Context, topic, LoggedUser,out permissions);

                try
                {
                    unitOfWork.Commit();
                    return RedirectToAction("Show", "Topic", new { id = topic.Id });
                }
                catch (Exception ex)
                {
                    unitOfWork.Rollback();
                    LoggingService.Error(ex);
                }
            }
            return View();
        }
	}
}