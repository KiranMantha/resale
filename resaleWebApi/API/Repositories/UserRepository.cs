using System.Threading.Tasks;
using System.Collections.Generic;
using API.Interfaces;
using API.Modals;
using API.DbContext;
using MongoDB.Driver;
using MongoDB.Bson;

namespace API.Repositories {
    public class UserRepository: IUser {

        private IDbContext<User> _dbContext;
        public UserRepository(IDbContext<User> dbContext){
            _dbContext = dbContext;
            _dbContext.setCollection("User");
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            var col = _dbContext.Collection;
            return await _dbContext.Collection.Find(new BsonDocument()).ToListAsync();
        }
    }
}