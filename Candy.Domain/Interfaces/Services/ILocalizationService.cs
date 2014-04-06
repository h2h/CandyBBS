using System;
using System.Collections.Generic;
using System.Globalization;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ILocalizationService
    {
        IList<CultureInfo> LanguagesAll { get; }
        IEnumerable<Language> Languages { get; }
        IEnumerable<Language> GetLanguageByLanguageCulture(string languageCulture);
        Language Get(string key);
    }
}
