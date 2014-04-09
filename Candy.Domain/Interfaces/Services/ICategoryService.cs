using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ICategoryService
    {
        /// <summary>
        /// 获取所有
        /// </summary>
        /// <returns></returns>
        IEnumerable<Category> GetAll();
        IEnumerable<Category> GetAllMainCategories(bool getWithExtendedData = false);
        IEnumerable<Category> GetAllSubCategories(int parentId);
        IEnumerable<Category> GetAllowedCategories(Role role);
        CategoryWithSubCategories GetBySlugWithSubCategories(string slug);
        /// <summary>
        /// 根据 ID 获取 Category
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Category Get(int id);
        /// <summary>
        /// 根据名字获取 Category
        /// </summary>
        /// <param name="slug"></param>
        /// <returns></returns>
        Category Get(string slug);
        void Delete(Category category);
        void Add(Category category);
        void Save(Category category);
        void UpdateSlugFromName(Category category);
        Category SanitizeCategory(Category category);
    }
}
