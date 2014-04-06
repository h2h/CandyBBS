using System;
using System.Globalization;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Candy.Domain.Models;

namespace Candy.Web.Areas.Admin.ViewModels
{
    public class TodaysTopics
    {
        public IList<Topic> Topics { get; set; }
    }
    public class LatestUsersViewModels
    {
        public IList<User> Users { get; set; }
    }
    public class SettingsViewModels
    {
        public Dictionary<string, Settings> Settings { get; set; }
    }
    public class ThemeViewModels
    {
        public Theme CurrentTheme { get; set; }
        public IEnumerable<Theme> AllThemes { get; set; }
    }
    public class BaseSettingsViewModels
    {
        public Dictionary<string, Settings> Settings { get; set; }
        public IList<CultureInfo> Cultural { get; set; }
        public IEnumerable<Theme> Themes { get; set; }
        public IList<Role> Roles { get; set; }
    }
    public class PermissionsViewModels
    {
        public IEnumerable<Permission> Permissions { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IList<Role> Roles { get; set; }
        public Role Role { get; set; }
    }
}