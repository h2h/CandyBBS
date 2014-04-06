using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ICategoryRepository
    {
        IList<Category> GetAll();
        IList<Category> GetAllSubCategories(int parentId);
        IList<Category> GetMainCategories(bool getWithExtendedData);
        CategoryWithSubCategories GetBySlugWithSubCategories(string slug);
        Category Add(Category newsItem);
        Category GetBySlug(string slug);
        IList<Category> GetBySlugLike(string slug);
        void Delete(Category category);
        Category Get(int id);
        void Update(Category item);
    }
}
