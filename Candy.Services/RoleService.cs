using System;
using System.Linq;
using System.Collections.Generic;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;
using Candy.Domain;
using System.Web;
using Candy.Domain.Exceptions;

namespace Candy.Services
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        private readonly ICategoryPermissionForRoleRepository _categoryPermissionForRoleRepository;
        private readonly IPermissionRepository _permissionRepository;

        private PermissionSet _permissions;

        public RoleService(IRoleRepository roleRepository, ICategoryPermissionForRoleRepository categoryPermissionForRoleRepository, IPermissionRepository permissionRepository)
        {
            this._roleRepository = roleRepository;
            this._categoryPermissionForRoleRepository = categoryPermissionForRoleRepository;
            this._permissionRepository = permissionRepository;
        }

        /// <summary>
        /// Get all roles in the system
        /// </summary>
        /// <returns></returns>
        public IList<Role> AllRoles()
        {
            return this._roleRepository.AllRoles();
        }

        /// <summary>
        /// Get role by name
        /// </summary>
        /// <param name="rolename"></param>
        /// <returns></returns>
        public Role GetRole(string rolename)
        {
            return this._roleRepository.GetRole(rolename);
        }

        /// <summary>
        /// Get role by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public Role GetRole(int Id)
        {
            return this._roleRepository.Get(Id);

        }

        /// <summary>
        /// Get all users for a specified role
        /// </summary>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public IList<User> GetUsersForRole(string roleName)
        {
            return this._roleRepository.GetRole(roleName).Users;

        }

        /// <summary>
        /// Create a new role
        /// </summary>
        /// <param name="role"></param>
        public void CreateRole(Role role)
        {
            role.RoleName = StringUtils.SafePlainText(role.RoleName);
            _roleRepository.Add(role);
        }

        /// <summary>
        /// Delete a role
        /// </summary>
        /// <param name="role"></param>
        public void Delete(Role role)
        {
            // Check if anyone else if using this role
            var okToDelete = role.Users.Count == 0;

            if (okToDelete)
            {
                // Get any categorypermissionforoles and delete these first
                var rolesToDelete = this._categoryPermissionForRoleRepository.GetByRole(role.Id);

                foreach (var categoryPermissionForRole in rolesToDelete)
                {
                    this._categoryPermissionForRoleRepository.Delete(categoryPermissionForRole);
                }

                this._roleRepository.Delete(role);
            }
            else
            {
                var inUseBy = new List<Entity>();
                inUseBy.AddRange(role.Users);
                throw new InUseUnableToDeleteException(inUseBy);
            }
        }

        /// <summary>
        /// Save a role
        /// </summary>
        /// <param name="role"></param>
        public void Save(Role role)
        {
            role.RoleName = StringUtils.SafePlainText(role.RoleName);
            this._roleRepository.Update(role);
        }

        /// <summary>
        /// Admin: so no need to check db, admin is all powerful
        /// </summary>
        private PermissionSet GetAdminPermissions(Category category, Role role)
        {
            // Get all permissions
            var permissionList = this._permissionRepository.GetAll();

            // Make a new entry in the results against each permission. All true (this is admin) except "Deny Access" 
            // and "Read Only" which should be false
            var permissionSet = new PermissionSet(
                permissionList.Select(permission => new CategoryPermissionForRole
                    {
                        Category = category,
                        IsTicked = (permission.Slug != AppConstants.PermissionDenyAccess && permission.Slug != AppConstants.PermissionReadOnly),
                        Role = role,
                        Permission = permission
                    }).ToList());

            return permissionSet;

        }

        /// <summary>
        /// Guest = Not logged in, so only need to check the access permission
        /// </summary>
        /// <param name="category"></param>
        /// <param name="role"></param>
        private PermissionSet GetGuestPermissions(Category category, Role role)
        {
            // Get all the permissions 
            var permissionList = this._permissionRepository.GetAll();

            // Make a CategoryPermissionForRole for each permission that exists,
            // but only set the read-only permission to true for this role / category. All others false
            var permissions = permissionList.Select(permission => new CategoryPermissionForRole
            {
                Category = category,
                IsTicked = permission.Slug == AppConstants.PermissionReadOnly,
                Role = role,
                Permission = permission
            }).ToList();

            // Deny Access may have been set (or left null) for guest for the category, so need to read for it
            var denyAccessPermission = role.CategoryPermissionForRole
                                .FirstOrDefault(x => x.Category == category &&
                                                    x.Permission.Slug == AppConstants.PermissionDenyAccess &&
                                                    x.Role == role);

            // Set the Deny Access value in the results. If it's null for this role/category, record it as false in the results
            var categoryPermissionForRole = permissions.FirstOrDefault(x => x.Permission.Slug == AppConstants.PermissionDenyAccess);
            if (categoryPermissionForRole != null)
            {
                categoryPermissionForRole.IsTicked = denyAccessPermission != null && denyAccessPermission.IsTicked;
            }

            var permissionSet = new PermissionSet(permissions);
            return permissionSet;

        }

        /// <summary>
        /// Get permissions for roles other than those specially treated in this class
        /// </summary>
        /// <param name="category"></param>
        /// <param name="role"></param>
        /// <returns></returns>
        private PermissionSet GetOtherPermissions(Category category, Role role)
        {
            // Get all permissions
            var permissionList = this._permissionRepository.GetAll();

            // Get the known permissions for this role and category
            var categoryRow = this._categoryPermissionForRoleRepository.GetCategoryRow(role, category);
            var categoryRowPermissions = categoryRow.ToDictionary(catRow => catRow.Permission);

            // Load up the results with the permisions for this role / cartegory. A null entry for a permissions results in a new
            // record with a false value
            var permissions = new List<CategoryPermissionForRole>();
            foreach (var permission in permissionList)
            {
                permissions.Add(categoryRowPermissions.ContainsKey(permission)
                                    ? categoryRowPermissions[permission]
                                    : new CategoryPermissionForRole { Category = category, Role = role, IsTicked = false, Permission = permission });
            }

            var permissionSet = new PermissionSet(permissions);

            return permissionSet;

        }

        /// <summary>
        /// Returns permission set based on category and role
        /// </summary>
        /// <param name="category"></param>
        /// <param name="role"></param>
        /// <returns></returns>
        public PermissionSet GetPermissions(Category category, Role role)
        {
            // Pass the role in to see select which permissions to apply
            // Going to cache this per request, just to help with performance
            var objectContextKey = string.Concat(HttpContext.Current.GetHashCode().ToString("x"), "-", category.Id, "-", role.Id);
            if (!HttpContext.Current.Items.Contains(objectContextKey))
            {
                switch (role.RoleName)
                {
                    case AppConstants.AdminRoleName:
                        this._permissions = GetAdminPermissions(category, role);
                        break;
                    case AppConstants.GuestRoleName:
                        this._permissions = GetGuestPermissions(category, role);
                        break;
                    default:
                        this._permissions = GetOtherPermissions(category, role);
                        break;
                }

                HttpContext.Current.Items.Add(objectContextKey, this._permissions);
            }

            return HttpContext.Current.Items[objectContextKey] as PermissionSet;

        }
    }
}
