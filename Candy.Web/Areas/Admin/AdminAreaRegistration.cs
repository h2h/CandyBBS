using System.Web.Mvc;

namespace Candy.Web.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Admin_Email",
                "Admin/Email",
                new { controller = "Settings", action = "Email"},
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Theme",
                "Admin/theme",
                new { controller = "Settings", action = "Theme" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Menu",
                "Admin/Menu",
                new { controller = "Menu", action = "Index" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Points",
                "Admin/points",
                new { controller = "Settings", action = "Points" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Permissions",
                "Admin/Permissions",
                new { controller = "Settings", action = "Permissions" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_Base",
                "Admin/settings",
                new { controller = "Settings", action = "Index" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Tools_About",
                "Admin/about",
                new { controller = "Tools", action = "About" },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
            context.MapRoute(
                "Admin_default",
                "Admin/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                new string[] { "Candy.Web.Areas.Admin.Controllers" }
            );
        }
    }
}