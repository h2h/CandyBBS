using System;

namespace Candy.Domain.Models
{
    public class Email
    {
        /// <summary>
        /// 收件人邮箱
        /// </summary>
        public string EmailTo { get; set; }
        /// <summary>
        /// 发件人邮箱
        /// </summary>
        public string EmailFrom { get; set; }
        /// <summary>
        /// 内容
        /// </summary>
        public string Body { get; set; }
        /// <summary>
        /// 主题
        /// </summary>
        public string Subject { get; set; }
        /// <summary>
        /// 名称
        /// </summary>
        public string NameTo { get; set; }
    }
}
