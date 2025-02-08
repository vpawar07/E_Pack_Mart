using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
            Companies = new HashSet<Company>();
            POrders = new HashSet<POrder>();
            Reviews = new HashSet<Review>();
        }

        public int UserId { get; set; }
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int CityId { get; set; }
        public string Address { get; set; } = null!;
        public string Pancard { get; set; } = null!;
        public int RoleId { get; set; }

        public virtual City City { get; set; } = null!;
        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
        public virtual ICollection<POrder> POrders { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}
