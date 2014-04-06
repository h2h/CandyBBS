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
    public class TopicController : BaseController
    {
        private readonly ITopicService _topicService;
        private readonly IPostService _postService;
        private readonly ICategoryService _categoryService;
        private readonly ITopicTagService _topicTagService;

        private User LoggedOnUser;
        private Role UsersRole;
        public TopicController(ILoggingService loggingService, 
            IUnitOfWorkManager unitOfWorkManager, 
            IUserService userService, 
            IRoleService roleService, 
            ISettingsService settingsService,
            ITopicService topicService,
            IPostService postService,
            ICategoryService categoryService,
            ITopicTagService topicTagService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            this._topicService = topicService;
            this._postService = postService;
            this._categoryService = categoryService;
            this._topicTagService = topicTagService;

            LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Roles.FirstOrDefault();
        }
        //
        // GET: /Topic/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult New(int? categoryId)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var allowedCategories = this._categoryService.GetAllowedCategories(UsersRole).ToList();
                if (allowedCategories.FirstOrDefault(x => x.Id == categoryId) == null)
                {
                    categoryId = 0;
                }

                if (allowedCategories.Any())
                {
                    var viewModel = new CreateTopicViewModel
                    {
                        Categories = allowedCategories,
                        LoggedOnUser = LoggedOnUser,
                        Category = (int)categoryId
                    };
                    return View(viewModel);
                }
            }
            return View();
        }
        [HttpPost]
        public ActionResult New(CreateTopicViewModel model)
        {
            if(ModelState.IsValid)
            {
                var successfullyCreated = false;
                Category category;
                var topic = new Topic();
                using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
                {
                    category = this._categoryService.Get(model.Category);
                    var permissions = RoleService.GetPermissions(category, UsersRole);
                    if (permissions[AppConstants.PermissionDenyAccess].IsTicked ||
                        permissions[AppConstants.PermissionReadOnly].IsTicked ||
                        permissions[AppConstants.PermissionCreateTopics].IsTicked)
                    {
                        ModelState.AddModelError(string.Empty, "No Permission");
                    }
                    else
                    {
                        topic = new Topic
                        {
                            Name = model.Name,
                            Category = category,
                            User = LoggedOnUser
                        };
                        if (!string.IsNullOrEmpty(model.Content))
                        {
                            topic = this._topicService.Add(topic);
                            unitOfWork.SaveChanges();

                            // 添加标签
                            if (!string.IsNullOrEmpty(model.Tags))
                            {
                                this._topicTagService.Add(model.Tags.ToLower(), topic);
                            }
                            try
                            {
                                unitOfWork.Commit();

                                successfullyCreated = true;
                            }
                            catch (Exception ex)
                            {
                                unitOfWork.Rollback();
                                LoggingService.Error(ex);
                                ModelState.AddModelError(string.Empty, "添加主题失败");
                            }
                        }
                        else
                        {
                            unitOfWork.Rollback();
                            ModelState.AddModelError(string.Empty, "添加主题失败");
                        }
                    }
                }
            }
            return View();
        }
	}
}