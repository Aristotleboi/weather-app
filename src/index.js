const submitButton = document.getElementById('submit')
let citySearch = 'Vancouver';
let weatherObject = getWeather()

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=65d57bbf714db2778c05eb37107c6320&units=metric`)
        let weatherData = await response.json()
        weatherObject = weatherData
    } catch (err) {
        console.log('error')
        console.log(err)
    }
}


weatherObject.then(function() {
    console.log(weatherObject)
    console.log(weatherObject.weather[0].description)
})

submitButton.addEventListener('click', () => {
    getUserSearch()
    getWeather()
    .then(function(){
        displayWeather()
    })
})

function displayWeather() {
    let weatherDescription = document.getElementById('weather-description');
    weatherDescription.innerText = weatherObject.weather[0].description
}

function getUserSearch() {
    citySearch = document.getElementById('city-search').value;
    document.getElementById('city-search').value = '';
}

