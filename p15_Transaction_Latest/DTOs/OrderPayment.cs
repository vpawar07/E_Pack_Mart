using p15_Transaction.Models;

namespace p15_Transaction.DTOs
{
    public class OrderPayment
    {
        public int UserId { get; set; }
        public decimal TotalPrice { get; set; }
        public List<Cart> CartObj { get; set; }
        public int PaymentMethodId { get; set; }
    }
}
