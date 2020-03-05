using CookieFood.Models.Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CookieFood.Controllers
{
    public class ClientController : Controller
    {
        CookieFoodEntities db = new CookieFoodEntities();
        public ActionResult ClientView()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Menu()
        {
            var menu = db.CAT_PRODUCTS.ToList();
            return Json(menu, JsonRequestBehavior.AllowGet);
        }
    }
}