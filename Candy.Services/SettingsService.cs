using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain.Models;
using System.Collections.Generic;
using System.Web;

namespace Candy.Services
{
    public class SettingsService : ISettingsService
    {
        private readonly ISettingsRepository _settingsRepository;

        public SettingsService(ISettingsRepository settingsRepository)
        {
            this._settingsRepository = settingsRepository;
        }

        public void Save(Settings settings)
        {
            this._settingsRepository.Update(settings);
        }
        public Settings Add(Settings settings)
        {
            return this._settingsRepository.Add(settings);
        }
        public Settings Get(string name)
        {
            return this._settingsRepository.Get(name);
        }
        public Dictionary<string,Settings> Get(bool useCache = true)
        {
            if (useCache)
            {
                var objectContextKey = HttpContext.Current.GetHashCode().ToString("x");
                if (!HttpContext.Current.Items.Contains(objectContextKey))
                {
                    HttpContext.Current.Items.Add(objectContextKey, this._settingsRepository.Get());
                }
                return HttpContext.Current.Items[objectContextKey] as Dictionary<string, Settings>;
            }
            return this._settingsRepository.Get();
        }
    }
}
