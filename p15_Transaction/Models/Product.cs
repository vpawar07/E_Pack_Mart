using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class Product
    {
        public Product()
        {
            CompanyProducts = new HashSet<CompanyProduct>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; } = null!;
        public int CatId { get; set; }

        public virtual Category Cat { get; set; } = null!;
        public virtual ICollection<CompanyProduct> CompanyProducts { get; set; }
    }
}
