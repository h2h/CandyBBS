using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ITopicTagService
    {
        IEnumerable<TopicTag> GetAll();
        TopicTag GetBySlug(string slug);
        void DeleteByName(string tagName);
        IEnumerable<TopicTag> GetByTopic(Topic topic);
        TopicTag Add(TopicTag topic);
        void Add(string tags, Topic topic);
        void DeleteByTopic(Topic topic);
        void DeleteTags(IEnumerable<TopicTag> tags);
        void UpdateTagNames(string tagName, string oldTagName);
        Dictionary<TopicTag, int> GetPopularTags(int? amount);
        PagedList<TopicTag> GetPagedGroupedTags(int pageIndex, int pageSize);
        PagedList<TopicTag> SearchPagedGroupedTags(string search, int pageIndex, int pageSize);
    }
}
