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

/***/ "./components/DataTable.tsx":
/*!**********************************!*\
  !*** ./components/DataTable.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data */ \"./data.ts\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst DataTable = (param)=>{\n    let { setModal , setSideNavView  } = param;\n    _s();\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>_data__WEBPACK_IMPORTED_MODULE_2__.tableData, [\n        _data__WEBPACK_IMPORTED_MODULE_2__.tableData\n    ]);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[\n            {\n                Header: \"# ID\",\n                accessor: \"id\"\n            },\n            {\n                Header: \"TITLE\",\n                accessor: \"title\"\n            },\n            {\n                Header: \"STATUS\",\n                accessor: \"status\"\n            },\n            {\n                Header: \"CATEGORY\",\n                accessor: \"category\"\n            },\n            {\n                Header: \"ACTION\",\n                accessor: \"\"\n            }\n        ], []);\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,react_table__WEBPACK_IMPORTED_MODULE_3__.useTable)({\n        columns,\n        data\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        ...getTableProps(),\n        className: \"w-full mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: headerGroups.map((headerGroup)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        ...headerGroup.getHeaderGroupProps(),\n                        className: \"bg-gray-200 font-medium text-gray-500\",\n                        children: headerGroup.headers.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: column.Header === \"ACTION\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...column.getHeaderProps(),\n                                    className: \"py-4 flex w-full justify-end pr-10\",\n                                    children: column.render(\"Header\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...column.getHeaderProps(),\n                                    className: \"py-4 pl-10\",\n                                    children: column.render(\"Header\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false))\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                ...getTableBodyProps(),\n                children: rows.map((row)=>{\n                    prepareRow(row);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        ...row.getRowProps(),\n                        children: row.cells.map((cell)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: cell.column.Header === \"ACTION\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...cell.getCellProps(),\n                                    className: \"py-4 flex w-full justify-end pr-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-semibold text-blue-600\",\n                                            onClick: ()=>setSideNavView(true),\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"ml-5 font-medium\",\n                                            onClick: ()=>setModal(true),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 23\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...cell.getCellProps(),\n                                    className: \"py-4 pl-10 font-medium\",\n                                    children: cell.render(\"Cell\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antonio/posa/inventory-project/components/DataTable.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DataTable, \"RoMrNGm/VgvlxBrhbkUZ6tQYYHw=\", false, function() {\n    return [\n        react_table__WEBPACK_IMPORTED_MODULE_3__.useTable\n    ];\n});\n_c = DataTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTable);\nvar _c;\n$RefreshReg$(_c, \"DataTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGFUYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNHO0FBQ0k7QUFFdkMsTUFBTUcsWUFHRCxTQUFrQztRQUFqQyxFQUFFQyxTQUFRLEVBQUVDLGVBQWMsRUFBRTs7SUFDaEMsTUFBTUMsT0FBT04sOENBQU9BLENBQUMsSUFBTUMsNENBQVNBLEVBQUU7UUFBQ0EsNENBQVNBO0tBQUM7SUFFakQsTUFBTU0sVUFBVVAsOENBQU9BLENBQ3JCLElBQU07WUFDSjtnQkFDRVEsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtZQUNBO2dCQUNFRCxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtTQUNELEVBQ0QsRUFBRTtJQUVKLE1BQU0sRUFDSkMsY0FBYSxFQUViQyxrQkFBaUIsRUFFakJDLGFBQVksRUFFWkMsS0FBSSxFQUVKQyxXQUFVLEVBQ1gsR0FBR1oscURBQVFBLENBQUM7UUFBRUs7UUFBU0Q7SUFBSztJQUU3QixxQkFDRSw4REFBQ1M7UUFBTyxHQUFHTCxlQUFlO1FBQUVNLFdBQVU7OzBCQUNwQyw4REFBQ0M7MEJBQ0VMLGFBQWFNLEdBQUcsQ0FBQyxDQUFDQyw0QkFDakIsOERBQUNDO3dCQUNFLEdBQUdELFlBQVlFLG1CQUFtQixFQUFFO3dCQUNyQ0wsV0FBVTtrQ0FFVEcsWUFBWUcsT0FBTyxDQUFDSixHQUFHLENBQUMsQ0FBQ0ssdUJBQ3hCOzBDQUNHQSxPQUFPZixNQUFNLEtBQUsseUJBQ2pCLDhEQUFDZ0I7b0NBQ0UsR0FBR0QsT0FBT0UsY0FBYyxFQUFFO29DQUMzQlQsV0FBVTs4Q0FFVE8sT0FBT0csTUFBTSxDQUFDOzs7Ozs4REFHakIsOERBQUNGO29DQUFJLEdBQUdELE9BQU9FLGNBQWMsRUFBRTtvQ0FBRVQsV0FBVTs4Q0FDeENPLE9BQU9HLE1BQU0sQ0FBQzs7Ozs7NkNBRWxCOzs7Ozs7Ozs7Ozs7MEJBT1gsOERBQUNDO2dCQUFPLEdBQUdoQixtQkFBbUI7MEJBQzNCRSxLQUFLSyxHQUFHLENBQUMsQ0FBQ1UsTUFBUTtvQkFDakJkLFdBQVdjO29CQUVYLHFCQUNFLDhEQUFDUjt3QkFBSSxHQUFHUSxJQUFJQyxXQUFXLEVBQUU7a0NBQ3RCRCxJQUFJRSxLQUFLLENBQUNaLEdBQUcsQ0FBQyxDQUFDYSxPQUFTOzRCQUN2QixxQkFDRTswQ0FDR0EsS0FBS1IsTUFBTSxDQUFDZixNQUFNLEtBQUsseUJBQ3RCLDhEQUFDZ0I7b0NBQ0UsR0FBR08sS0FBS0MsWUFBWSxFQUFFO29DQUN2QmhCLFdBQVU7O3NEQUVWLDhEQUFDaUI7NENBQ0NqQixXQUFVOzRDQUNWa0IsU0FBUyxJQUFNN0IsZUFBZSxJQUFJO3NEQUNuQzs7Ozs7O3NEQUdELDhEQUFDNEI7NENBQ0NqQixXQUFVOzRDQUNWa0IsU0FBUyxJQUFNOUIsU0FBUyxJQUFJO3NEQUM3Qjs7Ozs7Ozs7Ozs7OERBS0gsOERBQUNvQjtvQ0FDRSxHQUFHTyxLQUFLQyxZQUFZLEVBQUU7b0NBQ3ZCaEIsV0FBVTs4Q0FFVGUsS0FBS0wsTUFBTSxDQUFDOzs7Ozs2Q0FFaEI7O3dCQUdQOzs7Ozs7Z0JBR047Ozs7Ozs7Ozs7OztBQUlSO0dBbkhNdkI7O1FBeUNBRCxpREFBUUE7OztLQXpDUkM7QUFxSE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhVGFibGUudHN4P2E5MjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdGFibGVEYXRhIH0gZnJvbSBcIkAvZGF0YVwiO1xuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tIFwicmVhY3QtdGFibGVcIjtcblxuY29uc3QgRGF0YVRhYmxlOiBSZWFjdC5GQzx7XG4gIHNldE1vZGFsOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNldFNpZGVOYXZWaWV3OiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59PiA9ICh7IHNldE1vZGFsLCBzZXRTaWRlTmF2VmlldyB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IHRhYmxlRGF0YSwgW3RhYmxlRGF0YV0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIiMgSURcIixcbiAgICAgICAgYWNjZXNzb3I6IFwiaWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJUSVRMRVwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJ0aXRsZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIlNUQVRVU1wiLFxuICAgICAgICBhY2Nlc3NvcjogXCJzdGF0dXNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJDQVRFR09SWVwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJjYXRlZ29yeVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIkFDVElPTlwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApO1xuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcblxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuXG4gICAgaGVhZGVyR3JvdXBzLFxuXG4gICAgcm93cyxcblxuICAgIHByZXBhcmVSb3csXG4gIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0gY2xhc3NOYW1lPVwidy1mdWxsIG10LTVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXG4gICAgICAgICAgPHRyXG4gICAgICAgICAgICB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLkhlYWRlciA9PT0gXCJBQ1RJT05cIiA/IChcbiAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgZmxleCB3LWZ1bGwganVzdGlmeS1lbmQgcHItMTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9IGNsYXNzTmFtZT1cInB5LTQgcGwtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3RoZWFkPlxuXG4gICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge2NlbGwuY29sdW1uLkhlYWRlciA9PT0gXCJBQ1RJT05cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktNCBmbGV4IHctZnVsbCBqdXN0aWZ5LWVuZCBwci0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtYmx1ZS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlTmF2Vmlldyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTUgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS00IHBsLTEwIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsInRhYmxlRGF0YSIsInVzZVRhYmxlIiwiRGF0YVRhYmxlIiwic2V0TW9kYWwiLCJzZXRTaWRlTmF2VmlldyIsImRhdGEiLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJtYXAiLCJoZWFkZXJHcm91cCIsInRyIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJ0ZCIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwidGJvZHkiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DataTable.tsx\n"));

/***/ })

});