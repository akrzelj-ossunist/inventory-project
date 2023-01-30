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

/***/ "./components/Select.tsx":
/*!*******************************!*\
  !*** ./components/Select.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/up-arrow.png */ \"./public/up-arrow.png\");\n/* harmony import */ var _public_down_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/down-arrow.png */ \"./public/down-arrow.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Select = (param)=>{\n    let { list , setFunc  } = param;\n    _s();\n    const [dropDowns, setDropDowns] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(list[0]);\n    const currentValue = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    console.log(currentValue.current.innerText);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        document.addEventListener(\"click\", clickOutside, true);\n        return document.removeEventListener(\"click\", clickOutside, true);\n    }, []);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const clickOutside = (el)=>{\n        var _ref_current;\n        !((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(el.target)) && setDropDowns(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative ml-10 cursor-pointer\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative shadow-lg w-[200px] h-[40px] flex items-center border-gray-400 border-[1px] py-q pl-2 rounded-md\",\n                onClick: ()=>setDropDowns(dropDowns ? false : true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: dropDowns ? _public_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _public_down_arrow_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"arrow\",\n                        className: \"w-4 h-4 right-3 top-3 absolute\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        ref: currentValue,\n                        children: selectValue\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bg-white w-full py-1 pl-1 rounded-md shadow-xl \".concat(!dropDowns && \"hidden\"),\n                children: list.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pl-1 py-2\",\n                        onClick: ()=>{\n                            setDropDowns(false);\n                            setSelectValue(el);\n                        },\n                        children: el\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Select, \"yHWR3y+vXhZfIQZLrp7y1GtKhYo=\");\n_c = Select;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Select);\nvar _c;\n$RefreshReg$(_c, \"Select\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNJO0FBQ0c7QUFFcEQsTUFBTU0sU0FHRCxTQUF1QjtRQUF0QixFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRTs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDRSxJQUFJLENBQUMsRUFBRTtJQUN0RCxNQUFNTSxlQUFlVCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDVSxRQUFRQyxHQUFHLENBQUNGLGFBQWFHLE9BQU8sQ0FBQ0MsU0FBUztJQUMxQ2QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTQyxjQUFjLElBQUk7UUFDckQsT0FBT0YsU0FBU0csbUJBQW1CLENBQUMsU0FBU0QsY0FBYyxJQUFJO0lBQ2pFLEdBQUcsRUFBRTtJQUNMLE1BQU1FLE1BQU1sQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU1nQixlQUFlLENBQUNHLEtBQVk7WUFDL0JEO1FBQUQsRUFBQ0EsQ0FBQUEsZUFBQUEsSUFBSU4sT0FBTyxjQUFYTSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBYUUsU0FBU0QsR0FBR0UsTUFBTSxNQUFLZixhQUFhLEtBQUs7SUFDekQ7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7UUFBZ0NMLEtBQUtBOzswQkFDbEQsOERBQUNJO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTLElBQU1sQixhQUFhRCxZQUFZLEtBQUssR0FBRyxJQUFJOztrQ0FFcEQsOERBQUNULG1EQUFLQTt3QkFDSjZCLEtBQUtwQixZQUFZUiw0REFBT0EsR0FBR0MsOERBQVM7d0JBQ3BDNEIsS0FBSTt3QkFDSkgsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSTt3QkFBRVQsS0FBS1Q7a0NBQWVGOzs7Ozs7Ozs7Ozs7MEJBRXpCLDhEQUFDZTtnQkFDQ0MsV0FBVywyREFFVixPQURDLENBQUNsQixhQUFhOzBCQUdmRixLQUFLeUIsR0FBRyxDQUFDLENBQUNULG1CQUNULDhEQUFDUTt3QkFDQ0osV0FBVTt3QkFDVkMsU0FBUyxJQUFNOzRCQUNibEIsYUFBYSxLQUFLOzRCQUNsQkUsZUFBZVc7d0JBQ2pCO2tDQUVDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQWpETWpCO0tBQUFBO0FBbUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VsZWN0LnRzeD84Y2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXBBcnJvdyBmcm9tIFwiLi4vcHVibGljL3VwLWFycm93LnBuZ1wiO1xyXG5pbXBvcnQgZG93bkFycm93IGZyb20gXCIuLi9wdWJsaWMvZG93bi1hcnJvdy5wbmdcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZWxlY3Q6IFJlYWN0LkZDPHtcclxuICBsaXN0OiBzdHJpbmdbXTtcclxuICBzZXRGdW5jPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn0+ID0gKHsgbGlzdCwgc2V0RnVuYyB9KSA9PiB7XHJcbiAgY29uc3QgW2Ryb3BEb3ducywgc2V0RHJvcERvd25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0VmFsdWUsIHNldFNlbGVjdFZhbHVlXSA9IHVzZVN0YXRlKGxpc3RbMF0pO1xyXG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VmFsdWUuY3VycmVudC5pbm5lclRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tPdXRzaWRlLCB0cnVlKTtcclxuICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tPdXRzaWRlLCB0cnVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGNsaWNrT3V0c2lkZSA9IChlbDogYW55KSA9PiB7XHJcbiAgICAhcmVmLmN1cnJlbnQ/LmNvbnRhaW5zKGVsLnRhcmdldCkgJiYgc2V0RHJvcERvd25zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtbC0xMCBjdXJzb3ItcG9pbnRlclwiIHJlZj17cmVmfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHNoYWRvdy1sZyB3LVsyMDBweF0gaC1bNDBweF0gZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWdyYXktNDAwIGJvcmRlci1bMXB4XSBweS1xIHBsLTIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RHJvcERvd25zKGRyb3BEb3ducyA/IGZhbHNlIDogdHJ1ZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17ZHJvcERvd25zID8gdXBBcnJvdyA6IGRvd25BcnJvd31cclxuICAgICAgICAgIGFsdD1cImFycm93XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgcmlnaHQtMyB0b3AtMyBhYnNvbHV0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCByZWY9e2N1cnJlbnRWYWx1ZX0+e3NlbGVjdFZhbHVlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy13aGl0ZSB3LWZ1bGwgcHktMSBwbC0xIHJvdW5kZWQtbWQgc2hhZG93LXhsICR7XHJcbiAgICAgICAgICAhZHJvcERvd25zICYmIFwiaGlkZGVuXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTEgcHktMlwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXREcm9wRG93bnMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdFZhbHVlKGVsKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVwQXJyb3ciLCJkb3duQXJyb3ciLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNlbGVjdCIsImxpc3QiLCJzZXRGdW5jIiwiZHJvcERvd25zIiwic2V0RHJvcERvd25zIiwic2VsZWN0VmFsdWUiLCJzZXRTZWxlY3RWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiaW5uZXJUZXh0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImVsIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwicCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Select.tsx\n"));

/***/ })

});