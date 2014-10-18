using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Candy.Domain.Models;

namespace Candy.Web.Areas.Admin.ViewModels
{
    public class UserViewModels
    {
        public IList<User> Users { get; set; }
        public IList<Role> Roles { get; set; }
    }
}