using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CookieFood.Controllers
{
    public class KitchenController : Controller
    {
        // GET: Kitchen
        public ActionResult KitchenView()
        {
            return View();
        }
    }
}