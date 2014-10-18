using System;
using System.Collections.Generic;
using Candy.Domain.Models;

namespace Candy.Domain.Interfaces.Services
{
    public interface IUploadedFileService
    {
        UploadedFile Add(UploadedFile uploadedFile);
        void Delete(UploadedFile uploadedFile);
        IList<UploadedFile> GetAll();
        IList<UploadedFile> GetAllByPost(int postId);
        IList<UploadedFile> GetAllByUser(int userId);
        UploadedFile Get(int id);
    }
}
