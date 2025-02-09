using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class Review
    {
        public int ReviewId { get; set; }
        public int UserId { get; set; }
        public int CompProdId { get; set; }
        public string? ReviewDesc { get; set; }
        public int Rating { get; set; }

        public virtual CompanyProduct? CompProd { get; set; } = null!;
        public virtual User? User { get; set; } = null!;
    }
}
