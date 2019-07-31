import React from 'react'

const Result = ({ searchResult }) => {
  return (
    <div>
      <center><h1>Weather for the {searchResult.name} Area</h1></center>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{searchResult.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">This is the current weather in formation for the {searchResult.name} area.</h6>
            <img src={'http://openweathermap.org/img/w/' + searchResult.weather[0].icon + '.png'} alt="boohoo" className="img-responsive"/>
              <p className="card-text">
                Weather: {searchResult.weather[0].main} <br/>
                Minimum Temperature: {searchResult.main.temp_min} °F<br/>
                Maximum Temperature: {searchResult.main.temp_max} °F<br/>
                Base Temperature: {searchResult.main.temp} °F<br/> 
                Humidity: {searchResult.main.humidity} <br/>
                Wind Speed: {searchResult.wind.speed}
              </p>
          </div>
        </div>
    </div>
  )
};

export default Result