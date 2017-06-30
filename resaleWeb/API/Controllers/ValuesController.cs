using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Interfaces;
using API.Modals;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        
        private readonly IRestaurant _iRestaurant;
        public ValuesController(IRestaurant iRestaurant){
            //_iUser = iUser;
            _iRestaurant = iRestaurant;
        }
        // GET api/values
        [HttpGet]
        public List<Restaurant> Get()
        {
            //return _iUser.GetAllUsers();
            var k = _iRestaurant.GetAllRestaurants(); 
            return k;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
