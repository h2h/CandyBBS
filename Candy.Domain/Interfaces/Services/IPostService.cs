using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IPostService
    {
        Post SanitizePost(Post post);
        Post GetTopicStarterPost(int topicId);
        IEnumerable<Post> GetAll();
        IList<Post> GetByUser(int userId, int amountToTake);
        PagedList<Post> SearchPosts(int pageIndex, int pageSize, int amountToTake, string searchTerm);
        PagedList<Post> GetPagedPostsByTopic(int pageIndex, int pageSize, int amountToTake, int topicId);
        Post Add(Post post);
        Post Get(int postId);
        void SaveOrUpdate(Post post);
        bool Delete(Post post);
        int PostCount();
        Post AddNewPost(string postContent, Topic topic, User user, out PermissionSet permissions);
    }
}
