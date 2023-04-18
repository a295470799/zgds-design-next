"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartSummary)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);




const StyledLi = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("li")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  border-bottom: 1px dashed rgba(102, 102, 102, 0.2);
  & > span {
    color: ${(props)=>props.theme.palette.text.secondary};
    font-weight: 500;
  }
`;
const LiLeft = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")`
  font-size: 1.2rem;
`;
const LiRight = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")`
  font-size: 1.4rem;
`;
function CartSummary(props) {
    const { summary , type ="cart" , onPlaceOrder  } = props;
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        elevation: 4,
        sx: {
            position: "sticky",
            top: 15,
            width: 280,
            padding: "10px 25px 36px",
            height: "fit-content"
        },
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                textAlign: "center",
                fontWeight: 500,
                color: "primary.main",
                paddingBottom: "10px",
                borderBottom: "1px solid rgba(102,102,102,.2)",
                children: "CART SUMMARY"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                component: "ul",
                children: [
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledLi, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiLeft, {
                                children: "Selected Items"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiRight, {
                                children: summary?.count
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledLi, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiLeft, {
                                children: "Subtotal"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LiRight, {
                                children: (0,_utils_format__WEBPACK_IMPORTED_MODULE_3__/* .formatPrice */ .T)(summary?.totalPrice)
                            })
                        ]
                    }),
                    type == "checkout" && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLi, {
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            color: "secondary.main",
                            fontSize: "1.2rem",
                            textAlign: "center",
                            width: "100%",
                            children: "Tax and Shipping Not Included"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "contained",
                size: "medium",
                fullWidth: true,
                sx: {
                    marginTop: "25px"
                },
                onClick: onPlaceOrder,
                children: "PLACE ORDER"
            })
        ]
    });
}


/***/ })

};
;