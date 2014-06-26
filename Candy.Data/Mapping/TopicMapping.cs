using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class TopicMapping : EntityTypeConfiguration<Topic>
    {
        public TopicMapping()
        {
            HasKey(x => x.Id);

            HasRequired(t => t.Category).WithMany(c => c.Topics).Map(m => m.MapKey("Category_Id"));

            HasRequired(t => t.User).WithMany(c => c.Topics).Map(m => m.MapKey("User_Id"));

            HasMany(t => t.Posts).WithRequired(c => c.Topic).Map(m => m.MapKey("Topic_Id")).WillCascadeOnDelete();

            HasMany(t => t.Tags).WithMany(c => c.Topics)
                .Map(m =>
                {
                    m.ToTable("TagInTopic");
                    m.MapLeftKey("Topic_Id");
                    m.MapRightKey("TopicTag_Id");
                });
        }
    }
}
