using System.Web;

namespace Candy.Domain
{
    public enum UrlType
    {
        Category,
        Topic,
        Member,
        Tag
    }
    public class UrlTypes
    {
        public static string UrlTypeName(UrlType e)
        {
            switch (e)
            {
                case UrlType.Topic:
                    return AppConstants.TopicUrlIdentifier;
                case UrlType.Member:
                    return AppConstants.UserUrlIdentifier;
                case UrlType.Tag:
                    return AppConstants.TagsUrlIdentifier;
                default:
                    return AppConstants.CategoryUrlIdentifier;
            }
        }

        public static string GenerateUrl(UrlType e, string slug)
        {
            return VirtualPathUtility.ToAbsolute(string.Format("~/{0}/{1}", UrlTypeName(e), HttpUtility.HtmlDecode(slug)));
        }

        public static string GenerateFileUrl(string filePath)
        {
            return VirtualPathUtility.ToAbsolute(filePath);
        }
    }
}
