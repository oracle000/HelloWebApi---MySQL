using System.Data.Entity;
using HelloWebApi.Models;



namespace DBaseModel
{ 
    public class DbDiagramContext : DbContext
    {
        public DbSet<UserAccount> UsersAccount { get; set; }
        public DbSet<UserTask> UserTask { get; set;  }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            modelBuilder.HasDefaultSchema("Admin");

            base.OnModelCreating(modelBuilder);            
            modelBuilder.Entity<UserAccount>().HasKey(c => c.UserId);
            modelBuilder.Entity<UserTask>().HasKey(c => c.TaskId);            

        }
    } 
}
