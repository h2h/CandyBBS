using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Utilities;

namespace Candy.Services
{
    public static class ServiceHelpers
    {
        public static string ReturnCacheKey(Guid categoryId, Guid roleId)
        {
            return string.Format("permissioncache-{0}-{1}", categoryId, roleId);
        }
        public static string CreateUrl(string name)
        {
            return StringUtils.CreateUrl(name, "-");
        }
        public static string GenerateSlug<T>(string arg, Func<string, IList<T>> predicate)
        {
            // url generator
            var slug = CreateUrl(arg);

            // Now check another entity doesn't have the same one
            var usersBySlug = predicate(arg);
            if (usersBySlug.Any())
            {
                // someone else has this, grab all like it and do a count, stick a suffix on
                slug = string.Concat(slug, "-", usersBySlug.Count());
            }

            return slug;
        }
        public static HashSet<T> ToHashSet<T>(this IEnumerable<T> source)
        {
            return new HashSet<T>(source);
        }
    }
}
