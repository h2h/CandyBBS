﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Repositories;
using Candy.Domain.Models;
using Candy.Domain;

namespace Candy.Data.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly CandyContext _context;
        public PostRepository(ICandyContext context)
        {
            this._context = context as CandyContext;
        }
        public IEnumerable<Post> GetAll()
        {
            return this._context.Post;
        }
        public Post GetTopicStarterPost(int topicId)
        {
            string postType = PostType.topic.ToString();
            return this._context.Post.Where(a => a.PostType == postType && a.Topic.Id == topicId).FirstOrDefault();
        }
        public IEnumerable<Post> GetAllWithTopics()
        {
            return this._context.Post.Include(x => x.Topic);
        }
        public IList<Post> GetByUser(int userId, int amountToTake)
        {
            return this._context.Post
                .Where(x => x.User.Id == userId)
                .OrderByDescending(x => x.DateCreated)
                .Take(amountToTake)
                .ToList();
        }
        public IList<Post> GetPostsByTopic(int topicId)
        {
            return this._context.Post
                .Where(x => x.Topic.Id == topicId)
                .OrderByDescending(x => x.DateCreated)
                .ToList();
        }

        public PagedList<Post> GetPagedCommentsByTopic(int pageIndex, int pageSize, int amountToTake, int topicId)
        {
            var postType = PostType.comment.ToString();
            var total = this._context.Post.Count(x=>x.PostType == postType && x.Topic.Id == topicId);
            if(amountToTake < total)
                total = amountToTake;
            var results = this._context.Post
                .Include(x=>x.User)
                .Where(x => x.PostType == postType && x.Topic.Id == topicId)
                .OrderBy(x=>x.DateCreated)
                .Skip((pageIndex -1 )*pageSize)
                .Take(pageSize)
                .ToList();
            return new PagedList<Post>(results, pageIndex, pageSize, total);
        }

        public IList<Post> GetPostsByUser(int userId)
        {
            return this._context.Post
                .Where(x => x.User.Id == userId)
                .OrderByDescending(x => x.DateCreated)
                .ToList();
        }
        public PagedList<Post> SearchPosts(int pageIndex, int pageSize, int amountToTake, string searchTerm)
        {
            return null;
        }

        public Post Add(Post post)
        {
            return this._context.Post.Add(post);
        }

        public Post Get(int id)
        {
            return this._context.Post.FirstOrDefault(x => x.Id == id);
        }

        public void Delete(Post item)
        {
            this._context.Post.Remove(item);
        }

        public void Update(Post item)
        {
            // Check there's not an object with same identifier already in context
            if (this._context.Post.Local.Select(x => x.Id == item.Id).Any())
            {
                throw new ApplicationException("Object already exists in context - you do not need to call Update. Save occurs on Commit");
            }
            this._context.Entry(item).State = EntityState.Modified;
        }

        public int PostCount()
        {
            return GetAll().Count();
        }
    }
}
