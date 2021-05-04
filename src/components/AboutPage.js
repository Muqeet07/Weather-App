import React from 'react';

function AboutPage(){
    return(
        <div className="aboutpagewholecontainer">
            <div className="aboutpagecontainer">
                <h2>About MyWeather App</h2>
                <p className="abouttexthere">
                Weather forecasting is the application of science and technology 
                to predict the conditions of the atmosphere for a given location 
                and time. People have attempted to predict the weather informally 
                for millennia and formally since the 19th century. Weather forecasts 
                are made by collecting quantitative data about the current state of
                 the atmosphere at a given place and using meteorology to project 
                 how the atmosphere will change. <br />
                 Once calculated by hand based 
                 mainly upon changes in barometric pressure, current weather 
                 conditions, and sky condition or cloud cover, weather forecasting 
                 now relies on computer-based models that take many atmospheric 
                 factors into account. Human input is still required to pick 
                 the best possible forecast model to base the forecast upon, 
                 which involves pattern recognition skills, teleconnections, 
                 knowledge of model performance, and knowledge of model biases. 
                 The inaccuracy of forecasting is due to the chaotic nature of 
                 the atmosphere, the massive computational power required to 
                 solve the equations that describe the atmosphere, the error 
                 involved in measuring the initial conditions, and an incomplete 
                 understanding of atmospheric processes. Hence, forecasts become 
                 less accurate as the difference between current time and the time 
                 for which the forecast is being made (the range of the forecast) 
                 increases. The use of ensembles and model consensus help narrow 
                 the error and pick the most likely outcome. <br />
                 There is a vast variety 
                 of end uses to weather forecasts. Weather warnings are important 
                 forecasts because they are used to protect life and property. 
                 Forecasts based on temperature and precipitation are important 
                 to agriculture, and therefore to traders within commodity markets. 
                 Temperature forecasts are used by utility companies to estimate 
                 demand over coming days. On an everyday basis, many use weather 
                 forecasts to determine what to wear on a given day. Since outdoor 
                 activities are severely curtailed by heavy rain, snow and wind chill, 
                 forecasts can be used to plan activities around these events, and to 
                 plan ahead and survive them. In 2009, the US spent approximately 
                 $5.1 billion on weather forecasting.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;