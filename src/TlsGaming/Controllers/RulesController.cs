using Microsoft.AspNet.Mvc;

namespace TlsGaming.Controllers
{
    [Route("rules")]
    public class RulesController : Controller
    {
        public RulesController()
        {
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}