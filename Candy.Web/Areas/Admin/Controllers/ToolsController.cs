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
using Candy.Web.ViewModels.Mapping;
using Candy.Web.Application;

namespace Candy.Web.Areas.Admin.Controllers
{
    public class ToolsController : BaseAdminController
    {
        public ToolsController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            IRoleService roleService)
            : base(loggingService, unitOfWorkManager, userService, settingsService, localizationService)
        {
        }

        public ActionResult About()
        {
            return View();
        }
        //
        // GET: /Admin/Tools/
        public ActionResult Index()
        {
            return View();
        }
	}
}