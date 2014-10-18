using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IUserMetaService
    {
        /// <summary>
        /// 根据 Id 获取用户扩展信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        UserMeta Get(int id);
        /// <summary>
        /// 获取所有用户扩展信息
        /// </summary>
        /// <returns></returns>
        IList<UserMeta> GetAll();
        /// <summary>
        /// 根据用户 Id 获取该用户的所有扩展信息
        /// </summary>
        /// <param name="userId">用户 Id</param>
        /// <returns></returns>
        IList<UserMeta> GetByUser(int userId);
        /// <summary>
        /// 添加一条用户扩展信息
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        UserMeta Create(UserMeta model);
        /// <summary>
        /// 添加多条用户扩展信息
        /// </summary>
        /// <param name="list"></param>
        /// <param name="user"></param>
        /// <returns></returns>
        User Create(User user);
    }
}
