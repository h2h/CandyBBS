using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Candy.Web.Areas.Admin.ViewModels
{
    public class GenericMessageViewModel
    {
        public GenericMessageViewModel()
        {
            MessageType = GenericMessages.info;
        }
        public string Message { get; set; }
        public GenericMessages MessageType { get; set; } 
    }
    public enum GenericMessages
    {
        block,
        error,
        success,
        info
    }
}