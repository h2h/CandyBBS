using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Web.ViewModels;
using Candy.Utilities;

namespace Candy.Web.Controllers
{
    public class TagController : BaseController
    {
        private readonly ITopicTagService _topicTagService;

        private User LoggedOnUser;
        private Role UsersRole;
        public TagController(ILoggingService loggingService, 
            IUnitOfWorkManager unitOfWorkManager, 
            IUserService userService, 
            IRoleService roleService, 
            ISettingsService settingsService,
            ITopicTagService topicTagService)
            : base(loggingService, unitOfWorkManager, userService, roleService, settingsService)
        {
            _topicTagService = topicTagService;
        }
        public ActionResult Show(string slug)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
            }
            return View();
        }
	}
}