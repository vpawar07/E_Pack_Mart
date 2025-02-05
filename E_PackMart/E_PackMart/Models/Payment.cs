using System;
using System.Collections.Generic;

namespace E_PackMart.Models
{
    public partial class Payment
    {
        public int PayId { get; set; }
        public int PayMethodId { get; set; }
        public int OrderId { get; set; }
        public bool PayStatus { get; set; }
        public DateTime PayDate { get; set; }

        public virtual POrder Order { get; set; } = null!;
        public virtual PaymentMethod PayMethod { get; set; } = null!;
    }
}
