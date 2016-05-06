var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f24562e2057bb4fa971917d8b8f8e435&units=metric';

module.exports = {
  getTemperature: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }
      else{
        return response.data.main.temp;
      }
    }, function(error){
      throw new Error(error.data.message);
    });
  }
}
