using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using System.Data.Entity;

namespace Candy.Data.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly CandyContext _context;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context"> </param>
        public RoleRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }

        /// <summary>
        /// Get all roles out of the database
        /// </summary>
        /// <returns></returns>
        public IList<Role> AllRoles()
        {
            return this._context.Role
                .OrderByDescending(x => x.RoleName)
                .ToList();
        }

        /// <summary>
        /// Get a role by name
        /// </summary>
        /// <param name="rolename"></param>
        /// <returns></returns>
        public Role GetRole(string rolename)
        {
            return this._context.Role.FirstOrDefault(y => y.Slug == rolename.ToLower());
        }

        public Role Add(Role item)
        {
            var role = GetRole(item.RoleName);
            return role ?? this._context.Role.Add(item);
        }

        public Role Get(int id)
        {
            return this._context.Role.FirstOrDefault(x => x.Id == id);
        }

        public void Delete(Role item)
        {
            this._context.Role.Remove(item);
        }

        public void Update(Role item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.Role.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified;
        }
    }
}
