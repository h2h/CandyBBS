using System;
using System.Collections.Generic;
using Candy.Utilities;

namespace Candy.Domain.Models
{
    public class Category : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsLocked { get; set; }
        public int SortOrder { get; set; }
        public string Slug { get; set; }
        public virtual Category ParentCategory { get; set; }
        public virtual IList<Topic> Topics { get; set; }
        public string NiceUrl
        {
            get { return UrlTypes.GenerateUrl(UrlType.Category, this.Slug); }
        }
    }
}
