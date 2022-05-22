import React, { useState } from "react";
import axios from "axios";
import "./weater.scss";
import loading from '../../assets/img/Dual Ring-1s-244px.svg'

const Weather = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error,setError] = useState(false)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2910f79cc64bca1364c3f65841fb8ad0`;


  const searchLocation =(e) =>{
    if(e.key === 'Enter') {
      const func = async () => {
        setLoad(true)
        try {
          await axios({
            method: "get",
            url,
          }).then(function (response) {
            setData(response.data);
            setError(false)
            setLoad(false);
          });
        } catch (error) {
          console.log(error.message);
          setData(error)
          setError(true)
          setLoad(false);
        }
      };

      func();
      setLocation('')
    }
  }

  const kelvinToFarenheit = (k) => {
    const t = (k - 273.15).toFixed(2);
    return t;
  };


  
  return (
    <div className="weather">
      <div className="title">
        <h1>React Weather App</h1>
      </div>
      <div className="section">
        <input
          type="text"
          defaultValue='Toshkent'
          placeholder="Enter Location"
          value={location}
          onKeyPress={searchLocation}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="card">
        {load ? (
          <div className="loading">
            <img src={loading} alt="hh" />
          </div>
        ) : (
          <React.Fragment>
            {error ? (
              <div className="error">
                <h1>Error: {data.message}</h1>
                <p>Please enter a city name correctly.</p>
                <h2>404</h2>
              </div>
            ) : (
              <React.Fragment>
                <div className="item">
                  <div className="item-name">
                    {data ? <p>{data.name}</p> : <p>Dallas</p>}
                    {data ? (
                      <h1>{kelvinToFarenheit(data.main.temp)}&deg; C</h1>
                    ) : (
                      <h1>31&deg; C</h1>
                    )}
                  </div>
                  <h2>{data ? <p>{data.weather[0].main}</p> : <p>Clear</p>}</h2>
                </div>
                <div className="list">
                  <div className="speed">
                    {data ? (
                      <h1>{kelvinToFarenheit(data.main.feels_like)}&deg; C</h1>
                    ) : (
                      <h1>31&deg; C</h1>
                    )}
                    <p>Feels like</p>
                  </div>
                  <div className="speed">
                    {data ? <h1>{data.main.humidity}%</h1> : <h1>20%</h1>}
                    <p>humidity</p>
                  </div>
                  <div className="speed">
                    {data ? (
                      <h1>{(data.wind.speed * 0.447).toFixed(2)} m/s</h1>
                    ) : (
                      <h1>1 m/s</h1>
                    )}
                    <p>wind speed</p>
                  </div>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Weather;
