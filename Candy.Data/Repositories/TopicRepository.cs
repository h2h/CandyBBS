using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain.Models;

namespace Candy.Data.Repositories
{
    public class TopicRepository : ITopicRepository
    {
        private readonly CandyContext _context;
        public TopicRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }
        public IList<Topic> GetAll()
        {
            return this._context.Topic.ToList();
        }
        public Topic Add(Topic topic)
        {
            this._context.Topic.Add(topic);
            return topic;
        }
        public Topic GetTopicBySlug(string slug)
        {
            return this._context.Topic.Where(x => x.Slug == slug).FirstOrDefault();
        }
        public Topic Get(int topicId)
        {
            return this._context.Topic.Where(x => x.Id == topicId).FirstOrDefault();
        }
        public int TopicCount()
        {
            return this._context.Topic.Count();
        }
        public PagedList<Topic> GetPagedTopicsByCategory(int pageIndex, int pageSize, int amountToTake, int categoryId)
        {
            var total = this._context.Topic.Count(x => x.Category.Id == categoryId);
            if (amountToTake < total)
            {
                total = amountToTake;
            }
            var results = this._context.Topic
                .Include(x => x.Category)
                .Include(x => x.Posts)
                .Where(x => x.Category.Id == categoryId)
                .OrderByDescending(x => x.IsSticky)
                .ThenByDescending(x => x.CreateDate)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new PagedList<Topic>(results, pageIndex, pageSize, total);
        }
        public PagedList<Topic> GetPagedTopics(int pageIndex, int pageSize, int amountToTake)
        {
            var total = this._context.Topic.Count();
            if (amountToTake < total)
            {
                total = amountToTake;
            }
            var results = this._context.Topic
                .Include(x => x.Category)
                .Include(x => x.Posts)
                .OrderByDescending(x => x.IsSticky)
                .ThenByDescending(x => x.CreateDate)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();
            return new PagedList<Topic>(results, pageIndex, pageSize, total);
        }
        public IList<Topic> GetTodaysTopics(int amountToTake)
        {
            return this._context.Topic.Include(x => x.User)
                .Where(x => x.CreateDate >= DateTime.Today)
                .OrderByDescending(x => x.CreateDate)
                .Take(amountToTake)
                .ToList();
        }
        public PagedList<Topic> GetPagedTopicsByUser(int pageIndex, int pageSize, int amountToTake, int userId)
        {
            var total = this._context.Topic.Where(a=>a.User.Id == userId).Count();
            var result =  this._context.Topic
                .Where(a=>a.User.Id == userId)
                .OrderByDescending(a => a.CreateDate)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new PagedList<Topic>(result, pageIndex, pageSize, total);
        }
    }
}
