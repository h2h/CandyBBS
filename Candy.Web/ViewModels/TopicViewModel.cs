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
}