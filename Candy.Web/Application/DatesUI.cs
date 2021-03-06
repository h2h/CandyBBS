﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.Services;

namespace Candy.Web.Application
{
    public static class DatesUI
    {
        public static string GetPrettyDate(DateTime date)
        {
            // 获取时间差
            var span = DateTime.Now.Subtract(date);
            var totalDays = (int)span.TotalDays;
            var totalSeconds = (int)span.TotalSeconds;
            if (totalDays < 0 || totalDays >= 0x1f)
            {
                return date.ToString("yyyy-MM-dd");
            }
            if (totalDays == 0)
            {
                if (totalSeconds < 60)
                {
                    return LocalizerHelper.Lang("{0}秒以前", totalSeconds);
                }
                if (totalSeconds < 120)
                {
                    return LocalizerHelper.Lang("1分钟以前");
                }
                if (totalSeconds < 0xe10)
                {
                    return LocalizerHelper.Lang("{0}分钟以前", Math.Floor((double)(((double)totalSeconds) / 60.0)));
                }
                if (totalSeconds < 0x1c20)
                {
                    return LocalizerHelper.Lang("1小时以前");
                }
                if (totalSeconds < 0x15180)
                {
                    return LocalizerHelper.Lang("{0}小时以前", Math.Floor((double)(((double)totalSeconds) / 3600.0)));
                }
            }
            else if (totalDays == 1)
            {
                return LocalizerHelper.Lang("1天前");
            }
            else
            {
                return LocalizerHelper.Lang("{0}周前", Math.Ceiling((double)(((double)totalDays) / 7.0)));
            }
            return string.Empty;
        }
        /// <summary>
        /// 获取本地时间
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public static DateTime GetLocalDate(DateTime date)
        {
            var timeZone = TimeZoneInfo.FindSystemTimeZoneById(AppHelpers.Settings(AppConstants.TimeZone));
            return date.Add(timeZone.BaseUtcOffset);
        }
    }
}