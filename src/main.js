import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-index.js';
import MapQuestService from './map.js';

// function displayBikeResults(bikeResponse) { 
//   const body = JSON.parse(bikeResponse);
//   body.bikes.forEach(function(element){
//     $('#bikesfound').append(`
//     <br>
//     <div class='col-8 justify-content-center'>
//     <p class='resultstitle'>🚲 Title: ${element.description}</p>
//     <p class='results'>Location Stolen: ${element.stolen_location}</p> 
//     <p class='results'>Date Stolen: ${element.date_stolen}</p>
//     <p class='results'>Color: ${element.frame_colors[0]}</p> 
//     <p class='results'>Description: ${element.description}</p>
//     <p class='results'>Link to page: <A HREF='${element.url}'>${element.url}</A></p>
//     </div>
//     </br>`); 
//   });
// }
//   $(document).ready(function() {

// $('#bikeindexsubmit').click(function(event) {
//     event.preventDefault();
//     const zipCode = $('#location').val();
//     const manufacturer = $('#manufacturer').val();
//     const perPage = $('#results').val();

//     let promise = BikeService.getId(zipCode,manufacturer,perPage);
//     promise.then(function(bikeResponse) {
//       console.log('Promise evaluating, not an error state.')
//       displayBikeResults(bikeResponse);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     })
//   })
// });


// trying to refactor

function displayBikeResults(bikeResponse) { 
if(bikeResponse.bikes) {
  bikeResponse.bikes.forEach(function(element){
    $('#bikesfound').append(`
    <br>
    <div class='col-10 align-items-center'>
    <p class='resultstitle'>🚲 Title: ${element.description}</p>
    <p class='results'>Location Stolen: ${element.stolen_location}</p> 
    <p class='results'>Date Stolen: ${element.date_stolen}</p>
    <p class='results'>Color: ${element.frame_colors.join(' and ')}</p> 
    <p class='results'>Description: ${element.description}</p>
    <p class='results'>Link to page: <A HREF='${element.url}'>${element.url}</A></p>
    <img style="-webkit-user-select: none;margin: auto;" src="${MapQuestService.getMap(element.stolen_location)}" width="400" height="400">
    </div>
    </br>`); 
    
  });
} else {
  $('.showErrors').text(`There was an error: ${bikeResponse.message}`);
}
}

// function stolenMap(stolenLocation){
//   if (!stolenLocation){
//     console.log(`stolenLocation is not valid. Value: ${stolenLocation}`)
//   } else{
//     MapQuestService.getMap(stolenLocation)
//           .then(function(mapResponse) {
//             return mapResponse;
//           });
//         } 
// }

  $(document).ready(function() {

$('#bikeindexsubmit').click(function(event) {
    event.preventDefault();
    const color = $('#color').val();
    const zipCode = $('#location').val();
    const manufacturer = $('#manufacturer').val();
    const perPage = $('#results').val();
    // clearFields();
    $('#bikesfound').html("");
    BikeService.getId(color,zipCode,manufacturer,perPage)
      .then(function(bikeResponse) {
        displayBikeResults(bikeResponse);
      });
  })
});




// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     WeatherService.getWeather(city)
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });











// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     WeatherService.getWeather(city)
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });