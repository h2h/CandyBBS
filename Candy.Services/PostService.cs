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
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly ITopicRepository _topicRepository;
        private readonly IRoleService _roleService;
        private readonly ISettingsService _settingsService;
        public PostService(ISettingsService settingsService, IRoleService roleService, IPostRepository postRepository, ITopicRepository topicRepository)
        {
            this._postRepository = postRepository;
            this._topicRepository = topicRepository;
            this._roleService = roleService;
            this._settingsService = settingsService;
        }

        public Role UsersRole(User user)
        {
            return user == null ? this._roleService.GetRole(AppConstants.GuestRoleName) : user.Role;
        }
        public Post SanitizePost(Post post)
        {
            post.PostContent = StringUtils.GetSafeHtml(post.PostContent);
            return post;
        }
        public Post Get(int postId)
        {
            return this._postRepository.Get(postId);
        }
        public IEnumerable<Post> GetAll()
        {
            return this._postRepository.GetAll();
        }
        public IList<Post> GetByUser(int userId, int amountToTake)
        {
            return this._postRepository.GetByUser(userId, amountToTake);
        }
        public PagedList<Post> GetPagedPostsByTopic(int pageIndex, int pageSize, int amountToTake, int topicId)
        {
            return this._postRepository.GetPagedPostsByTopic(pageIndex, pageSize, amountToTake, topicId);
        }
        public Post GetTopicStarterPost(int topicId)
        {
            return this._postRepository.GetTopicStarterPost(topicId);
        }
        public int PostCount()
        {
            return this._postRepository.PostCount();
        }
        public void SaveOrUpdate(Post post)
        {
            this._postRepository.Update(post);
        }
        public PagedList<Post> SearchPosts(int pageIndex, int pageSize, int amountToTake, string searchTerm)
        {
            var search = StringUtils.SafePlainText(searchTerm);

            return this._postRepository.SearchPosts(pageIndex, pageSize, amountToTake, search);
        }
        public Post Add(Post post)
        {
            return new Post();
        }
        
        public Post AddNewPost(string postContent, Topic topic, User user, out PermissionSet permissions)
        {
            permissions = null;
            return new Post();
        }
        public bool Delete(Post post)
        {
            return false;
        }
        
    }
}
