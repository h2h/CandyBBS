using Candy.Domain.Interfaces.Services;

namespace Candy.Domain.Interfaces.Events
{
    public interface IEventManager
    {
        /// <summary>
        /// 使用反射来调用事件处理类
        /// </summary>
        /// <param name="loggingService"></param>
        void Initialize(ILoggingService loggingService);
    }
}
