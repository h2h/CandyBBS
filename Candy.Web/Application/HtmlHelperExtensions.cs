using System; 
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Candy.Domain;
using Candy.Domain.Interfaces.Services;

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
    }
}