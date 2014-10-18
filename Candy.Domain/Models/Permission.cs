using System;

namespace Candy.Domain.Models
{
    public class Permission : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
    }
}
