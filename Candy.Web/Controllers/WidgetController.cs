using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;

namespace Candy.Web.Controllers
{
    public class WidgetController : BaseController
    {
        private User LoggedOnUser;
        private Role UsersRole;
        public WidgetController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,
            IUserService userService,
            IRoleService roleService,
            ISettingsService settingsService,
            IPostService postService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            this.LoggedOnUser = UserIsAuthenticated ? UserService.GetUser(Username) : null;
            this.UsersRole = LoggedOnUser == null ? RoleService.GetRole(AppConstants.GuestRoleName) : LoggedOnUser.Roles.FirstOrDefault();
        }

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoginBox()
        {
            return View();
        }
	}
}