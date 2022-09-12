async function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&APPID=65d57bbf714db2778c05eb37107c6320&units=metric')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.main)
    })
}

getWeather()