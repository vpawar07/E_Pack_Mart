using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class OrderItem
    {
        public int OrderItemId { get; set; }
        public int OrderId { get; set; }
        public int CartId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        public virtual Cart Cart { get; set; } = null!;
        public virtual POrder Order { get; set; } = null!;
    }
}
