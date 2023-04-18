"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 8372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const StyledBreadcrumb = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs)`
  font-size: 12px;
  margin-block-end: 20px;
`;
const Breadcrumb = ({ children  })=>{
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledBreadcrumb, {
        "aria-label": "breadcrumb",
        separator: ">",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 1530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_ProductList)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-hook-form-mui"
var external_react_hook_form_mui_ = __webpack_require__(1306);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "ahooks"
var external_ahooks_ = __webpack_require__(7398);
// EXTERNAL MODULE: ./lib/Stepper.tsx
var Stepper = __webpack_require__(2833);
// EXTERNAL MODULE: ./lib/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(8372);
// EXTERNAL MODULE: ./lib/NextImg.tsx
var NextImg = __webpack_require__(556);
;// CONCATENATED MODULE: ./public/svg/wished.svg
var _circle, _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWished = function SvgWished(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none"
  }, props), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 9.5,
    fill: "#fff",
    stroke: "#F53F3F"
  })), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "#F53F3F",
    fillRule: "evenodd",
    d: "M9.998 6.127a3.28 3.28 0 0 0-4.697 4.58l.058.059 4.06 4.06c.32.32.84.32 1.16 0l4.059-4.06.058-.06a3.28 3.28 0 0 0-4.698-4.58Z",
    clipRule: "evenodd"
  })));
};
/* harmony default export */ const wished = (SvgWished);
// EXTERNAL MODULE: ./lib/Layout.tsx
var Layout = __webpack_require__(8596);
;// CONCATENATED MODULE: ./src/pages/list/components/ProductList.tsx













const StyledMain = (0,styles_.styled)("div")`
  display: flex;
  justify-content: space-between;
`;
const StyledSidebar = (0,styles_.styled)("div")`
  flex: 0 0 auto;
  width: 240px;
`;
const StyledContent = (0,styles_.styled)("div")`
  flex: 0 0 auto;
  width: 840px;
`;
const SidebarItem = (0,styles_.styled)("div")`
  display: flex;
  flex-direction: column;
  margin-block-end: 20px;
  & > .MuiFormControl-root {
    margin-top: -5px;
  }
  .MuiCheckbox-root {
    padding: 6px 9px;
  }
`;
const SortbyWrapper = (0,styles_.styled)("div")`
  position: relative;
  display: inline-block;
  & .MuiSelect-select {
    width: 170px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.4rem;
    box-sizing: border-box;
    cursor: pointer;
  }
  & .sortby-paper {
    position: absolute;
    border: 1px solid ${(props)=>props.theme.palette.grey["400"]};
    border-top: 0;
    width: 170px;
    z-index: 1;
    .MuiMenuItem-root {
      font-size: 1.2rem;
      color: ${(props)=>props.theme.palette.grey["500"]};
    }
  }
