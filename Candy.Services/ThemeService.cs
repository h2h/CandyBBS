using System;
using System.Web;
using System.Linq;
using System.Collections.Generic;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using System.IO;

namespace Candy.Services
{
    public class ThemeService : IThemeService
    {
        private readonly ISettingsRepository _settingsRepository;

        private const string ThemeDirectory = @"~/Themes";
        private static string _themeFolder;
        public ThemeService(ISettingsRepository settingsRepository)
        {
            this._settingsRepository = settingsRepository;
            _themeFolder = HttpContext.Current != null ? HttpContext.Current.Server.MapPath(ThemeDirectory) : @".";
        }
        public IEnumerable<Theme> Themes
        {
            get
            {
                var themes = new List<Theme>();
                var themeDir = new DirectoryInfo(_themeFolder);
                foreach (var theme in themeDir.GetDirectories())
                {
                    var model = Read(theme.Name);
                    if (model != null)
                    {
                        themes.Add(model);
                    }
                }
                return themes;
            }
        }
        public Theme Get(string themeFolderName)
        {
            return Read(themeFolderName);
        }
        public bool Delete(string themeFolderName)
        {
            return false;
        }
        private Theme Read(string themeFolderName)
        {
            string path = Path.Combine(_themeFolder, themeFolderName, "Theme.json");
            if (File.Exists(path))
            {
                var theme = new Theme();
                using (var sr = new StreamReader(path))
                {
                    try
                    {
                        theme = Newtonsoft.Json.JsonConvert.DeserializeObject<Theme>(sr.ReadToEnd());
                        theme.ThemeFolderName = themeFolderName;
                        theme.Screenshot = string.Format("~/Themes/{0}/screenshot.png", themeFolderName);
                    }
                    catch
                    {
                        sr.Close();
                        return null;
                    }
                    finally
                    {
                        sr.Close();
                    }
                }
                return theme;
            }
            return null;
        }
    }
}
