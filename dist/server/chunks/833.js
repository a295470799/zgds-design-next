"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 2833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__);




const Stepper = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(({ value , minValue =1 , maxValue =999 , onChange  })=>{
    const [currentValue, setCurrentValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
    const handleDecrement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const newValue = currentValue - 1;
        if (minValue === undefined || newValue >= minValue) {
            setCurrentValue(newValue);
            onChange(newValue);
        }
    }, [
        currentValue,
        minValue,
        onChange
    ]);
    const handleIncrement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const newValue = currentValue + 1;
        if (maxValue === undefined || newValue <= maxValue) {
            setCurrentValue(newValue);
            onChange(newValue);
        }
    }, [
        currentValue,
        maxValue,
        onChange
    ]);
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
        type: "text",
        sx: {
            width: 95
        },
        value: currentValue,
        onChange: (event)=>setCurrentValue(Number(event.target.value) >= maxValue ? maxValue : Number(event.target.value)),
        InputProps: {
            sx: {
                padding: 0
            },
            inputProps: {
                min: minValue,
                max: maxValue,
                style: {
                    textAlign: "center",
                    padding: "6px 0",
                    fontSize: 12
                }
            },
            startAdornment: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                position: "start",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    onClick: handleDecrement,
                    disabled: currentValue <= minValue,
                    "aria-label": "decrement quantity",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Remove, {
                        sx: {
                            fontSize: 16
                        }
                    })
                })
            }),
            endAdornment: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                position: "end",
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                    onClick: handleIncrement,
                    disabled: currentValue >= maxValue,
                    "aria-label": "increment quantity",
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__.Add, {
                        sx: {
                            fontSize: 16
                        }
                    })
                })
            })
        },
        helperText: ""
    });
});
Stepper.displayName = "Stepper";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stepper);


/***/ })

};
;