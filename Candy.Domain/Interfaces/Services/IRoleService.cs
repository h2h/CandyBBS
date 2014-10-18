using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IRoleService
    {
        IList<Role> AllRoles();
        void Save(Role user);
        void Delete(Role role);
        Role GetRole(string rolename);
        Role GetRole(int Id);
        IList<User> GetUsersForRole(string roleName);
        void CreateRole(Role role);
        PermissionSet GetPermissions(Category category, Role role);
    }
}
