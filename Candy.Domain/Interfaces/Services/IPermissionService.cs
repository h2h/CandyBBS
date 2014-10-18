using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IPermissionService
    {
        IEnumerable<Permission> GetAll();
        void Add(Permission permission);
        void Delete(Permission permission);
        Permission Get(int id);
    }
}
