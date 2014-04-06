using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Domain;

namespace Candy.Web.Controllers
{
    /// <summary>
    /// A base class for the white site controllers
    /// </summary>
    public class BaseController : Controller
    {
        protected readonly IUnitOfWorkManager UnitOfWorkManager;
        protected readonly ILoggingService LoggingService;
        protected readonly IUserService UserService;
        protected readonly IRoleService RoleService;
        protected readonly ISettingsService SettingsService;


        //private readonly MembershipUser _loggedInUser;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="loggingService"> </param>
        /// <param name="unitOfWorkManager"> </param>
        /// <param name="membershipService"></param>
        /// <param name="localizationService"> </param>
        /// <param name="roleService"> </param>
        /// <param name="settingsService"> </param>
        public BaseController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager,IUserService userService,IRoleService roleService,ISettingsService settingsService)
        {
            this.UnitOfWorkManager = unitOfWorkManager;
            this.LoggingService = loggingService;
            this.UserService = userService;
            this.RoleService = roleService;
            this.SettingsService = settingsService;
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var controller = filterContext.RouteData.Values["controller"];
            var isClosed = SettingsService.Get(AppConstants.IsClosed);
            if (isClosed != null && isClosed.Value.ToLower() != "true")
            {
                if (controller.ToString().ToLower() != "closed")
                {
                    filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary { { "controller", "Home" }, { "action", "Closed" } });
                }
            }
        }

        protected bool UserIsAuthenticated
        {
            get
            {
                return System.Web.HttpContext.Current.User.Identity.IsAuthenticated;
            }
        }

        protected string Username
        {
            get
            {
                return UserIsAuthenticated ? System.Web.HttpContext.Current.User.Identity.Name : null;
            }
        }
    }

    public class UserNotLoggedOnException : System.Exception
    {

    }
}