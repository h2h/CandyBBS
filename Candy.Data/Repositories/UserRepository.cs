using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain;

namespace Candy.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly CandyContext _context;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="context"></param>
        public UserRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }

        /// <summary>
        /// Get a user by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public User GetUser(string username)
        {
            return this._context.User
                .Include(x => x.Role)
                .FirstOrDefault(name => name.UserName.ToLower() == username.ToLower());
        }

        public IList<User> SearchMembers(string username, int amount)
        {
            return this._context.User
                            .Where(x => x.UserName.ToUpper().Contains(username.ToUpper()))
                            .OrderBy(x => x.UserName)
                            .Take(amount)
                            .ToList();
        }
        public IList<User> GetActiveMembers()
        {
            return this._context.User.Where(x => x.ActivationKey == null).ToList();
        }

        public User GetUserBySlug(string slug)
        {
            return this._context.User
                .Include(x => x.Role)
                .FirstOrDefault(name => name.Slug == slug);

        }

        public User GetUserByEmail(string email)
        {
            return this._context.User
                .Include(x => x.Role)
                .FirstOrDefault(name => name.Email == email);
        }

        public IList<User> GetUserBySlugLike(string slug)
        {
            return this._context.User
                    .Include(x => x.Role)
                    .Where(name => name.Slug.ToUpper().Contains(slug.ToUpper()))
                    .ToList();
        }

        public IList<User> GetUsersById(List<int> ids)
        {
            return this._context.User
              .Where(x => ids.Contains(x.Id))
              .ToList();
        }

        public User Get(int id)
        {
            return this._context.User
                .Include(x => x.Role)
                .FirstOrDefault(x => x.Id == id);
        }

        public IList<User> GetLatestUsers(int amountToTake)
        {
            return this._context.User
              .OrderByDescending(x => x.CreateDate)
              .Take(amountToTake)
              .ToList();
        }

        public int MemberCount()
        {
            return this._context.User.Count();
        }

        public PagedList<User> GetAll(int pageIndex, int pageSize)
        {
            var totalCount = this._context.User.Count();
            var results = this._context.User
                                .OrderBy(x => x.UserName)
                                .Skip((pageIndex - 1) * pageSize)
                                .Take(pageSize)
                                .ToList();

            return new PagedList<User>(results, pageIndex, pageSize, totalCount);
        }

        public PagedList<User> SearchMembers(string search, int pageIndex, int pageSize)
        {
            var query = this._context.User
                .Where(x => x.UserName.ToUpper().Contains(search.ToUpper()) || x.Email.ToUpper().Contains(search.ToUpper()));

            var results = query
                .OrderBy(x => x.UserName)
                .Skip((pageIndex - 1)*pageSize)
                .Take(pageSize)
                .ToList();

            return new PagedList<User>(results, pageIndex, pageSize, query.Count());
        }

        /// <summary>
        /// Add a new user
        /// </summary>
        /// <param name="newUser"></param>
        public User Add(User newUser)
        {
            return this._context.User.Add(newUser);
        }

        /// <summary>
        /// Get members
        /// </summary>
        /// <returns></returns>
        public IList<User> GetAll()
        {
            return this._context.User.ToList();
        }

        /// <summary>
        /// Generic single entity delete
        /// </summary>
        /// <param name="user"></param>
        public void Delete(User user)
        {
            this._context.User.Remove(user);
        }

        public void Update(User item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.User.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified; 
        }
    }
}
