using CookieFood.Models.Datos;
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace TOS.Controllers
{
    public class HomeController : Controller
    {
        CookieFoodEntities db = new CookieFoodEntities();
        public ActionResult PanelLogin()
        {
            return View();
        }

        public ActionResult Principal()
        {
            //if (Request.Cookies["MyUsername"] != null)
            //{
            //    return View();
            //}
            //else
            //{
            //    return RedirectToAction("PanelLogin");
            //}
            return View();
        }
        [HttpGet]
        public JsonResult ValidaTipoUsuario()
        {
            //var cookievalue = Request.Cookies["MyUsername"].Value.ToString();
            //var query = db.Users.Where(x => x.USERNAME == cookievalue).Select(z => new { ROL = z.TYPE_USER }).FirstOrDefault();
            return Json(new { ROL= 0 }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetName()
        {
            //var cookievalue = Request.Cookies["MyName"].Value.ToString();
            return Json("Username", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult LogOut()
        {
            Response.Cookies["MyName"].Expires = DateTime.Now.AddDays(-1);
            Response.Cookies["MyUsername"].Expires = DateTime.Now.AddDays(-1);
            return Json("OK", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Login(string username, string psw)
        {
            var result = "";
            try
            {
                if (db.Users.Where(x => x.USERNAME == username && x.PSW == psw).Count() > 0)
                {
                    result = db.Users.Where(x => x.USERNAME == username).Select(z => z.NAME).FirstOrDefault();
                    DateTime now = DateTime.Now;
                    HttpCookie CookieName = new HttpCookie("MyName");
                    CookieName.Value = result;
                    CookieName.Expires = now.AddDays(1);
                    Response.Cookies.Add(CookieName);

                    HttpCookie CookieWIW = new HttpCookie("MyUsername");
                    CookieWIW.Value = db.Users.Where(x => x.USERNAME == username).Select(z => z.USERNAME).FirstOrDefault();
                    CookieWIW.Expires = now.AddDays(1);
                    Response.Cookies.Add(CookieWIW);
                    
                    return Json("OK", JsonRequestBehavior.AllowGet);
                } else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
                
            }
            catch (Exception)
            {
                return Json("NO");
            }
            

            
        }

    }
}