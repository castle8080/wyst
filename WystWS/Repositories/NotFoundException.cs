using System;

namespace WystWS.Repositories
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string msg) : base(msg)
        {
        }

        public NotFoundException(string msg, Exception inner) : base(msg, inner)
        {
        }
    }
}