using System;
using System.Collections.Generic;

namespace p15_Transaction.Models
{
    public partial class State
    {
        public State()
        {
            Cities = new HashSet<City>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; } = null!;

        public virtual ICollection<City> Cities { get; set; }
    }
}
