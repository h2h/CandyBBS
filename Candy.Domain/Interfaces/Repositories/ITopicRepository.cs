using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ITopicRepository
    {
        IList<Topic> GetAll();
        Topic Add(Topic topic);
        Topic GetTopicBySlug(string slug);
        Topic Get(int topicId);
        int TopicCount();
        PagedList<Topic> GetPagedTopics(int pageIndex, int pageSize, int amountToTake);
        PagedList<Topic> GetPagedTopicsByCategory(int pageIndex, int pageSize, int amountToTake, int categoryId);
        IList<Topic> GetTodaysTopics(int amountToTake);
    }
}
