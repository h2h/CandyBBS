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
        private readonly IPostRepository _postRepository;
        public TopicService(ITopicRepository topicRepository,IPostRepository postRepository)
        {
            this._topicRepository = topicRepository;
            this._postRepository = postRepository;
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
        public PagedList<Topic> GetPagedTopics(int pageIndex, int pageSize, int amountToTake)
        {
            return this._topicRepository.GetPagedTopics(pageIndex, pageSize, amountToTake);
        }
        public PagedList<Topic> GetPagedTopicsByCategory(int pageIndex, int pageSize, int amountToTake, int categoryId)
        {
            return this._topicRepository.GetPagedTopicsByCategory(pageIndex, pageSize, amountToTake, categoryId);
        }
        public PagedList<Topic> GetPagedTopicForPopular(int pageIndex, int pageSize, int amountToTake)
        {
            return null;
        }
        public IList<Topic> GetTodaysTopics(int amountToTake)
        {
            return this._topicRepository.GetTodaysTopics(amountToTake);
        }

        public Topic AddLastPost(Topic topic, string postContent)
        {
            topic = SanitizeTopic(topic);

            var post = new Post
            {
                DateCreated = DateTime.UtcNow,
                DateEdited = DateTime.UtcNow,
                PostContent = StringUtils.GetSafeHtml(postContent),
                User = topic.User,
                Topic = topic,
                IpAddress = StringUtils.GetUsersIpAddress(),
                PostType = "topic"
            };

            this._postRepository.Add(post);
            topic.Posts.Add(post);
            return topic;
        }
        public PagedList<Topic> GetPagedTopicsByUser(int pageIndex, int pageSize, int amountToTake, int userId)
        {
            return _topicRepository.GetPagedTopicsByUser(pageIndex, pageSize, amountToTake, userId);
        }
    }
}
