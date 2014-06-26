using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;


namespace Candy.Data.Mapping
{
    public class PostMapping : EntityTypeConfiguration<Post>
    {
        public PostMapping()
        {
            HasKey(x => x.Id);
        }
    }
}
