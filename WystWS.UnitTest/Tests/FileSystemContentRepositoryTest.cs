using System;
using Xunit;

using  WystWS.Repositories;

namespace WystWS.Tests
{
    public class FileSystemContentRepositoryTest
    {
        [Fact]
        public void Test1() 
        {
            var repo = new FileSystemContentRepository();
            Assert.NotNull(repo);
        }
    }
}