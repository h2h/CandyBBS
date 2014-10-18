using System;
using System.Collections.Generic;

namespace Candy.Domain.Models
{
    public class Post : Entity
    {
        public int Id { get; set; }
        /// <summary>
        /// 内容
        /// </summary>
        public string PostContent { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime DateCreated { get; set; }
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime DateEdited { get; set; }
        /// <summary>
        /// 文章类型
        /// </summary>
        public string PostType { get; set; }
        /// <summary>
        /// IP地址
        /// </summary>
        public string IpAddress { get; set; }
        /// <summary>
        /// 帖子
        /// </summary>
        public virtual Topic Topic { get; set; }
        /// <summary>
        /// 用户
        /// </summary>
        public virtual User User { get; set; }
        /// <summary>
        /// 附件
        /// </summary>
        public virtual IList<UploadedFile> Files { get; set; }
    }
}
