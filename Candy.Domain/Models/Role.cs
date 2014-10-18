using System;
using System.Collections.Generic;

namespace Candy.Domain.Models
{
    public class Role : Entity
    {
        public int Id { get; set; }
        public string RoleName { get; set; }
        public string Slug { get; set; }
        public virtual IList<User> Users { get; set; }
        public virtual IList<CategoryPermissionForRole> CategoryPermissionForRole { get; set; }
        public virtual Dictionary<int, Dictionary<Permission, bool>> GetFullPermissionTable()
        {
            var permissionRows = new Dictionary<int, Dictionary<Permission, bool>>();

            foreach (var catPermissionForRole in CategoryPermissionForRole)
            {
                if (!permissionRows.ContainsKey(catPermissionForRole.Category.Id))
                {
                    var permissionList = new Dictionary<Permission, bool>();

                    permissionRows.Add(catPermissionForRole.Category.Id, permissionList);
                }

                if (!permissionRows[catPermissionForRole.Category.Id].ContainsKey(catPermissionForRole.Permission))
                {
                    permissionRows[catPermissionForRole.Category.Id].Add(catPermissionForRole.Permission, catPermissionForRole.IsTicked);
                }
                else
                {
                    permissionRows[catPermissionForRole.Category.Id][catPermissionForRole.Permission] = catPermissionForRole.IsTicked;
                }

            }
            return permissionRows;
        }
    }
}
