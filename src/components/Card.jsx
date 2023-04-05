import { FaTemperatureLow } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { TfiLocationArrow } from "react-icons/tfi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { MdOutlineVisibility,MdThunderstorm } from "react-icons/md";
import { BsFillCloudsFill,BsFillCloudRainFill,BsCloudDrizzleFill,BsCloudSnowFill,BsFillSunFill } from "react-icons/bs";
// import { useState, useEffect } from "react";
const Card = (props) => {
  console.log("card",props.data);
  // const { temp, temp_max, temp_min, pressure, humidity } = props.data.main;
  // console.log(temp)
  // const { name, visibility } = data;
  // const { speed } = data.wind;
  // const {main}  = data.weather[0];
  // useEffect(() => {
  //   setTimeout(getWeatherData, 3000);
  //   getWeatherData();
  // }, []);
//   console.log("card", name);
//  console.log(main)
if (!props.data) {
  return <div>Loading...</div>;
  }
  return (
    <>
    {/* {props.data.main.temp}
    {props.data.main.temp_max}
    {props.data.main.temp_min}
    {props.data.main.pressure} */}
      <div className="mainWrapper">
        <div className="card">
          <div className="tempDetails">
            <div className="tepmHL tempDetailsContent">
              <div className="title">
                <FaTemperatureLow className="icon" />
                High/Low
              </div>
              <div className="content">
                {props.data.main.temp_max - 32 / 1000}/{props.data.main.temp_min}
              </div>
            </div>
            <div className="tempWind tempDetailsContent">
             
              <div className="title">
                <TbWind className="icon" />
                Wind
              </div>
              <div className="content"><TfiLocationArrow/>{props.data.wind.speed} m/s</div>
            </div>
            <div className="tepmHumidity tempDetailsContent">
              <div className="title">
                <WiHumidity className="icon" />
                Humidity
              </div>
              <div className="content">{props.data.main.humidity} %</div>
            </div>
            <div className="tepmPressure tempDetailsContent">
              <div className="title">
                <CgArrowsExchangeAltV className="icon" />
                Pressure
              </div>
              <div className="content">{props.data.main.pressure} hPa</div>
            </div>
            <div className="Visibility tempDetailsContent">
              <div className="title">
                <MdOutlineVisibility className="icon" />
                Visibility
              </div>
              <div className="content">{props.data.visibility/1000} Km</div>
            </div>
          </div>
          <div className="locationDetails">
            <div className="locationName">{props.data.name}</div>
            {(() => {
                switch (props.data.weather[0].main) {
                  case "Rain":
                    return <BsFillCloudRainFill className="tempDetailsIcon"/>;
                    // break;
                  case "Clouds":
                    return <BsFillCloudsFill className="tempDetailsIcon" />;
                    // break;
                  case "Drizzle":
                    return <BsCloudDrizzleFill className="tempDetailsIcon"/>;
                    // break;
                  case "Thunderstorm":
                    return <MdThunderstorm className="tempDetailsIcon"/>;
                    // break;
                  case "Snow":
                    return <BsCloudSnowFill className="tempDetailsIcon"/>;
                    // break;
                  case "Clear":
                    return <BsFillSunFill className="tempDetailsIcon"/>;
                    // break;
                  default:
                    return "asdf";
                }
              })()}
            

            <div className="temperature">
              {props.data.main.temp}
              &deg;C
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
