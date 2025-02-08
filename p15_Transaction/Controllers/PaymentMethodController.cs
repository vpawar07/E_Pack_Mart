using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using p15_Transaction.Models;

namespace p15_Transaction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        public static p15_epackmartContext Db;

        static PaymentMethodController()
        {
            Db = new p15_epackmartContext();
        }
        [HttpGet("GetPaymentMethod")]
        public IActionResult getPaymentMethod()
        {
            try
            {
                return Ok(Db.PaymentMethods.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
