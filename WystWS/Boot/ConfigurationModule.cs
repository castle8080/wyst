using System;

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

            builder
                .RegisterType<FileSystemContentRepository>()
                .As<IContentRepository>();
        }
    }
}