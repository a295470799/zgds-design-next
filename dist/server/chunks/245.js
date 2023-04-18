"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_NextImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(556);





const StyledFooter = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 100%;
  background: ${(props)=>props.theme.palette.background.paper};
  padding: 30px 0 10px;
`;
const StyledBrand = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 100px;
`;
const StyledOur = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  font-size: 1.4rem;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props)=>props.theme.palette.text.secondary};
`;
const StyledLine = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")`
  display: inline-block;
  width: 2px;
  height: 8px;
  background: ${(props)=>props.theme.palette.text.secondary};
  border-radius: 6px;
  margin: 0 12px;
`;
const StyledCopyright = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  font-size: 1.4rem;
  color: ${(props)=>props.theme.palette.text.secondary};
  text-align: center;
`;
function Footer() {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledFooter, {
        children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            sx: {
                backgroundColor: (theme)=>theme.palette.background.paper
            },
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBrand, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "https://www.songmics.com",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_NextImg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: "/image/footer/songmics.png",
                                alt: "songmics",
                                width: 210,
                                height: 20
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "https://www.vasagle.com",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_NextImg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: "/image/footer/vasagle.png",
                                alt: "vasagle",
                                width: 90,
                                height: 28
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "https://www.feandrea.com",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_NextImg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: "/image/footer/feandrea.png",
                                alt: "feandrea",
                                width: 87,
                                height: 28
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledOur, {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/about-us",
                            color: "text.paimary",
                            children: "About us"
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLine, {}),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/contact-us",
                            color: "text.paimary",
                            children: "Contact us"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCopyright, {
                    children: [
                        "Copyright \xa9 ",
                        new Date().getFullYear(),
                        " EUZIEL International GmbH All Rights Reserved."
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;