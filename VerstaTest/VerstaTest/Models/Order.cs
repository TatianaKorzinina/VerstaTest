using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VerstaTest.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        [Required]
        public string SenderCity { get; set; }
        [Required]
        public string SenderAddress { get; set; }
        [Required]
        public string RecipientCity { get; set; }
        [Required]
        public string RecipientAddress { get; set; }
        [Required]
        public int GoodsWeight { get; set; }
        [Required]
        public DateTime Date { get; set; }

    }
}
