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
                var categories = this._categoryService.GetAll();
            }
            return View();
        }
	}
}