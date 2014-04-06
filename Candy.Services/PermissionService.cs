using System;
using System.Collections.Generic;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;

namespace Candy.Services
{
    public class PermissionService : IPermissionService
    {
        private readonly IPermissionRepository _permissionRepository;
        private readonly ICategoryPermissionForRoleRepository _categoryPermissionForRoleRepository;

        public PermissionService(IPermissionRepository permissionRepository, ICategoryPermissionForRoleRepository categoryPermissionForRoleRepository)
        {
            this._permissionRepository = permissionRepository;
            this._categoryPermissionForRoleRepository = categoryPermissionForRoleRepository;
        }

        /// <summary>
        /// Get all permissions
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Permission> GetAll()
        {
            return this._permissionRepository.GetAll();
        }

        /// <summary>
        /// Add a new permission
        /// </summary>
        /// <param name="permission"></param>
        public void Add(Permission permission)
        {
            permission.Slug = StringUtils.SafePlainText(permission.Slug);
            this._permissionRepository.Add(permission);
        }

        /// <summary>
        ///  Delete permission and associated category permission for roles
        /// </summary>
        /// <param name="permission"></param>
        public void Delete(Permission permission)
        {
            var catPermForRoles = _categoryPermissionForRoleRepository.GetByPermission(permission.Id);
            foreach (var categoryPermissionForRole in catPermForRoles)
            {
                this._categoryPermissionForRoleRepository.Delete(categoryPermissionForRole);
            }

           this._permissionRepository.Delete(permission);
        }

        /// <summary>
        /// Get a permision by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Permission Get(int id)
        {
            return this._permissionRepository.Get(id);
        }
    }
}
