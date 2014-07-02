using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Candy.Web.ViewModels
{
    public class CreateCommentViewModel
    {
        [AllowHtml]
        public string Context { get; set; }
        public int Topic { get; set; }
    }
    public class CommentViewModel
    {
    }
}