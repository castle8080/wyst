using Microsoft.AspNetCore.Mvc;
using NLog;
using WystWS.Repositories;

namespace WystWS.Controllers
{

    public class TestController : Controller
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();

        private IContentRepository contentRepo;

        public TestController(IContentRepository contentRepo)
        {
            this.contentRepo = contentRepo;
        }

        [HttpGet("api/test")]
        public string Test()
        {
            logger.Info("Received a request: " + contentRepo);

            return "yes";
        }

    }
}

