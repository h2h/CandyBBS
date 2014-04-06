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

            HasMany(x => x.Roles)
                .WithMany(x => x.Users)
                .Map(m =>
                {
                    m.ToTable("UsersInRoles");
                    m.MapLeftKey("User_Id");
                    m.MapRightKey("Role_Id");
                });
        }
    }
}
