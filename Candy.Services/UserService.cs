using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Data.SqlTypes;
using System.Web;
using System.Web.Security;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;

namespace Candy.Services
{
    public class UserService : IUserService
    {
        private const int SaltSize = 24;
        private readonly IUserRepository _userRepository;
        private readonly ISettingsRepository _settingsRepository;
        private readonly ILoggingService _loggingService;
        private readonly IRoleRepository _roleRepository;
        private readonly IEmailService _emailService;
        private readonly ILocalizationService _localizationService;

        private LoginAttemptStatus _lastLoginStatus = LoginAttemptStatus.LoginSuccessful;

        public UserService(IUserRepository userRepository, 
            ISettingsRepository settingsRepository, 
            ILoggingService loggingService, 
            IRoleRepository roleRepository,
            IEmailService emailService,
            ILocalizationService localizationService)
        {
            this._userRepository = userRepository;
            this._settingsRepository = settingsRepository;
            this._loggingService = loggingService;
            this._roleRepository = roleRepository;
            this._emailService = emailService;
            this._localizationService = localizationService;
        }

        public string ErrorCodeToString(UserStatus createStatus)
        {
            switch (createStatus)
            {
                case UserStatus.DuplicateEmail:
                    return "邮箱已存在";
                case UserStatus.DuplicateUserName:
                    return "用户名已存在";
                case UserStatus.InvalidAnswer:
                    return "无效的答案";
                case UserStatus.InvalidEmail:
                    return "无效的邮箱";
                case UserStatus.InvalidPassword:
                    return "无效的密码";
                case UserStatus.InvalidQuestion:
                    return "无效的问题";
                case UserStatus.InvalidUserName:
                    return "无效的用户名";
                case UserStatus.ProviderError:
                    return "提供程序错误";
                case UserStatus.Success:
                    return "添加用户成功";
                case UserStatus.UserRejected:
                    return "用户拒绝";
                default:
                    return "未知错误";
            }
        }
        public User SanitizeUser(User User)
        {
            User.Avatar = StringUtils.SafePlainText(User.Avatar);
            User.Email = StringUtils.SafePlainText(User.Email);
            User.Password = StringUtils.SafePlainText(User.Password);
            User.PasswordAnswer = StringUtils.SafePlainText(User.PasswordAnswer);
            User.PasswordQuestion = StringUtils.SafePlainText(User.PasswordQuestion);
            User.Signature = StringUtils.GetSafeHtml(User.Signature);
            User.UserName = StringUtils.SafePlainText(User.UserName);
            User.Website = StringUtils.SafePlainText(User.Website);
            return User;
        }
        public LoginAttemptStatus ValidateUser(string userName, string password, int maxInvalidPasswordAttempts)
        {
            userName = StringUtils.SafePlainText(userName);
            password = StringUtils.SafePlainText(password);

            this._lastLoginStatus = LoginAttemptStatus.LoginSuccessful;
            var user = this._userRepository.GetUser(userName);
            if (user == null)
            {
                this._lastLoginStatus = LoginAttemptStatus.UserNotFound;
                return this._lastLoginStatus;
            }

            if (user.Password == GeneratePasswordHash(password))
            {
                this._lastLoginStatus = LoginAttemptStatus.LoginSuccessful;
            }
            else
            {
                this._lastLoginStatus = LoginAttemptStatus.PasswordIncorrect;
            }

            if (!user.ActivationKey.IsNullEmpty())
            {
                this._lastLoginStatus = LoginAttemptStatus.UserNotApproved;
            }

            return this._lastLoginStatus;
        }


        /// <summary>
        /// Generate a hash for a password, adding a salt value
        /// </summary>
        /// <param name="plainText"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        private static string GeneratePasswordHash(string plainText)
        {
            return BitConverter.ToString(
                new System.Security.Cryptography.MD5CryptoServiceProvider().ComputeHash(
                System.Text.Encoding.Default.GetBytes(plainText))).Replace("-", "");
        }

        /// <summary>
        /// Return last login status
        /// </summary>
        public LoginAttemptStatus LastLoginStatus
        {
            get { return this._lastLoginStatus; }
        }

        /// <summary>
        /// Creates a new, unsaved user, with default (empty) values
        /// </summary>
        /// <returns></returns>
        public User CreateEmptyUser()
        {
            var now = DateTime.UtcNow;

            return new User
                       {
                           UserName = string.Empty,
                           Password = string.Empty,
                           Email = string.Empty,
                           PasswordQuestion = string.Empty,
                           PasswordAnswer = string.Empty,
                           CreateDate = now,
                           LastLoginDate = (DateTime)SqlDateTime.MinValue,
                       };
        }

