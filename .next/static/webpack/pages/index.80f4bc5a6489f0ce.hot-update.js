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

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/user.png */ \"./public/user.png\");\n/* harmony import */ var _public_grid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/grid.png */ \"./public/grid.png\");\n/* harmony import */ var _CustomSelectFeedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomSelectFeedback */ \"./components/CustomSelectFeedback.tsx\");\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { setParams , page  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex sticky z-20 top-0 left-0 w-full justify-between bg-white shadow-lg items-center pl-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center ml-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_grid_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"grid\",\n                        className: \"w-5 h-5\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-3xl ml-2 mt-[-6px]\",\n                        children: \"Inventory\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomSelectFeedback__WEBPACK_IMPORTED_MODULE_4__.CustomSelect, {\n                        width: \"250px\",\n                        className: \"shadow-lg border-[1px] border-bray-400 rounded-lg top-2 left-4 mb-3\",\n                        name: null,\n                        errors: null,\n                        options: [\n                            {\n                                value: \"Status 1\",\n                                label: \"Status 1\"\n                            },\n                            {\n                                value: \"Status 2\",\n                                label: \"Status 2\"\n                            },\n                            {\n                                value: \"Status 3\",\n                                label: \"Status 3\"\n                            },\n                            {\n                                value: \"Status 4\",\n                                label: \"Status 4\"\n                            },\n                            {\n                                value: \"Status 5\",\n                                label: \"Status 5\"\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center w-[40%] justify-evenly h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPage(\"Items\"),\n                        className: \"p-2 py-4 font-medium text-xl cursor-pointer h-full \".concat(page === \"Items\" && \"border-b-2 border-gray-400\"),\n                        children: \"Items\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPage(\"Activity\"),\n                        className: \"p-2 py-4 font-medium text-xl cursor-pointer \".concat(page === \"Activity\" && \"border-b-2 border-gray-400\", \" eas\"),\n                        children: \"Activity\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPage(\"Categories\"),\n                        className: \"p-2 py-4 font-medium text-xl cursor-pointer \".concat(page === \"Categories\" && \"border-b-2 border-gray-400\"),\n                        children: \"Categories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPage(\"Users\"),\n                        className: \"p-2 py-4 font-medium text-xl cursor-pointer \".concat(page === \"Users\" && \"border-b-2 border-gray-400\"),\n                        children: \"Users\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: ()=>setPage(\"Location\"),\n                        className: \"p-2 py-4 font-medium text-xl cursor-pointer \".concat(page === \"Location\" && \"border-b-2 border-gray-400\"),\n                        children: \"Location\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_user_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"user\",\n                        className: \"w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-600 text-xl text-white font-semibold px-4 py-2 mr-5 ml-2 rounded-md\",\n                        children: \"Add new item\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Navigation.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUVPO0FBQ0E7QUFFZ0I7QUFHdEQsTUFBTUksYUFHRCxTQUF5QjtRQUF4QixFQUFFQyxVQUFTLEVBQUVDLEtBQUksRUFBRTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1IsbURBQUtBO3dCQUFDUyxLQUFLUCx3REFBSUE7d0JBQUVRLEtBQUk7d0JBQU9GLFdBQVU7Ozs7OztrQ0FDdkMsOERBQUNHO3dCQUFFSCxXQUFVO2tDQUFvQzs7Ozs7O2tDQUNqRCw4REFBQ0wsK0RBQVlBO3dCQUNYUyxPQUFPO3dCQUNQSixXQUNFO3dCQUVGSyxNQUFNLElBQUk7d0JBQ1ZDLFFBQVEsSUFBSTt3QkFDWkMsU0FBUzs0QkFDUDtnQ0FBRUMsT0FBTztnQ0FBWUMsT0FBTzs0QkFBVzs0QkFDdkM7Z0NBQUVELE9BQU87Z0NBQVlDLE9BQU87NEJBQVc7NEJBQ3ZDO2dDQUFFRCxPQUFPO2dDQUFZQyxPQUFPOzRCQUFXOzRCQUN2QztnQ0FBRUQsT0FBTztnQ0FBWUMsT0FBTzs0QkFBVzs0QkFDdkM7Z0NBQUVELE9BQU87Z0NBQVlDLE9BQU87NEJBQVc7eUJBQ3hDOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NPLFNBQVMsSUFBTUMsUUFBUTt3QkFDdkJYLFdBQVcsc0RBRVYsT0FEQ0YsU0FBUyxXQUFXO2tDQUV2Qjs7Ozs7O2tDQUdELDhEQUFDSzt3QkFDQ08sU0FBUyxJQUFNQyxRQUFRO3dCQUN2QlgsV0FBVywrQ0FFVixPQURDRixTQUFTLGNBQWMsOEJBQ3hCO2tDQUNGOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUNDTyxTQUFTLElBQU1DLFFBQVE7d0JBQ3ZCWCxXQUFXLCtDQUVWLE9BRENGLFNBQVMsZ0JBQWdCO2tDQUU1Qjs7Ozs7O2tDQUdELDhEQUFDSzt3QkFDQ08sU0FBUyxJQUFNQyxRQUFRO3dCQUN2QlgsV0FBVywrQ0FFVixPQURDRixTQUFTLFdBQVc7a0NBRXZCOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUNDTyxTQUFTLElBQU1DLFFBQVE7d0JBQ3ZCWCxXQUFXLCtDQUVWLE9BRENGLFNBQVMsY0FBYztrQ0FFMUI7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUixtREFBS0E7d0JBQUNTLEtBQUtSLHdEQUFJQTt3QkFBRVMsS0FBSTt3QkFBT0YsV0FBVTs7Ozs7O2tDQUN2Qyw4REFBQ1k7d0JBQU9aLFdBQVU7a0NBQThFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEc7S0EzRU1KO0FBNkVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4uL3B1YmxpYy91c2VyLnBuZ1wiO1xyXG5pbXBvcnQgZ3JpZCBmcm9tIFwiLi4vcHVibGljL2dyaWQucG5nXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEN1c3RvbVNlbGVjdCB9IGZyb20gXCIuL0N1c3RvbVNlbGVjdEZlZWRiYWNrXCI7XHJcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCJAL3BhZ2VzXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQzx7XHJcbiAgc2V0UGFyYW1zOiAodmFsdWU6IFBhcmFtcykgPT4gdm9pZDtcclxuICBwYWdlOiBzdHJpbmc7XHJcbn0+ID0gKHsgc2V0UGFyYW1zLCBwYWdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHN0aWNreSB6LTIwIHRvcC0wIGxlZnQtMCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlIHNoYWRvdy1sZyBpdGVtcy1jZW50ZXIgcGwtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1sLTRcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtncmlkfSBhbHQ9XCJncmlkXCIgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIG1sLTIgbXQtWy02cHhdXCI+SW52ZW50b3J5PC9wPlxyXG4gICAgICAgIDxDdXN0b21TZWxlY3RcclxuICAgICAgICAgIHdpZHRoPXtcIjI1MHB4XCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBcInNoYWRvdy1sZyBib3JkZXItWzFweF0gYm9yZGVyLWJyYXktNDAwIHJvdW5kZWQtbGcgdG9wLTIgbGVmdC00IG1iLTNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmFtZT17bnVsbH1cclxuICAgICAgICAgIGVycm9ycz17bnVsbH1cclxuICAgICAgICAgIG9wdGlvbnM9e1tcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTdGF0dXMgMVwiLCBsYWJlbDogXCJTdGF0dXMgMVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU3RhdHVzIDJcIiwgbGFiZWw6IFwiU3RhdHVzIDJcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlN0YXR1cyAzXCIsIGxhYmVsOiBcIlN0YXR1cyAzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTdGF0dXMgNFwiLCBsYWJlbDogXCJTdGF0dXMgNFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU3RhdHVzIDVcIiwgbGFiZWw6IFwiU3RhdHVzIDVcIiB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LVs0MCVdIGp1c3RpZnktZXZlbmx5IGgtZnVsbFwiPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKFwiSXRlbXNcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcHktNCBmb250LW1lZGl1bSB0ZXh0LXhsIGN1cnNvci1wb2ludGVyIGgtZnVsbCAke1xyXG4gICAgICAgICAgICBwYWdlID09PSBcIkl0ZW1zXCIgJiYgXCJib3JkZXItYi0yIGJvcmRlci1ncmF5LTQwMFwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJdGVtc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShcIkFjdGl2aXR5XCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHB5LTQgZm9udC1tZWRpdW0gdGV4dC14bCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICBwYWdlID09PSBcIkFjdGl2aXR5XCIgJiYgXCJib3JkZXItYi0yIGJvcmRlci1ncmF5LTQwMFwiXHJcbiAgICAgICAgICB9IGVhc2B9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWN0aXZpdHlcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoXCJDYXRlZ29yaWVzXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHB5LTQgZm9udC1tZWRpdW0gdGV4dC14bCBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICBwYWdlID09PSBcIkNhdGVnb3JpZXNcIiAmJiBcImJvcmRlci1iLTIgYm9yZGVyLWdyYXktNDAwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhdGVnb3JpZXNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoXCJVc2Vyc1wiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiBweS00IGZvbnQtbWVkaXVtIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgcGFnZSA9PT0gXCJVc2Vyc1wiICYmIFwiYm9yZGVyLWItMiBib3JkZXItZ3JheS00MDBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXNlcnNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoXCJMb2NhdGlvblwiKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiBweS00IGZvbnQtbWVkaXVtIHRleHQteGwgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgcGFnZSA9PT0gXCJMb2NhdGlvblwiICYmIFwiYm9yZGVyLWItMiBib3JkZXItZ3JheS00MDBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9jYXRpb25cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17dXNlcn0gYWx0PVwidXNlclwiIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXhsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweC00IHB5LTIgbXItNSBtbC0yIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgIEFkZCBuZXcgaXRlbVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VyIiwiZ3JpZCIsIkN1c3RvbVNlbGVjdCIsIk5hdmlnYXRpb24iLCJzZXRQYXJhbXMiLCJwYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicCIsIndpZHRoIiwibmFtZSIsImVycm9ycyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwib25DbGljayIsInNldFBhZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});