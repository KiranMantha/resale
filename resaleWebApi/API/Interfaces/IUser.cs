using System.Collections.Generic;
using System.Threading.Tasks;
using API.Modals;
namespace API.Interfaces {
    public interface IUser {
        Task<IEnumerable<User>> GetAllUsers();
    }
}