        /// <summary>
        /// Create new user
        /// </summary>
        /// <param name="newUser"></param>
        /// <returns></returns>
        public UserStatus CreateUser(User model)
        {
            model = SanitizeUser(model);

            var status = UserStatus.Success;

            if (string.IsNullOrEmpty(model.UserName))
            {
                status = UserStatus.InvalidUserName;
            }
            if (this._userRepository.GetUser(model.UserName) != null)
            {
                status = UserStatus.DuplicateUserName;
            }
            if (this._userRepository.GetUserByEmail(model.Email) != null)
            {
                status = UserStatus.DuplicateEmail;
            }
            if (string.IsNullOrEmpty(model.Password))
            {
                status = UserStatus.InvalidPassword;
            }
            if (status == UserStatus.Success)
            {
                model.Password = GeneratePasswordHash(model.Password);
                var newMemberStartingRole = int.Parse(this._settingsRepository.Get(AppConstants.NewMemberStartingRole).Value);
                model.Role = this._roleRepository.Get(newMemberStartingRole);
                model.Slug = model.UserName;
                try
                {
                    if (this._settingsRepository.Get(AppConstants.EmailAdminOnNewMemberSignUp).Value.Equals("true"))
                    {
                        model.ActivationKey = GeneratePasswordHash(model.UserName).Substring(8, 8);
                        var result = this._userRepository.Add(model);
                        // 发送邮件给管理员，
                        // 发送激活信息给注册用户
                        var email = new Email 
                        {
                            Body = _emailService.ActivationTemplate(model.UserName,model.ActivationKey),
                            EmailFrom = _settingsRepository.Get(AppConstants.NotificationReplyEmail).Value,
                            EmailTo = model.Email,
                            NameTo = model.UserName,
                            Subject = string.Format("{0}{1}",_settingsRepository.Get(AppConstants.SiteName).Value, _localizationService.Get("账号激活邮件"))
                        };
                        _emailService.SendMail(email);
                    }
                    else
                    {
                        this._userRepository.Add(model);
                        model.ActivationKey = string.Empty;
                    }
                }catch(Exception)
                {
                    status = UserStatus.UserRejected;
                }
            }
            return UserStatus.Success;
        }

        /// <summary>
        /// Get a user by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public User GetUser(string username)
        {            
            var member = this._userRepository.GetUser(username);

            // Do a check to log out the user if they are logged in and have been deleted
            if (member == null && HttpContext.Current.User.Identity.Name == username)
            {
                // Member is null so doesn't exist, yet they are logged in with that username - Log them out
                FormsAuthentication.SignOut();
            }

            return member;
        }

        /// <summary>
        /// Get a user by email address
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public User GetUserByEmail(string email)
        {
            email = StringUtils.SafePlainText(email);
            return this._userRepository.GetUserByEmail(email);
        }

        /// <summary>
        /// Get a user by slug
        /// </summary>
        /// <param name="slug"></param>
        /// <returns></returns>
        public User GetUserBySlug(string slug)
        {
            slug = StringUtils.GetSafeHtml(slug);
            return this._userRepository.GetUserBySlug(slug);
        }

        /// <summary>
        /// Get users from a list of Id's
        /// </summary>
        /// <param name="guids"></param>
        /// <returns></returns>
        public IList<User> GetUsersById(List<int> ids)
        {
            return this._userRepository.GetUsersById(ids);
        }

        /// <summary>
        /// Change the user's password
        /// </summary>
        /// <param name="user"> </param>
        /// <param name="oldPassword"></param>
        /// <param name="newPassword"></param>
        /// <returns></returns>
        public bool ChangePassword(User user, string oldPassword, string newPassword)
        {
            return true;
        }

        /// <summary>
        /// Reset a users password
        /// </summary>
        /// <param name="user"></param>
        /// <param name="newPassword"> </param>
        /// <returns></returns>
        public bool ResetPassword(User user, string newPassword)
        {
            return true;
        }

        /// <summary>
        /// Get all members
        /// </summary>
        /// <returns></returns>
        public IList<User> GetAll()
        {
            return this._userRepository.GetAll();
        }

        public PagedList<User> GetAll(int pageIndex, int pageSize)
        {
            return this._userRepository.GetAll(pageIndex, pageSize);
        }

        public PagedList<User> SearchMembers(string search, int pageIndex, int pageSize)
        {
            return this._userRepository.SearchMembers(StringUtils.SafePlainText(search), pageIndex, pageSize);
        }

        public IList<User> SearchMembers(string username, int amount)
        {
            return this._userRepository.SearchMembers(StringUtils.SafePlainText(username), amount);
        }

        public IList<User> GetActiveMembers()
        {
            return this._userRepository.GetActiveMembers();
        }

        /// <summary>
        /// Get user by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public User GetUser(int id)
        {
            return this._userRepository.Get(id);
        }

        /// <summary>
        /// Delete a member
        /// </summary>
        /// <param name="user"></param>
        public bool Delete(User user)
        {
            return false;
        }

        public IList<User> GetLatestUsers(int amountToTake)
        {
            return this._userRepository.GetLatestUsers(amountToTake);
        }

        public int MemberCount()
        {
            return this._userRepository.MemberCount();
        }

        /// <summary>
        /// Save user (does NOT update password data)
        /// </summary>
        /// <param name="user"></param>
        public void Save(User user)
        {

            user = SanitizeUser(user);

            this._userRepository.Update(user);
        }

        /// <summary>
        /// Save user (does NOT update password data)
        /// </summary>
        /// <param name="user"></param>
        public void ProfileUpdated(User user)
        {
        }

        /// <summary>
        /// Unlock a user
        /// </summary>
        /// <param name="username"></param>
        /// <param name="resetPasswordAttempts">If true, also reset password attempts to zero</param>
        public void UnlockUser(string username, bool resetPasswordAttempts)
        {
        }
        public User GetByActivation(string key)
        {
            return _userRepository.GetByActivation(key);
        }
    }
}
