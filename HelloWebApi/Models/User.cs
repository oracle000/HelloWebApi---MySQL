using System.Collections.Generic;

namespace HelloWebApi.Models
{   
    class Program
    {
        public static void main()
        {            
            List<UserAccount> newUserPerson = new List<UserAccount>();
            newUserPerson.Add(new UserAccount(01, "John Lennon","3", new []
            {
                new UserTask(01, "Cleaning the Dishes", "Wed Apr 13 2016", true),
                new UserTask(02, "Dancing while Eating", "Wed Apr 13 2016", true),
                new UserTask(03, "Walking the Dog", "Wed Apr 13 2016", true)
            }));

            newUserPerson.Add(new UserAccount(02, "Paul Gilbert", "3",  new[]
            {
                new UserTask(01, "Eating some Meat", "Wed Apr 13 2016", true),
                new UserTask(02, "Dancing while Sleeping", "Wed Apr 13 2016", true),
                new UserTask(03, "Walking the Dog", "Wed Apr 13 2016", true)
            }));            
        }
    }
}