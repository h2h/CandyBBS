using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Candy.Utilities;

namespace Candy.Web.Application
{
    public static class UrlHelperExtensions
    {
        public static string Absolute(this UrlHelper helper, string contentPath)
        {
            if(contentPath.Contains("http"))
            {
                return helper.Content(contentPath);
            }
            var request = helper.RequestContext.HttpContext.Request;
            return string.Format("{0}://{1}{2}",
                (request.IsSecureConnection) ? "https" : "http",
                request.Headers["Host"],
                VirtualPathUtility.ToAbsolute(contentPath));
        }
    }
}