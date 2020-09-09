import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-index.js';

function displayBikeResults(bikeResponse) { 
  const body = JSON.parse(bikeResponse);
  body.bikes.forEach(function(element){
    $('#bikesfound').append(`
    <br>
    <div class='col-8 justify-content-center'>
    <p class='resultstitle'>🚲 Title: ${element.description}</p>
    <p class='results'>Location Stolen: ${element.stolen_location}</p> 
    <p class='results'>Date Stolen: ${element.date_stolen}</p>
    <p class='results'>Color: ${element.frame_colors[0]}</p> 
    <p class='results'>Description: ${element.description}</p>
    <p class='results'>Link to page: <A HREF='${element.url}'>${element.url}</A></p>
    </div>
    </br>`); 
  });
}
  $(document).ready(function() {

$('#bikeindexsubmit').click(function(event) {
    event.preventDefault();
    const zipCode = $('#location').val();
    // const color = $('#colors').val();
    const manufacturer = $('#manufacturer').val();
    const perPage = $('#results').val();

    let promise = BikeService.getId(zipCode,manufacturer,perPage);
    promise.then(function(bikeResponse) {
      // if (bikeResponse instanceof Error) {
      //   throw Error(`OpenWeather API error: ${bikeResponse.message}`);
      // }
      console.log('Promise evaluating, not an error state.')
      displayBikeResults(bikeResponse);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    })
  })
});

// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     let promise = WeatherService.getWeather(city);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });