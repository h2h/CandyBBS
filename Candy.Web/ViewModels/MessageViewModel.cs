using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Candy.Web.ViewModels
{
    public class LoginMessageViewModel
    {
        public string Result { get; set; }
        public string Message { get; set; }
        public string ReturnUrl { get; set; }
    }
}