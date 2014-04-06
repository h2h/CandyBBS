using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Domain.Models;

namespace Candy.Web.Controllers
{
    public class HomeController : BaseController
    {
        protected readonly ICategoryService _categoryService;
        public HomeController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, ICategoryService categoryService, IUserService userService, IRoleService roleService, ISettingsService settingsService)
            : base(loggingService, unitOfWorkManager,userService,roleService,settingsService)
        {
            this._categoryService = categoryService;
        }

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Forum()
        {
            var list = new List<Category>();
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                list = this._categoryService.GetAllMainCategories(true).ToList();
            }
            return View(list);
        }
	}
}