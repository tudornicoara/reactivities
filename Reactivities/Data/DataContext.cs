using Microsoft.EntityFrameworkCore;
using Reactivities.Entities;

namespace Reactivities.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
    }
}
