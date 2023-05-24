
import "./style.css"
import Weathercard from "./weathercard";
import NextDays from './NextDays/NextDays';


import React, { useEffect, useState } from 'react'

const Temp = () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const [searchValue, setsearchValue] = useState("Mexico");
    const [tempInfo, setTempInfo] = useState({});
    const  [nextdays  , setNextdays] = useState([])

    const getWeatherInfo = async () => {
        const url = `
            https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}
            `;
        try {
            

            const res = await fetch(url);
            const data = await res.json();

            const {
                current: {
                    temp_c: temp,
                    humidity,
                    pressure_mb: pressure,
                    condition: { text: weathermood },
                  },
                location: { name, country },
                current: { wind_kph: speed },
              } = data;
                

              const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
              };

            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    }



    const futureWeather = async ()=> {
        const url = 'https://api.weatherapi.com/v1/forecast.json?key='+API_KEY+'&q='+searchValue+'&days=5&aqi=no&alerts=no'

        try{
            const  response = await fetch(url) ;
            const data  = await response.json() ;
            setNextdays(data.forecast.forecastday)
            
        }catch{
            console.log('there is a  problem with  api ')
        }
    }
  
    useEffect(() => {
        getWeatherInfo();
        futureWeather()
    }, );
    return (
        <>

            <div className='wrap'>
                <div className='search'>
                    <input type="search"
                        placeholder="Enter any city name in world"
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setsearchValue(e.target.value)} />

                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>

                </div>
                <p>Enter any city Name of world</p>

            </div>

            

            {/* our temp card */}

           <Weathercard tempInfo={tempInfo} />
           <NextDays nextdays = {nextdays}  />
            
        </>
    )
}

export default Temp