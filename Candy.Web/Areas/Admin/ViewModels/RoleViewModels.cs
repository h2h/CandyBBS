using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Candy.Web.Areas.Admin.ViewModels
{
    public class RoleViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
    }
}