namespace HelloWebApi.Models
{
    public class UserAccount
    {
       
        public UserAccount(int userId, string userName, string taskCount, UserTask[] userTask) {
            UserId = userId;
            UserName = userName;
            TaskCount = taskCount;
            UserTask = userTask;

        }
                        
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string TaskCount { get; set; }
        public UserTask[] UserTask { get; set; }
        
    };
}