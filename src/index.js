import "./style.css"

const submitButton = document.getElementById('submit')
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
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
    activateModal()
    getUserSearch();
    getWeather()
    .then(function(){
        displayWeather()
        setTimeout(clearModal, 500)
    })
})

function displayWeather() {
    if (weatherObject === 'error') {
        console.log("weather load error")
    } else {
        let weatherDescription = document.getElementById('weather-description');
        let cityDisplay = document.getElementById('city')
        let temperature = document.getElementById('temperature')
        weatherDescription.innerText = weatherObject.weather[0].description
        temperature.innerText = weatherObject.main.feels_like;
        cityDisplay.innerText = weatherObject.name
    }
}

function getUserSearch() {
    citySearch = document.getElementById('city-search').value;
    document.getElementById('city-search').value = '';
}

function clearModal() {
    modal.classList.remove('active');
}

function activateModal() {
    modal.classList.add('active');
}



