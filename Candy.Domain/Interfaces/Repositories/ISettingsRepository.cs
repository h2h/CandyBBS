using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ISettingsRepository
    {
        Settings Add(Settings item);
        Settings Get(int id);
        Settings Get(string name);
        void Update(Settings item);
        Dictionary<string,Settings> Get();
    }
}
