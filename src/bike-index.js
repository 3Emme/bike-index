export default class BikeService {  
  static getId(zipCode,manufacturer,perPage) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://bikeindex.org/api/v3/search?page=1&id=${process.env.ID}&secret=${process.env.SECRET}&location=${zipCode}&manufacturer=${manufacturer}&per_page=${perPage}&distance=10&stolenness=stolen`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

// export default class WeatherService {  
//   static getWeather(city) {
//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return Error(error);
//       })
//   }
// }








