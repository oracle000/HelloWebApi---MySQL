namespace HelloWebApi.Models
{
    public class UserTask
    {
        public UserTask(int taskId, string taskName, string due, bool isDone)
        {
            TaskId = taskId;
            TaskName = taskName;
            Due = due;
            IsDone = isDone;
        }
                
        
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string Due { get; set; }
        public bool IsDone { get; set; }

        public UserAccount UserAccount { get; set; }

        //public UserAccount UserAccount { get; set;  }
        
    }
}