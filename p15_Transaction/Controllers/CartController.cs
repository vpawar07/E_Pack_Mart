using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using p15_Transaction.Models;
using Microsoft.EntityFrameworkCore;
using p15_Transaction.DTOs;

namespace p15_Transaction.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        public static p15_epackmartContext Db { get; }

        static CartController()
        {
            Db = new p15_epackmartContext();
        }

        [HttpGet]
        public IActionResult GetAllCart()
        {
            Console.WriteLine("Vrushabh Call");
            return Ok(Db.Carts.Include(c => c.User).Include(c => c.CompProd).ToList());
        }


        [HttpPost("AddToCart")]
        public IActionResult AddToCart([FromBody] Cart? evnt)
        {
            Console.Write("add cart called");
            try
            {
                if (evnt != null)
                {
                    Db.Carts.Add(evnt);
                    Db.SaveChanges();
                    return Ok(evnt);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getMyCart")]
        public IActionResult getMyCart([FromQuery] int userid)
        {
            Console.WriteLine(userid);
            try
            {
                return Ok(Db.Carts.Where(c => c.UserId == userid && c.CartStatus == true).Include(c => c.CompProd).ThenInclude(cp => cp.Product).ToList());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete("removeCartProduct/{id}")]
        public IActionResult removeCartProduct(int id)
        {
            try
            {
                var cartItem = Db.Carts.Find(id);
                if (cartItem == null)
                {
                    return NotFound(new { message = "Item not found" });
                }

                Db.Carts.Remove(cartItem);
                Db.SaveChanges();

                return Ok(new { message = "Item removed successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public IActionResult paymentOrder(OrderPayment obj)
        {
            Console.WriteLine("Payment called");
            try
            {

                POrder porder = new POrder();
                porder.User = Db.Users.Find(obj.UserId);
                porder.TotalPrice = obj.TotalPrice;
                porder.OrderDate = DateTime.UtcNow;
                porder.OrderStatus = true;
                Db.POrders.Add(porder);
                Db.SaveChanges();

                foreach (var item in obj.CartObj)
                {
                    OrderItem orderItem = new OrderItem();
                    orderItem.OrderId = porder.OrderId;
                    orderItem.CartId = item.CartId;
                    orderItem.Quantity = item.Quantity;
                    orderItem.Price = orderItem.Quantity * (decimal)(item.CompProd?.ProdPrice ?? 0);
                    Db.OrderItems.Add(orderItem);

                    //update cart table 
                    var cart = Db.Carts.Find(item.CartId);
                    cart.CartStatus = false;

                    //update stock of product
                    var compProd = Db.CompanyProducts.Find(item.CompProdId);
                    compProd.Stock -= item.Quantity;
                }

                Payment payment = new Payment();
                payment.PayMethodId = obj.PaymentMethodId;
                payment.OrderId = porder.OrderId;
                payment.PayStatus = true;
                payment.PayDate = DateTime.UtcNow;
                Db.Payments.Add(payment);


                Db.SaveChanges();

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
