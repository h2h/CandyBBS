using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ICategoryPermissionForRoleRepository
    {
        CategoryPermissionForRole Add(CategoryPermissionForRole categoryPermissionForRole);
        CategoryPermissionForRole GetByPermissionRoleCategoryId(int permId, int roleId, int catId);
        IList<CategoryPermissionForRole> GetCategoryRow(Role role, Category cat);
        IEnumerable<CategoryPermissionForRole> GetByCategory(int catgoryId);
        IEnumerable<CategoryPermissionForRole> GetByRole(int roleId);
        IEnumerable<CategoryPermissionForRole> GetByPermission(int permId);
        CategoryPermissionForRole Get(int id);
        void Delete(CategoryPermissionForRole entity);
        void Update(CategoryPermissionForRole item);
    }
}
