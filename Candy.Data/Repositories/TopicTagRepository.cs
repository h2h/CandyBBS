using System;
using System.Collections.Generic;
using System.Linq;
using Candy.Data;
using Candy.Domain.Models;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using System.Data.Entity;

namespace Candy.Data.Repositories
{
    public class TopicTagRepository : ITopicTagRepository
    {
        private readonly CandyContext _context;
        public TopicTagRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }
        public IEnumerable<TopicTag> GetAll()
        {
            return _context.TopicTag.ToList();
        }

        public Dictionary<TopicTag, int> GetPopularTags(int? amountToTake)
        {
            amountToTake = amountToTake ?? int.MaxValue;
            var tags = _context.TopicTag
                .Include(x => x.Topics.Count)
                .OrderByDescending(x => x.Topics.Count())
                .Take((int)amountToTake)
                .Select(s => new { TopicCount = s.Topics.Count(), Tag = s })
                .Where(x => x.TopicCount > 0)
                .OrderByDescending(s => s.TopicCount).ToList();

            return tags.ToDictionary(s => s.Tag, s => s.TopicCount);
        }

        public TopicTag GetTagName(string tag)
        {
            return _context.TopicTag.FirstOrDefault(x => x.Tag == tag);
        }

        public PagedList<TopicTag> GetPagedGroupedTags(int pageIndex, int pageSize)
        {
            var totalCount = _context.TopicTag.Count();

            // Get the topics using an efficient
            var results = _context.TopicTag
                                .OrderByDescending(x => x.Tag)
                                .Skip((pageIndex - 1) * pageSize)
                                .Take(pageSize)
                                .ToList();


            // Return a paged list
            return new PagedList<TopicTag>(results, pageIndex, pageSize, totalCount);
        }

        public PagedList<TopicTag> SearchPagedGroupedTags(string search, int pageIndex, int pageSize)
        {
            var totalCount = _context.TopicTag.Count(x => x.Tag.Contains(search));

            // Get the topics using an efficient
            var results = _context.TopicTag
                                .Where(x => x.Tag.Contains(search))
                                .OrderBy(x => x.Tag)
                                .Skip((pageIndex - 1) * pageSize)
                                .Take(pageSize)
                                .ToList();


            // Return a paged list
            return new PagedList<TopicTag>(results, pageIndex, pageSize, totalCount);
        }

        public IEnumerable<TopicTag> GetByTopic(Topic topic)
        {
            return _context.TopicTag
                .Where(x => x.Topics.Contains(topic))
                .ToList();
        }

        public TopicTag Add(TopicTag topicTag)
        {
            _context.TopicTag.Add(topicTag);
            return topicTag;
        }

        public TopicTag Get(int id)
        {
            return _context.TopicTag.FirstOrDefault(x => x.Id == id);
        }

        public void Delete(TopicTag item)
        {
            _context.TopicTag.Remove(item);
        }

        public void Update(TopicTag item)
        {
            // Check there's not an object with same identifier already in context
            if (_context.TopicTag.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            _context.Entry(item).State = EntityState.Modified;
        }
    }
}
