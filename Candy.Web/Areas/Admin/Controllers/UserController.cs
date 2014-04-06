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
    public class UserController : BaseAdminController
    {
        private readonly IRoleService _roleService;
        public UserController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService,
            ISettingsService settingsService,
            ILocalizationService localizationService,
            IRoleService roleService)
            : base(loggingService, unitOfWorkManager, userService, settingsService, localizationService)
        {
            this._roleService = roleService;
        }
        //
        // GET: /Admin/User/
        public ActionResult Index()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(new UserViewModels { 
                    Users = UserService.GetAll(),
                    Roles = this._roleService.AllRoles()
                });
            }
        }
	}
}