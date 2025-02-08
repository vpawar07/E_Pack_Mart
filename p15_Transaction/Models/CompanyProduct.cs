using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class CompanyProduct
    {
        public CompanyProduct()
        {
            Carts = new HashSet<Cart>();
            Reviews = new HashSet<Review>();
        }

        public int CompProdId { get; set; }
        public int ProductId { get; set; }
        public int CompanyId { get; set; }
        public float? ProdWeight { get; set; }
        public string? ProdSize { get; set; }
        public string? MaterialType { get; set; }
        public string? ProdDescription { get; set; }
        public int? Stock { get; set; }
        public decimal? ProdPrice { get; set; }
        public string? ProdShape { get; set; }
        public string? ProdDesignType { get; set; }
        public string? ProdColor { get; set; }
        public int? BoxCapacity { get; set; }
        public int? MaterialThickness { get; set; }
        public string? ClosureType { get; set; }
        public string? ProdImage { get; set; }

        public virtual Company? Company { get; set; } = null!;
        public virtual Product? Product { get; set; } = null!;
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}
