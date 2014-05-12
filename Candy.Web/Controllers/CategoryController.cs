using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Web.ViewModels;
using Candy.Domain;

namespace Candy.Web.Controllers
{
    public class CategoryController : BaseController
    {
        private readonly ICategoryService _categoryService;
        private readonly ITopicService _topicService;

        private User LoggedOnUser;
        private Role UsersRole;

        public CategoryController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            IRoleService roleService,
            ICategoryService categoryService,
            ITopicService topicService,
            ISettingsService settingsService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            this._categoryService = categoryService;
            this._topicService = topicService;

            LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Role;
        }
        public ActionResult Index()
        {
            var catViewModel = new List<SubCategoryViewModel>();

            using (UnitOfWorkManager.NewUnitOfWork())
            {
                foreach (var category in this._categoryService.GetAllMainCategories(true))
                {
                    var permissionSet = RoleService.GetPermissions(category, UsersRole);

                    var allSubPermissionSets = new Dictionary<Category,PermissionSet>();

                    foreach (var c in this._categoryService.GetAllSubCategories(category.Id))
                    {
                        allSubPermissionSets.Add(c, RoleService.GetPermissions(c, UsersRole));
                    }
                    var subCategories = new SubCategoryViewModel
                    {
                        ParentCategory = category,
                        AllPermissionSets = allSubPermissionSets
                    };
                    catViewModel.Add(subCategories);

                }
            }
            return View(new CategoryViewModel { Categories = catViewModel });
        }
        public ActionResult Show(string slug, int? p)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var category = this._categoryService.GetBySlugWithSubCategories(slug);
                var pageIndex = p ?? 1;
                var permissions = RoleService.GetPermissions(category.Category, UsersRole);
                if (!permissions[AppConstants.PermissionDenyAccess].IsTicked)
                {
                    var topics = this._topicService.GetPagedTopicsByCategory(pageIndex, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue, category.Category.Id);

                    var viewModel = new ViewCategoryViewModel
                    {
                        Permissions = permissions,
                        Topics = topics,
                        Category = category.Category,
                        PageIndex = pageIndex,
                        TotalCount = topics.TotalCount,
                        User = LoggedOnUser
                    };
                    if (category.SubCategories.Any())
                    {
                        var subCatViewModel = new CategoryListViewModel
                        {
                            AllPermissionSets = new Dictionary<Category,PermissionSet>()
                        };
                        foreach(var subCategory in category.SubCategories)
                        {
                            var permissionSet = RoleService.GetPermissions(subCategory,UsersRole);
                            subCatViewModel.AllPermissionSets.Add(subCategory, permissionSet);
                        }
                        viewModel.SubCategories = subCatViewModel;
                    }
                    return View(viewModel);
                }
            }
            return RedirectToAction("Index", "Home");
        }
	}
}