using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class RoleMapping : EntityTypeConfiguration<Role>
    {
        public RoleMapping()
        {
            HasKey(x => x.Id);

            HasMany(x => x.CategoryPermissionForRole)
                .WithOptional(x => x.Role)
                .Map(x => x.MapKey("Role_Id"))
                .WillCascadeOnDelete();
        }
    }
}
