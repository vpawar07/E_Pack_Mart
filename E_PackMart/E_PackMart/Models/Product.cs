using System;
using System.Collections.Generic;

namespace E_PackMart.Models
{
    public partial class Product
    {
        public Product()
        {
            CompanyProducts = new HashSet<CompanyProduct>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; } = null!;
        public int? CatId { get; set; }

        public virtual Category? Cat { get; set; }
        public virtual ICollection<CompanyProduct> CompanyProducts { get; set; }
    }
}
