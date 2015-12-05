using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TlsGaming.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        public HomeController()
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
