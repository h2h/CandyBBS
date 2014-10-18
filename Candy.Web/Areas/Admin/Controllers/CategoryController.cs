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
    public class CategoryController : BaseAdminController
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            ICategoryService categoryService)
            : base(loggingService, unitOfWorkManager, userService, settingsService, localizationService)
        {
            this._categoryService = categoryService;
        }

        public ActionResult Index()
        {
            using(UnitOfWorkManager.NewUnitOfWork())
            {
                var categories = _categoryService.GetAll();
                return View(new CategoryListViewModels
                {
                    Categories = SanitizeCategory(categories, null).SubCategories
                });
            }
        }
        public ActionResult New()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new CategoryEditViewModels
                {
                    Category = null,
                    Categories = SanitizeCategory(_categoryService.GetAll(), null).SubCategories
                });
            }
        }
        [HttpPost]
        public ActionResult New(FormCollection collection)
        {
            return View();
        }
        public ActionResult Edit(int id)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new CategoryEditViewModels
                {
                    Category = _categoryService.Get(id),
                    Categories = SanitizeCategory(_categoryService.GetAll(), null).SubCategories
                });
            }
        }
        [HttpPost]
        public ActionResult Edit()
        {
            return View();
        }
        private CategotyViewModels SanitizeCategory(IEnumerable<Category> categories,Category model)
        {
            var catModel = new CategotyViewModels();

            catModel.Category = model;
            catModel.SubCategories = new List<CategotyViewModels>();

            if (categories.Where(a => a.ParentCategory == model).Any())
            {
                foreach (var cat in categories.Where(a => a.ParentCategory==model))
                {
                    catModel.SubCategories.Add(SanitizeCategory(categories, cat));  
                }
            }
            return catModel;
        }
	}
}