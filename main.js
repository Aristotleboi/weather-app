/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLFdBQVc7QUFDckc7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JylcbmxldCBjaXR5U2VhcmNoID0gJ1ZhbmNvdXZlcic7XG5sZXQgd2VhdGhlck9iamVjdCA9IGdldFdlYXRoZXIoKVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5U2VhcmNofSZBUFBJRD02NWQ1N2JiZjcxNGRiMjc3OGMwNWViMzcxMDdjNjMyMCZ1bml0cz1tZXRyaWNgKVxuICAgICAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgd2VhdGhlck9iamVjdCA9IHdlYXRoZXJEYXRhXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxud2VhdGhlck9iamVjdC50aGVuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJPYmplY3QpXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxufSlcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFVzZXJTZWFyY2goKVxuICAgIGdldFdlYXRoZXIoKVxuICAgIC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpc3BsYXlXZWF0aGVyKClcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoKSB7XG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvblxufVxuXG5mdW5jdGlvbiBnZXRVc2VyU2VhcmNoKCkge1xuICAgIGNpdHlTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gnKS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gnKS52YWx1ZSA9ICcnO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=