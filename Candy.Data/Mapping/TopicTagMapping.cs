using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class TopicTagMapping : EntityTypeConfiguration<TopicTag>
    {
        public TopicTagMapping()
        {
            HasKey(x => x.Id);
        }
    }
}
