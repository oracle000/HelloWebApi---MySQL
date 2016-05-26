using System;
using System.Configuration;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Migrations.History;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DBaseModel;
using MySql.Data.Entity;
using MySql.Data.MySqlClient;

namespace HelloWebApi
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {


            var cxprovider = ConfigurationManager.ConnectionStrings["myConnectionString"].ProviderName;

            //Set to MySqlConfiguration if connection string is MySql
            if (cxprovider == "MySql.Data.MySqlClient")
            {
                DbConfiguration.SetConfiguration(new MySqlConfiguration());
            }

            //Database.SetInitializer(new DropCreateDatabaseAlways<DBaseDiagramContext>());
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            HttpConfiguration config = GlobalConfiguration.Configuration;

            
            using (var context = new DBaseDiagramContext())
            {

                Console.WriteLine("Hello");
                var users = context.UserAccounts.ToList();
                foreach (var user in users)
                {
                    Console.WriteLine(user.UserName);
                }
            }

            //Database.SetInitializer(new CreateDatabaseIfNotExists<DBaseDiagramContext>());
            Database.SetInitializer(new DropCreateDatabaseAlways<DBaseDiagramContext>());
        }

        public class MySqlConfiguration : DbConfiguration
        {
            public MySqlConfiguration()
            {
                SetHistoryContext(
                "MySql.Data.MySqlClient", (conn, schema) => new MySqlHistoryContext(conn, schema));
            }
        }

        public class MySqlHistoryContext : HistoryContext
        {
            public MySqlHistoryContext(
                DbConnection existingConnection,
                string defaultSchema)
                : base(existingConnection, defaultSchema)
            {
            }

            protected override void OnModelCreating(DbModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
                modelBuilder.Entity<HistoryRow>().Property(h => h.MigrationId).HasMaxLength(100).IsRequired();
                modelBuilder.Entity<HistoryRow>().Property(h => h.ContextKey).HasMaxLength(200).IsRequired();
            }
        }


    }

    

}
