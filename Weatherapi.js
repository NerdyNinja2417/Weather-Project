

    fetch("http://api.weatherapi.com/v1/forecast.json?key=20cceeb07e274782938151914241803&q=mexico city&days=7&aqi=no&alerts=no")
    .then(response => response.json())
    .then(data => {
        const weathers = data.forecast.forecastday;
        const container = document.getElementById("container");

         weathers.forEach((weather) => {

        

        const card = document.createElement("div");
        card.classList.add("weather-card");

        const HighestTemp = document.createElement("p");
        const LowestTemp = document.createElement("p");
        const winds = document.createElement("p");
        const rainChance = document.createElement("p");
        const thedate = document.createElement("p");
        const image = document.createElement("img");

        HighestTemp.textContent = `Highest Temp: ${weather.day.maxtemp_f}`;
        LowestTemp.textContent = `Lowest Temp: ${weather.day.mintemp_f}`;
        winds.textContent = `Wind speed: ${weather.day.maxwind_mph}`
        rainChance.textContent = `Rain Chance: ${weather.day.daily_chance_of_rain}`;
        thedate.textContent = `Date: ${weather.date}`
        image.src = weather.day.condition.icon;
        image.alt = "Weather Icon";

        card.appendChild(image);
        card.appendChild(thedate);
        card.appendChild(HighestTemp);
        card.appendChild(LowestTemp);
        card.appendChild(winds);
        card.appendChild(rainChance);
        container.appendChild(card);
    })
    .catch(err => console.error(err));
 })


