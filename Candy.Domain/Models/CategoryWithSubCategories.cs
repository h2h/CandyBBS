using System;
using System.Collections.Generic;

namespace Candy.Domain.Models
{
    public class CategoryWithSubCategories
    {
        public Category Category { get; set; }
        public IEnumerable<Category> SubCategories { get; set; } 
    }
}
