using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Models;
using Candy.Utilities;
using System.IO;
using System.Drawing;

namespace Candy.Web.Application
{
    public static class HtmlHelperExtensions
    {
        public static string Lang(this HtmlHelper htmlHelper, string text)
        {
            var locService = DependencyResolver.Current.GetService<ILocalizationService>();
            var language = locService.Get(text);
            if (language != null)
                return locService.Get(text).Value;
            else
                return text;
        }
        public static string Lang(this HtmlHelper htmlHelper, string text, params object[] args)
        {
            return string.Format(Lang(htmlHelper, text), args);
        }
        public static string Path(this HtmlHelper htmlHelper, string path)
        {
            return string.Format("~/Themes/{0}/" + path, HttpContext.Current.Session[AppConstants.CurrentTheme].ToString());
        }
        public static string AdminPath(this HtmlHelper htmlHelper, string path)
        {
            return string.Format("~/Plugins/Admin/{0}", path);
        }
        public static Dictionary<string, Settings> Settings(this HtmlHelper htmlHelper)
        {
            return AppHelpers.Settings();
        }
        public static string Settings(this HtmlHelper htmlHelper, string key)
        {
            return AppHelpers.Settings(key);
        }
        public static string GetAvatar(this HtmlHelper htmlHelper, User user, int size = 48)
        {
            if (!user.Avatar.IsNullEmpty())
            {
                return user.Avatar;
            }

            if (!Settings(htmlHelper, AppConstants.UseAvatarCache).Equals("true", StringComparison.OrdinalIgnoreCase))
            {
                var avatar = StringUtils.GetGravatarImage(user.Email, size);
                if (!avatar.IsNullEmpty())
                {
                    return avatar;
                }
                return StringUtils.GetDefaultAvatar();
            }

            var avatarPath = System.IO.Path.Combine(AppConstants.AvatarCachePath, StringUtils.md5HashString(user.Email + size.ToString()) + ".jpg");

            if (File.Exists(HttpContext.Current.Server.MapPath(avatarPath)))
            {
                return avatarPath;
            }

            if (AppHelpers.DownloadAvatar(StringUtils.GetGravatarImage(user.Email, size), avatarPath))
            {
                return avatarPath;
            }
            return StringUtils.GetGravatarImage(user.Email, size);
        }
    }
}