using System.Data.Entity.ModelConfiguration;
using Candy.Domain.Models;

namespace Candy.Data.Mapping
{
    public class SettingsMapping : EntityTypeConfiguration<Settings>
    {
        public SettingsMapping()
        {
            HasKey(x => x.Id);
        }
    }
}