`;
const StyledProducts = (0,styles_.styled)("ul")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
  margin-block-end: 50px;
`;
const ProductItem = (0,styles_.styled)("li")`
  flex: 0 0 auto;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    display: block;
  }
  & .badge {
    position: absolute;
    font-size: 1.2rem;
    padding: 0 10px;
    line-height: 20px;
    border: 1px solid ${(props)=>props.theme.palette.secondary.main};
  }
  & .badge-sale {
    top: 0;
    left: 0;
    background: ${(props)=>props.theme.palette.secondary.main};
    color: #fff;
  }
  & .badge-wish {
    top: 0;
    right: 0;
    background: url(/svg/wish.svg) no-repeat center;
    width: 28px;
    height: 28px;
    border: 0;
  }
  & .badge-back {
    bottom: 0;
    left: 0;
    background: #fff;
    color: ${(props)=>props.theme.palette.secondary.main};
  }
`;
const ProductList = ({ id  })=>{
    console.log(id);
    const renderLable = (name, type = "other")=>{
        if (type == "image") {
            return /*#__PURE__*/ jsx_runtime_.jsx(wished, {});
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                bgcolor: type == "other" ? "secondary.main" : "primary.main",
                color: "white",
                p: "1px 10px",
                fontSize: "1.2rem",
                children: name
            });
        }
    };
    const dropdownRef = (0,external_react_.useRef)(null);
    const isHovering = (0,external_ahooks_.useHover)(dropdownRef);
    const handleSortBy = (value)=>{
        console.log(value);
    };
    const defaultProducts = [
        {
            id: 396,
            sku: "LNT14BX",
            short_name: "Nesting Table",
            price: "47.99",
            cover: "https://m.media-amazon.com/images/I/41s3IV7tUZL._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        },
        {
            id: 488,
            sku: "LWD47X",
            short_name: "Computer Desk",
            price: "79.99",
            cover: "https://m.media-amazon.com/images/I/41VFM4b6S4L._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        },
        {
            id: 371,
            sku: "LLS34X",
            short_name: "Corner Ladder Shelves",
            price: "36.99",
            cover: "https://m.media-amazon.com/images/I/31T5wcv6zCL._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        },
        {
            id: 372,
            sku: "LLS34X",
            short_name: "Corner Ladder Shelves",
            price: "36.99",
            cover: "https://m.media-amazon.com/images/I/31T5wcv6zCL._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        },
        {
            id: 373,
            sku: "LLS34X",
            short_name: "Corner Ladder Shelves",
            price: "36.99",
            cover: "https://m.media-amazon.com/images/I/31T5wcv6zCL._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        },
        {
            id: 374,
            sku: "LLS34X",
            short_name: "Corner Ladder Shelves",
            price: "36.99",
            cover: "https://m.media-amazon.com/images/I/31T5wcv6zCL._SL500_.jpg",
            label: "",
            cart_count: 0,
            in_cart: 0,
            qty: 1
        }
    ];
    const [products, setProducts] = (0,external_react_.useState)(defaultProducts);
    const handleUpdateQty = (value, index)=>{
        setProducts((prevProducts)=>{
            const newProducts = [
                ...prevProducts
            ];
            newProducts[index].qty = value;
            return newProducts;
        });
    };
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        setOpen(true);
    };
    const handleClose = (event, reason)=>{
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Product List",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Breadcrumb/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        color: "inherit",
                        href: "/",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        color: "secondary.main",
                        fontSize: "1.2rem",
                        children: "Home Furniture"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledMain, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledSidebar, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_hook_form_mui_.FormContainer, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarItem, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            fontSize: "1.4rem",
                                            color: "text.secondary",
                                            fontWeight: 500,
                                            mb: 1,
                                            children: "Home Furniture"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            color: "text.secondary",
                                            href: "#",
                                            pl: 2,
                                            mb: 1,
                                            fontSize: "1.4rem",
                                            children: "Living Room (71)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            color: "text.secondary",
                                            href: "#",
                                            pl: 2,
                                            mb: 1,
                                            fontSize: "1.4rem",
                                            children: "Home Office (91)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarItem, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            fontSize: "1.4rem",
                                            color: "text.secondary",
                                            fontWeight: 500,
                                            mb: 1,
                                            children: "Brand"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            color: "text.secondary",
                                            href: "#",
                                            pl: 2,
                                            mb: 1,
                                            fontSize: "1.4rem",
                                            children: "SONGMICS (143)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            color: "text.secondary",
                                            href: "#",
                                            pl: 2,
                                            mb: 1,
                                            fontSize: "1.4rem",
                                            children: "VASAGLE (269)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            color: "text.secondary",
                                            href: "#",
                                            pl: 2,
                                            mb: 1,
                                            fontSize: "1.4rem",
                                            children: "FEANDREA (0)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SidebarItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_hook_form_mui_.CheckboxButtonGroup, {
                                        name: "tags",
                                        options: [
                                            {
                                                id: '{"bought":"1"}',
                                                label: renderLable("Bought", "bought")
                                            },
                                            {
                                                id: '{"wished":"1"}',
                                                label: renderLable("wished", "image")
                                            },
                                            {
                                                id: '{"labels":"NEW"}',
                                                label: renderLable("NEW")
                                            },
                                            {
                                                id: '{"labels":"Top%20Rated"}',
                                                label: renderLable("Top Rated")
                                            },
                                            {
                                                id: '{"labels":"Clearance"}',
                                                label: renderLable("Clearance")
                                            },
                                            {
                                                id: '{"labels":"Discount"}',
                                                label: renderLable("Discount")
                                            }
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledContent, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBlockEnd: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SortbyWrapper, {
                                        ref: dropdownRef,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                                defaultValue: 0,
                                                disabled: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                    value: "0",
                                                    children: "Sort By"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                                hidden: !isHovering,
                                                className: "sortby-paper",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: ()=>handleSortBy("discount"),
                                                        children: "Discount: High to Low"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: ()=>handleSortBy("price_lowToheight"),
                                                        children: "Price: Low to High"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: ()=>handleSortBy("price_heightTolow"),
                                                        children: "Price: High to Low"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                        onClick: ()=>handleSortBy("point"),
                                                        children: "Avg: Customer Rating"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                        sx: {
                                            display: "flex",
                                            columnGap: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                color: "text.secondary",
                                                fontSize: "1.4rem",
                                                children: "Show"
                                            }),
                                            [
                                                30,
                                                60,
                                                90,
                                                150
                                            ].map((item)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                    underline: item == 30 ? "always" : "hover",
                                                    color: "text.secondary",
                                                    href: "#",
                                                    fontSize: "1.4rem",
                                                    children: item
                                                }, item);
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledProducts, {
                                children: products.map((item, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProductItem, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                sx: {
                                                    position: "relative",
                                                    display: "block",
                                                    marginBlockEnd: "22px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                        href: `/product/${item.sku}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NextImg/* default */.Z, {
                                                            src: item.cover,
                                                            alt: item.short_name,
                                                            width: 270,
                                                            height: 270
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "badge badge-sale",
                                                        children: "Sale"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "badge badge-wish"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "badge badge-back",
                                                        children: "Backorder"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                        color: "text.secondary",
                                                        href: `/product/${item.sku}`,
                                                        sx: {
                                                            textOverflow: "ellipsis",
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            display: "block",
                                                            marginBlockEnd: "10px"
                                                        },
                                                        children: item.short_name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        color: "text.fourth",
                                                        fontSize: "1.2rem",
                                                        sx: {
                                                            marginBlockEnd: "10px"
                                                        },
                                                        children: [
                                                            "SKU: ",
                                                            item.sku
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                                        sx: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            marginBlockEnd: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                color: "text.fourth",
                                                                fontSize: "1.2rem",
                                                                children: [
                                                                    item.in_cart,
                                                                    " in cart"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Stepper/* default */.Z, {
                                                                value: item.qty,
                                                                onChange: (value)=>handleUpdateQty(value, index)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                        fullWidth: true,
                                                        variant: "contained",
                                                        color: "dark",
                                                        onClick: handleClick,
                                                        children: "ADD TO CART"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Snackbar, {
                open: open,
                autoHideDuration: 4000,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Alert, {
                    onClose: handleClose,
                    severity: "success",
                    sx: {
                        width: "100%"
                    },
                    children: "You've added 1 item(s) to your cart."
                })
            })
        ]
    });
};
/* harmony default export */ const components_ProductList = (ProductList);


/***/ })

};
;