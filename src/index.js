let weatherObject = getWeather()

async function getWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&APPID=65d57bbf714db2778c05eb37107c6320&units=metric')
        let weatherData = await response.json()
        weatherObject = weatherData
    } catch(err) {
        console.log(err)
    }
}


weatherObject.then(function() {
    console.log(weatherObject)
    console.log(weatherObject.weather[0].description)
})
