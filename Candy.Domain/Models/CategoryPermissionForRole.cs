using System;

namespace Candy.Domain.Models
{
    public class CategoryPermissionForRole : Entity
    {
        public int Id { get; set; }
        public virtual Permission Permission { get; set; }
        public virtual Category Category { get; set; }
        public virtual Role Role { get; set; }
        public bool IsTicked { get; set; }
    }
}
