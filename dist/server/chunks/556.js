"use strict";
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



const shimmer = (w, h)=>`
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#f3f3f3" offset="20%" />
        <stop stop-color="#e9e9e9" offset="50%" />
        <stop stop-color="#f3f3f3" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f3f3f3" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
const NextImg = (props)=>{
    const { blurDataURL =`data:image/svg+xml;base64,${(0,_utils_format__WEBPACK_IMPORTED_MODULE_2__/* .toBase64 */ .s)(shimmer(props.width ?? 200, props.height ?? 200))}` , placeholder ="blur" , alt ="ZGDS image" , ...rest } = props;
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        placeholder: placeholder,
        blurDataURL: blurDataURL,
        alt: alt,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextImg);


/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ formatPrice),
/* harmony export */   "s": () => (/* binding */ toBase64)
/* harmony export */ });
const formatPrice = (price, country = "eu")=>{
    const newPrice = typeof price === "string" ? Number(price) : price;
    if (country === "us") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(newPrice ?? 0);
    } else if (country === "uk") {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(newPrice ?? 0);
    }
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(newPrice ?? 0);
};
function toBase64(str) {
    if (true) {
        // Running on server
        const buffer = Buffer.from(str, "utf-8");
        return buffer.toString("base64");
    } else {}
}


/***/ })

};
;