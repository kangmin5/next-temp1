"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/register",{

/***/ "./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ registerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth/Register */ \"./components/auth/Register.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction registerPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userid: \"\",\n        password: \"\",\n        name: \"\",\n        email: \"\",\n        birth: \"\",\n        address: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var onChange = function(e) {\n        e.preventDefault();\n        var _target = _slicedToArray(e.target, 2), name = _target[0], value = _target[1];\n        setUser.apply(void 0, _toConsumableArray(user).concat([\n            []\n        ]));\n    };\n    var onSubmit = function(e) {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_Register__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onChange: onChange,\n            onSubmit: onSubmit\n        }, void 0, false, {\n            fileName: \"C:\\\\bitcamp\\\\next\\\\next-temp1\\\\pages\\\\auth\\\\register.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\bitcamp\\\\next\\\\next-temp1\\\\pages\\\\auth\\\\register.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(registerPage, \"uHyUXbCKCOSv9mWpTpaUunHkbrg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNZOztBQUVsQyxTQUFTRyxZQUFZLEdBQUc7O0lBQ3JDLElBQXdCRixHQUV0QixHQUZzQkEsK0NBQVEsQ0FBQztRQUMvQkcsTUFBTSxFQUFDLEVBQUU7UUFBQ0MsUUFBUSxFQUFDLEVBQUU7UUFBQ0MsSUFBSSxFQUFDLEVBQUU7UUFBQ0MsS0FBSyxFQUFDLEVBQUU7UUFBQ0MsS0FBSyxFQUFDLEVBQUU7UUFBQ0MsT0FBTyxFQUFDLEVBQUU7S0FDM0QsQ0FBQyxFQU5KLElBSWEsR0FBYVIsR0FFdEIsR0FGUyxFQUpiLE9BSXNCLEdBQUlBLEdBRXRCLEdBRmtCO0lBR3BCLElBQU1XLFFBQVEsR0FBR0MsU0FBQUEsQ0FBQyxFQUFJO1FBQ3BCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQixJQUFzQkQsT0FBUSxrQkFBUkEsQ0FBQyxDQUFDRSxNQUFNLE1BQXZCVCxJQUFJLEdBQVdPLE9BQVEsR0FBbkIsRUFBRUcsS0FBSyxHQUFJSCxPQUFRLEdBQVo7UUFDbEJGLE9BQU8sQ0FBUEEsS0FBbUIsQ0FBbkJBLEtBQUFBLENBQU8sRUFBUEEsbUJBQVdELElBQUksQ0FBSkEsUUFBWEM7WUFBZ0IsRUFBRTtTQUFDO0tBQ3BCO0lBQ0QsSUFBTU0sUUFBUSxHQUFHSixTQUFBQSxDQUFDLEVBQUksRUFFckI7SUFNRCxxQkFDRSw4REFBQ0ssS0FBRztrQkFDRiw0RUFBQ2hCLGlFQUFRO1lBQUNVLFFBQVEsRUFBRUEsUUFBUTtZQUFFSyxRQUFRLEVBQUVBLFFBQVE7Ozs7O2dCQUFJOzs7OztZQUVoRCxDQUNQO0NBQ0Y7R0F2QnVCZCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvcmVnaXN0ZXIuanM/MTQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICdAL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyUGFnZSgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyaWQ6JycscGFzc3dvcmQ6JycsbmFtZTonJyxlbWFpbDonJyxiaXJ0aDonJyxhZGRyZXNzOicnXHJcbiAgfSlcclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gZS50YXJnZXRcclxuICAgIHNldFVzZXIoLi4udXNlcixbXSlcclxuICB9XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPFJlZ2lzdGVyIG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25TdWJtaXQ9e29uU3VibWl0IH0vPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWdpc3RlciIsInJlZ2lzdGVyUGFnZSIsInVzZXJpZCIsInBhc3N3b3JkIiwibmFtZSIsImVtYWlsIiwiYmlydGgiLCJhZGRyZXNzIiwidXNlciIsInNldFVzZXIiLCJvbkNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/register.js\n");

/***/ })

});