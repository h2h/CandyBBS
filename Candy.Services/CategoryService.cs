using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;

namespace Candy.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IRoleService _roleService;
        public CategoryService(ICategoryRepository categoryRepository,IRoleService roleService)
        {
            this._roleService = roleService;
            this._categoryRepository = categoryRepository;
        }

        public IEnumerable<Category> GetAll()
        {
            return this._categoryRepository.GetAll();
        }

        public IEnumerable<Category> GetAllSubCategories(int parentId)
        {
            return this._categoryRepository.GetAllSubCategories(parentId);
        }

        public IEnumerable<Category> GetAllMainCategories(bool getWithExtendedData = false)
        {
            return this._categoryRepository.GetMainCategories(getWithExtendedData);
        }
        public IEnumerable<Category> GetAllowedCategories(Role role)
        {
            var filterCats = new List<Category>();
            var allCats = this._categoryRepository.GetAll().ToList();
            foreach (var category in allCats)
            {
                var permissionSet = this._roleService.GetPermissions(category,role);
                if (!permissionSet[AppConstants.PermissionDenyAccess].IsTicked)
                {
                    filterCats.Add(category);
                }
            }
            return filterCats;
        }
        public CategoryWithSubCategories GetBySlugWithSubCategories(string slug)
        {
            return this._categoryRepository.GetBySlugWithSubCategories(slug);
        }
        public void Add(Category category)
        {
            category = SanitizeCategory(category);
            category.Slug = ServiceHelpers.GenerateSlug(category.Name, x => this._categoryRepository.GetBySlugLike(ServiceHelpers.CreateUrl(category.Name)));
            this._categoryRepository.Add(category);
        }
        public void UpdateSlugFromName(Category category)
        {
            // Sanitize
            category = SanitizeCategory(category);

            category.Slug = ServiceHelpers.GenerateSlug(category.Name, x => this._categoryRepository.GetBySlugLike(category.Slug));
        }

        public Category Get(int id)
        {
            return this._categoryRepository.Get(id);
        }
        public Category Get(string slug)
        {
            return _categoryRepository.GetBySlug(StringUtils.GetSafeHtml(slug));
        }
        public void Save(Category category)
        {
            // Sanitize
            category = SanitizeCategory(category);

            this._categoryRepository.Update(category);
        }

        public void Delete(Category category)
        { 
        }

        public Category SanitizeCategory(Category category)
        {
            // Sanitize any strings in a category
            category.Description = StringUtils.GetSafeHtml(category.Description);
            category.Name = StringUtils.SafePlainText(category.Name);
            return category;
        }

    }
}
