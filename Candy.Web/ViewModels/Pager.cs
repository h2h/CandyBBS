using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Candy.Web.ViewModels
{
    public class Pager
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalItemCount { get; set; }
        public object RouteValues { get; set; }
        public int TotalPages { get; set; }
    }
}