using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Practices.Unity;
using Unity.Mvc5;
using System.Web.Mvc;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.Services;
using Candy.Domain.Interfaces.UnitOfWork;
using Candy.Domain.Interfaces.Repositories;
using Candy.Data;
using Candy.Data.UnitOfWork;
using Candy.Data.Repositories;
using Candy.Services;

namespace Candy.IOC
{
    /// <summary>
    /// Bind the given interface in request scope
    /// </summary>
    public static class IOCExtensions
    {
        public static void BindInRequestScope<T1, T2>(this IUnityContainer container) where T2 : T1
        {
            container.RegisterType<T1, T2>(new HierarchicalLifetimeManager());
        }

        public static void BindInSingletonScope<T1, T2>(this IUnityContainer container) where T2 : T1
        {
            container.RegisterType<T1, T2>(new ContainerControlledLifetimeManager());
        }
    }
    public class UnityMVC
    {
        public static void Start()
        {
            var container = BuildUnityContainer();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            container.BindInRequestScope<ICandyContext, CandyContext>();
            container.BindInRequestScope<IUnitOfWorkManager, UnitOfWorkManager>();

            container.BindInRequestScope<ILoggingService, LoggingService>();
            container.BindInRequestScope<ILocalizationService, LocalizationService>();
            container.BindInRequestScope<IThemeService, ThemeService>();
            container.BindInRequestScope<ISettingsService, SettingsService>();
            container.BindInRequestScope<ICategoryService, CategoryService>();
            container.BindInRequestScope<ICategoryPermissionForRoleService, CategoryPermissionForRoleService>();
            container.BindInRequestScope<IPermissionService, PermissionService>();
            container.BindInRequestScope<IRoleService, RoleService>();
            container.BindInRequestScope<IUserService, UserService>();
            container.BindInRequestScope<IUserMetaService, UserMetaService>();
            container.BindInRequestScope<IPostService, PostService>();
            container.BindInRequestScope<ITopicService, TopicService>();
            container.BindInRequestScope<ITopicTagService, TopicTagService>();
            container.BindInRequestScope<IEmailService, EmailService>();

            container.BindInRequestScope<ISettingsRepository, SettingsRepository>();
            container.BindInRequestScope<ICategoryRepository, CategoryRepository>();
            container.BindInRequestScope<ICategoryPermissionForRoleRepository, CategoryPermissionForRoleRepository>();
            container.BindInRequestScope<IPermissionRepository, PermissionRepository>();
            container.BindInRequestScope<IRoleRepository, RoleRepository>();
            container.BindInRequestScope<IUserRepository, UserRepository>();
            container.BindInRequestScope<IUserMetaRepository, UserMetaRepository>();
            container.BindInRequestScope<IPostRepository, PostRepository>();
            container.BindInRequestScope<ITopicRepository, TopicRepository>();
            container.BindInRequestScope<ITopicTagRepository, TopicTagRepository>();

            return container;
        }
    }
}
