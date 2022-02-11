using Microsoft.AspNetCore.Mvc;
using Reactivities.Profiles;
using System.Threading.Tasks;

namespace Reactivities.Controllers
{
    public class ProfilesController : BaseApiController
    {
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Username = username }));
        }
    }
}
