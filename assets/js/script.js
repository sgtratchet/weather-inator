var cityBtnEl =document.querySelector("#city-button");
var userInputEl = document.querySelector("#user-input");
var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
var weatherContainerEl = document.querySelector('#weather-container');
var weatherSearchTerm = document.querySelector('#weather-search');


var currentWeather = function(location){
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
    fetch(currentWeatherAPI).then(function(response){
        response.json().then(function(data){
            displayWeather(data, location)
            // console.log(data);
        })
    });
};
var formSubmitHandler = function(event){
    event.preventDefault();
    var cityLocation = userInputEl.value.trim();

    if (cityLocation){
        currentWeather(cityLocation);
        userInputEl.value = "";
    } else {
        alert('Please enter a city name')
    }
    // console.log(event);
};

var displayWeather = function(weather, inputCity){
    weatherContainerEl.textContent ="";
    weatherSearchTerm.textContent = inputCity;

    var weatherTemp = weather.main.temp;
    var weatherHumidity = weather.main.humidity;
    var weatherWind = weather.wind.speed;
    // var weatherIcon = weather.weather.0.icon;
    console.log(weatherTemp);
    console.log(weatherHumidity);
    console.log(weather);
    console.log(inputCity);
}


cityBtnEl.addEventListener("click",formSubmitHandler);