/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHdlYXRoZXJPYmplY3QgPSBnZXRXZWF0aGVyKClcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVZhbmNvdXZlciZBUFBJRD02NWQ1N2JiZjcxNGRiMjc3OGMwNWViMzcxMDdjNjMyMCZ1bml0cz1tZXRyaWMnKVxuICAgICAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgd2VhdGhlck9iamVjdCA9IHdlYXRoZXJEYXRhXG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuXG53ZWF0aGVyT2JqZWN0LnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iamVjdClcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9