using System.Web.Mvc;

namespace HelloWebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            return Redirect("~/app/index.html"); 
        }
    }
}
