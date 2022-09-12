/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9VmFuY291dmVyJkFQUElEPTY1ZDU3YmJmNzE0ZGIyNzc4YzA1ZWIzNzEwN2M2MzIwJnVuaXRzPW1ldHJpYycpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLm1haW4pXG4gICAgfSlcbn1cblxuZ2V0V2VhdGhlcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9