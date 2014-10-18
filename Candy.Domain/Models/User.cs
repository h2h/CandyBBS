using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Utilities;

namespace Candy.Domain.Models
{
    public enum UserStatus
    {
        /// <summary>
        /// 成功
        /// </summary>
        Success,
        /// <summary>
        /// 重复的用户名
        /// </summary>
        DuplicateUserName,
        /// <summary>
        /// 重复的邮箱
        /// </summary>
        DuplicateEmail,
        /// <summary>
        /// 无效的密码
        /// </summary>
        InvalidPassword,  
        /// <summary>
        /// 无效的邮箱
        /// </summary>
        InvalidEmail,
        /// <summary>
        /// 无效的答案
        /// </summary>
        InvalidAnswer,
        /// <summary>
        /// 无效的问题
        /// </summary>
        InvalidQuestion,
        /// <summary>
        /// 无效的用户名
        /// </summary>
        InvalidUserName,
        /// <summary>
        /// 提供程序错误
        /// </summary>
        ProviderError,
        /// <summary>
        /// 用户拒绝
        /// </summary>
        UserRejected 
    }
    public class User : Entity
    {
        /// <summary>
        /// ID
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// 邮件
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// 密码保护问题
        /// </summary>
        public string PasswordQuestion { get; set; }
        /// <summary>
        /// 密码保护答案
        /// </summary>
        public string PasswordAnswer { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateDate { get; set; }
        /// <summary>
        /// 最后一次登录时间
        /// </summary>
        public DateTime LastLoginDate { get; set; }
        /// <summary>
        /// 别名
        /// </summary>
        public string Slug { get; set; }
        /// <summary>
        /// 签名
        /// </summary>
        public string Signature { get; set; }
        /// <summary>
        /// 网站
        /// </summary>
        public string Website { get; set; }
        /// <summary>
        /// 头像
        /// </summary>
        public string Avatar { get; set; }
        /// <summary>
        /// 激活
        /// </summary>
        public string ActivationKey { get; set; }
        public virtual Role Role { get; set; }
        public virtual IList<Topic> Topics { get; set; }
        public virtual IList<UserMeta> UserMeta { get; set; }
        public virtual IList<Post> Posts { get; set; }

        public string NiceUrl
        {
            get { return UrlTypes.GenerateUrl(UrlType.Member, this.Id.ToString()); }
        }
        /// <summary>
        /// 获取用户头像
        /// </summary>
        public string GetAvatar(int size = 48)
        {
            var avatar = string.Empty;
            if (this.Avatar.IsNullEmpty())
            {
                avatar = StringUtils.GetGravatarImage(this.Email, size);
                if (avatar.IsNullEmpty())
                {
                    avatar = this.Avatar;
                }
            }
            else
            {
                avatar = this.Avatar;
            }
            return avatar;
        }
        public bool IsAdmin
        {
            get
            {
                if (this.Role.Slug == AppConstants.AdminRoleName)
                    return true;
                return false;
            }
        }
    }
}
