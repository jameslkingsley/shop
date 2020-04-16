(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/wire"],{

/***/ "./resources/js/wire.js":
/*!******************************!*\
  !*** ./resources/js/wire.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
window.Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");

(function () {
  this.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    forceTLS: true,
    broadcaster: 'pusher',
    key: "3e1017ab0bb9f034a416",
    cluster: "eu"
  });
}).call(window);

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/wire.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/james/Documents/Code/shop/resources/js/wire.js */"./resources/js/wire.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);