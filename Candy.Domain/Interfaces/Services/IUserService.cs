using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public enum LoginAttemptStatus
    {
        LoginSuccessful,
        UserNotFound,
        PasswordIncorrect,
        PasswordAttemptsExceeded,
        UserLockedOut,
        UserNotApproved,
    }
    public interface IUserService
    {
        User SanitizeUser(User User);
        LoginAttemptStatus ValidateUser(string userName, string password, int maxInvalidPasswordAttempts);
        LoginAttemptStatus LastLoginStatus { get; }
        User GetUser(string username);
        User GetUserByEmail(string email);
        User GetUserBySlug(string slug);
        IList<User> GetUsersById(List<int> ids);
        User GetUser(int id);
        bool ChangePassword(User user, string oldPassword, string newPassword);
        bool ResetPassword(User user, string newPassword);
        void UnlockUser(string username, bool resetPasswordAttempts);
        UserStatus CreateUser(User newUser);
        string ErrorCodeToString(UserStatus createStatus);
        User CreateEmptyUser();
        IList<User> GetAll();
        IList<User> SearchMembers(string username, int amount);
        IList<User> GetActiveMembers();
        void Save(User user);
        void ProfileUpdated(User user);
        bool Delete(User user);
        IList<User> GetLatestUsers(int amountToTake);
        int MemberCount();
    }
}
