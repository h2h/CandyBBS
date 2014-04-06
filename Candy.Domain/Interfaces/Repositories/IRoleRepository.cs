using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface IRoleRepository
    {
        IList<Role> AllRoles();
        Role GetRole(string rolename);
        Role Add(Role item);
        Role Get(int id);
        void Delete(Role item);
        void Update(Role item);
    }
}
