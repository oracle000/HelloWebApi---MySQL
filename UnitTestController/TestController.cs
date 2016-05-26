using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http.Results;
using HelloWebApi.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Model;
using Moq;
using Ploeh.AutoFixture;

namespace UnitTestController
{
    [TestClass]
    public class TestController
    {

        //private IFixture fixture
        readonly Mock<IUser> _mockUser = new Mock<IUser>();
        private  readonly Fixture _fixture = new Fixture();
        UserController myCtrl = new UserController();

        // prevent redundant call
        [TestInitialize] //beforeEach
        public void setValue()
        {
            _fixture.Behaviors.Remove(new ThrowingRecursionBehavior());
            _fixture.Behaviors.Add(new OmitOnRecursionBehavior());

             myCtrl = new UserController(_mockUser.Object);

        }
        

        [TestMethod]
        public void Get_All_Users()
        {
            // Arrange                        
            var list = _fixture.Create<List<UserAccount>>();
            _mockUser.Setup(x => x.GetUser()).Returns(list);
                                                         
            var controller = new UserController(_mockUser.Object);
                                    
            // Act
            var response = controller.GetAllUsers();

            // Assert
            Assert.AreEqual(list.Count, response.Count);
        }

        [TestMethod]
        public void Get_All_User_By_ID()
        {
            // Arrange
            //_fixture.Behaviors.Remove(new ThrowingRecursionBehavior());
            //_fixture.Behaviors.Add(new OmitOnRecursionBehavior());

            var listAccount = _fixture.Create<List<UserAccount>>();            

            const int id = 0;
            _mockUser.Setup(x => x.GetUserById(id)).Returns(listAccount);
            
            
            var response = new List<UserAccount>();

            // Act           
            try
            {                
                 response = myCtrl.GetAllUsersById(id);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                // Assertd           
                Assert.AreEqual(listAccount.Count, response.Count);
            }                        
        }

        [TestMethod]
        public void Get_All_Task()
        {
            // Arrange                        
            var list = _fixture.Create<List<UserTask>>();
            _mockUser.Setup(x => x.GetTask()).Returns(list);

            
            // Act
            var myCtrl = new UserController(_mockUser.Object);
            var response = new List<UserTask>();
            response = myCtrl.GetTask();

            // Assert
            Assert.AreEqual(list.Count, response.Count);
        }

        [TestMethod]
        public void Delete_User()
        {
                        
            var listAccount = _fixture.Create<UserAccount>();            
            const int id = 0;
            _mockUser.Setup(x => x.DeleteUser(id)).Returns(listAccount);

            var response = myCtrl.DeleteUser(id);
            
            //Assert.IsNotNull(response);
        }

        [TestMethod]
        public void Delete_Task_By_Id()
        {
            //arrange
            var listAccount = _fixture.Create<UserTask>();
            const int id = 0;
            const int index = 0;

            _mockUser.Setup(x => x.DeleteTask(id, index)).Returns(listAccount);

            Assert.IsNotNull(listAccount);
        }

        
    }
}
