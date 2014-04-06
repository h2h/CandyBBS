using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface IPermissionRepository
    {
        IEnumerable<Permission> GetAll();
        Permission Add(Permission item);
        Permission Get(int id);
        void Delete(Permission item);
        void Update(Permission item);
    }
}
