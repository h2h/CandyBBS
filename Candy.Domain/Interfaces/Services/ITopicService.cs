﻿using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface ITopicService
    {
        IList<Topic> GetAll();
        Topic Add(Topic topic);
        Topic GetTopicBySlug(string slug);
        Topic Get(int topicId);
        Topic AddLastPost(Topic topic, string postContent);
        int TopicCount();
        IList<Topic> GetTodaysTopics(int amountToTake);
        PagedList<Topic> GetPagedTopics(int pageIndex, int pageSize, int amountToTake);
        PagedList<Topic> GetPagedTopicForPopular(int pageIndex, int pageSize, int amountToTake);
        PagedList<Topic> GetPagedTopicsByCategory(int pageIndex, int pageSize, int amountToTake, int categotyId);
        PagedList<Topic> GetPagedTopicsByUser(int pageIndex, int pageSize, int amountToTake, int userId);
    }
}
