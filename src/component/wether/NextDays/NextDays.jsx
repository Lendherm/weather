import { getcleandate } from "../dateformat";
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

function NextDays({ nextdays, temperatureFormat }) {
    return (
      <div className=''>
        {nextdays.map((future, index) => {
          return (
            <div
              key={index}
              className=""
            >
              <p>{index === 0 ? "Today" : getcleandate(future.date)}</p>
              <img
                className="w-[120px]"
                src={future.day.condition.icon.replace("64x64", "128x128")}
                alt=""
              />
              <div className="">
                <div className="">
                  <FaTemperatureHigh />
                  <p>{future.day[`maxtemp_${temperatureFormat}`]}</p>
                </div>
                <div className="">
                  <FaTemperatureLow />
                  <p>{future.day[`mintemp_${temperatureFormat}`]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default NextDays;