using System.Collections.Generic;
using API.Modals;
namespace API.Interfaces {
    public interface IUser {
        IEnumerable<UserModal> ListAll();
    }
}