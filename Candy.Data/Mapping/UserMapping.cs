using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class UserMapping : EntityTypeConfiguration<User>
    {
        public UserMapping()
        {
            HasKey(x => x.Id);

            HasMany(x=>x.UserMeta).WithRequired(x=>x.User);

            HasRequired(t => t.Role).WithMany(t => t.Users).Map(m => m.MapKey("Role_Id"));
        }
    }
}
