import "./style.css"

const submitButton = document.getElementById('submit')
let modal = document.querySelector('.modal');
let wrapper = document.querySelector('.wrapper')
let citySearch = 'Vancouver';
let weatherObject = ''

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=65d57bbf714db2778c05eb37107c6320&units=metric`)
        if (response.ok == false) {
            return weatherObject = "error"
        } else {
            let weatherData = await response.json()
            weatherObject = await weatherData
        }
    } catch (err) {
        console.log('error')
        console.log(err)
    }
}

submitButton.addEventListener('click', () => {
    activateClass(modal)
    getUserSearch();
    getWeather()
    .then(function(){
        console.log(weatherObject)
        displayWeather()
        if (!wrapper.hasAttribute('.active')) activateClass(wrapper)
        setTimeout(clearActivateClass(modal), 250)
    })
})

function displayWeather() {
    if (weatherObject === 'error') {
        console.log("weather load error")
    } else {
        let weatherDescription = document.getElementById('weather-description');
        let cityDisplay = document.getElementById('city')
        let temperature = document.getElementById('temperature')
        let humidity = document.getElementById('humidity');
        let wind = document.getElementById('wind');
        weatherDescription.innerText = weatherObject.weather[0].description
        temperature.innerHTML = weatherObject.main.feels_like + '&deg;'
        cityDisplay.innerText = weatherObject.name
        humidity.innerText = 'Humidity: ' + weatherObject.main.humidity;
        wind.innerText = 'Wind Speed: ' + weatherObject.wind.speed + '/KMH'
    }
}

function getUserSearch() {
    citySearch = document.getElementById('city-search').value;
    document.getElementById('city-search').value = '';
}

function clearActivateClass(element) {
    element.classList.remove('active');
}

function activateClass(element) {
    element.classList.add('active');
}



