webpackHotUpdate_N_E("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/profile */ "./utils/profile.js");


var _jsxFileName = "C:\\Users\\52554\\Desktop\\REACT JS\\next-portfolio\\pages\\post.js",
    _this = undefined,
    _s = $RefreshSig$();





var Post = function Post() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var currentPost = _utils_profile__WEBPACK_IMPORTED_MODULE_3__["posts"].filter(function (post) {
    return post.title === router.query.title;
  })[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: currentPost.title,
    footer: false,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: currentPost.imageURL,
        alt: "",
        style: {
          width: "50%"
        },
        className: "img-fluid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "p-4",
        children: currentPost.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudFBvc3QiLCJwb3N0cyIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsInF1ZXJ5IiwiaW1hZ2VVUkwiLCJ3aWR0aCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0Msb0RBQUssQ0FBQ0MsTUFBTixDQUNsQixVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxLQUFMLEtBQWVOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhRCxLQUF0QztBQUFBLEdBRGtCLEVBRWxCLENBRmtCLENBQXBCO0FBSUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVKLFdBQVcsQ0FBQ0ksS0FBM0I7QUFBa0MsVUFBTSxFQUFFLEtBQTFDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFSixXQUFXLENBQUNNLFFBRG5CO0FBRUUsV0FBRyxFQUFDLEVBRk47QUFHRSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FIVDtBQUlFLGlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRTtBQUFHLGlCQUFTLEVBQUMsS0FBYjtBQUFBLGtCQUFvQlAsV0FBVyxDQUFDUTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FwQkQ7O0dBQU1YLEk7VUFDV0UscUQ7OztLQURYRixJO0FBc0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0LmUzYmVjNDNjYjA1N2M5MmE2NDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tIFwiLi4vdXRpbHMvcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFBvc3QgPSBwb3N0cy5maWx0ZXIoXHJcbiAgICAocG9zdCkgPT4gcG9zdC50aXRsZSA9PT0gcm91dGVyLnF1ZXJ5LnRpdGxlXHJcbiAgKVswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2N1cnJlbnRQb3N0LnRpdGxlfSBmb290ZXI9e2ZhbHNlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17Y3VycmVudFBvc3QuaW1hZ2VVUkx9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTRcIj57Y3VycmVudFBvc3QuY29udGVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=