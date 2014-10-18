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

        public ActionResult EditUser(int id)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return View(UserService.GetUser(id));
            }
        }
        
        public ActionResult Role()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddRole(RoleViewModel model)
        {
            using (var unifOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var role = ViewModelMapping.RoleViewModelToRole(model);
                this._roleService.CreateRole(role);
                try
                {
                    unifOfWork.Commit();
                }
                catch (Exception ex)
                {
                    unifOfWork.Rollback();
                    LoggingService.Error(ex);
                    throw new Exception(LocalizerHelper.Lang("添加用户组发生错误"));
                }
            }
            TempData[AppConstants.MessageViewBagName] = new GenericMessage
            {
                Message = LocalizerHelper.Lang("添加用户组"),
                MessageType = GenericMessageType.success
            };
            return Redirect("~/admin/user/role");
        }
        public ActionResult EditRole(int id)
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                var role = this._roleService.GetRole(id);
                return View(ViewModelMapping.RoleToRoleViewModel(role));
            }
        }
        [HttpPost]
        public ActionResult EditRole(RoleViewModel model)
        {
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var role = this._roleService.GetRole(model.Id);
                role.RoleName = model.Name;
                role.Slug = model.Slug;
                try
                {
                    unitOfWork.Commit();
                }
                catch (Exception ex)
                {
                    unitOfWork.Rollback();
                    LoggingService.Error(ex);
                    throw new Exception(LocalizerHelper.Lang("编辑用户组发生错误"));
                }
            }
            TempData[AppConstants.MessageViewBagName] = new GenericMessage
            {
                Message = LocalizerHelper.Lang("保存成功"),
                MessageType = GenericMessageType.success
            };
            return Redirect("~/admin/User/Role");
        }
        public ActionResult DeleteRole(int id)
        {
            using (var unitOfWork = UnitOfWorkManager.NewUnitOfWork())
            {
                var role = this._roleService.GetRole(id);
                if (role != null)
                {
                    try
                    {
                        this._roleService.Delete(role);
                        unitOfWork.Commit();
                    }
                    catch (Exception ex)
                    {
                        unitOfWork.Rollback();
                        LoggingService.Error(ex);
                        throw new Exception(LocalizerHelper.Lang("删除用户组发生错误"));
                    }
                }
            }
            TempData[AppConstants.MessageViewBagName] = new GenericMessage
            {
                Message = LocalizerHelper.Lang("删除成功"),
                MessageType = GenericMessageType.success
            };
            return Redirect("~/admin/user/role/");
        }
        public PartialViewResult RoleList()
        {
            using (UnitOfWorkManager.NewUnitOfWork())
            {
                return PartialView(this._roleService.AllRoles().OrderByDescending(a => a.Id).ToList());
            }
        }
	}
}