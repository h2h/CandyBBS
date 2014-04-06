using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using EFCachingProvider;
using Candy.Domain.Interfaces;
using Candy.Domain.Models;
using Candy.Data.Mapping;

namespace Candy.Data
{
    public class CandyContext : DbContext, ICandyContext
    {
        public const string DatabaseConnectionName = "CandyContext";

        public DbSet<Settings> Settings { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<CategoryPermissionForRole> CategoryPermissionForRole { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<Permission> Permission { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Topic> Topic { get; set; }
        public DbSet<TopicTag> TopicTag { get; set; }
        public CandyContext()
        {
            Configuration.LazyLoadingEnabled = true;
        }

        //public CandyContext()
        //    : base(CreateCachingConnection(DatabaseConnectionName), true)
        //{
        //    Configuration.LazyLoadingEnabled = true;
        //}
        //private static EFCachingConnection CreateCachingConnection(string connectionName)
        //{
        //    var connection = System.Configuration.ConfigurationManager.ConnectionStrings[connectionName];
        //    var efCachingConnection = new EFCachingConnection
        //    {
        //        ConnectionString = "wrappedProvider=" + connection.ProviderName + ";" + connection.ConnectionString
        //    };
        //    return efCachingConnection;
        //}
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new SettingsMapping());
            modelBuilder.Configurations.Add(new CategoryMapping());
            modelBuilder.Configurations.Add(new UserMapping());
            modelBuilder.Configurations.Add(new TopicMapping());
            modelBuilder.Configurations.Add(new RoleMapping());
            modelBuilder.Configurations.Add(new PermissionMapping());
            modelBuilder.Configurations.Add(new CategoryPermissionForRoleMapping());
            modelBuilder.Configurations.Add(new UserMetaMapping());

            base.OnModelCreating(modelBuilder);
        }
    }
}
