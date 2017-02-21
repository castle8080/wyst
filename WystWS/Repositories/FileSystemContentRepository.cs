using System;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using NLog;

namespace WystWS.Repositories
{
    public class FileSystemContentRepository : IContentRepository
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();

        private string directory;
        private JsonSerializer jsonSerializer;

        public FileSystemContentRepository(string directory)
        {
            this.directory = directory;
            this.jsonSerializer = new JsonSerializer();
        }

        public async Task<ContentMetaData> GetMetaData(string id)
        {
            var metaFile = directory + "\\" + id + ".meta.json";
            if (!File.Exists(metaFile))
            {
                throw new NotFoundException("Could not find content for " + id);
            }

            logger.Info("Reading meta data from: " + metaFile);

            using (var fs = new FileStream(metaFile, FileMode.Open))
            using (var mem = new MemoryStream())
            {
                await fs.CopyToAsync(mem);
                mem.Seek(0, SeekOrigin.Begin);
                return this.jsonSerializer.Deserialize<ContentMetaData>(new JsonTextReader(new StreamReader(mem, Encoding.UTF8)));
            }
        }


        public Task<Stream> GetContentStream(ContentMetaData metaData)
        {
            var contentFile = directory + "\\" + metaData.ContentName;
            return Task.FromResult((Stream) new FileStream(contentFile, FileMode.Open));
        }
    }
}