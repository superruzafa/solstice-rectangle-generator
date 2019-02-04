(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["solstice"] = factory();
	else
		root["solstice"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinates */ "./src/Coordinates.js");
/* harmony import */ var _solstice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solstice */ "./src/solstice.js");



class App {
  constructor() {
    this._coordinates = document.getElementById('coordinates');
    this._northAzimuth = document.getElementById('north-azimuth');
    this._k = document.getElementById('k');

    this._coordinates.addEventListener('keydown', (e) =>
      this._onCoordinatesKeydown(e)
    );
  }

  _onCoordinatesKeydown(e) {
    if (e.keyCode === 13) {
      const coordinates = _Coordinates__WEBPACK_IMPORTED_MODULE_0__["default"].parse(this._coordinates.value);
      const values = Object(_solstice__WEBPACK_IMPORTED_MODULE_1__["fromCoordinates"])(coordinates);
      this._coordinates.value = values.coordinates.toString();
      this._northAzimuth.value = values.azimuth.toString();
      this._k.value = values.k.toString();
    }
  }
}


/***/ }),

/***/ "./src/Coordinates.js":
/*!****************************!*\
  !*** ./src/Coordinates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coordinates; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


class Coordinates {
  constructor(lat, long) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["readonly"])(this, 'lat', lat);
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["readonly"])(this, 'long', long);
  }

  static parse(string) {
    const regex = /^\s*([+-]?\d+(?:\.\d+)?)º?(?:\s*[,\s]\s*([+-]?\d+(?:\.\d+)?)º?)?\s*$/;
    const matches = string.match(regex);
    if (!matches) {
      return null;
    }
    const lat = parseFloat(matches[1]);
    const long = matches[2] === undefined ? 0.0 : parseFloat(matches[2]);
    return new Coordinates(lat, long);
  }

  toString() {
    const { lat, long } = this;
    return `${lat}º, ${long}º`;
  }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./src/solstice.js":
/*!*************************!*\
  !*** ./src/solstice.js ***!
  \*************************/
/*! exports provided: fromCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCoordinates", function() { return fromCoordinates; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


const ECLIPTIC = 23.44
const SIN_ECLIPTIC = Object(_util__WEBPACK_IMPORTED_MODULE_0__["sindeg"])(ECLIPTIC);

function fromCoordinates(coordinates) {
  const { lat } = coordinates;
  const cosAzimuth = SIN_ECLIPTIC / Object(_util__WEBPACK_IMPORTED_MODULE_0__["cosdeg"])(lat);
  const azimuth = Math.acos(cosAzimuth);
  return {
    coordinates,
    azimuth: Object(_util__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(azimuth),
    k: Math.tan(azimuth)
  };
}


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: readonly, Pi2, modulo, deg2rad, rad2deg, sindeg, cosdeg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pi2", function() { return Pi2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sindeg", function() { return sindeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosdeg", function() { return cosdeg; });
function readonly(object, prop, value) {
  Object.defineProperty(object, prop, {
    enumerable: true,
    configurable: false,
    writeable: false,
    value
  });
}

const Pi2 = Math.PI * 2;

function modulo(value, mod) {
  return ((value % mod) + mod) % mod;
}

function deg2rad(deg) {
  return modulo(deg * Pi2 / 360, Pi2);
}

function rad2deg(rad) {
  return modulo(rad * 360 / Pi2, 360);
}

function sindeg(deg) {
  return Math.sin(deg2rad(deg));
}

function cosdeg(deg) {
  return Math.cos(deg2rad(deg));
}


/***/ })

/******/ });
});
//# sourceMappingURL=solstice.js.map