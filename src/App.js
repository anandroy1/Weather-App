// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [search, setSearch] = useState("patna");
  const apiKey = "31e3badd3e9337ebd8ed9ea384c6f44a";

  useEffect(() => {
    const fetchApi = async () => {
      const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=" +
        apiKey;
      const response = await fetch(apiURL);
      console.log("response", response);
      const resJson = await response.json();
      console.log("resJson", resJson);
      setInputCity(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="col-md-12 text-centre mt-5">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://i.pinimg.com/564x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
            alt="weather icon"
          />

          <div>
            <h5 className="weatherCity">{inputCity?.name}</h5>
            <h6 className="weatherTemp">
              {(inputCity?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
            <h6 className="weatherSpeed">
              Wind Speed: {inputCity?.wind?.speed}m/s
            </h6>
            <h6 className="weatherClouds">Clouds: {inputCity?.clouds?.all}%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
