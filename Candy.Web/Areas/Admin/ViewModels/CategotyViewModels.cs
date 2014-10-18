using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Web.Areas.Admin.ViewModels
{
    public class CategotyViewModels
    {
        public Category Category { get; set; }
        public List<CategotyViewModels> SubCategories { get; set; }
    }

    public class CategoryListViewModels
    {
        public List<CategotyViewModels> Categories { get; set; }
    }

    public class CategoryEditViewModels
    {
        public Category Category { get; set; }
        public List<CategotyViewModels> Categories { get; set; }
    }
}