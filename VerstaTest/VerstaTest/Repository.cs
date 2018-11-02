using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VerstaTest.Models;

namespace VerstaTest
{
    public class Repository: IRepository
    {
        private ApplicationContext context;
        public Repository (ApplicationContext con)
        {
            context = con;
        }

        public IEnumerable<Order> GetOrders()
        {
            
                var orders = context.Orders.ToList();
                return orders;
            
        }

        public void AddOrder(Order order)
        { 
                context.Add(order);
                context.SaveChanges();
        }
    }
}
