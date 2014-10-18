using System;
using System.Collections.Generic;
namespace Candy.Domain.Models
{
    public class PermissionSet : Dictionary<string, CategoryPermissionForRole>
    {
        public PermissionSet(IEnumerable<CategoryPermissionForRole> permissionsList)
        {
            foreach (var categoryPermissionForRole in permissionsList)
            {
                this.Add(categoryPermissionForRole.Permission.Slug, categoryPermissionForRole);
            }
        }
    }
}
