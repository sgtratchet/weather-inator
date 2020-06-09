var cityName ="";
var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";

var currentWeather = function(location){
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
    fetch(currentWeatherAPI).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    });
};

var userLocation = function(){
    console.log("function was called");
};
userLocation();
currentWeather("springville");