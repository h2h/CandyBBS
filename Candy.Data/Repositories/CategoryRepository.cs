using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using System.Data.Entity;

namespace Candy.Data.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly CandyContext _context;

        public CategoryRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }

        public IList<Category> GetAll()
        {
            return this._context.Category
                .OrderBy(x => x.SortOrder)
                .ToList();
        }
        public Category Get(int id)
        {
            return this._context.Category.FirstOrDefault(x => x.Id == id);
        }
        public void Update(Category item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.Category.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified;
        }
        public IList<Category> GetAllSubCategories(int parentId)
        {
            return this._context.Category
                    .Where(x => x.ParentCategory.Id == parentId)
                    .OrderBy(x => x.SortOrder)
                    .ToList();
        }
        public CategoryWithSubCategories GetBySlugWithSubCategories(string slug)
        {
            var cat = (from category in this._context.Category
                       where category.Slug == slug
                       select new CategoryWithSubCategories
                       {
                           Category = category,
                           SubCategories = (from cats in this._context.Category
                                            where cats.ParentCategory.Id == category.Id
                                            select cats)
                       }).FirstOrDefault();

            return cat;
        }
        public IList<Category> GetMainCategories(bool getWithExtendedData)
        {
            var categories = this._context.Category
                                .Where(cat => cat.ParentCategory.Id == 0);

            if (getWithExtendedData)
            {
                categories = categories.Include(x => x.Topics.Select(p => p.Posts));
            }

            return categories.Where(cat => cat.ParentCategory.Id == 0)
                     .OrderBy(x => x.SortOrder)
                     .ToList();
        }
        public Category Add(Category category)
        {
            this._context.Category.Add(category);
            return category;
        }
        public Category GetBySlug(string slug)
        {
            return this._context.Category.FirstOrDefault(x => x.Slug == slug);
        }
        public IList<Category> GetBySlugLike(string slug)
        {
            return this._context.Category
                    .Where(x => x.Slug.Contains(slug))
                    .ToList();
        }
        public void Delete(Category category)
        {
            this._context.Category.Remove(category);
        }
    }
}
