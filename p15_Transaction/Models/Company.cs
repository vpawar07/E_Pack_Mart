using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
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
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual ICollection<CompanyProduct> CompanyProducts { get; set; }
    }
}
