using System;
using System.Collections.Generic;
using System.Linq;

namespace Candy.Domain.Models
{
    public class Topic : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public string Slug { get; set; }
        public int Views { get; set; }
        public bool IsSticky { get; set; }
        public bool IsLocked { get; set; }

        public virtual Category Category { get; set; }
        public virtual User User { get; set; }
        public virtual IList<Post> Posts { get; set; }
        public virtual IList<TopicTag> Tags { get; set; }
        public string NiceUrl
        {
            get { return UrlTypes.GenerateUrl(UrlType.Topic, this.Id.ToString()); }
        }
    }
}
