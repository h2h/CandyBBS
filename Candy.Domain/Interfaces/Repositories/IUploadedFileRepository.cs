using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Repositories
{
    public interface IUploadedFileRepository
    {
        UploadedFile Add(UploadedFile uploadedFile);
        void Delete(UploadedFile uploadedFile);
        IList<UploadedFile> GetAll();
        IList<UploadedFile> GetAllByPost(int postId);
        IList<UploadedFile> GetAllByUser(int userId);
        UploadedFile Get(int id);   
    }
}
