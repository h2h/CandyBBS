using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Candy.Utilities;
using Candy.Domain;
using System.Web.Mvc;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Models;
using System.Drawing;
using System.Net;
using System.IO;

namespace Candy.Web.Application
{
    public static class AppHelpers
    {
        /// <summary>
        /// 获取当前登录用户
        /// </summary>
        /// <returns></returns>
        public static User GetLoggedUser()
        {
            if (HttpContext.Current.User.Identity.IsAuthenticated)
            {
                return DependencyResolver.Current.GetService<IUserService>().GetUser(HttpContext.Current.User.Identity.Name);
            }
            return null;
        }
        /// <summary>
        /// 根据性别代码获取性别
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public static string GetGender(string code)
        {
            var gender = string.Empty;
            if (code == "0")
            {
                gender = "男";
            }
            else if (code == "1")
            {
                gender = "女";
            }
            else
            {
                gender = "其他";
            }
            return gender;
        }
        /// <summary>
        /// 根据感情状况代码获取感情状况
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public static string GetLove(string code)
        {
            var love = string.Empty;
            switch (code)
            {
                case "1":
                    love = "单身";
                    break;
                case "2":
                    love = "求交往";
                    break;
                case "3":
                    love = "暗恋中";
                    break;
                case "4":
                    love = "暧昧中";
                    break;
                case "5":
                    love = "恋爱中";
                    break;
                case "6":
                    love = "订婚";
                    break;
                case "7":
                    love = "已婚";
                    break;
                case "8":
                    love = "分居";
                    break;
                case "9":
                    love = "离异";
                    break;
                case "10":
                    love = "丧偶";
                    break;
            }
            return love;
        }
        public static bool userAgentContains(string agentToFind)
        {
            return (HttpContext.Current.Request.UserAgent != null && HttpContext.Current.Request.UserAgent.IndexOf(agentToFind, StringComparison.OrdinalIgnoreCase) > 0);
        }
        public static bool IsMobileDevice()
        {
            /*
            if (HttpContext.Current.Request.Browser.IsMobileDevice || userAgentContains("Android")
                || userAgentContains("iPhone") || userAgentContains("iPod")
                || userAgentContains("Windows Phone") || userAgentContains("Blackberry")
                || userAgentContains("iemobile") || userAgentContains("iPad") || userAgentContains("Opera Mini"))
            {
                // 判断是不是平板电脑
                if (userAgentContains("ipad") || (userAgentContains("android") && !userAgentContains("mobile")))
                {
                    // 这是一个平板电脑
                    return true;
                }
                return true;
            }*/
            return false;
        }

        public static string GetPreviousVersionNo()
        {
            return ConfigUtils.GetAppSetting(AppConstants.Version);
        }

        public static string GetCurrentVersionNo()
        {
            var version = Assembly.GetExecutingAssembly().GetName().Version;
            return string.Format("{0}.{1}", version.Major, version.Minor);
        }

        public static bool ShowInstall()
        {
            var currentVersionNo = GetCurrentVersionNo();
            var previousVersionNo = GetPreviousVersionNo();

            return (currentVersionNo != previousVersionNo);
        }
        public static string GetSiteName()
        {
            var settingsService = DependencyResolver.Current.GetService<ISettingsService>();
            return settingsService.Get()[AppConstants.SiteName].Value;
        }
        public static Dictionary<string, Settings> Settings()
        {
            var settingsService = DependencyResolver.Current.GetService<ISettingsService>();
            return settingsService.Get(true);
        }
        public static string Settings(string key)
        {   
            var settings = Settings()[key];
            return settings == null ? string.Empty : settings.Value;
        }

        public static bool DownloadAvatar(string url,string savePath)
        {
            try
            {
                WebClient mywebclient = new WebClient();
                mywebclient.DownloadFile(url, HttpContext.Current.Server.MapPath(savePath));
                return true;
            }
            catch
            {
                throw;
            }
        }

    }
}