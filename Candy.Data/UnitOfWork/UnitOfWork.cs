using System;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using Candy.Domain.Interfaces.UnitOfWork;

namespace Candy.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDbTransaction _transaction;
        private readonly ObjectContext _objectContext;
        private readonly CandyContext _context;

        public UnitOfWork(CandyContext context)
        {
            this._context = context;

            this._objectContext = (this._context as IObjectContextAdapter).ObjectContext;

            if (this._objectContext.Connection.State != ConnectionState.Open)
            {
                this._objectContext.Connection.Open();
                this._transaction = this._objectContext.Connection.BeginTransaction();
            }
        }
        public void SaveChanges()
        {
            this._context.SaveChanges();
        }

        public void Commit()
        {
            this._context.SaveChanges();
            this._transaction.Commit();
        }

        public void Rollback()
        {
            this._transaction.Rollback();
            foreach (var entry in this._context.ChangeTracker.Entries())
            {
                switch (entry.State)
                {
                    case EntityState.Modified:
                        entry.State = EntityState.Unchanged;
                        break;
                    case EntityState.Added:
                        entry.State = EntityState.Detached;
                        break;
                    case EntityState.Deleted:
                        entry.State = EntityState.Unchanged;
                        break;
                }
            }
        }
        public void Dispose()
        {
            if (this._objectContext.Connection.State == ConnectionState.Open)
            {
                this._objectContext.Connection.Close();
            }
        }
    }
}
