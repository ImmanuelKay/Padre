exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 8962:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "BlogCard_card__tj_Wo",
	"imgContainer": "BlogCard_imgContainer__RCZyL",
	"details": "BlogCard_details__NazJw",
	"text": "BlogCard_text__oM0Mu",
	"author": "BlogCard_author__rK4wK"
};


/***/ }),

/***/ 8885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8962);
/* harmony import */ var _styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2__);



function BlogPost({ title , coverPhoto , slug  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/posts/" + slug,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: coverPhoto.url,
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_BlogCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: title
                })
            })
        ]
    });
}


/***/ })

};
;