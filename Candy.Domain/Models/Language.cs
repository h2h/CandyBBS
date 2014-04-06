using System;
using System.Collections.Generic;

namespace Candy.Domain.Models
{
    public class Language : Entity
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
