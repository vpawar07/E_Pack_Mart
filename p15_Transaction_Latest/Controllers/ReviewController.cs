using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using p15_Transaction.Models;

namespace p15_Transaction.Controllers
{
    [Route("api/transaction/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {

        public static p15_epackmartContext Db;

        static ReviewController() {
            Db = new p15_epackmartContext();
        }

        [HttpPost("giveReview")]
        public IActionResult takeReviews(Review rev)
        {
            try
            {
                Db.Reviews.Add(rev);
                Db.SaveChanges();
                return Ok(rev);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("getReviews")]
        public async Task<IActionResult> getReviewsOfProduct([FromQuery] int compProdId)
        {
            try
            {
                var rev = await Db.Reviews
                    .Include(r => r.User)
                    .Where(r => r.CompProdId == compProdId)
                    .Select(r => new
                    {
                        UserName = r.User.Name,
                        ReviewDesc = r.ReviewDesc,
                        Rating = r.Rating
                    })
                    .ToListAsync();

                double avg = rev.Any() ? rev.Average(r => r.Rating) : 0; 

                return Ok(new { Reviews = rev, AverageRating = avg });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = "Error fetching reviews", Error = ex.Message });
            }
        }

    }
}
