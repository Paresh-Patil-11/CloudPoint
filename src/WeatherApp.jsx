import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Shirpur",
    feelsLike: 27.88,
    humidity: 13,
    temp: 29.68,
    tempMax: 29.68,
    tempMin: 29.68,
    description: "clear sky",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
      <h2>Weather App by 🤍Paresh</h2>
    </div>
  );
}
