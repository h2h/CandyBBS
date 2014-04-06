using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface IUserRepository
    {
        User GetUser(string username);
        IList<User> SearchMembers(string username, int amount);
        IList<User> GetActiveMembers();
        User GetUserBySlug(string slug);
        User GetUserByEmail(string slug);
        IList<User> GetUserBySlugLike(string slug);
        IList<User> GetUsersById(List<int> ids);
        IList<User> GetAll();
        IList<User> GetLatestUsers(int amountToTake);
        int MemberCount();
        User Add(User item);
        User Get(int id);
        void Delete(User item);
        void Update(User item);
        PagedList<User> SearchMembers(string search, int pageIndex, int pageSize);
        PagedList<User> GetAll(int pageIndex, int pageSize);
    }
}
