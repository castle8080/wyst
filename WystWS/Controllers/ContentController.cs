using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NLog;
using WystWS.Repositories;

namespace WystWS.Controllers
{
    public class ContentController
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();

        private IContentRepository contentRepo;

        public ContentController(IContentRepository contentRepo)
        {
            this.contentRepo = contentRepo;
        }  

        [HttpGet("api/content/{id}/meta")]
        public Task<ContentMetaData> GetMetaData(string id)
        {
            logger.Info("Received a request for meta data: " + id);
            return contentRepo.GetMetaData(id);
        }

        [HttpGetAttribute("api/content/{id}")]
        public async Task<FileResult> GetContent(string id)
        {
            logger.Info("Received a request for content: " + id);
            var md = await contentRepo.GetMetaData(id);
            var stream = await contentRepo.GetContentStream(md);
            return new FileStreamResult(stream, md.ContentType);
        }
    }
}