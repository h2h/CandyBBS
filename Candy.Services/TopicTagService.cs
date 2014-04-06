using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Domain.Models;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.Repositories;
using Candy.Utilities;

namespace Candy.Services
{
    public class TopicTagService : ITopicTagService
    {
        private readonly ITopicTagRepository _tagRepository;
        private readonly ITopicRepository _topicRepository;
        public TopicTagService(ITopicTagRepository tagRepository,ITopicRepository topicRepository)
        {
            this._tagRepository = tagRepository;
            this._topicRepository = topicRepository;
        }
        public void Add(string tags, Topic topic)
        {
            if (!string.IsNullOrEmpty(tags))
            {
                tags = StringUtils.SafePlainText(tags);
                var splitTags = tags.Replace(" ", "").Split(',');
                if (topic.Tags == null)
                {
                    topic.Tags = new List<TopicTag>();
                }
                var newTagNames = splitTags.Select(tag => tag);
                var newTags = new List<TopicTag>();
                var existingTags = new List<TopicTag>();

                foreach (var newTag in newTagNames.Distinct())
                {
                }
            }
        }
    }
}
