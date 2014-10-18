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
using Candy.Utilities;

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
            UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Role;
        }
        //
        // GET: /Topic/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Show(int id,int? p)
        {
            var pageIndex = p ?? 1;
            var pageSize = int.Parse(SettingsService.Get()[AppConstants.PostsPerPage].Value);
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var topic = this._topicService.Get(id);
                if (topic != null)
                {
                    var comments = this._postService.GetPagedCommentsByTopic(pageIndex, pageSize, int.MaxValue, topic.Id);

                    var topicStarter = this._postService.GetTopicStarterPost(topic.Id);

                    var permissions = RoleService.GetPermissions(topic.Category, UsersRole);

                    if (permissions[AppConstants.PermissionDenyAccess].IsTicked)
                    {
                    }

                    var viewModel = new ShowTopicViewModel
                    {
                        Topic = topic,
                        Comments = comments,
                        PageIndex = comments.PageIndex,
                        TotalCount = comments.TotalCount,
                        TotalPages = comments.TotalPages,
                        PageSize = comments.PageSize,
                        Permissions = permissions,
                        User = LoggedOnUser,
                        TopicStarterPost = topicStarter
                    };

                    var addVIew = !(UserIsAuthenticated && LoggedOnUser.Id == topic.User.Id);

                    if (!BotUtils.UserIsBot() && addVIew)
                    {
                        topic.Views = (topic.Views + 1);
                        try
                        {
                            unitOfWork.Commit();
                        }
                        catch (Exception ex)
                        {
                            LoggingService.Error(ex);
                        }
                    }
                    return View(viewModel);
                }
                return View();
            }
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

                            this._topicService.AddLastPost(topic, model.Content);
                            // 添加标签
                            if (!string.IsNullOrEmpty(model.Tags))
                            {
                                this._topicTagService.Add(model.Tags.ToLower(), topic);
                            }
                            try
                            {
                                unitOfWork.Commit();
                                return Redirect(topic.NiceUrl);
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
            return RedirectToAction("New");
        }
	}
}