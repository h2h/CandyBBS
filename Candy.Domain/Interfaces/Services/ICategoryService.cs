using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetAll();
        IEnumerable<Category> GetAllMainCategories(bool getWithExtendedData = false);
        IEnumerable<Category> GetAllSubCategories(int parentId);
        IEnumerable<Category> GetAllowedCategories(Role role);
        CategoryWithSubCategories GetBySlugWithSubCategories(string slug);
        Category Get(int id);
        Category Get(string slug);
        void Delete(Category category);
        void Add(Category category);
        void Save(Category category);
        void UpdateSlugFromName(Category category);
        Category SanitizeCategory(Category category);
    }
}
