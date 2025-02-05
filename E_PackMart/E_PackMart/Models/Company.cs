using System;
using System.Collections.Generic;

namespace E_PackMart.Models
{
    public partial class Company
    {
        public Company()
        {
            CompanyProducts = new HashSet<CompanyProduct>();
        }

        public int CompanyId { get; set; }
        public string MsmeCertNo { get; set; } = null!;
        public string GstNo { get; set; } = null!;
        public int? UserId { get; set; }

        public virtual User? User { get; set; }
        public virtual ICollection<CompanyProduct> CompanyProducts { get; set; }
    }
}
