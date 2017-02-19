using NLog;
using NLog.Config;
using NLog.Targets;

namespace WystWS.Boot {
    public class LoggingSetup {

        public static void Configure()
        {
            var config = new LoggingConfiguration();

            var consoleTarget = new ConsoleTarget();
            config.AddTarget("console", consoleTarget);

            config.LoggingRules.Add(new LoggingRule("*", LogLevel.Debug, consoleTarget));
            LogManager.Configuration = config;
        }
    }
}