using System.Threading.Tasks;
using System.Collections.Generic;
using API.Interfaces;
using API.Modals;
using API.DbContext;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;

namespace API.Repositories
{   
    public class RestaurantRepository : IRestaurant
    {
        private IDbContext<Restaurant> _dbContext;
        public RestaurantRepository(IDbContext<Restaurant> dbContext){
            _dbContext = dbContext;
            _dbContext.RegisterMapIfNeeded<Restaurant>();
            _dbContext.setCollection("restaurants");
        }

        public List<Restaurant> GetAllRestaurants()
        {
            var col = _dbContext.Collection;            
            return _dbContext.Collection.Find(new BsonDocument()).ToList();
        }
    }
}