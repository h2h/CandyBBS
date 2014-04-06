using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candy.Domain.Models
{
    public class Log : Entity
    {
        public DateTime Date { get; set; }
        public string Module { get; set; }
        public string Method { get; set; }
        public string ErrorMessage { get; set; }
    }
}
