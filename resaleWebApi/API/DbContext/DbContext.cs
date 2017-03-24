using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using MongoDB.Bson.Serialization;
using API.Modals;

namespace API.DbContext
{
    public class DbContext<T> : IDbContext<T>
    {
        public IMongoDatabase Database { get; }

        public IMongoCollection<T> Collection { get; private set; }

        public DbContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                Database = client.GetDatabase(settings.Value.Database);
            }
        }

        public void setCollection(string collectionName)
        {
            Collection = Database.GetCollection<T>(collectionName);
        }

        // Check to see if map is registered before registering class map
        // This is for the sake of the polymorphic types that we are using so Mongo knows how to deserialize
        private void RegisterMapIfNeeded<TClass>()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(TClass)))
                BsonClassMap.RegisterClassMap<TClass>();
        }
    }
}