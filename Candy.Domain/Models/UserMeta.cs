using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candy.Domain.Models
{
    public class UserMeta : Entity
    {
        public int Id { get; set; }
        public string MetaKey { get; set; }
        public string MetaValue { get; set; }
        public virtual User User { get; set; }
    }
}
