using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Candy.Domain.Models;
using Candy.Web.Areas.Admin.ViewModels;

namespace Candy.Web.ViewModels.Mapping
{
    public static class ViewModelMapping
    {
        public static Role RoleViewModelToRole(RoleViewModel model)
        {
            var role = new Role
            {
                RoleName = model.Name,
                Slug = model.Slug,
                Id = model.Id
            };
            return role;
        }
        public static RoleViewModel RoleToRoleViewModel(Role model)
        {
            var role = new RoleViewModel
            {
                Name = model.RoleName,
                Slug = model.Slug,
                Id = model.Id
            };
            return role;
        }
    }
}