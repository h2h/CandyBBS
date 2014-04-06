using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface ITopicTagRepository
    {
        IEnumerable<TopicTag> GetAll();
    }
}
