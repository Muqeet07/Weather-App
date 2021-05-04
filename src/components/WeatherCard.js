import React from 'react';

function WeatherCard(props){
    return(
        <div className="weatherdatacontainer">
            <h1>{props.city}</h1>
            <span className="moreboldtext">{props.country}</span><br />
            <div className="imageandtempcontainer"><img src={`https://openweathermap.org/img/wn/${props.imagehere}@2x.png`}/><span className="boldtextinside">{Math.round(props.temperature)}<sup>&deg;c</sup></span></div><br />
            <span className="boldtext"> {props.description}</span><br />
            <span className="lighttext">Humidity:</span> <span className="boldtext"> {props.humidity}</span><br />
            <span className="lighttext">Visibility:</span> <span className="boldtext"> {props.visibility}</span><br />
        </div>
    )
}

export default WeatherCard;

