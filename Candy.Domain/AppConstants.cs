using System;

namespace Candy.Domain
{
    public static class AppConstants
    {
        public const string CategoryUrlIdentifier = "c";
        public const string TopicUrlIdentifier = "t";
        public const string TagsUrlIdentifier = "tag";
        public const string UserUrlIdentifier = "u";

        public const string DefaultTheme = "Default";
        public const string CurrentTheme = "CurrentTheme";
        public const string MobileTheme = "Mobile";
        // View Bag Constants
        public const string MessageViewBagName = "Message";
        public const string DefaultCategoryViewBagName = "DefauleCategory";

        /// <summary>
        /// 管理员角色
        /// </summary>
        public const string AdminRoleName = "Admin";
        /// <summary>
        /// 访客角色， 未登录用户默认角色
        /// </summary>
        public const string GuestRoleName = "Guest";
        /// <summary>
        /// 版主角色
        /// </summary>
        public const string ModeratorRoleName = "Moderator";
        /// <summary>
        /// 只读
        /// </summary>
        public const string PermissionReadOnly = "read_only";
        /// <summary>
        /// 删除回复
        /// </summary>
        public const string PermissionDeletePosts = "delete_posts";
        /// <summary>
        /// 编辑回复
        /// </summary>
        public const string PermissionEditPosts = "edit_posts";
        /// <summary>
        /// 置顶主题
        /// </summary>
        public const string PermissionCreateStickyTopics = "sticky_topics";
        /// <summary>
        /// 拒绝访问
        /// </summary>
        public const string PermissionDenyAccess = "deny_access";
        /// <summary>
        /// 锁定主题
        /// </summary>
        public const string PermissionLockTopics = "lock_topics";
        /// <summary>
        /// 创建主题
        /// </summary>
        public const string PermissionCreateTopics = "create_topics";
        /// <summary>
        /// 添加附件
        /// </summary>
        public const string PermissionAttachFiles = "attach_files";

        public const string GoToInstaller = "GoToInstaller";

        public const string Version = "CandyBBSVersion";

        /// <summary>
        /// 主题
        /// </summary>
        public const string Theme = "cb_theme";
        /// <summary>
        /// 是否关闭论坛
        /// </summary>
        public const string IsClosed = "cb_closed";
        /// <summary>
        /// 创建新用户默认用户组
        /// </summary>
        public const string NewMemberStartingRole = "cb_newmemberstartingrole";
        /// <summary>
        /// 
        /// </summary>
        public const string EmailAdminOnNewMemberSignUp = "cb_emailadminonnewmembersignUp";
        /// <summary>
        /// 默认头像
        /// </summary>
        public const string DefaultUserAvatar = "cb_defaultavatar";
        /// <summary>
        /// 语言
        /// </summary>
        public const string LanguageCulture = "cb_language";
        /// <summary>
        /// 分页大小
        /// </summary>
        public const string PageSize = "cb_pagesize";
        /// <summary>
        /// 论坛名称
        /// </summary>
        public const string SiteName = "cb_sitename";
        /// <summary>
        /// 论坛网址
        /// </summary>
        public const string SiteUrl = "cb_siteurl";
        /// <summary>
        /// 管理员邮箱
        /// </summary>
        public const string AdminEmailAddress = "cb_adminemailaddress";
        /// <summary>
        /// 通知邮箱
        /// </summary>
        public const string NotificationReplyEmail = "cb_notificationreplyemail";
        /// <summary>
        /// SMTP 服务器
        /// </summary>
        public const string SMTPServer = "cb_smtpserver";
        /// <summary>
        /// SMTP 用户名
        /// </summary>
        public const string SMTPUsername = "cb_smtpusername";
        /// <summary>
        /// SMTP 密码
        /// </summary>
        public const string SMTPPassword = "cb_smtppassword";
        /// <summary>
        /// SMTP 端口
        /// </summary>
        public const string SMTPPort = "cb_smtpport";
        /// <summary>
        /// 每页主题数量
        /// </summary>
        public const string TopicsPerPage = "cb_topicsperpage";
        /// <summary>
        /// 每页回复数量
        /// </summary>
        public const string PostsPerPage = "cb_postsperpage";
        /// <summary>
        /// RSS 订阅
        /// </summary>
        public const string EnableRSSFeeds = "cb_enablerssfeeds";
        /// <summary>
        /// 用户注册
        /// </summary>
        public const string EnableRegister = "cb_enableregister";
        /// <summary>
        /// 添加主题获得积分
        /// </summary>
        public const string PointsAddedPerTopic = "cb_pointsaddedtopic";
        /// <summary>
        /// 添加回复获得积分
        /// </summary>
        public const string PointsAddedPerPost = "cb_pointsaddedpost";
    }
}
