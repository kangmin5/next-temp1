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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ registerPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth/Register */ \"./components/auth/Register.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction registerPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userid: \"\",\n        password: \"\",\n        name: \"\",\n        email: \"\",\n        birth: \"\",\n        address: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var onChange = function(e) {\n        e.preventDefault();\n        var _target = _slicedToArray(e.target, 2), name = _target[0], value = _target[1];\n        setUser(_objectSpread({}, user, _defineProperty({}, name, value)));\n    };\n    var onSubmit = function(e) {\n        e.preventDefault();\n        alert(\"1.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_Register__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onChange: onChange,\n            onSubmit: onSubmit\n        }, void 0, false, {\n            fileName: \"C:\\\\bitcamp\\\\next\\\\next-temp1\\\\pages\\\\auth\\\\register.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\bitcamp\\\\next\\\\next-temp1\\\\pages\\\\auth\\\\register.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(registerPage, \"uHyUXbCKCOSv9mWpTpaUunHkbrg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDWTs7QUFFbEMsU0FBU0csWUFBWSxHQUFHOztJQUNyQyxJQUF3QkYsR0FFdEIsR0FGc0JBLCtDQUFRLENBQUM7UUFDL0JHLE1BQU0sRUFBQyxFQUFFO1FBQUNDLFFBQVEsRUFBQyxFQUFFO1FBQUNDLElBQUksRUFBQyxFQUFFO1FBQUNDLEtBQUssRUFBQyxFQUFFO1FBQUNDLEtBQUssRUFBQyxFQUFFO1FBQUNDLE9BQU8sRUFBQyxFQUFFO0tBQzNELENBQUMsRUFOSixJQUlhLEdBQWFSLEdBRXRCLEdBRlMsRUFKYixPQUlzQixHQUFJQSxHQUV0QixHQUZrQjtJQUdwQixJQUFNVyxRQUFRLEdBQUdDLFNBQUFBLENBQUMsRUFBSTtRQUNwQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEIsSUFBc0JELE9BQVEsa0JBQVJBLENBQUMsQ0FBQ0UsTUFBTSxNQUF2QlQsSUFBSSxHQUFXTyxPQUFRLEdBQW5CLEVBQUVHLEtBQUssR0FBSUgsT0FBUSxHQUFaO1FBQ2xCRixPQUFPLENBQUMsa0JBQUlELElBQUksRUFBQyxvQkFBQ0osSUFBSSxFQUFFVSxLQUFLLEVBQUMsQ0FBQztLQUNoQztJQUNELElBQU1DLFFBQVEsR0FBR0osU0FBQUEsQ0FBQyxFQUFJO1FBQ3BCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQkksS0FBSyxDQUFDLElBQUksQ0FBQztLQUNaO0lBTUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNqQixpRUFBUTtZQUFDVSxRQUFRLEVBQUVBLFFBQVE7WUFBRUssUUFBUSxFQUFFQSxRQUFROzs7OztnQkFBSTs7Ozs7WUFFaEQsQ0FDUDtDQUNGO0dBeEJ1QmQsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzPzE0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnQC9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlclBhZ2UoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcmlkOicnLHBhc3N3b3JkOicnLG5hbWU6JycsZW1haWw6JycsYmlydGg6JycsYWRkcmVzczonJ1xyXG4gIH0pXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IGUudGFyZ2V0XHJcbiAgICBzZXRVc2VyKHsuLi51c2VyLFtuYW1lXTp2YWx1ZX0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGFsZXJ0KCcxLicpXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8UmVnaXN0ZXIgb25DaGFuZ2U9e29uQ2hhbmdlfSBvblN1Ym1pdD17b25TdWJtaXQgfS8+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwicmVnaXN0ZXJQYWdlIiwidXNlcmlkIiwicGFzc3dvcmQiLCJuYW1lIiwiZW1haWwiLCJiaXJ0aCIsImFkZHJlc3MiLCJ1c2VyIiwic2V0VXNlciIsIm9uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImFsZXJ0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/register.js\n");

/***/ })

});