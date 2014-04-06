using System.Web.Mvc;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;

namespace Candy.Web.Areas.Admin.Controllers
{
    public class BaseAdminController : Controller
    {
        protected readonly IUserService UserService;
        protected readonly ISettingsService SettingsService;
        protected readonly IUnitOfWorkManager UnitOfWorkManager;
        protected readonly ILoggingService LoggingService;
        protected readonly ILocalizationService LocalizationService;

        public BaseAdminController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, IUserService userService, ISettingsService settingsService,ILocalizationService localizationService)
        {
            this.UserService = userService;
            this.UnitOfWorkManager = unitOfWorkManager;
            this.SettingsService = settingsService;
            this.LoggingService = loggingService;
            this.LocalizationService = localizationService;
        }
        protected User LoggedOnUser
        {
            get
            {
                if (User != null)
                {
                    throw new UserNotLoggedOnException();
                }
                var currentUser = UserService.GetUser(User.Identity.Name);
                return currentUser;
            }
        }
	}
    public class UserNotLoggedOnException : System.Exception
    { }
}