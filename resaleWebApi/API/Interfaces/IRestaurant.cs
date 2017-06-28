using System.Collections.Generic;
using System.Threading.Tasks;
using API.Modals;

namespace API.Interfaces
{
    public interface IRestaurant
    {
         List<Restaurant> GetAllRestaurants();
    }
}