/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PledgePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PledgePopup */ \"./src/components/PledgePopup.js\");\n\n\nconst About = () => {\n  const about = document.createElement(\"section\");\n  about.classList.add(\"card\");\n  about.classList.add(\"about\");\n  about.innerHTML = `\n  <h3 class=\"heading-secondary\">About this project</h3>\n    <p class=\"card__text\">\n        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish\n        platform that elevates your screen to a more comfortable viewing height.\n        Placing your monitor at eye level has the potential to improve your posture\n        and make you more comfortable while at work, helping you stay focused on the\n        task at hand.\n    </p>\n    <p class=\"card__text\">\n        Featuring artisan craftsmanship, the simplicity of design\n        creates extra desk space below your computer to allow notepads, pens, and\n        USB sticks to be stored under the stand.\n    </p>\n  \n    <div class=\"card card--pledge\">\n        <h3 class=\"heading-tertiary\">Bamboo Stand </h3> \n        <h4 class=\"heading-light\">Pledge $25 or more</h4> \n        <div class=\"card__text\">\n            Black Special Edition computer stand and a personal thank you. You’ll be\n            added to our Backer member list. Shipping is included.\n        </div>\n        <div class=\"pledge__cta-flex\">\n            <p class=\"card__text flex-row\">\n                <span class=\"span-lg\">101</span> left\n            </p>  \n            <button class=\"button button--cta\">Select Reward</button>\n        </div>\n    </div>\n\n    <div class=\"card card--pledge\">\n        <h3 class=\"heading-tertiary\">Black Edition Stand</h3> \n        <h4 class=\"heading-light\">Pledge $75 or more</h4> \n        <div class=\"card__text\">\n            Black Special Edition computer stand and a personal thank you. You’ll be\n            added to our Backer member list. Shipping is included.\n        </div>\n        <div class=\"pledge__cta-flex\">\n            <p class=\"card__text flex-row\">\n                <span class=\"span-lg\">64</span> left\n            </p>  \n            <button class=\"button button--cta\">Select Reward</button>\n        </div>\n    </div>\n\n    \n    <div class=\"card card--pledge card--disabled\">\n        <h3 class=\"heading-tertiary\">Mahogany Special Edition</h3> \n        <h4 class=\"heading-light\">Pledge $200 or more</h4> \n        <div class=\"card__text\">\n            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added\n            to our Backer member list. Shipping is included.\n        </div>\n        <div class=\"pledge__cta-flex\">\n            <p class=\"card__text flex-row\">\n                <span class=\"span-lg\">0</span> left\n            </p>  \n            <button class=\"button button--cta button--disabled\">Out of Stock</button>\n        </div>\n    </div>\n  `;\n  document.querySelector(\"#container\").appendChild(about);\n  document.querySelectorAll(\".about .button--cta\").forEach(btn => btn.addEventListener(\"click\", () => {\n    (0,_PledgePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/About.js?");

/***/ }),

