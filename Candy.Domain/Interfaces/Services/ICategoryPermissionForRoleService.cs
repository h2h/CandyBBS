using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ICategoryPermissionForRoleService
    {
        void Add(CategoryPermissionForRole categoryPermissionForRole);
        CategoryPermissionForRole CheckExists(CategoryPermissionForRole categoryPermissionForRole);
        void UpdateOrCreateNew(CategoryPermissionForRole categoryPermissionForRole);
        void Save(CategoryPermissionForRole categoryPermissionForRole);
        Dictionary<Permission, CategoryPermissionForRole> GetCategoryRow(Role role, Category cat);
        IEnumerable<CategoryPermissionForRole> GetByCategory(int categoryId);
    }
}
