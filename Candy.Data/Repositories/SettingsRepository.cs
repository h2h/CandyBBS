using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain.Models;

namespace Candy.Data.Repositories
{
    public class SettingsRepository : ISettingsRepository
    {
        private readonly CandyContext _context;

        public SettingsRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }
        public Dictionary<string,Settings> Get()
        {
            var result = new Dictionary<string, Settings>();
            var settings = this._context.Settings.Where(x => x.Autoload == true);
            foreach (var i in settings)
            {
                result.Add(i.Name, i);
            }
            return result;
        }
        public Settings Get(int id)
        {
            return this._context.Settings.FirstOrDefault(x => x.Id == id);
        }
        public Settings Get(string name)
        {
            return this._context.Settings.FirstOrDefault(x => x.Name == name);
        }
        public Settings Add(Settings item)
        {
            return this._context.Settings.Add(item);
        }
        public void Update(Settings item)
        {
            if (this._context.Settings.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("对象已经存在，你不需要调用更新。");
            }
            this._context.Entry(item).State = EntityState.Modified;
        }
    }
}
