import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const apiKey = "31e3badd3e9337ebd8ed9ea384c6f44a";

  // api call
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    console.log("cityName", cityName);
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data); // Saving Data
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
    console.log("handleChangeInput", e.target.value);
  };
  // search button function
  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    getWeatherDetails("patna");
  }, []);

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-centre mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/564x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
            alt="weather icon"
          />
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">{data?.main?.temp - 273.15}°C</h6>
          <h6 className="weatherSpeed">Wind Speed: {data?.wind?.speed}m/s</h6>
          <h6 className="weatherClouds">Clouds: {data?.clouds?.all}%</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
