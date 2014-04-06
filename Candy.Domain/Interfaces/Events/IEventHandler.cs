using Candy.Domain.Events;

namespace Candy.Domain.Interfaces.Events
{
    public interface IEventHandler
    {
        void RegisterHandlers(EventManager theEventManager);
    }
}
