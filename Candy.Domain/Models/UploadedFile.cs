using System;

namespace Candy.Domain.Models
{
    public class UploadedFile : Entity
    {
        public int Id { get; set; }
        public string Filename { get; set; }
        public virtual User User { get; set; }
        public virtual Post Post { get; set; }
        public DateTime DateCreated { get; set; }

        public string FriendlyFilename
        {
            get { return this.Filename.Split('_')[1]; }
        }
        public string FilePath
        {
            get { return string.Format("~/content/uploads/{0}/{1}", this.User.Id, Filename); }
        }
    }
}
