using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VerstaTest.Models;

namespace VerstaTest
{
    public class ApplicationContext: DbContext
    {
        //public ApplicationContext()
        //{
        //}

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        public DbSet<Order> Orders { get; set; }      
    }
}
