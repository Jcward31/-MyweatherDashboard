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
        var cWind = data.wind.speed;
        console.log(cWind);
        var cWeather= data.weather[0].description;
        console.log(cWeather);
        var cHum= data.main.humidity;
        console.log(cHum);
        //var ccityName=document.getElementById("cityName");
        document.getElementById("cityName").innerHTML = cName;
        document.getElementById("temp").innerHTML = cTemp;
        document.getElementById("wind").innerHTML = cWind;
        document.getElementById("weather").innerHTML = cWeather;
        document.getElementById("humidity").innerHTML = cHum;

        var lat= data.coord.lat;
        var lon= data.coord.lon;


       var fiveDay= "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+ weatherKey;

       fetch(fiveDay)
       .then(function (response) {
   return response.json();
 })
   .then(function (data) {
     console.log(data);
     var uvI= data.current.uvi;
     console.log(uvI);
     document.getElementById("Uvi").innerHTML = uvI;

    });



});
} 

// when searching city name presented with city name, the date, weather condotions and UV index



// uv indez when clicked shows color that indicates  weather con favoriabilty favorable, moderate or severe

// view future to see html for 5 day forcast