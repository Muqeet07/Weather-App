import React, {useState } from 'react';
import WeatherCard from './WeatherCard';
import { useAxiosGet } from '../Hooks/HttpRequest';

function Loader(props){
    var names = props.searchValue;
     
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=f55de2d34db33147bca76526d2184a98&units=metric`;
    
    let weathers = useAxiosGet(url);

    let content;

    

    if(weathers.loading){
        content =
            <div className="displaytext">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
    }

    if(weathers.error){
        content = 
            <div className="displaytext">
                Error loading the data please try again later!
            </div>
    }

    if(weathers.data){
        content = 
            <WeatherCard 
                city={weathers.data.name}
                country={weathers.data.sys.country}
                imagehere={weathers.data.weather[0].icon}
                temperature={weathers.data.main.temp}
                description={weathers.data.weather[0].description}
                humidity={weathers.data.main.humidity}
                visibility={weathers.data.visibility}
            />
            
    }



    return (
        <div>
            <button onClick={props.clickupdate(false)} className="clearbuttonstyle">Clear</button>
            {content}
        </div>
    )
}

function Weather(){
    
    const [searchVal, setSearchVal] = useState({
        searchin : ""
    });

    const [checkIt, setCheckIt] = useState({
        clickit : false
    });

    function Clicked(val) {
        setCheckIt({
            clickit : val
        })
    }

    
    return (
        <div  className="wholeweatherdatacontainer">
            <div className="weatherinputcontainer">
                <input type="text" name="searchin" value={searchVal.searchin} placeholder="Enter City Name to Know Weather" className="weatherinput" onChange={event=>setSearchVal({
                    searchin : event.target.value
                })}/>
                <button onClick={()=>setCheckIt({
                   clickit : true
               })} className="buttonstyle">Check</button>
            </div>
            
            {
                checkIt.clickit === true ? 
                    <Loader 
                    searchValue = {searchVal.searchin}
                    clickupdate = {()=>Clicked}
                    />
                :
                <div className="textdisplaynow">
                    <h3>Search for Weather Now!</h3>
                </div>
                
            }
            
        </div>
    )
}

export default Weather;