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
    public class HomeController : BaseController
    {
        protected readonly ICategoryService _categoryService;
        protected readonly ITopicService _topicService;
        public HomeController(ILoggingService loggingService, IUnitOfWorkManager unitOfWorkManager, 
            ICategoryService categoryService, 
            IUserService userService, 
            IRoleService roleService, 
            ISettingsService settingsService,
            ITopicService topicService)
            : base(loggingService, unitOfWorkManager,userService,roleService,settingsService)
        {
            this._topicService = topicService;
            this._categoryService = categoryService;
        }
        /// <summary>
        /// 最新文章
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public ActionResult Index(int? p)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                if (p.HasValue)
                {
                    return View(this._topicService.GetPagedTopics(p.Value, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
                else
                {
                    return View(this._topicService.GetPagedTopics(1, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
            }
        }
        /// <summary>
        /// 热门文章
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public ActionResult Popular(int? p)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                if (p.HasValue)
                {
                    return View(this._topicService.GetPagedTopics(p.Value, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
                else
                {
                    return View(this._topicService.GetPagedTopics(1, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
            }
        }
        /// <summary>
        /// 推荐文章
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public ActionResult Sticky(int? p)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                if (p.HasValue)
                {
                    return View(this._topicService.GetPagedTopics(p.Value, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
                else
                {
                    return View(this._topicService.GetPagedTopics(1, int.Parse(SettingsService.Get(AppConstants.PageSize).Value), int.MaxValue));
                }
            }
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