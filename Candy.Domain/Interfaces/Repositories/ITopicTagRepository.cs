using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ITopicTagRepository
    {
        IEnumerable<TopicTag> GetAll();
        TopicTag GetBySlug(string slug);
        IEnumerable<TopicTag> GetByTopic(Topic topic);
        PagedList<TopicTag> GetPagedGroupedTags(int pageIndex, int pageSize);
        PagedList<TopicTag> SearchPagedGroupedTags(string search, int pageIndex, int pageSize);
        Dictionary<TopicTag, int> GetPopularTags(int? amountToTake);
        TopicTag GetTagName(string tag);
        TopicTag Add(TopicTag item);
        TopicTag Get(int id);
        void Delete(TopicTag item);
        void Update(TopicTag item);
    }
}