/***/ "./src/components/CTA.js":
/*!*******************************!*\
  !*** ./src/components/CTA.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_logo_mastercraft_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo-mastercraft.svg */ \"./src/images/logo-mastercraft.svg\");\n/* harmony import */ var _PledgePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PledgePopup */ \"./src/components/PledgePopup.js\");\n\n\n\nconst CTA = () => {\n  const cta = document.createElement(\"section\");\n  cta.classList.add(\"card\");\n  cta.classList.add(\"cta-box\");\n  cta.innerHTML = `\n  <img src=${_images_logo_mastercraft_svg__WEBPACK_IMPORTED_MODULE_0__.default} class=\"card__logo\"/>\n    <h3 class=\"heading-primary\">Mastercraft Bamboo Monitor Riser</h3>\n    <p class=\"card__text\">A beautiful &amp;\n    handcrafted monitor stand to reduce neck and eye strain.</p>\n    <div class=\"card__buttons\">\n      <button class=\"button button--cta\"> Back this project</button>\n      <button class=\"button button--bookmark\">\n        <div class=\"button--bookmark__icon\">\n          <i class=\"fas fa-bookmark\"></i>\n        </div>\n        <span>Bookmark</span>\n      </button>\n    </div>`;\n  document.querySelector(\"#container\").appendChild(cta);\n  const button = document.querySelector(\".button--bookmark\");\n  button.addEventListener(\"click\", () => {\n    document.querySelector(\".button--bookmark span\").innerText = \"Bookmarked\";\n    document.querySelector(\".button--bookmark span\").classList.add(\"active\");\n    document.querySelector(\".button--bookmark__icon\").classList.add(\"button--bookmark__icon--active\");\n  }); //CTA opens pledge popup\n\n  document.querySelector(\".cta-box .button--cta\").addEventListener(\"click\", () => {\n    (0,_PledgePopup__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTA);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/CTA.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.svg */ \"./src/images/logo.svg\");\n\n\nconst Header = () => {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n  header.innerHTML = `\n    <nav class=\"navbar\">\n      <img src=${_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__.default} class=\"navbar__logo\" />\n\n      <i class=\"fas fa-bars fa-2x navbar__burger-icon\" id=\"burgerMenu\"></i>\n      <ul class=\"navbar__nav navbar__nav--hidden\" id=\"topnav\">\n        <li class=\"navbar__nav-item\">About</li>\n        <li class=\"navbar__nav-item\">Discover</li>\n        <li class=\"navbar__nav-item\">Get Started</li>\n        \n      </ul>\n    </nav>`;\n  document.querySelector(\"#container\").appendChild(header);\n  document.querySelector(\"#burgerMenu\").addEventListener(\"click\", () => {\n    document.querySelector(\"#topnav\").classList.toggle(\"navbar__nav--hidden\");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PledgePopup.js":
