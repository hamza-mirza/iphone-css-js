/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//screens
const lockScreen = document.querySelector(".lock-screen");
const passcodeScreen = document.querySelector(".passcode");
const homeScreen = document.querySelector(".home-screen");
const welcomeScreen = document.querySelector(".welcome");
const appScreen = document.querySelector(".app-screen");

//iPhone buttons
const lockButton = document.querySelector(".power");
const homeButton = document.querySelector(".home");

//passcode buttons
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");

//passcode dots
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");

//other
const iconsContainer = document.querySelector(".icons-container");
const openWelcome = document.querySelector(".open-welcome");
const openApp = document.querySelector(".open-app");

//class names
const homeScreenVisible = "home-visible";
const lockScreenVisible = "lock-visible";
const passcodeScreenVisible = "passcode-visible";
const animateIcons = "animate-icons";
const dotsFill = "dots-filling";
const welcomeVisible = "welcome-visible";
const appVisible = "app-screen-visible";

// ============= click events ===================== //

const eventListen = (el, target, classname) => {
    el.addEventListener("click", () => {
        target.classList.add(classname);
    });
}

eventListen(lockButton, lockScreen, lockScreenVisible);
eventListen(homeButton, passcodeScreen, passcodeScreenVisible);
eventListen(openWelcome, welcomeScreen, welcomeVisible);
eventListen(openApp, appScreen, appVisible);

// lockButton.addEventListener("click", () => {
//     lockScreen.classList.add(lockScreenVisible);
// });

// homeButton.addEventListener("click", () => {
//     passcodeScreen.classList.add(passcodeScreenVisible);
// });



const fillDots = (num, dot, classname) => {
    num.addEventListener("click", () => {
        dot.classList.add(classname);
        if (num == number4) {
            homeScreen.classList.add(homeScreenVisible);
            iconsContainer.classList.add(animateIcons);
        };
    });
};

fillDots(number1, dot1, dotsFill);
fillDots(number2, dot2, dotsFill);
fillDots(number3, dot3, dotsFill);
fillDots(number4, dot4, dotsFill);


/***/ })
/******/ ]);