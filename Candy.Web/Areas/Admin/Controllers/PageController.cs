using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;

namespace Candy.Web.Areas.Admin.Controllers
{
    public class PageController : BaseAdminController
    {
        public PageController(ILoggingService loggingService,
            IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            ICategoryService categoryService)
            : base(loggingService, unitOfWorkManager, userService, settingsService, localizationService)
        {
            
        }

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult New()
        {
            return View();
        }
        [HttpPost]
        public ActionResult New(FormCollection collection)
        {

            return View();
        }
	}
}