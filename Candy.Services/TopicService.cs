using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;

namespace Candy.Services
{
    public class TopicService : ITopicService
    {
        private readonly ITopicRepository _topicRepository;
        public TopicService(ITopicRepository topicRepository)
        {
            this._topicRepository = topicRepository;
        }
        public Topic SanitizeTopic(Topic topic)
        {
            topic.Name = StringUtils.SafePlainText(topic.Name);
            return topic;
        }
        public IList<Topic> GetAll()
        {
            return this._topicRepository.GetAll();
        }
        public Topic Add(Topic topic)
        {
            topic = SanitizeTopic(topic);
            topic.CreateDate = DateTime.UtcNow;
            //此处应有修改
            topic.Slug = topic.Name;
            return this._topicRepository.Add(topic);
        }
        public Topic GetTopicBySlug(string slug)
        {
            return this._topicRepository.GetTopicBySlug(slug);
        }
        public Topic Get(int topicId)
        {
            return this._topicRepository.Get(topicId);
        }
        public int TopicCount()
        {
            return this._topicRepository.TopicCount();
        }
        public PagedList<Topic> GetPagedTopicsByCategory(int pageIndex, int pageSize, int amountToTake, int categoryId)
        {
            return this._topicRepository.GetPagedTopicsByCategory(pageIndex, pageSize, amountToTake, categoryId);
        }

        public IList<Topic> GetTodaysTopics(int amountToTake)
        {
            return this._topicRepository.GetTodaysTopics(amountToTake);
        }
    }
}
