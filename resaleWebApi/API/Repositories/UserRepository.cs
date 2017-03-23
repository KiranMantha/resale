using System.Collections.Generic;
using API.Interfaces;
using API.Modals;
namespace API.Repositories {
    public class UserRepository: IUser {
        public IEnumerable<UserModal> ListAll()
        {
            List<UserModal> list = new List<UserModal>();
            list.Add(new UserModal(){Name = "test1"});
            list.Add(new UserModal(){Name = "test2"});
            list.Add(new UserModal(){Name = "test3"});

            IEnumerable<UserModal> en = list;
            return en;
        }
    }
}