import React, { useEffect, useState } from 'react'



const Weathercard = ({ tempInfo }) => {

    const [weatherState, setweatherState] = useState();

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
       

    } = tempInfo;

    const temperatureCelsius = temp;
    const temperatureFahrenheit = (temp * 9) / 5 + 32;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Sunny": setweatherState("wwi-day-sunny");

                    break;
                case "Clouds": setweatherState("wi-day-cloudy");

                    break;
                case "Haze": setweatherState("wi-fog");

                    break;
                case "Clear": setweatherState("wi-day-sunny");

                    break;
                case "Mist": setweatherState("wi-dust");

                    break;

                default: setweatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    //converting sec to time



    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                <i className={`wi ${weatherState} icon-${tempInfo.condition?.icon?.replace(/.*\/(\d+)\.png$/, '$1')}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className='country'>
                            <div className="place"> {name}, {country}</div>
                        </div>

                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* our 4 divided section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={`wi ${weatherState}`}>  </i></p>
                            <p className="extra-info-leftside">
                                <span>{temperatureCelsius}&deg;C</span> /{" "}
                                <span>{temperatureFahrenheit}&deg;F</span>
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}>  </i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>


                    {/*  */}

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}>  </i></p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}>  </i></p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard