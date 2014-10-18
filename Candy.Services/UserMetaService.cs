using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;

namespace Candy.Services
{
    public class UserMetaService : IUserMetaService
    {
        private readonly IUserMetaRepository _userMetaRepository;
        public UserMetaService(IUserMetaRepository userMetaRepository)
        {
            _userMetaRepository = userMetaRepository;
        }
        public UserMeta Get(int id)
        {
            return _userMetaRepository.Get(id);
        }
        public IList<UserMeta> GetAll()
        {
            return _userMetaRepository.GetAll();
        }
        public IList<UserMeta> GetByUser(int userId)
        {
            return _userMetaRepository.GetByUser(userId);
        }
        public UserMeta Create(UserMeta model)
        {
            return _userMetaRepository.Create(model);
        }
        public User Create(User user)
        {
            if (user != null && user.UserMeta.Any())
            {
                var userMetaList = GetByUser(user.Id);
                var newUserMetaList = new List<UserMeta>();
                foreach (var meta in user.UserMeta)
                {
                    if (userMetaList.Any(a => a.MetaKey == meta.MetaKey))
                    {
                        var oldMeta = userMetaList.Where(a => a.MetaKey == meta.MetaKey).FirstOrDefault();
                        oldMeta.MetaValue = meta.MetaValue;
                        newUserMetaList.Add(oldMeta);
                    }
                    else
                    {
                        newUserMetaList.Add(_userMetaRepository.Create(meta));
                    }
                }
                user.UserMeta = newUserMetaList;
            }
            return user;
        }
    }
}
