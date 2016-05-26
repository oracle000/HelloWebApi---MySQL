using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Web.Http.ModelBinding;
using DBaseModel;
using Model;

namespace HelloWebApi.Controllers
{
    public interface IUser
    {
        // using Get
        List<UserAccount> GetUser();
        List<UserAccount> GetUserById(int id);
        List<UserTask> GetTask();
        UserAccount DeleteUser(int index);
        UserTask DeleteTask(int id, int index);

    }
    public class TestRepository : IUser
    {        

        readonly DBaseDiagramContext _modelContext = new DBaseDiagramContext();

        // GET ALL USER
        public List<UserAccount> GetUser()
        {
            return _modelContext.UserAccounts.ToList();
        }

        // GET ALL USER BY ID
        public List<UserAccount> GetUserById(int id)
        {
            return _modelContext.UserAccounts.Where(x => x.UserId == id).ToList();
        }

        // GET ALL TASK
        public List<UserTask> GetTask()
        {
            return _modelContext.UserTask.ToList();
        }

        // DELETE USER BY ID
        public UserAccount DeleteUser(int index)
        {
            var selectedUser = _modelContext.UserAccounts.FirstOrDefault(x => x.UserId == index);
            _modelContext.UserAccounts.Remove(selectedUser);
            _modelContext.SaveChanges();

            return selectedUser;
        }

        // DELETE TASK BY ID AND BY INDEX
        public UserTask DeleteTask(int id, int index)
        {
            var selectedTask =
                _modelContext.UserTask.FirstOrDefault(x => x.TaskId == id && x.UserAccount.UserId == index);
            _modelContext.UserTask.Remove(selectedTask);
            _modelContext.SaveChanges();

            return selectedTask;

            //var tempAccount = _modelContext.UserAccounts.FirstOrDefault(x => x.UserId == id);
            //var userTask = tempAccount.UserTask.ToList();

            //return _modelContext.UserTask.Remove(userTask[index]);                        
        }
    }
}