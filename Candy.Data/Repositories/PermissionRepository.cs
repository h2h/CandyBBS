using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using System.Data.Entity;

namespace Candy.Data.Repositories
{
    public class PermissionRepository : IPermissionRepository
    {
        private readonly CandyContext _context;

        public PermissionRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }

        public IEnumerable<Permission> GetAll()
        {
            return this._context.Permission
                .OrderBy(x => x.Slug)
                .ToList();
        }

        public Permission Add(Permission permission)
        {
            return this._context.Permission.Add(permission);
        }

        public Permission Get(int id)
        {
            return this._context.Permission.FirstOrDefault(x => x.Id == id);
        }

        public void Delete(Permission item)
        {
            this._context.Permission.Remove(item);
        }

        public void Update(Permission item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.Permission.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified;
        }
    }
}
