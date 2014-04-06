using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Candy.Utilities;
using Candy.Domain;

namespace Candy.Web.Application
{
    public class AppHelpers
    {
        public static bool userAgentContains(string agentToFind)
        {
            return (HttpContext.Current.Request.UserAgent != null && HttpContext.Current.Request.UserAgent.IndexOf(agentToFind, StringComparison.OrdinalIgnoreCase) > 0);
        }
        public static bool IsMobileDevice()
        {
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
            }
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
    }
}