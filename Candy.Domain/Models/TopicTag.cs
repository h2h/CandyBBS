using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candy.Domain.Models
{
    public class TopicTag : Entity
    {
        public int Id { get; set; }
        /// <summary>
        /// 标签
        /// </summary>
        public string Tag { get; set; }
        /// <summary>
        /// 别名
        /// </summary>
        public string Slug { get; set; }
        /// <summary>
        /// 帖子
        /// </summary>
        public virtual IList<Topic> Topics { get; set; }
        public string NiceUrl
        {
            get { return UrlTypes.GenerateUrl(UrlType.Tag, this.Slug); }
        }
    }
}
