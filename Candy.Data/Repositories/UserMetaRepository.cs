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
    public class UserMetaRepository : IUserMetaRepository
    {
        private readonly CandyContext _context;
        public UserMetaRepository(ICandyContext context)
        {
            _context = context as CandyContext;
        }
        public UserMeta Get(int id)
        {
            return _context.UserMeta.FirstOrDefault(a => a.Id == id);
        }
        public IList<UserMeta> GetAll()
        {
            return _context.UserMeta.ToList();
        }
        public IList<UserMeta> GetByUser(int userId)
        {
            return _context.UserMeta.Where(a => a.User.Id == userId).ToList();
        }
        public UserMeta Create(UserMeta model)
        {
            return _context.UserMeta.Add(model);
        }

    }
}
