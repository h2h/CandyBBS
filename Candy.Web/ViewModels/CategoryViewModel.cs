using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Web.ViewModels
{
    public class CategoryListViewModel
    {
        public Dictionary<Category, PermissionSet> AllPermissionSets { get; set; }
    }
    public class ViewCategoryViewModel
    {
        public PagedList<Topic> Topics { get; set; }
        public PermissionSet Permissions { get; set; }
        public Category Category { get; set; }
        public CategoryListViewModel SubCategories { get; set; }
        public User User { get; set; }
        public int? PageIndex { get; set; }
        public int? TotalCount { get; set; }
    }
    public class SubCategoryViewModel
    {
        public Dictionary<Category, PermissionSet> AllPermissionSets { get; set; }
        public Category ParentCategory { get; set; }
    }
    public class CategoryViewModel
    {
        public List<SubCategoryViewModel> Categories { get; set; }
    }
}