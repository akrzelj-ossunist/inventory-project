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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/up-arrow.png */ \"./public/up-arrow.png\");\n/* harmony import */ var _public_down_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/down-arrow.png */ \"./public/down-arrow.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Select = (param)=>{\n    let { list , setFunc  } = param;\n    _s();\n    const [dropDowns, setDropDowns] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(list[0]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        document.addEventListener(\"click\", clickOutside, true);\n    }, []);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const clickOutside = (el)=>{\n        var _ref_current;\n        !((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(el.target)) && setDropDowns(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative ml-10 cursor-pointer\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative shadow-lg w-[200px] h-[40px] flex items-center border-gray-400 border-[1px] py-q pl-2 rounded-md\",\n                onClick: ()=>setDropDowns(dropDowns ? false : true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: dropDowns ? _public_up_arrow_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _public_down_arrow_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"arrow\",\n                        className: \"w-4 h-4 right-3 top-3 absolute\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: selectValue\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bg-white w-full py-1 pl-1 rounded-md shadow-xl \".concat(!dropDowns && \"hidden\"),\n                children: list.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pl-1 py-2\",\n                        onClick: ()=>{\n                            setDropDowns(false);\n                            setSelectValue(el);\n                        },\n                        children: el\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\inventory-project\\\\components\\\\Select.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Select, \"hRsOmj0tk/GCs1PK6oKQOat+6Pg=\");\n_c = Select;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Select);\nvar _c;\n$RefreshReg$(_c, \"Select\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNJO0FBQ0c7QUFFcEQsTUFBTU0sU0FHRCxTQUF1QjtRQUF0QixFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRTs7SUFDckIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDRSxJQUFJLENBQUMsRUFBRTtJQUV0REosZ0RBQVNBLENBQUMsSUFBTTtRQUNkVSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTQyxjQUFjLElBQUk7SUFDdkQsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsTUFBTVosNkNBQU1BLENBQUMsSUFBSTtJQUN2QixNQUFNVyxlQUFlLENBQUNFLEtBQVk7WUFDL0JEO1FBQUQsRUFBQ0EsQ0FBQUEsZUFBQUEsSUFBSUUsT0FBTyxjQUFYRiwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBYUcsU0FBU0YsR0FBR0csTUFBTSxNQUFLVixhQUFhLEtBQUs7SUFDekQ7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTtRQUFnQ04sS0FBS0E7OzBCQUNsRCw4REFBQ0s7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVMsSUFBTWIsYUFBYUQsWUFBWSxLQUFLLEdBQUcsSUFBSTs7a0NBRXBELDhEQUFDVCxtREFBS0E7d0JBQ0p3QixLQUFLZixZQUFZUiw0REFBT0EsR0FBR0MsOERBQVM7d0JBQ3BDdUIsS0FBSTt3QkFDSkgsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSTtrQ0FBR2Y7Ozs7Ozs7Ozs7OzswQkFFTiw4REFBQ1U7Z0JBQ0NDLFdBQVcsMkRBRVYsT0FEQyxDQUFDYixhQUFhOzBCQUdmRixLQUFLb0IsR0FBRyxDQUFDLENBQUNWLG1CQUNULDhEQUFDUzt3QkFDQ0osV0FBVTt3QkFDVkMsU0FBUyxJQUFNOzRCQUNiYixhQUFhLEtBQUs7NEJBQ2xCRSxlQUFlSzt3QkFDakI7a0NBRUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBL0NNWDtLQUFBQTtBQWlETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlbGVjdC50c3g/OGNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHVwQXJyb3cgZnJvbSBcIi4uL3B1YmxpYy91cC1hcnJvdy5wbmdcIjtcclxuaW1wb3J0IGRvd25BcnJvdyBmcm9tIFwiLi4vcHVibGljL2Rvd24tYXJyb3cucG5nXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzx7XHJcbiAgbGlzdDogc3RyaW5nW107XHJcbiAgc2V0RnVuYz86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59PiA9ICh7IGxpc3QsIHNldEZ1bmMgfSkgPT4ge1xyXG4gIGNvbnN0IFtkcm9wRG93bnMsIHNldERyb3BEb3duc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdFZhbHVlLCBzZXRTZWxlY3RWYWx1ZV0gPSB1c2VTdGF0ZShsaXN0WzBdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja091dHNpZGUsIHRydWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY2xpY2tPdXRzaWRlID0gKGVsOiBhbnkpID0+IHtcclxuICAgICFyZWYuY3VycmVudD8uY29udGFpbnMoZWwudGFyZ2V0KSAmJiBzZXREcm9wRG93bnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1sLTEwIGN1cnNvci1wb2ludGVyXCIgcmVmPXtyZWZ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2hhZG93LWxnIHctWzIwMHB4XSBoLVs0MHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItZ3JheS00MDAgYm9yZGVyLVsxcHhdIHB5LXEgcGwtMiByb3VuZGVkLW1kXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREcm9wRG93bnMoZHJvcERvd25zID8gZmFsc2UgOiB0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtkcm9wRG93bnMgPyB1cEFycm93IDogZG93bkFycm93fVxyXG4gICAgICAgICAgYWx0PVwiYXJyb3dcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00IGgtNCByaWdodC0zIHRvcC0zIGFic29sdXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwPntzZWxlY3RWYWx1ZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgdy1mdWxsIHB5LTEgcGwtMSByb3VuZGVkLW1kIHNoYWRvdy14bCAke1xyXG4gICAgICAgICAgIWRyb3BEb3ducyAmJiBcImhpZGRlblwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7bGlzdC5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0xIHB5LTJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RHJvcERvd25zKGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXRTZWxlY3RWYWx1ZShlbCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1cEFycm93IiwiZG93bkFycm93IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJTZWxlY3QiLCJsaXN0Iiwic2V0RnVuYyIsImRyb3BEb3ducyIsInNldERyb3BEb3ducyIsInNlbGVjdFZhbHVlIiwic2V0U2VsZWN0VmFsdWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja091dHNpZGUiLCJyZWYiLCJlbCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJwIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Select.tsx\n"));

/***/ })

});