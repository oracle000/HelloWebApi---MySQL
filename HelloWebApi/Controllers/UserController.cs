using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.UI.WebControls;
using DBaseModel;
using FM;
using Model;
//using Model;


namespace HelloWebApi.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
                
        readonly DBaseDiagramContext _modelContext = new DBaseDiagramContext();

        // connection of TestRepository to Class
        private readonly IUser _testRepository;

        public UserController()
            :this(new TestRepository())
        {            
        }

        // adding dependency injection 
        public UserController(IUser testRepository)
        {
            _testRepository = testRepository;
        }

        // get all information        
        [HttpGet]
        [Route("GetAllUsers")]
        
        public List<UserAccount> GetAllUsers() {
            try
            {
                return _testRepository.GetUser();
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }                   
        }

        // get all information by id        
        [HttpGet]
        [Route("GetAllUsersById")]       
        public List< UserAccount> GetAllUsersById(int id)
        {
            try
            {
                return _testRepository.GetUserById(id);                
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            
        }

        [HttpGet]
        [Route("GetAllUserByName")]
        public List<UserAccount> GetAllUserByName(string name)
        {
            return _modelContext.UserAccounts.Where(x => x.UserName == name).ToList();
        }

        // get all information for task using id        
        [HttpGet]
        [Route("GetTask")]
        public List<UserTask> GetTask()
        {
            try
            {
                return _testRepository.GetTask();
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }            
        } 
        
         //get task by ID
        [HttpGet]
        [Route("GetTaskById")]
        public List<UserTask> GetTaskById(int id)
        {                        
            return _modelContext.UserTask.Where(z => z.UserAccount.UserId == id).ToList();            
        }
        
        // post new user using id number
        // DONE
        [HttpPost]
        [Route("PostNewUser")]

        public HttpResponseMessage PostNewUser([FromBody] UserAccount addNew)
        {
            _modelContext.UserAccounts.Add(new UserAccount
            {
                UserName = addNew.UserName,
                UserTask = new List<UserTask>()
                {
                    new UserTask(1, "MyTesting Task", "now", false)
                } 
            });
                                               
            _modelContext.SaveChanges();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, addNew);
            return response;
        }
        
        // post new task using id number
        // DONE
        [HttpPost]
        [Route("PostNewTask")]
        public HttpResponseMessage PostNewTask(int id, [FromBody] UserTask addNew)
        {
           
            _modelContext.UserTask.Add(new UserTask
            {
                TaskName = addNew.TaskName,
                Due = addNew.Due,
                IsDone = addNew.IsDone,
                UserAccount = _modelContext.UserAccounts.Find(id)
            });
            
            _modelContext.SaveChanges();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, addNew);
            return response;            
        }


        // edit user
        // add content to body "UserName": "indonesia"
        [HttpPut]
        [Route("UpdateUser")]
        public HttpResponseMessage UpdateUser(int id, [FromBody] UserAccount user)
        {
            //if (_modelContext.UserAccounts.Find(id) == null)
            //{

            //}
            //else
            //{

            //    user.UserName;
            //}
            
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "");
            return response;
        }


        // changing the name of taskname
        [HttpPut]
        [Route("UpdateTask")]
        public HttpResponseMessage UpdateTask(int id, int index, [FromBody] Models.UserTask task)
        {
            var tempAccount = UserAccounts.FirstOrDefault(x => x.UserId == id);            
            tempAccount.UserTask[index].TaskName = task.TaskName;

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, "");
            return response;
        }


        // delete user 
        [HttpDelete]
        [Route("DeleteUser")]
        public HttpResponseMessage DeleteUser(int index)
        {
            try
            {
                var deleletedUser = _testRepository.DeleteUser(index);
                //return StatusCodeResult(HttpStatusCode.Accepted);
                return Request.CreateResponse(HttpStatusCode.Accepted, deleletedUser);
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }           
        }



        // delete task
        [HttpDelete]
        [Route("DeleteTask")]
        public HttpResponseMessage DeleteTask(int id, int index)
        {
            try
            {
                var val = _testRepository.DeleteTask(id, index);
                return Request.CreateResponse(HttpStatusCode.Accepted, val);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }         
        }

        

        
        //private static readonly List<UserAccount> UserAccounts = InitAccount();
        private static List<Models.UserAccount> UserAccounts = InitAccount(); 

        // initialize account
        private static List<Models.UserAccount> InitAccount()
        {
            var newUserPerson = new List<Models.UserAccount>();
            newUserPerson.Add(new Models.UserAccount(01, "John Lennon", "3", new []
            {
                new Models.UserTask(01, "Cleaning the Dishes", "Wed Apr 13 2016", true),
                new Models.UserTask(02, "Dancing while Eating", "Wed Apr 13 2016", true),
                new Models.UserTask(03, "Walking the Dog", "Wed Apr 13 2016", true)
            }));
             newUserPerson.Add(new Models.UserAccount(02, "Paul Gilbert", "3", new[]
            {
                new Models.UserTask(01, "Eating some Meat", "Wed Apr 13 2016", true),
                new Models.UserTask(02, "Dancing while Sleeping", "Wed Apr 13 2016", true),
                new Models.UserTask(03, "Walking the Dog", "Wed Apr 13 2016", true)
            }));
            
            return newUserPerson;
        } 
                
    }

   
}
