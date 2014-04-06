using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Candy.Web.ViewModels
{
    public class UserViewModel
    {
    }
    public class LoginViewModel
    {
        public string ReturnUrl { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
    public class RegisterViewModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public string PasswordQuestion { get; set; }
        public string PasswordAnswer { get; set; }

        [DataType(DataType.Url)]
        public string Website { get; set; }

        [Required]
        [StringLength(64,MinimumLength=6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password")]
        public string RePassword { get; set; }
    }
}