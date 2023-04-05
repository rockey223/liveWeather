import React, { useEffect, useState } from "react";

import ApiBox from "./Api";
const Weather = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        // setErrorMessage("Unable to retrieve location");
        console.log(error)
      }
    );
  }, []);

  return (
    <>
      <ApiBox lat={latitude} lon={longitude} />
    </>
  );
};

export default Weather;
