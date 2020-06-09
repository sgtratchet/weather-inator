var cityBtnEl =document.querySelector("#city-button");
var userInputEl = document.querySelector("#user-input")
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
var formSubmitHandler = function(event){
    event.preventDefault();
    var cityLocation = userInputEl.value.trim();

    if (cityLocation){
        currentWeather(cityLocation);
        userInputEl.value = "";
    } else {
        alert('Please enter a city name')
    }
    console.log(event);
};

// currentWeather("springville");

cityBtnEl.addEventListener("click",formSubmitHandler);