import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
import axios from "axios";
import Card from "./Card";
const ApiBox = ({ lat, lon }) => {
  Geocode.setApiKey("AIzaSyDyg3wITfkdePL5z451280VRHGu8aZNKao");
  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if (lat && lon) {
      Geocode.fromLatLng(lat, lon).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );

      const API_KEY = "191a21162420dd4f0851ed75935a797d";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          setErrorMessage("Unable to retrieve weather data");
        });
    }
  }, [lat, lon]);

  return (
    <>
      <Card data={weatherData} />
    </>
  );
};

export default ApiBox;
