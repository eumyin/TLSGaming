using Microsoft.AspNet.Mvc;

namespace TlsGaming.Controllers
{
    [Route("map")]
    public class MapController : Controller
    {
        public MapController()
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