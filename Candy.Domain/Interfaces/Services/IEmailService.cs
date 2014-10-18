using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IEmailService
    {
        void SendMail(Email email);
        void SendMail(List<Email> email);
        string EmailTemplate(string to, string content, EmailType emailType);
        string ActivationTemplate(string to, string activationUrl);
    }
}
