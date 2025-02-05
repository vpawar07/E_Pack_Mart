using System;
using System.Collections.Generic;

namespace E_PackMart.Models
{
    public partial class PaymentMethod
    {
        public PaymentMethod()
        {
            Payments = new HashSet<Payment>();
        }

        public int PayMethodId { get; set; }
        public string PayMethodType { get; set; } = null!;

        public virtual ICollection<Payment> Payments { get; set; }
    }
}
