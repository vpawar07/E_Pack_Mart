using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
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
