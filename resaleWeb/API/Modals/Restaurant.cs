using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace API.Modals
{
    public class Restaurant
    {
        [BsonRepresentation(BsonType.ObjectId)] 
        public ObjectId _id {get; set;}
        public Address address {get; set;}
        public string borough {get; set;}
        public string cuisine {get; set;}
        public List<Grade> grades {get; set;}
        public string name {get; set;}
        public string restaurant_id {get; set;}
    }

    public class Grade {
        public DateTime? date {get; set;}
        public string grade {get; set;}
        public Int32? score {get; set;}
    }

    public class Address {
        public string building {get; set;}
        public string street {get; set;}
        public string zipcode {get; set;}
        public double[] coord {get; set;}
    }
}