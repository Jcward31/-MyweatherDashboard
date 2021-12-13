// adding the api

var CitySrch = document.getElementById("Search");
var weatherKey = "0b6b1584b248fb47b4145903c21533f1";

CitySrch.addEventListener('click', event =>{
    event.preventDefault();
    var city =document.getElementById("SearchByCity").value;
    console.log(city);
    var currWeatherURl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
 

    console.log(currWeatherURl);

    weatherData(currWeatherURl);
});

function weatherData(currWeatherURl){
    fetch(currWeatherURl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var cName= data.name;
        console.log(cName);
        var cTemp= data.main.temp;
        console.log(cTemp);
        var cWind = data.wind;
        console.log(cWind);
        var cWeather= data.weather;
        console.log(cWeather);
        //var ccityName=document.getElementById("cityName");
        document.getElementById("cityName").innerHTML = cName;
    });
};

// when searching city name presented with city name, the date, weather condotions and UV index



// uv indez when clicked shows color that indicates  weather con favoriabilty favorable, moderate or severe

// view future to see html for 5 day forcast