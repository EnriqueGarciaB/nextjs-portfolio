webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\52554\\Desktop\\REACT JS\\next-portfolio\\components\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();









var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      title = _ref.title,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? true : _ref$footer,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", function () {
      return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
    });
    router.events.on("routeChangeError", function () {
      return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
    });
    return function () {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      "bg-dark": dark,
      "bg-light": !dark
    }),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "container py-4",
      children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("text-center", {
          "text-light": dark
        }),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), footer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\xA9 Enrique Garcia Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["2018 - ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "All rights Reserved."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Layout;
Layout.proptypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwiblByb2dyZXNzIiwib2ZmIiwiY2xhc3NOYW1lcyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInByb3B0eXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxRQUFtRCxRQUFuREEsUUFBbUQ7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEseUJBQWxDQyxNQUFrQztBQUFBLE1BQWxDQSxNQUFrQyw0QkFBekIsSUFBeUI7QUFBQSx1QkFBbkJDLElBQW1CO0FBQUEsTUFBbkJBLElBQW1CLDBCQUFaLEtBQVk7QUFDbkUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBUztBQUNqQ0Msc0RBQVMsQ0FBQ0MsS0FBVjtBQUNELEtBRkQ7O0FBSUFOLFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsaUJBQXJDO0FBRUFILFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLGFBQU1ILGdEQUFTLENBQUNJLElBQVYsRUFBTjtBQUFBLEtBQXhDO0FBRUFULFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLGFBQU1FLGdEQUFTLENBQUNELElBQVYsRUFBTjtBQUFBLEtBQXJDO0FBRUEsV0FBTyxZQUFNO0FBQ1hULFlBQU0sQ0FBQ08sTUFBUCxDQUFjSSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ1IsaUJBQXRDO0FBQ0QsS0FGRDtBQUdELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVTLGlEQUFVLENBQUM7QUFBRSxpQkFBV2IsSUFBYjtBQUFtQixrQkFBWSxDQUFDQTtBQUFoQyxLQUFELENBQTFCO0FBQUEsNEJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQUEsaUJBRUdGLEtBQUssaUJBQ0o7QUFBSSxpQkFBUyxFQUFFZSxpREFBVSxDQUFDLGFBQUQsRUFBZ0I7QUFBRSx3QkFBY2I7QUFBaEIsU0FBaEIsQ0FBekI7QUFBQSxrQkFDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosRUFTR0QsUUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQWNHRSxNQUFNLGlCQUNMO0FBQVEsZUFBUyxFQUFDLGdDQUFsQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdDQUFXLElBQUllLElBQUosR0FBV0MsV0FBWCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTdDRDs7R0FBTW5CLE07VUFDV00scUQ7OztLQURYTixNO0FBK0NOQSxNQUFNLENBQUNvQixTQUFQLEdBQW1CO0FBQ2pCbkIsVUFBUSxFQUFFb0IsaURBQVMsQ0FBQ0MsSUFESDtBQUVqQnBCLE9BQUssRUFBRW1CLGlEQUFTLENBQUNFLE1BRkE7QUFHakJwQixRQUFNLEVBQUVrQixpREFBUyxDQUFDRztBQUhELENBQW5CO0FBTWV4QixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hODlmMDIzMjJjZmNkZTE0OWY1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IG5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJiZy1kYXJrXCI6IGRhcmssIFwiYmctbGlnaHRcIjogIWRhcmsgfSl9PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XHJcbiAgICAgICAgey8qIFRpdGxlICovfVxyXG4gICAgICAgIHt0aXRsZSAmJiAoXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwidGV4dC1jZW50ZXJcIiwgeyBcInRleHQtbGlnaHRcIjogZGFyayB9KX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIENvbnRlbnQgKi99XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMT4mY29weTsgRW5yaXF1ZSBHYXJjaWEgUG9ydGZvbGlvPC9oMT5cclxuICAgICAgICAgICAgPHA+MjAxOCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxyXG4gICAgICAgICAgICA8cD5BbGwgcmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wdHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGZvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=