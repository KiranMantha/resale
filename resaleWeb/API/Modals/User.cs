using MongoDB.Bson.Serialization.Attributes;

namespace API.Modals
{
    public class User
    {
        [BsonId]
        public string Id { get; set; }
        public string Name { get; set; }
    }
}