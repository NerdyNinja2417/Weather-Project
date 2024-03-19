fetch("http://api.weatherapi.com/v1/forecast.json?key=20cceeb07e274782938151914241803&q=silver city&days=8&aqi=no&alerts=no")
  .then(response => response.json())
  .then((data) => {
   const weathers = data.forecast.forecastday
   const container = document.getElementById("container")

   weathers.forEach((weather) => {
    const card = document.createElement("div")
    card.classList.add("Weather-Card")

    const HighestTemp = document.createElement("p")
    const LowestTemp = document.createElement("p")
    const Wind = document.createElement("p")
    const thedate = document.createElement("p")
    const rainChance = document.createElement("p")
    const Image = document.createElement("img")

    HighestTemp.textContent = `${weather.day.maxtemp_f}`
    LowestTemp.textContent = `${weather.day.mintemp_f}`
    Wind.textContent =`${weather.day.maxwind_mph}`
    thedate.textContent = `${weather.date}`
    rainChance.textContent = `${weather.day.daily_chance_of_rain}`
    Image.src = weather.day.condition.icon
    Image.alt = "Weather Icon"


    card.appendChild(thedate)
    card.appendChild(HighestTemp)
    card.appendChild(LowestTemp)
    card.appendChild(Wind)
    card.appendChild(rainChance)
    card.appendChild(Image)
    container.appendChild(card)




   })
   .catch(err => console.error(err));
  })
  