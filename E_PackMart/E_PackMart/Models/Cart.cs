using System;
using System.Collections.Generic;

namespace E_PackMart.Models
{
    public partial class Cart
    {
        public Cart()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int CartId { get; set; }
        public int UserId { get; set; }
        public int CompProdId { get; set; }
        public int Quantity { get; set; }
        public bool CartStatus { get; set; }

        public virtual CompanyProduct CompProd { get; set; } = null!;
        public virtual User User { get; set; } = null!;
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
