"use strict";
(() => {
var exports = {};
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCountrys": () => (/* binding */ getCountrys),
/* harmony export */   "getZones": () => (/* binding */ getZones)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_request__WEBPACK_IMPORTED_MODULE_0__]);
_utils_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * 获取国家信息
 * @returns
 */ const getCountrys = ()=>{
    return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        method: "POST",
        url: "/api/account/getCountrys"
    }).then((res)=>{
        return res.data;
    });
};
/**
 * 获取地区信息
 * @returns
 */ const getZones = (countryId)=>{
    return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        method: "POST",
        url: "/api/account/getZones",
        data: {
            area_code: countryId
        }
    }).then((res)=>{
        return res.data;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [688], () => (__webpack_exec__(8062)));
module.exports = __webpack_exports__;

})();