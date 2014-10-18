using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using System.IO;
using System.Web;
using System.Net.Mail;
using System.Net;

namespace Candy.Services
{
    public class EmailService : IEmailService
    {
        private readonly ILoggingService _loggingService;
        private readonly ISettingsService _settingsService;

        public EmailService(ILoggingService loggingService, ISettingsService settingsService)
        {
            _loggingService = loggingService;
            _settingsService = settingsService;
        }

        public string EmailTemplate(string to, string content,EmailType emailType)
        {
            string templatePath = string.Empty;
            if (emailType == EmailType.Activation)
            {
                templatePath = AppConstants.EmailActivationTemplatePath;
            }
            using (var sr = File.OpenText(HttpContext.Current.Server.MapPath(templatePath)))
            {
                var sb = sr.ReadToEnd();
                sr.Close();

                return string.Empty;
            }
        }

        public string ActivationTemplate(string to, string activationUrl)
        {
            using (var sr = File.OpenText(HttpContext.Current.Server.MapPath(AppConstants.EmailActivationTemplatePath)))
            {
                var sb = sr.ReadToEnd();
                sr.Close();
                var siteName = _settingsService.Get()[AppConstants.SiteName].Value;
                var siteUrl = _settingsService.Get()[AppConstants.SiteUrl].Value;
                sb = sb.Replace("{UserName}", to);
                sb = sb.Replace("{ActivationUrl}", string.Format("{0}/Activation/{1}", siteUrl, activationUrl));
                sb = sb.Replace("{SiteName}", siteName);
                sb = sb.Replace("{SiteUrl}", siteUrl);

                return sb;
            }
        }

        public void SendMail(Email email)
        {
            SendMail(new List<Email> { email });
        }
        public void SendMail(List<Email> email)
        {
            try
            {
                if (email != null && email.Count > 0)
                {
                    var smtpServer = _settingsService.Get()[AppConstants.SMTPServer].Value;
                    var smtpUserName = _settingsService.Get()[AppConstants.SMTPUsername].Value;
                    var smtpPassword = _settingsService.Get()[AppConstants.SMTPPassword].Value;
                    var smtpPort = _settingsService.Get()[AppConstants.SMTPPort].Value;

                    if (string.IsNullOrEmpty(smtpServer)) return;

                    var mySmtpClient = new SmtpClient(smtpServer);

                    if (!string.IsNullOrEmpty(smtpUserName) && !string.IsNullOrEmpty(smtpPassword))
                    {
                        mySmtpClient.Credentials = new NetworkCredential(smtpUserName, smtpPassword);
                    }

                    if (email.Count == 1)
                    {
                        var defaultEmail = email.FirstOrDefault();
                        if (defaultEmail != null)
                        {
                            var msg = new MailMessage
                            {
                                IsBodyHtml = true,
                                Body = defaultEmail.Body,
                                From = new MailAddress(defaultEmail.EmailFrom),
                                Subject = defaultEmail.Subject
                            };
                            msg.To.Add(defaultEmail.EmailTo);
                            mySmtpClient.Send(msg);
                        }
                    }
                    else
                    {
                        var count = 1;
                        foreach (var message in email)
                        {
                            if (count > 100)
                            {
                                _loggingService.Error("Unable to send more emails, over 100 limit - If you need to send more in one go, create a new email service with a dedicated provider");
                                break;
                            }
                            var msg = new MailMessage
                            {
                                IsBodyHtml = true,
                                Body = message.Body,
                                From = new MailAddress(message.EmailFrom),
                                Subject = message.Subject
                            };
                            msg.To.Add(message.EmailTo);
                            mySmtpClient.Send(msg);
                            count++;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _loggingService.Error(ex);
            }
        }
    }
}
