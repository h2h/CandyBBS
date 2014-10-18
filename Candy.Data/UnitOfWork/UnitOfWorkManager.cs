using System.Data.Entity;
using Candy.Domain.Interfaces;
using Candy.Domain.Interfaces.UnitOfWork;

namespace Candy.Data.UnitOfWork
{
    public class UnitOfWorkManager : IUnitOfWorkManager
    {
        private bool _isDisposed;
        private readonly CandyContext _context;

        public UnitOfWorkManager(ICandyContext context)
        {
            Database.SetInitializer<CandyContext>(null);
            this._context = context as CandyContext;
        }
        public IUnitOfWork NewUnitOfWork()
        {
            return new UnitOfWork(this._context);
        }
        public void Dispose()
        {
            if (!this._isDisposed)
            {
                this._context.Dispose();
                this._isDisposed = true;
            }
        }
    }
}
