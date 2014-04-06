using System;
using System.Collections;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ISettingsService
    {
        Settings Get(string name);
        void Save(Settings settings);
        Settings Add(Settings settings);
        Dictionary<string,Settings> Get(bool useCache  = true);
    }
}
