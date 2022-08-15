import axios from "axios";
import "dotenv/config";

const myKey = process.env.API_KEY;


export async function getCity(location) {
  const urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${myKey}`;

  let response = null;
  try {
    response = await axios.get(urlLatLon);
    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false;  // besser ein Obj. vorgeben.
  }
  // const lat = response.data[0].lat;
  // response.data[0] = null ist das obj in array
  // const lon = response.data[0].lon;
  // const geoPos = { lat: lat, lon: lon };
  console.log('getCity', response.data[0])
 

}


export async function getWeather(cityObj, units = "metric") {

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityObj.lat}&lon=${cityObj.lon}&units=${units}&appid=${myKey}`;

  let data = null;
  try {
    const response = await axios.get(weatherUrl);
    data = response.data;
    console.log('getWeather', data)
    return data;
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false
  }
}

export async function getForecast(cityObj, units = "metric") {

  const foreCastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityObj.lat}&lon=${cityObj.lon}&units=${units}&appid=${myKey}`;

  let data = null;
  try {
    const response = await axios.get(foreCastUrl);
    data = response.data;
    console.log('getforecast', data)
    return data;
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false
  }
}

export async function getHistoricalWeather(cityObj, units = "metric") {

  const historicalWeather = `https://history.openweathermap.org/data/3.0/history/timemachine?lat={47.66132186178957}&lon={11.886537478126902}&dt={dt}&appid=${myKey}`;

  let data = null;
  try {
    const response = await axios.get(historicalWeather);
    data = response.data;
    console.log('getForecast', data)
    return data;
  } catch (error) {
    console.log(
      "Es gab einen Fehler bei der Anfrage. (Fehlercode:",
      error.message
    );
    return false
  }
}