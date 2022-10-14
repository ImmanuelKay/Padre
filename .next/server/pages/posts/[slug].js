(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 6501:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Slug_title__is_YI",
	"authdetails": "Slug_authdetails__TmLRe",
	"authtext": "Slug_authtext__byzW6",
	"cover": "Slug_cover__OYNCf",
	"blog": "Slug_blog__izous",
	"content": "Slug_content__EoSjt"
};


/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPost),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6501);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);



const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient("https://api-us-west-2.hygraph.com/v2/cl95r8dmd6dnf01ukeleo4izk/master");
const QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
query Post($slug: String!){
    post(where: {slug: $slug}){
        title,
        slug,
        coverPhoto{
            url
        }
        content{
            html
        }   
    }    
  

}
`;
const SLUGLIST = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
{
    posts{
        slug
    }
}
`;
async function getStaticPaths() {
    const { posts  } = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post)=>({
                params: {
                    slug: post.slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {
        slug
    });
    const post = data.post;
    return {
        props: {
            post
        }
    };
}
function BlogPost({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().blog),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: post.coverPhoto.url,
                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().cover),
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: post.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
                dangerouslySetInnerHTML: {
                    __html: post.content.html
                }
            })
        ]
    });
}


/***/ }),

/***/ 5805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1663));
module.exports = __webpack_exports__;

})();