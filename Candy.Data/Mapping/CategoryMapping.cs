using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class CategoryMapping : EntityTypeConfiguration<Category>
    {
        public CategoryMapping()
        {
            HasKey(x => x.Id);

            HasOptional(x => x.ParentCategory).WithMany().Map(x => x.MapKey("Category_Id"));

            HasMany(x => x.Topics).WithRequired(x => x.Category);
        }
    }
}
