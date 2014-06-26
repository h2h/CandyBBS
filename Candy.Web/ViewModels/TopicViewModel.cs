using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using Candy.Domain.Models;

namespace Candy.Web.ViewModels
{
    public class TopicViewModel
    {
    }
    public class CreateTopicViewModel
    {
        [Required,StringLength(600)]
        public string Name { get; set; }
        [UIHint("markdowneditor"),AllowHtml]
        public string Content { get; set; }
        public string Tags { get; set; }
        [Required]
        public int Category { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public User LoggedOnUser { get; set; }
    }
    public class ShowTopicViewModel
    {
        public Post TopicStarterPost { get; set; }
        public Topic Topic { get; set; }
        public PagedList<Post> Posts { get; set; }
        public PermissionSet Permissions { get; set; }
        public int? PageIndex { get; set; }
        public int? TotalCount { get; set; }
        public User User { get; set; }
    }

}