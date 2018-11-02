using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VerstaTest.Models;

namespace VerstaTest.Controllers
{
    [Route("api/[controller]")]
    public class DeliveryController : Controller
    {
        private IRepository repository;
        public DeliveryController (IRepository repo)
        {
            repository = repo;
        }

        // GET api/delivery
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return repository.GetOrders();
        }

        

        // POST api/delivery
        [HttpPost]
        public void Post([FromBody]Order order)
        {
            repository.AddOrder(order);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
