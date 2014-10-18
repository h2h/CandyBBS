using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;

namespace Candy.Data.Repositories
{
    public class CategoryPermissionForRoleRepository : ICategoryPermissionForRoleRepository
    {
        private readonly CandyContext _context;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context"></param>
        public CategoryPermissionForRoleRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }

        public CategoryPermissionForRole Add(CategoryPermissionForRole categoryPermissionForRole)
        {
            return this._context.CategoryPermissionForRole.Add(categoryPermissionForRole);
        }

        public CategoryPermissionForRole GetByPermissionRoleCategoryId(int permId, int roleId, int catId)
        {
            return this._context.CategoryPermissionForRole.FirstOrDefault(x => x.Category.Id == catId &&
                                                                           x.Permission.Id == permId &&
                                                                           x.Role.Id == roleId);
        }

        public IList<CategoryPermissionForRole> GetCategoryRow(Role role, Category cat)
        {
            return this._context.CategoryPermissionForRole
                .Where(x => x.Category.Id == cat.Id &&
                            x.Role.Id == role.Id)
                            .ToList();
        }

        public IEnumerable<CategoryPermissionForRole> GetByCategory(int catgoryId)
        {
            return this._context.CategoryPermissionForRole
                .Where(x => x.Category.Id == catgoryId)
                .ToList();
        }

        public IEnumerable<CategoryPermissionForRole> GetByRole(int roleId)
        {
            return this._context.CategoryPermissionForRole
                .Where(x => x.Role.Id == roleId)
                .ToList();
        }

        public IEnumerable<CategoryPermissionForRole> GetByPermission(int permId)
        {
            return this._context.CategoryPermissionForRole
                .Where(x => x.Permission.Id == permId)
                .ToList();
        }

        public CategoryPermissionForRole Get(int id)
        {
            return this._context.CategoryPermissionForRole.FirstOrDefault(cat => cat.Id == id);
        }

        public void Delete(CategoryPermissionForRole categoryPermissionForRole)
        {
            this._context.CategoryPermissionForRole.Remove(categoryPermissionForRole);
        }

        public void Update(CategoryPermissionForRole item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.CategoryPermissionForRole.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified;

        }
    }
}
