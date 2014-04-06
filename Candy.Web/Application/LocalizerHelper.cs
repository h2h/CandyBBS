using System;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.Services;

namespace Candy.Web.Application
{
    public class LocalizerHelper
    {
        public static string Lang(string text)
        {
            var locService = DependencyResolver.Current.GetService<ILocalizationService>();
            var language = locService.Get(text);
            if (language != null)
                return locService.Get(text).Value;
            else
                return text;
        }
        public static string Lang(string text, params object[] args)
        {
            return string.Format(Lang(text), args);
        }

    }
}