/*!***************************************!*\
  !*** ./src/components/PledgePopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ThanksMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThanksMessage */ \"./src/components/ThanksMessage.js\");\n\n\nconst PledgePopup = () => {\n  const pledgePopup = document.createElement(\"section\");\n  pledgePopup.classList.add(\"pledgePopup\");\n  pledgePopup.id = \"popup\";\n  pledgePopup.innerHTML = `\n        <div class=\"card\" id=\"pledgePopup\";>\n            <h1 class=\"card__title heading-secondary\">Back this project</h1> \n            <p class=\"card__text\">\n                Want to support us in bringing Mastercraft Bamboo Monitor\n                Riser out in the world?\n            </p> \n            \n            <input id = \"no_reward\" type=\"radio\" name=\"pledge-selection\"/>\n            <label for = \"no_reward\" class=\"ml-md\">\n                <div id=\"card-no-reward\" class=\"card card--pledge\">\n                    <div class=\"flex-row mb-md\">\n                    <div class=\"checkbox\"></div>\n                        <div class=\"flex-col\">\n                            <h1 class=\"heading-tertiary ml-md\">Pledge with no reward</h1>\n                        </div>\n                    </div>\n                    <p class=\"card__text\">\n                        Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.\n                    </p>\n                    <form class=\"pledgePopup__pledge-form\">\n                        \n                        <p class=\"card__text\">Enter your pledge</p>\n                        <div class=\"card__buttons\">\n                            <input type=\"text\" class=\"pledgePopup__input\"/><button class=\"button button--cta pledgePopup__button\">Continue</button>\n                        </div>\n                    </form>                   \n                </div> \n            </label>\n\n            <input id = \"bamboo\" type=\"radio\" name=\"pledge-selection\"/>\n            <label for = \"bamboo\" class=\"ml-md\">\n                <div id=\"bamboo-card\" class=\"card card--pledge\">\n                    <div class=\"flex-row mb-md\">\n                        <div class=\"checkbox\"></div>\n                        <div class=\"flex-col ml-md\">\n                            <h1 class=\"heading-tertiary\">Bamboo Stand</h1>\n                            <h2 class=\"heading-light mb-xs\"> Pledge $25 or more</h2>\n                        </div>\n                    </div>\n                    <p class=\"card__text\">\n                        You get an ergonomic stand made of natural bamboo. You've helped us launch our\n                        promotional campaign, and you’ll be added to a special Backer member list.\n                    </p>\n                    <div class=\"flex-row pledgePopup__remaining\">\n                        <span class=\"span-md\">101</span> left\n                    </div>\n                    <form class=\"pledgePopup__pledge-form\">\n                        \n                        <p class=\"card__text\">Enter your pledge</p>\n                        <div class=\"card__buttons\">\n                            <input type=\"text\" class=\"pledgePopup__input\"/><button class=\"button button--cta pledgePopup__button\">Continue</button>\n                        </div>\n                    </form>            \n                </div> \n            </label>\n\n            <input id = \"blackEdition\" type=\"radio\" name=\"pledge-selection\"/>\n            <label for = \"blackEdition\" class=\"ml-md\">\n                <div id=\"card-black\" class=\"card card--pledge\">\n                    <div class=\"flex-row mb-md\">\n                    <div class=\"checkbox\"></div>\n                        <div class=\"flex-col ml-md\">\n                            <h1 class=\"heading-tertiary\">Black Edition Stand </h1>\n                            <h2 class=\"heading-light mb-xs\"> Pledge $75 or more</h2>\n                        </div>\n                    </div>\n                    <p class=\"card__text\">\n                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. \n                    </p>\n                    <div class=\"flex-row pledgePopup__remaining\">\n                    <span class=\"span-md\">64</span> left\n                    </div>\n                    <form class=\"pledgePopup__pledge-form\">\n                        \n                    <p class=\"card__text\">Enter your pledge</p>\n                    <div class=\"card__buttons\">\n                        <input type=\"text\" class=\"pledgePopup__input\"/><button class=\"button button--cta pledgePopup__button\">Continue</button>\n                    </div>\n                </form>            \n                </div> \n            </label>\n\n            <input id = \"mahoganyEdition\" name=\"pledge-selection\" type=\"radio\"/>\n            <label for = \"mahoganyEdition\" class=\"ml-md\">\n                <div id=\"card-mahogany\" class=\"card card--pledge card--disabled\">\n                    <div class=\"flex-row mb-md\">\n                    <div class=\"checkbox\"></div>\n                        <div class=\"flex-col ml-md\">\n                            <h1 class=\"heading-tertiary\">Mahogany Edition Stand </h1>\n                            <h2 class=\"heading-light mb-xs\"> Pledge $200 or more</h2>\n                        </div>\n                    </div>\n                    <p class=\"card__text\">\n                        You get two  Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. \n                        You’ll be added to our Backer member list. Shipping is included. \n                    </p>\n                    <div class=\"flex-row pledgePopup__remaining\">\n                        <span class=\"span-md\">0</span> left\n                    </div>\n                    <form class=\"pledgePopup__pledge-form\">\n                        \n                        <p class=\"card__text\">Enter your pledge</p>\n                        <div class=\"card__buttons\">\n                            <input type=\"text\" class=\"pledgePopup__input\"/><button class=\"button button--cta pledgePopup__button\">Continue</button>\n                        </div>\n                    </form>                               \n                </div>   \n            </label>\n        </div>\n      `;\n  document.querySelector(\"#container\").appendChild(pledgePopup);\n  document.querySelectorAll(\".pledgePopup__button\").forEach(btn => {\n    btn.addEventListener(\"click\", e => {\n      e.preventDefault();\n      (0,_ThanksMessage__WEBPACK_IMPORTED_MODULE_0__.default)();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PledgePopup);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/PledgePopup.js?");

/***/ }),

/***/ "./src/components/Summary.js":
/*!***********************************!*\
  !*** ./src/components/Summary.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Summary = () => {\n  const summary = document.createElement(\"section\");\n  summary.classList.add(\"card\");\n  summary.classList.add(\"summary\");\n  summary.innerHTML = `\n    <ul>\n        <li>\n            <h3 class=\"summary__heading\">$89,914</h3> <span>of $100,000 backed</span>\n        </li>\n        <li>\n            <h3 class=\"summary__heading\">5,007</h3> <span>total backers</span>\n        </li>\n        <li>\n            <h3 class=\"summary__heading\">56</h3> <span>days left</span>\n        </li>\n    </ul>\n    <div class=\"summary__progress\">\n        <div class=\"summary__progress--fill\"></div>\n    </div>\n    `;\n  document.querySelector(\"#container\").appendChild(summary);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Summary);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/Summary.js?");

/***/ }),

