using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Candy.Domain.Models
{
    public class GenericMessage
    {
        public GenericMessage()
        {
            MessageType = GenericMessageType.info;
        }
        public string Message { get; set; }
        public GenericMessageType MessageType { get; set; }
    }
    public enum GenericMessageType
    {
        danger,
        warning,
        success,
        info
    }
}