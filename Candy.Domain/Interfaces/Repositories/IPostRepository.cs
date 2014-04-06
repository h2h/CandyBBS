using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll();
        Post GetTopicStarterPost(int topicId);
        IEnumerable<Post> GetAllWithTopics();
        IList<Post> GetByUser(int userId, int amountToTake);
        IList<Post> GetPostsByTopic(int topicId);
        PagedList<Post> GetPagedPostsByTopic(int pageIndex, int pageSize, int amountToTake, int topicId);
        IList<Post> GetPostsByUser(int userId);
        PagedList<Post> SearchPosts(int pageIndex, int pageSize, int amountToTake, string searchTerm);
        int PostCount();
        Post Add(Post item);
        Post Get(int id);
        void Delete(Post item);
        void Update(Post item);
    }
}
