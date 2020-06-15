var cityBtnEl =document.querySelector("#city-button");
var userInputEl = document.querySelector("#user-input");
var weatherContainerEl = document.getElementById('weather-container');
var weatherSearchTerm = document.querySelector('#weather-search');
var displayWeatherSpan = document.getElementById('display-weather');
var fiveDayContainer = document.getElementById('five-day-container');
var recentSearchContainer = document.getElementById('recent-search');
var recentButtonIndex = 0;

var currentWeather = function(location){
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
    fetch(currentWeatherAPI).then(function(response){
        response.json().then(function(data){
            displayWeather(data, location)
            // console.log(data);
        })
    });
};
var fiveDayForcast = function(location){
    var fiveDayForecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=803fa34dbd4909977dd765eb002a2987";
    fetch(fiveDayForecastAPI).then(function(response){
        response.json().then(function(data){
            displayFiveDay(data, location)
            // console.log(data);
        })
    });
};

var formSubmitHandler = function(event){
    event.preventDefault();
    var cityLocation = userInputEl.value.trim();

    if (cityLocation){
        currentWeather(cityLocation);
        fiveDayForcast(cityLocation);
        displayRecent(cityLocation);
        userInputEl.value = "";
        recentButtonIndex++;
    } else {
        alert('Please enter a city name')
    }
    // console.log(event);
};

var recentButtonHandler = function(){
    var recentLocation = event.target.getAttribute("location");
    currentWeather(recentLocation);
    fiveDayForcast(recentLocation);
};

var displayWeather = function(weather, inputCity){
    weatherContainerEl.textContent ="";
    weatherSearchTerm.textContent = inputCity;
    weatherIcon = weather.weather[0].icon;
    var weatherIconImg = document.createElement("img");
    weatherIconImg.src = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
    weatherSearchTerm.appendChild(weatherIconImg);
    

    var weatherTemp = weather.main.temp;
    var weatherHumidity = weather.main.humidity;
    var weatherWind = weather.wind.speed;
    var weatherType = weather.weather.description;

    console.log(weather);
    // console.log(inputCity);

    var weatherContainerTemp = document.createElement('P');
        weatherContainerTemp.innerHTML = "Temperature: " + weatherTemp;
        weatherContainerEl.appendChild(weatherContainerTemp);

    var weatherContainerHumidity = document.createElement('P');
        weatherContainerHumidity.innerHTML = "Humidity: " + weatherHumidity;
        weatherContainerEl.appendChild(weatherContainerHumidity);

    var weatherContainerWind = document.createElement('P');
        weatherContainerWind.innerHTML = "Wind Speed: " + weatherWind;
        weatherContainerEl.appendChild(weatherContainerWind);

};
var displayFiveDay = function(fiveDay, inputCity){
    fiveDayContainer.textContent = "";
    inputCity.trim;
    console.log(fiveDay);

    for(var i=0; i<40;i=i+8){
        var fiveDayCard = document.createElement("div");
            fiveDayCard.setAttribute("class", "card justify-space-between col-sm");
            // fiveDayCard.setAttribute("style", "width: 18rem;");
            fiveDayContainer.appendChild(fiveDayCard);

        var fiveDayDate = fiveDay.list[i].dt_txt;
        
        fiveDayIcon = fiveDay.list[i].weather[0].icon;
        var fiveDayIconImg = document.createElement("img");
        fiveDayIconImg.src = "http://openweathermap.org/img/wn/" + fiveDayIcon + "@2x.png";
        fiveDayCard.appendChild(fiveDayIconImg);

        var fiveDayTemp = fiveDay.list[i].main.temp;
            fiveDayTemp = Math.round(fiveDayTemp);
    
        var fiveDayHumid = fiveDay.list[i].main.humidity;

        var fiveDayInfoDate = document.createElement("P");
            fiveDayInfoDate.innerHTML = fiveDayDate;
            fiveDayCard.appendChild(fiveDayInfoDate);

        var fiveDayInfoTemp = document.createElement("P");
            fiveDayInfoTemp.innerHTML = "Temp: " + fiveDayTemp;
            fiveDayCard.appendChild(fiveDayInfoTemp);

        var fiveDayInfoHumid = document.createElement("P");
            fiveDayInfoHumid.innerHTML = "Humidity: " + fiveDayHumid;
            fiveDayCard.appendChild(fiveDayInfoHumid);
    }
}
var displayRecent = function(location){

    var recentSearch = document.createElement("button");
        recentSearch.setAttribute('class', 'form-control btn btn-outline-secondary')
        recentSearch.setAttribute('id', recentButtonIndex);
        recentSearch.innerHTML = location;
        recentSearch.setAttribute('location', location);
        recentSearch.addEventListener("click", recentButtonHandler);
        recentSearchContainer.appendChild(recentSearch);
        

}
cityBtnEl.addEventListener("click",formSubmitHandler);