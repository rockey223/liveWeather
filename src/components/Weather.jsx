import React, { useEffect, useState } from "react";

import ApiBox from "./Api";
const Weather = () => {
  
  // const [geoLocation, setGeoLocation] = useState("");
  // const [lat, setLat] = useState("");
  // // const [lon, setLat] = useState("");
  // const[button,setButton] = useState("hello");
  
  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     console.log("error");
  //   }
  // };
  // useEffect(() => {
    
  //   getLocation();
  // },[]);
  
  // const showPosition = (position) => {
  //   // console.log(position);
  //   setGeoLocation(position.coords);
  //   setLat(position.coords.latitude)
  //   setLat(position.coords.latitude)
  // };

  // // if(geoLocation!==null){
  //   const apiKey = "191a21162420dd4f0851ed75935a797d";
  //   var api = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&appid=${apiKey}&units=metric`;
  // // }
  // else{
  //   console.log("error aayoooooo");
  // }
  

  // console.log("api", api);

//   const getWeatherData = () => {
//     axios
//       .get(api)
//       .then((response) => {
//         setWeaterData(response.data)
//         // console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// useEffect(()=>{
//     getWeatherData();
// },[showPosition])
//  const { temp, temp_max, temp_min, pressure, humidity } = weatherData.main;
//  const { name, visibility } = weatherData;
//  const { speed } = weatherData.wind;
//  const {main}  = weatherData.weather[0];
//  console.log(main)
//  console.log(weatherData)


const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setErrorMessage('Unable to retrieve location');
      }
    );
  }, []);

// console.log(latitude);
  return (
    <>
    
    <ApiBox lat={latitude} lon={longitude}/>
     {/* <Card
        temp={temp}
        temp_max={temp_max}
        temp_min={temp_min}
        pressure={pressure}
        humidity={humidity}
        name={name}
        speed={speed}
        visibility={visibility}
        main={main}
      /> */}
    </>
  );
};

export default Weather;
