using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class UserMetaMapping : EntityTypeConfiguration<UserMeta>
    {
        public UserMetaMapping()
        {
            HasKey(x => x.Id);

            HasRequired(x => x.User).WithMany(x => x.UserMeta).Map(x => x.MapKey("UserId"));
        }
    }
}
