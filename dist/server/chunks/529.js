"use strict";
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint
    });
}


/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        mode: "light",
        primary: {
            main: "#0074a3"
        },
        secondary: {
            main: "#e14101"
        },
        success: {
            main: "#00a65a",
            contrastText: "#ffffff"
        },
        dark: {
            main: "#222222",
            contrastText: "#ffffff"
        },
        text: {
            primary: "#222222",
            secondary: "#666666",
            third: "#888888",
            fourth: "#999999",
            fifth: "#333333"
        },
        background: {
            default: "#ffffff",
            paper: "#fafafa"
        }
    },
    typography: {
        fontFamily: "Poppins, serif",
        fontWeightMedium: 500,
        fontWeightBold: 700,
        htmlFontSize: 10
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiButtonBase: {
            defaultProps: {
                style: {
                    textTransform: "none"
                }
            }
        },
        MuiButton: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                sizeSmall: {
                    height: "30px",
                    lineHeight: 1
                },
                sizeMedium: {
                    height: "40px"
                },
                sizeLarge: {
                    height: "50px"
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: "#e14101"
                }
            }
        },
        MuiButtonGroup: {
            defaultProps: {
                size: "small"
            }
        },
        MuiCheckbox: {
            defaultProps: {
                size: "small"
            }
        },
        MuiFab: {
            defaultProps: {
                size: "small"
            }
        },
        MuiFormControl: {
            defaultProps: {
                size: "small",
                margin: "dense"
            }
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: "dense"
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: "small"
            }
        },
        MuiInputBase: {
            defaultProps: {
                margin: "dense"
            }
        },
        MuiInputLabel: {
            defaultProps: {
                margin: "dense"
            }
        },
        MuiRadio: {
            defaultProps: {
                size: "small"
            }
        },
        MuiSwitch: {
            defaultProps: {
                size: "small"
            }
        },
        MuiTextField: {
            defaultProps: {
                margin: "none",
                size: "small",
                helperText: " "
            }
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;