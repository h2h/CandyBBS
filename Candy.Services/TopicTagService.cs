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

        public IEnumerable<TopicTag> GetAll()
        {
            return this._tagRepository.GetAll();
        }

        public void DeleteByName(string tagName)
        {
            var tag = this._tagRepository.GetTagName(tagName);
            this._tagRepository.Delete(tag);
        }
        public IEnumerable<TopicTag> GetByTopic(Topic topic)
        {
            return this._tagRepository.GetByTopic(topic);
        }
        public PagedList<TopicTag> GetPagedGroupedTags(int pageIndex, int pageSize)
        {
            return _tagRepository.GetPagedGroupedTags(pageIndex, pageSize);
        }
        public PagedList<TopicTag> SearchPagedGroupedTags(string search, int pageIndex, int pageSize)
        {
            return _tagRepository.SearchPagedGroupedTags(StringUtils.SafePlainText(search), pageIndex, pageSize);
        }
        public TopicTag Add(TopicTag topicTag)
        {
            return _tagRepository.Add(topicTag);
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
                    var tag = this._tagRepository.GetTagName(newTag);
                    if (tag != null)
                    {
                        existingTags.Add(tag);
                        tag.Topics.Add(topic);
                    }
                    else
                    {
                        var nTag = new TopicTag
                        {
                            Tag = newTag,
                            Slug = ServiceHelpers.CreateUrl(newTag),
                            Topics = new List<Topic> { topic }
                        };
                        this._tagRepository.Add(nTag);
                        newTags.Add(nTag);
                    }
                }
                newTags.AddRange(existingTags);
                topic.Tags = newTags;
            }
        }
        public void DeleteByTopic(Topic topic)
        {
            var tags = topic.Tags;
            foreach (var topicTag in tags)
            {
                // If this tag has a count of topics greater than this one topic
                // then its tagged by more topics so don't delete
                if (topicTag.Topics.Count() <= 1)
                {
                    _tagRepository.Delete(topicTag);
                }
            }
        }
        public void DeleteTags(IEnumerable<TopicTag> tags)
        {
            foreach (var topicTag in tags)
            {
                _tagRepository.Delete(topicTag);
            }
        }
        public void UpdateTagNames(string tagName, string oldTagName)
        {
            // run new and old names through safe filter first
            var safeNewName = StringUtils.SafePlainText(tagName);
            var safeOldName = StringUtils.SafePlainText(oldTagName);

            // Now remove any spaces
            safeNewName = safeNewName.Replace(" ", "-");

            // get all the old tags by name
            var oldTag = _tagRepository.GetTagName(safeOldName);
            if (oldTag != null)
            {
                oldTag.Tag = safeNewName;
            }
        }
        public Dictionary<TopicTag, int> GetPopularTags(int? amount)
        {
            return _tagRepository.GetPopularTags(amount);
        }
    }
}
