using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace Candy.Utilities
{
    public static class ConfigUtils
    {
        public static string GetAppSetting(string appSettingName)
        {
            if (string.IsNullOrEmpty(appSettingName))
                throw new ApplicationException("AppSetting is null");
            return ConfigurationManager.AppSettings[appSettingName];
        }
        public static string GetAppSetting(string appSettingName,string defaultValue)
        {
            var appValue = defaultValue;
            try
            {
                if(!string.IsNullOrEmpty(appSettingName))
                {
                    appValue = ConfigurationManager.AppSettings[appSettingName];
                    if(appValue == null)
                    {
                        appValue = defaultValue;
                    }
                }
            }catch
            {}
            return appValue;
        }
        public static int GetAppSettingInt32(string appSettingName, int defaultValue)
        {
            return GetAppSetting(appSettingName, defaultValue.ToString()).ToInt32();
        }
    }
}
