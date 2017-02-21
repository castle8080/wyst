using System;
using System.IO;
using System.Threading.Tasks;

namespace WystWS.Repositories
{

    public class ContentMetaData
    {
        public string SourceUrl { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string ContentType { get; set; }

        public string ContentName { get; set; }
    }

    public interface IContentRepository
    {
        Task<ContentMetaData> GetMetaData(string id);

        Task<Stream> GetContentStream(ContentMetaData metaData);
    }

}