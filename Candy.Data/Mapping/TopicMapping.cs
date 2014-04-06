using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class TopicMapping : EntityTypeConfiguration<Topic>
    {
        public TopicMapping()
        {
            HasKey(x => x.Id);

            HasRequired(t => t.Category).WithMany(t => t.Topics).Map(m => m.MapKey("Category_Id"));

            HasRequired(t => t.User).WithMany(t => t.Topics).Map(m => m.MapKey("User_Id"));

            HasMany(x => x.Posts).WithRequired(x => x.Topic).Map(x => x.MapKey("Topic_Id")).WillCascadeOnDelete();

            HasMany(t => t.Tags).WithMany(t => t.Topics)
                .Map(m =>
                {
                    m.ToTable("Topic_Tag");
                    m.MapLeftKey("TopicTag_Id");
                    m.MapRightKey("Topic_Id");
                });
        }
    }
}
