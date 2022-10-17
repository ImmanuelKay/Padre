/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./styles/Slug.module.css":
/*!********************************!*\
  !*** ./styles/Slug.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"Slug_title__is_YI\",\n\t\"authdetails\": \"Slug_authdetails__TmLRe\",\n\t\"authtext\": \"Slug_authtext__byzW6\",\n\t\"cover\": \"Slug_cover__OYNCf\",\n\t\"blog\": \"Slug_blog__izous\",\n\t\"content\": \"Slug_content__EoSjt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvU2x1Zy5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2c0Ly4vc3R5bGVzL1NsdWcubW9kdWxlLmNzcz81NDBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwiU2x1Z190aXRsZV9faXNfWUlcIixcblx0XCJhdXRoZGV0YWlsc1wiOiBcIlNsdWdfYXV0aGRldGFpbHNfX1RtTFJlXCIsXG5cdFwiYXV0aHRleHRcIjogXCJTbHVnX2F1dGh0ZXh0X19ieXpXNlwiLFxuXHRcImNvdmVyXCI6IFwiU2x1Z19jb3Zlcl9fT1lOQ2ZcIixcblx0XCJibG9nXCI6IFwiU2x1Z19ibG9nX19pem91c1wiLFxuXHRcImNvbnRlbnRcIjogXCJTbHVnX2NvbnRlbnRfX0VvU2p0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Slug.module.css\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogPost),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Slug.module.css */ \"./styles/Slug.module.css\");\n/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(\"https://api-us-west-2.hygraph.com/v2/cl95r8dmd6dnf01ukeleo4izk/master\");\nconst QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`\nquery Post($slug: String!){\n    post(where: {slug: $slug}){\n        title,\n        slug,\n        coverPhoto{\n            url\n        }\n        content{\n            html\n        }   \n    }    \n  \n\n}\n`;\nconst SLUGLIST = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`\n{\n    posts{\n        slug\n    }\n}\n`;\nasync function getStaticPaths() {\n    const { posts  } = await graphcms.request(SLUGLIST);\n    return {\n        paths: posts.map((post)=>({\n                params: {\n                    slug: post.slug\n                }\n            })),\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const slug = params.slug;\n    const data = await graphcms.request(QUERY, {\n        slug\n    });\n    const post = data.post;\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction BlogPost({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().blog),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: post.coverPhoto.url,\n                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().cover),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/ekay/blog4/pages/posts/[slug].js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().title)\n            }, void 0, false, {\n                fileName: \"/Users/ekay/blog4/pages/posts/[slug].js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/ekay/blog4/pages/posts/[slug].js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                dangerouslySetInnerHTML: {\n                    __html: post.content.html\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ekay/blog4/pages/posts/[slug].js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ekay/blog4/pages/posts/[slug].js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDQztBQUVsRCxNQUFNRyxRQUFRLEdBQUcsSUFBSUYsMERBQWEsQ0FBQyx1RUFBdUUsQ0FBQztBQUUzRyxNQUFNRyxLQUFLLEdBQUdGLGdEQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWVsQixDQUFDO0FBRUQsTUFBTUcsUUFBUSxHQUFHSCxnREFBRyxDQUFDOzs7Ozs7QUFNckIsQ0FBQztBQUVNLGVBQWVJLGNBQWMsR0FBRTtJQUNsQyxNQUFNLEVBQUNDLEtBQUssR0FBQyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDSCxRQUFRLENBQUM7SUFDaEQsT0FBTTtRQUNGSSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUNDLElBQUksR0FBTTtnQkFBQ0MsTUFBTSxFQUFFO29CQUFDQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSTtpQkFBRTthQUFDLEVBQUU7UUFDMURDLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7QUFDTixDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUNILE1BQU0sR0FBQyxFQUFDO0lBQzFDLE1BQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJO0lBQzFCLE1BQU1HLElBQUksR0FBRyxNQUFNYixRQUFRLENBQUNLLE9BQU8sQ0FBQ0osS0FBSyxFQUFFO1FBQUNTLElBQUk7S0FBQyxDQUFDO0lBQ2xELE1BQU1GLElBQUksR0FBR0ssSUFBSSxDQUFDTCxJQUFJO0lBQ3RCLE9BQU07UUFDSk0sS0FBSyxFQUFFO1lBQ0xOLElBQUk7U0FDTDtLQUNGLENBQUM7QUFDSixDQUFDO0FBRWMsU0FBU08sUUFBUSxDQUFDLEVBQUNQLElBQUksR0FBQyxFQUFDO0lBQ3BDLHFCQUNJLDhEQUFDUSxNQUFJO1FBQUNDLFNBQVMsRUFBRXBCLHFFQUFXOzswQkFDeEIsOERBQUNzQixLQUFHO2dCQUFDQyxHQUFHLEVBQUVaLElBQUksQ0FBQ2EsVUFBVSxDQUFDQyxHQUFHO2dCQUFFTCxTQUFTLEVBQUVwQixzRUFBWTtnQkFBRTJCLEdBQUcsRUFBQyxFQUFFOzs7OztvQkFBRzswQkFDakUsOERBQUNDLEtBQUc7Z0JBQUNSLFNBQVMsRUFBRXBCLHNFQUFZOzs7OztvQkFDdEI7MEJBQ04sOERBQUM4QixJQUFFOzBCQUFFbkIsSUFBSSxDQUFDa0IsS0FBSzs7Ozs7b0JBQU07MEJBQ3JCLDhEQUFDRCxLQUFHO2dCQUFDUixTQUFTLEVBQUVwQix3RUFBYztnQkFBRWdDLHVCQUF1QixFQUFFO29CQUFDQyxNQUFNLEVBQUV0QixJQUFJLENBQUNvQixPQUFPLENBQUNHLElBQUk7aUJBQUM7Ozs7O29CQUFROzs7Ozs7WUFDekYsQ0FDVjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nNC8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NsdWcubW9kdWxlLmNzcydcbmltcG9ydCB7R3JhcGhRTENsaWVudCxncWx9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQoJ2h0dHBzOi8vYXBpLXVzLXdlc3QtMi5oeWdyYXBoLmNvbS92Mi9jbDk1cjhkbWQ2ZG5mMDF1a2VsZW80aXprL21hc3RlcicpO1xuXG5jb25zdCBRVUVSWSA9IGdxbGBcbnF1ZXJ5IFBvc3QoJHNsdWc6IFN0cmluZyEpe1xuICAgIHBvc3Qod2hlcmU6IHtzbHVnOiAkc2x1Z30pe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgY292ZXJQaG90b3tcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnR7XG4gICAgICAgICAgICBodG1sXG4gICAgICAgIH0gICBcbiAgICB9ICAgIFxuICBcblxufVxuYDtcblxuY29uc3QgU0xVR0xJU1QgPSBncWxgXG57XG4gICAgcG9zdHN7XG4gICAgICAgIHNsdWdcbiAgICB9XG59XG5gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgICBjb25zdCB7cG9zdHN9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChTTFVHTElTVCk7XG4gICAgcmV0dXJue1xuICAgICAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiAoe3BhcmFtczoge3NsdWc6IHBvc3Quc2x1ZyB9fSkpLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KXtcbiAgICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFFVRVJZLCB7c2x1Z30pO1xuICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0O1xuICByZXR1cm57XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3Qoe3Bvc3R9KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmJsb2d9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuY292ZXJQaG90by51cmx9IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5jb250ZW50Lmh0bWx9fT48L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiR3JhcGhRTENsaWVudCIsImdxbCIsImdyYXBoY21zIiwiUVVFUlkiLCJTTFVHTElTVCIsImdldFN0YXRpY1BhdGhzIiwicG9zdHMiLCJyZXF1ZXN0IiwicGF0aHMiLCJtYXAiLCJwb3N0IiwicGFyYW1zIiwic2x1ZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwicHJvcHMiLCJCbG9nUG9zdCIsIm1haW4iLCJjbGFzc05hbWUiLCJibG9nIiwiaW1nIiwic3JjIiwiY292ZXJQaG90byIsInVybCIsImNvdmVyIiwiYWx0IiwiZGl2IiwidGl0bGUiLCJoMiIsImNvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();