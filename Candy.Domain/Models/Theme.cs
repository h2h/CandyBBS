using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candy.Domain.Models
{
    public class Theme :Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string AuthorUrl { get; set; }
        public string Version { get; set; }
        public string ThemeUrl { get; set; }
        public string Tags { get; set; }
        public string ThemeFolderName { get; set; }
        public string Screenshot { get; set; }
    }
}
