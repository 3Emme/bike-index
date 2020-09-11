// export default class BikeService {  
//   static getId(zipCode,manufacturer,perPage) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://bikeindex.org/api/v3/search?page=1&id=${process.env.ID}&secret=${process.env.SECRET}&location=${zipCode}&manufacturer=${manufacturer}&per_page=${perPage}&distance=10&stolenness=stolen`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }

// triying refactor

export default class BikeService {  
  static getId(color,zipCode,manufacturer,perPage) {
    console.log(`getId function running. zipCode: ${zipCode},manufacturer: ${manufacturer},perPage: ${perPage}`)
    return fetch(`https://bikeindex.org/api/v3/search?page=1&query_items%5B%5D=${color}&id=${process.env.ID}&secret=${process.env.SECRET}&location=${zipCode}&manufacturer=${manufacturer}&per_page=${perPage}&distance=10&stolenness=proximity`)
      .then(function(bikeResponse) {
        if (!bikeResponse.ok) {
          console.log(`Error thrown`);
          throw Error(bikeResponse.statusText);
        }
        console.log(`bikeResponse.Json returned`);
        return bikeResponse.json();
      })
      .catch(function(error) {
        console.log(`Error caught`);
        return error;
      })
  }
}