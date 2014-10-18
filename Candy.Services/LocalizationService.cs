using System;
using System.IO;
using System.Web;
using System.Linq;
using System.Globalization;
using System.Collections.Generic;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;

namespace Candy.Services
{
    public class LocalizationService : ILocalizationService
    {
        private readonly ISettingsRepository _settingsRepository;

        private const string LanguagesDirectory = @"~/Languages";
        private static string _languagesFolder;
        public LocalizationService(ISettingsRepository settingsRepository)
        {
            this._settingsRepository = settingsRepository;
            _languagesFolder = HttpContext.Current != null ? HttpContext.Current.Server.MapPath(LanguagesDirectory) : @".";
        }
        public IList<CultureInfo> LanguagesAll
        {
            get
            {
                var cultureList = new List<CultureInfo>();
                var languagesDir = new DirectoryInfo(_languagesFolder);
                foreach (var language in languagesDir.GetFileSystemInfos("*.json"))
                {
                    string fileName = Path.GetFileNameWithoutExtension(language.Name);
                    cultureList.Add(new CultureInfo(fileName));
                }
                return cultureList;
            }
        }
        public IEnumerable<Language> Languages
        {
            get{
                var objectContextKey = string.Concat(HttpContext.Current.GetHashCode().ToString("x"), "-Culture");
                if (!HttpContext.Current.Items.Contains(objectContextKey))
                {
                    var ci = new CultureInfo(this._settingsRepository.Get(AppConstants.LanguageCulture).Value);
                    if (HttpContext.Current.Session != null)
                    {
                        ci = (CultureInfo)HttpContext.Current.Session["Culture"];
                    }
                    HttpContext.Current.Items.Add(objectContextKey, this.Read(ci.Name));
                }
                return HttpContext.Current.Items[objectContextKey] as IEnumerable<Language>;
            }
        }
        public IEnumerable<Language> GetLanguageByLanguageCulture(string languageCulture)
        {
            return Read(languageCulture);
        }
        public Language Get(string key)
        {
            return this.Languages.Where(x => x.Key == key).FirstOrDefault();
        }
        private IEnumerable<Language> Read(string languageCulture)
        {
            string path = Path.Combine(_languagesFolder, languageCulture + ".json");
            if (File.Exists(path))
            {
                string language = string.Empty;
                using (var sr = new StreamReader(path))
                {
                    language = sr.ReadToEnd();
                    sr.Close();
                }
                try
                {
                    return Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Language>>(language);
                }
                catch
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        }
    }
}
