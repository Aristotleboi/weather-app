/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const submitButton = document.getElementById('submit')
let citySearch = 'Vancouver';
let weatherObject = ''

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=65d57bbf714db2778c05eb37107c6320&units=metric`)
        if (response.ok == false) {
            console.log('error wrong city')
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
    getUserSearch();
    getWeather()
    .then(function(){
        displayWeather()
    })
})

function displayWeather() {
    let weatherDescription = document.getElementById('weather-description');
    let cityDisplay = document.getElementById('city')
    let temperature = document.getElementById('temperature')
    weatherDescription.innerText = weatherObject.weather[0].description
    temperature.innerText = weatherObject.main.feels_like;
    cityDisplay.innerText = weatherObject.name

}

function getUserSearch() {
    citySearch = document.getElementById('city-search').value;
    document.getElementById('city-search').value = '';
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLFdBQVc7QUFDckc7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG5sZXQgY2l0eVNlYXJjaCA9ICdWYW5jb3V2ZXInO1xubGV0IHdlYXRoZXJPYmplY3QgPSAnJ1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5U2VhcmNofSZBUFBJRD02NWQ1N2JiZjcxNGRiMjc3OGMwNWViMzcxMDdjNjMyMCZ1bml0cz1tZXRyaWNgKVxuICAgICAgICBpZiAocmVzcG9uc2Uub2sgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciB3cm9uZyBjaXR5JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgd2VhdGhlck9iamVjdCA9IGF3YWl0IHdlYXRoZXJEYXRhXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldFVzZXJTZWFyY2goKTtcbiAgICBnZXRXZWF0aGVyKClcbiAgICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgICBkaXNwbGF5V2VhdGhlcigpXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKCkge1xuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBjaXR5RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JylcbiAgICBsZXQgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKVxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSB3ZWF0aGVyT2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcbiAgICBjaXR5RGlzcGxheS5pbm5lclRleHQgPSB3ZWF0aGVyT2JqZWN0Lm5hbWVcblxufVxuXG5mdW5jdGlvbiBnZXRVc2VyU2VhcmNoKCkge1xuICAgIGNpdHlTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gnKS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gnKS52YWx1ZSA9ICcnO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=