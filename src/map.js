export default class MapQuestService {
  static getMap(stolenLocation) {
    return fetch(`https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAPQUESTAPIKEY}&secret=${process.env.MAPQUESTAPISECRET}&locations=${stolenLocation}`)
    .then(function(mapResponse) {
      if (!mapResponse.ok) {
        throw Error(mapResponse.statusText);
      }
      return mapResponse;
    })
    .catch(function(error) {
      return error;
    })
  }
}







