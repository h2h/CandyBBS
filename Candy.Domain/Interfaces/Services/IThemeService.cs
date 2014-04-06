using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IThemeService
    {
        IEnumerable<Theme> Themes { get;}
        Theme Get(string themeFolderName);
        bool Delete(string themeFolderName);
    }
}
