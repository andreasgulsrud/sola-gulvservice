"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Index = function(param) {\n    var posts = param.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/andreasgulsrud/Dev/sola-gulvservice/web/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            posts.length > 0 && posts.map(function(param) {\n                var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt;\n                return slug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            as: \"/post/\".concat(slug.current),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/andreasgulsrud/Dev/sola-gulvservice/web/pages/index.js\",\n                                lineNumber: 14,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andreasgulsrud/Dev/sola-gulvservice/web/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        }, _this),\n                        \" \",\n                        \"(\",\n                        new Date(publishedAt).toDateString(),\n                        \")\"\n                    ]\n                }, _id, true, {\n                    fileName: \"/Users/andreasgulsrud/Dev/sola-gulvservice/web/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 15\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andreasgulsrud/Dev/sola-gulvservice/web/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUE0QjtBQUk1QixJQUFNQyxLQUFLLEdBQUcsZ0JBQWE7UUFBWEMsS0FBSyxTQUFMQSxLQUFLO0lBQ2pCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O3FCQUFLO1lBQzFCRixLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDLElBQUlILEtBQUssQ0FBQ0ksR0FBRyxDQUM1QjtvQkFBR0MsR0FBRyxTQUFIQSxHQUFHLGlCQUFFQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSx5QkFBRUMsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLEVBQUUsK0JBQUVDLFdBQVcsRUFBWEEsV0FBVyw2QkFBRyxFQUFFO3VCQUM3Q0QsSUFBSSxrQkFDRiw4REFBQ0UsSUFBRTs7c0NBQ0QsOERBQUNYLGtEQUFJOzRCQUFDWSxJQUFJLEVBQUMsY0FBYzs0QkFBQ0MsRUFBRSxFQUFFLFFBQU8sQ0FBZSxPQUFiSixJQUFJLENBQUNLLE9BQU8sQ0FBRTtzQ0FDbkQsNEVBQUNDLEdBQUM7MENBQUVQLEtBQUs7Ozs7O3FDQUFLOzs7OztpQ0FDVDt3QkFBQyxHQUFHO3dCQUFDLEdBQ1g7d0JBQUMsSUFBSVEsSUFBSSxDQUFDTixXQUFXLENBQUMsQ0FBQ08sWUFBWSxFQUFFO3dCQUFDLEdBQ3pDOzttQkFMU1YsR0FBRzs7Ozt5QkFLUDthQUNOLENBQ0o7Ozs7OzthQUNHLENBQ1A7Q0FDSjtBQWpCS04sS0FBQUEsS0FBSzs7QUE4QlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnXG5cbmNvbnN0IEluZGV4ID0gKHtwb3N0c30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gYSBibG9nITwvaDE+XG4gICAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmIHBvc3RzLm1hcChcbiAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gJycsIHNsdWcgPSAnJywgcHVibGlzaGVkQXQgPSAnJyB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICh7bmV3IERhdGUocHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICBgKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0c1xuICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsiTGluayIsIkluZGV4IiwicG9zdHMiLCJkaXYiLCJoMSIsImxlbmd0aCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibGkiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwiYSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});