/***/ "./src/components/ThanksMessage.js":
/*!*****************************************!*\
  !*** ./src/components/ThanksMessage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ThanksMessage = () => {\n  const target = document.querySelector(\"#pledgePopup\");\n  target.innerHTML = `\n  <div class=\"text-center\"><i class=\"fas fa-check-circle fa-4x\"></i></div>\n  <h1 class=\"heading-tertiary text-center\">Thanks for your support</h1>\n  <p class=\"card__text text-center\">\n    Your pledge brings us one step closer to sharing\n    Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our\n    campaign is completed.\n  </p>\n  <button id=\"confirm\" class=\"button button--cta m-auto\">Got it!</button>\n`;\n  document.querySelector(\"#confirm\").addEventListener(\"click\", () => {\n    const popup = document.querySelector(\"#popup\");\n    popup.parentElement.removeChild(popup);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThanksMessage);\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/components/ThanksMessage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CTA */ \"./src/components/CTA.js\");\n/* harmony import */ var _components_Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Summary */ \"./src/components/Summary.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/About */ \"./src/components/About.js\");\n/* harmony import */ var _components_PledgePopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PledgePopup */ \"./src/components/PledgePopup.js\");\n\n\n\n\n\n\n(0,_components_Header__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_CTA__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_components_Summary__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_components_About__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/sass/main.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/sass/main.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_image_hero_mobile_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/image-hero-mobile.jpg */ \"./src/images/image-hero-mobile.jpg\");\n/* harmony import */ var _images_image_hero_desktop_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/image-hero-desktop.jpg */ \"./src/images/image-hero-desktop.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_image_hero_mobile_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_image_hero_desktop_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes fadein {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 100%;\\n  }\\n}\\n.heading-navbar {\\n  font-size: 1.5rem;\\n}\\n\\n.heading-primary {\\n  font-size: 2rem;\\n  margin: 1rem 2rem;\\n  font-weight: 700;\\n}\\n\\n.heading-secondary {\\n  font-size: 1.8rem;\\n  margin: 0 0 2rem 0;\\n  font-weight: 700;\\n}\\n\\n.heading-tertiary {\\n  font-size: 1.5rem;\\n  margin: 0 0 2rem 0;\\n  font-weight: 600;\\n  margin: 0.5rem 0;\\n}\\n\\n.heading-light {\\n  color: #3cb4ac;\\n  font-weight: 400;\\n  font-size: 1.5rem;\\n  margin-bottom: 2.5rem;\\n}\\n\\n.span-md {\\n  font-size: 2.5rem;\\n  color: #000;\\n  font-weight: 700;\\n  margin-right: 1rem;\\n}\\n\\n.span-lg {\\n  font-size: 4rem;\\n  color: #000;\\n  font-weight: 700;\\n  margin-right: 1rem;\\n}\\n\\n.fa-check-circle {\\n  color: #3cb4ac;\\n  margin-bottom: 2rem;\\n}\\n\\n.m-auto {\\n  margin-left: auto !important;\\n  margin-right: auto !important;\\n  margin-top: auto !important;\\n  margin-bottom: auto !important;\\n}\\n\\n.mb-xs {\\n  margin-bottom: 1.2rem;\\n}\\n\\n.ml-xs {\\n  margin-left: 1.2rem;\\n}\\n\\n.mr-xs {\\n  margin-right: 1.2rem;\\n}\\n\\n.mt-xs {\\n  margin-top: 1.2rem;\\n}\\n\\n.mb-sm {\\n  margin-bottom: 1.8rem;\\n}\\n\\n.ml-sm {\\n  margin-left: 1.8rem;\\n}\\n\\n.mr-sm {\\n  margin-right: 1.8rem;\\n}\\n\\n.mt-sm {\\n  margin-top: 1.8rem;\\n}\\n\\n.ml-md {\\n  margin-left: 2.5rem;\\n}\\n\\n.mb-md {\\n  margin-bottom: 2.5rem;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.d-block {\\n  display: block;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  list-style-type: none;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  height: 100%;\\n}\\n\\nbody {\\n  font-family: \\\"Commissioner\\\", sans-serif;\\n  height: 100%;\\n  font-size: 1.6rem;\\n  background-color: #fafafa;\\n}\\n\\n#container {\\n  position: relative;\\n  min-height: 100%;\\n  max-height: 5000000px;\\n}\\n\\nsection {\\n  margin: auto;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n}\\n\\n.flex-col {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  html {\\n    font-size: 70%;\\n  }\\n}\\n.header {\\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, transparent 50%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  height: 300px;\\n}\\n\\n@media only screen and (min-width: 750px) {\\n  .header {\\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, transparent 50%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-position: center;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    height: 400px;\\n  }\\n}\\n.navbar {\\n  position: relative;\\n  display: flex;\\n  color: #fff;\\n  max-width: 110rem;\\n  height: 3rem;\\n  padding: 2.5rem;\\n  margin: auto;\\n}\\n.navbar__nav {\\n  position: absolute;\\n  top: 10rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  background-color: #fff;\\n  color: #000;\\n  width: calc(100% - 5rem);\\n  margin: 0 auto;\\n  border-radius: 5px;\\n  align-items: center;\\n  margin: auto;\\n  z-index: 100;\\n  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\\n}\\n.navbar__nav li {\\n  display: flex;\\n  justify-content: center;\\n  padding: 2.5rem 0;\\n  width: 100%;\\n}\\n.navbar__nav li:not(:last-child) {\\n  border-bottom: 1px solid #cfcfcf;\\n}\\n.navbar__nav--hidden {\\n  display: none;\\n}\\n.navbar__logo {\\n  height: 2rem;\\n  margin-right: auto;\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .navbar__nav {\\n    position: relative;\\n    top: 0;\\n    right: 0;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    background-color: transparent;\\n    color: #fff;\\n    margin: 0 auto;\\n    justify-content: center;\\n    align-items: center;\\n    width: auto;\\n    margin-top: 1.2rem;\\n    margin-right: 1.2rem;\\n    margin-left: auto;\\n    z-index: 100;\\n    box-shadow: none;\\n  }\\n  .navbar__nav li {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 0;\\n    margin-left: 2.5rem;\\n    font-size: 1.5rem;\\n    width: auto;\\n  }\\n  .navbar__nav li:not(:last-child) {\\n    border-bottom: 0;\\n  }\\n  .navbar__burger-icon {\\n    display: none;\\n  }\\n}\\n.card {\\n  max-width: calc(100% - 3.6rem);\\n  width: 72rem;\\n  position: relative;\\n  text-align: left;\\n  background-color: #fff;\\n  margin-top: 2.5rem;\\n  margin-bottom: 2.5rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding: 3.5rem 1.8rem 3.5rem 1.8rem;\\n  border-radius: 1rem;\\n  border: 1px solid rgba(0, 0, 0, 0.05);\\n}\\n.card--pledge {\\n  margin: 0;\\n  max-width: 100%;\\n  margin-top: 2.5rem;\\n  padding: 1.8rem;\\n}\\n.card--disabled {\\n  opacity: 0.6;\\n}\\n.card__logo {\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  transform: translateY(-50%) translateX(-50%);\\n}\\n.card__text {\\n  margin-top: 1.2rem;\\n  font-size: 1.4rem;\\n  line-height: 2.4rem;\\n  margin-bottom: 1.8rem;\\n  color: #7a7a7a;\\n}\\n.card__buttons {\\n  margin: 2.5rem 0 0 0;\\n  justify-content: space-between;\\n  align-items: stretch;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n@media only screen and (min-width: 500px) {\\n  .card {\\n    padding: 3.5rem;\\n  }\\n  .card__buttons {\\n    flex: 1;\\n    justify-content: space-between;\\n  }\\n}\\n.button {\\n  width: 60%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  outline: none;\\n  font-weight: 700;\\n  color: #fff;\\n  font-size: 1.4rem;\\n  letter-spacing: 0rem;\\n  border-radius: 3rem;\\n  cursor: pointer;\\n  transition: all 0.5s;\\n}\\n.button:hover {\\n  transform: scale(0.95);\\n}\\n.button--cta {\\n  padding: 2rem 2rem;\\n  height: 5.5rem;\\n  margin-right: 1rem;\\n  background-color: #3cb4ac;\\n}\\n.button--cta:hover {\\n  background-color: #147b74;\\n}\\n.button--bookmark {\\n  width: 5.5rem;\\n  height: 5.5rem;\\n  display: flex;\\n  align-items: center;\\n  background-color: #ededed;\\n  font-size: 1.4rem;\\n  color: #bbbbbb;\\n}\\n.button--bookmark:hover .button--bookmark__icon {\\n  background-color: #616161;\\n}\\n.button--bookmark__icon {\\n  border-radius: 3rem;\\n  background-color: black;\\n  width: 5.5rem;\\n  height: 5.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: all 0.5s;\\n}\\n.button--bookmark__icon--active {\\n  background-color: #3cb4ac;\\n  color: #fff;\\n}\\n.button--bookmark:hover .button--bookmark__icon--active {\\n  background-color: #147b74;\\n}\\n.button--bookmark span {\\n  color: #7a7a7a;\\n  display: inline-block;\\n  margin: auto;\\n  transform: translateX(-1rem);\\n  display: none;\\n}\\n.button--bookmark span.active {\\n  color: #3cb4ac;\\n}\\n.button--disabled {\\n  background-color: grey;\\n}\\n.button--disabled:hover {\\n  background-color: grey;\\n}\\n\\n@media only screen and (min-width: 500px) {\\n  .button--cta {\\n    max-width: 40%;\\n  }\\n  .button--bookmark {\\n    flex: 1;\\n  }\\n  .button--bookmark__icon {\\n    border-radius: 3rem;\\n    background-color: black;\\n    width: 5.5rem;\\n    height: 5.5rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    transition: all 0.5s;\\n  }\\n  .button--bookmark__icon--active {\\n    background-color: #3cb4ac;\\n  }\\n  .button--bookmark span {\\n    color: #7a7a7a;\\n    display: inline-block;\\n    margin: auto;\\n    transform: translateX(-1rem);\\n    display: block;\\n  }\\n}\\n.summary {\\n  text-align: center;\\n}\\n.summary__heading {\\n  font-size: 3rem;\\n  margin-bottom: 1rem;\\n}\\n.summary span {\\n  font-size: 1.6rem;\\n  color: #7a7a7a;\\n}\\n.summary ul {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n.summary li {\\n  position: relative;\\n  width: 100%;\\n  padding-bottom: 2.5rem;\\n}\\n.summary li:not(:first-of-type) {\\n  margin-top: 1.8rem;\\n}\\n.summary li:not(:last-of-type)::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  width: 30%;\\n  transform: translateX(-50%);\\n  height: 1px;\\n  background-color: #dadada;\\n}\\n.summary__progress {\\n  background-color: #fafafa;\\n  border-radius: 0.5rem;\\n  height: 1rem;\\n  overflow: hidden;\\n}\\n.summary__progress--fill {\\n  background-color: #3cb4ac;\\n  border-radius: 0.5rem;\\n  width: 80%;\\n  height: 100%;\\n}\\n\\n@media only screen and (min-width: 550px) {\\n  .summary ul {\\n    flex-direction: row;\\n    align-items: stretch;\\n  }\\n  .summary li {\\n    position: relative;\\n    width: calc(100% / 3);\\n    padding-bottom: 2.5rem;\\n    padding-left: 3rem;\\n    padding-right: 3rem;\\n    text-align: left;\\n  }\\n  .summary li:not(:first-of-type) {\\n    margin-left: 1.2rem;\\n    margin-top: 0;\\n  }\\n  .summary li:not(:last-of-type)::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 50%;\\n    left: 100%;\\n    width: 1px;\\n    height: 80%;\\n    margin: 0 auto;\\n    transform: translateY(-60%) translateX(0);\\n    background-color: #dadada;\\n  }\\n}\\n.about {\\n  text-align: left;\\n}\\n\\n.cta-box {\\n  text-align: center;\\n  margin-top: -6rem;\\n}\\n\\n.pledge__cta-flex {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n@media only screen and (min-width: 700px) {\\n  .pledge__cta-flex {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    align-items: center;\\n  }\\n}\\n.pledgePopup {\\n  animation: fadein 1s forwards;\\n  width: 100vw;\\n  height: 100%;\\n  position: absolute;\\n  padding-top: 10rem;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 5;\\n}\\n.pledgePopup .checkbox {\\n  position: relative;\\n  width: 24px;\\n  height: 24px;\\n  border: 1px solid #c7c7c7;\\n  border-radius: 50%;\\n}\\n.pledgePopup .checkbox::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  height: 10px;\\n  width: 10px;\\n  opacity: 0;\\n  transform: translateX(-50%) translateY(-50%);\\n  border-radius: 50%;\\n  color: #3cb4ac;\\n  background-color: currentColor;\\n}\\n.pledgePopup__pledge-form {\\n  margin-top: 3.5rem;\\n  padding-top: 1.8rem;\\n  padding-bottom: 1.8rem;\\n  border-top: 1px solid #fafafa;\\n  width: 100%;\\n  text-align: center;\\n  display: none;\\n}\\n.pledgePopup__button {\\n  width: 50%;\\n}\\n.pledgePopup__input {\\n  border-radius: 5rem;\\n  border: 0;\\n  outline: 0;\\n  font-size: 2.5rem;\\n  font-weight: 500;\\n  color: #000;\\n  width: 50%;\\n  padding: 1.1rem 2rem;\\n  flex: 1.5;\\n  margin-right: 1rem;\\n  background-color: #fafafa;\\n  border: 1px solid #c7c7c7;\\n}\\n.pledgePopup input[type=radio] {\\n  width: 0;\\n  height: 0;\\n  display: none;\\n}\\n.pledgePopup input[type=radio]:checked + label > .card {\\n  border: 1px solid #3cb4ac;\\n}\\n.pledgePopup input[type=radio]:checked + label > .card .checkbox::after {\\n  opacity: 1;\\n}\\n.pledgePopup input[type=radio]:checked + label > .card .pledgePopup__pledge-form {\\n  display: block;\\n}\\n.pledgePopup input[type=radio] + label:hover > .card .heading-tertiary {\\n  color: #3cb4ac;\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .pledgePopup__input {\\n    text-align: center;\\n    flex: 1;\\n  }\\n  .pledgePopup__remaining {\\n    position: absolute;\\n    top: 3.5rem;\\n    right: 3.5rem;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/images/image-hero-desktop.jpg":
/*!*******************************************!*\
  !*** ./src/images/image-hero-desktop.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/public/images/image-hero-desktop.jpg\");\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/images/image-hero-desktop.jpg?");

/***/ }),

/***/ "./src/images/image-hero-mobile.jpg":
/*!******************************************!*\
  !*** ./src/images/image-hero-mobile.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/public/images/image-hero-mobile.jpg\");\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/images/image-hero-mobile.jpg?");

/***/ }),

/***/ "./src/images/logo-mastercraft.svg":
/*!*****************************************!*\
  !*** ./src/images/logo-mastercraft.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/public/images/logo-mastercraft.svg\");\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/images/logo-mastercraft.svg?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/public/images/logo.svg\");\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/images/logo.svg?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/sass/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://crowdfunding-product-page-main/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/main.scss");
/******/ 	
/******/ })()
;