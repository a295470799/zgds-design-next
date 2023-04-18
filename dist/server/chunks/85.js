"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 7412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const request = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://dev.a.zgds.eu"
});
request.interceptors.request.use(async (config)=>{
    // 这里只有客户端的cookie生效了，
    // 如果要获取服务端cookie的话，在getServerSideProps中获取request中的cookie，再手动设置到每个请求的请求头中
    // const headers = await composeAuthHeaders();
    // config.headers = { ...config.headers, ...headers, client: process.env.NEXT_PUBLIC_CLIENT };
    return config;
}, async (error)=>{
    return Promise.reject(error);
});
request.interceptors.response.use(async (response)=>{
    //TODO: 临时抛出接口错误
    // if (![1, 200].includes(response.data.code)) {
    //   return Promise.reject(response);
    // }
    return response.data;
}, async (error)=>{
    if (error.response?.status === 401) {
    // 跳过注销时异常, status = 401
    //   if (error.response.config.url === "/logout") return;
    //   await store?.dispatch(logoutAsync(true));
    }
    // if (error.response?.status === 400) {
    //   return error;
    // }
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;