using System;
using System.IO;

using Autofac;
using Autofac.Core;
using NLog;

using WystWS.Repositories;

namespace WystWS.Boot
{
    public class ConfigurationModule : Module
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();

        protected override void Load(ContainerBuilder builder)
        {
            logger.Info("Configuring container.");

            var contentDir = Directory.GetParent(Directory.GetCurrentDirectory()) + "\\content";
            logger.Info("Content dir: " + contentDir);
            builder
                .Register<FileSystemContentRepository>(ctx => new FileSystemContentRepository(contentDir))
                .As<IContentRepository>();
        }
    }
}