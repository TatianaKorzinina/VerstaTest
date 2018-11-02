using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VerstaTest.Models;

namespace VerstaTest
{
    public interface IRepository
    {
        IEnumerable<Order> GetOrders();
        void AddOrder(Order order);

    }
}
