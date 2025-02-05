using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using E_PackMart.Models;
using System.Threading.Tasks;

namespace E_PackMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly p15_epackmartContext _context;

        public CartController(p15_epackmartContext context)
        {
            _context = context;
        }

        [HttpPost("AddToCart")]
        public async Task<IActionResult> AddToCart([FromBody] Cart cartItem)
        {
            if (cartItem == null || cartItem.CompProdId <= 0 || cartItem.UserId <= 0 || cartItem.Quantity <= 0)
            {
                return BadRequest("Invalid request data.");
            }

            var product = await _context.CompanyProducts.FindAsync(cartItem.CompProdId);
            if (product == null)
            {
                return NotFound("Product not found.");
            }

            var existingCartItem = await _context.Carts
                .FirstOrDefaultAsync(c => c.CompProdId == cartItem.CompProdId && c.UserId == cartItem.UserId);

            if (existingCartItem != null)
            {
                existingCartItem.Quantity += cartItem.Quantity;
            }
            else
            {
                _context.Carts.Add(cartItem);
            }

            await _context.SaveChangesAsync();
            return Ok(new { message = "Product added to cart successfully!" });
        }
    }
}

