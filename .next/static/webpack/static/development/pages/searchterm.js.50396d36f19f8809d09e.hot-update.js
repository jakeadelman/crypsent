webpackHotUpdate("static/development/pages/searchterm.js",{

/***/ "./components/MainDiv.js":
/*!*******************************!*\
  !*** ./components/MainDiv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/fetchFunctions */ "./functions/fetchFunctions.js");
/* harmony import */ var _TableCells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableCells */ "./components/TableCells.js");
/* harmony import */ var _mainDiv_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mainDiv.css */ "./mainDiv.css");
/* harmony import */ var _mainDiv_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mainDiv_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/components/MainDiv.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

var dateformat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");

dateformat.masks.secondTime = "yymmddHHMMss";
dateformat.masks.myTime = "mmm dd h:MM TT";

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      tweets: [],
      loading: true
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        searchTerm: this.props.searchterm,
        by: this.props.by
      });

      if (!this.state.tweets[0] && this.props.by == "top") {
        var string = "http://localhost:4005/top/" + this.props.searchterm;
        fetch(string).then(function (r) {
          return r.json();
        }).then(function (body) {
          var arr0 = [];
          body.map(function (r) {
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);

          _this2.setState({
            tweets: arr0,
            loading: false
          });
        });
      } else if (!this.state.tweets[0] && this.props.by == "latest") {
        var _string = "http://localhost:4005/latest/" + this.props.searchterm;

        fetch(_string).then(function (r) {
          return r.json();
        }).then(function (body) {
          var arr0 = [];
          body.map(function (r) {
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);

          _this2.setState({
            tweets: arr0,
            loading: false
          });
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (this.state.by !== nextProps.by) {
        var string = "http://localhost:4005/" + nextProps.by + "/" + this.state.searchTerm;
        console.log(string);
        var arr0 = [];
        fetch(string).then(function (r) {
          return r.json();
        }).then(function (body) {
          body.map(function (r) {
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);
          console.log(arr0);

          _this3.setState({
            tweets: arr0,
            by: nextProps.by,
            loading: false
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.state.loading == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\xA0"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Timestamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Tweet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Retweet Count"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Screen Name")), this.state.tweets[0] ? this.state.tweets.map(function (r, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TableCells__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: i,
          id: i,
          text: r.text,
          tweetId: r.tweetId,
          timestamp: dateformat(r.timestamp, "myTime"),
          polarity: r.polarity,
          searchTerm: r.searchTerm,
          isReplyTo: r.isReplyTo,
          isRetweet: r.isRetweet,
          screenName: r.screenName,
          retweetCount: r.retweetCount,
          favoriteCount: r.favoriteCount,
          replyCount: r.replyCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        });
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL01haW5EaXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0h3QiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy0yL2NyeXB0LXNlbnQtZnJvbnRlbmQvY29tcG9uZW50cy9NYWluRGl2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VHdlZXRzLCBzb3J0VGltZXMgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2ZldGNoRnVuY3Rpb25zXCI7XG5pbXBvcnQgVGFibGVDZWxscyBmcm9tIFwiLi9UYWJsZUNlbGxzXCI7XG5pbXBvcnQgXCIuLi9tYWluRGl2LmNzc1wiO1xuXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuY29uc3QgZGF0ZWZvcm1hdCA9IHJlcXVpcmUoXCJkYXRlZm9ybWF0XCIpO1xuZGF0ZWZvcm1hdC5tYXNrcy5zZWNvbmRUaW1lID0gXCJ5eW1tZGRISE1Nc3NcIjtcbmRhdGVmb3JtYXQubWFza3MubXlUaW1lID0gXCJtbW0gZGQgaDpNTSBUVFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2VldHM6IFtdLFxuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTogdGhpcy5wcm9wcy5zZWFyY2h0ZXJtLCBieTogdGhpcy5wcm9wcy5ieSB9KTtcblxuICAgIGlmICghdGhpcy5zdGF0ZS50d2VldHNbMF0gJiYgdGhpcy5wcm9wcy5ieSA9PSBcInRvcFwiKSB7XG4gICAgICBsZXQgc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvdG9wL1wiICsgdGhpcy5wcm9wcy5zZWFyY2h0ZXJtO1xuICAgICAgZmV0Y2goc3RyaW5nKVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihib2R5ID0+IHtcbiAgICAgICAgICBsZXQgYXJyMCA9IFtdO1xuICAgICAgICAgIGJvZHkubWFwKHIgPT4ge1xuICAgICAgICAgICAgcltcInNlY29uZFRpbWVcIl0gPSBkYXRlZm9ybWF0KHIudGltZXN0YW1wLCBcInNlY29uZFRpbWVcIik7XG4gICAgICAgICAgICBhcnIwLnB1c2gocik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJyMC5zb3J0KHNvcnRUaW1lcyk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR3ZWV0czogYXJyMCwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUudHdlZXRzWzBdICYmIHRoaXMucHJvcHMuYnkgPT0gXCJsYXRlc3RcIikge1xuICAgICAgbGV0IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDA1L2xhdGVzdC9cIiArIHRoaXMucHJvcHMuc2VhcmNodGVybTtcbiAgICAgIGZldGNoKHN0cmluZylcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgbGV0IGFycjAgPSBbXTtcbiAgICAgICAgICBib2R5Lm1hcChyID0+IHtcbiAgICAgICAgICAgIHJbXCJzZWNvbmRUaW1lXCJdID0gZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJzZWNvbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXJyMC5wdXNoKHIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFycjAuc29ydChzb3J0VGltZXMpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0d2VldHM6IGFycjAsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLmJ5ICE9PSBuZXh0UHJvcHMuYnkpIHtcbiAgICAgIGxldCBzdHJpbmcgPVxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS9cIiArIG5leHRQcm9wcy5ieSArIFwiL1wiICsgdGhpcy5zdGF0ZS5zZWFyY2hUZXJtO1xuICAgICAgY29uc29sZS5sb2coc3RyaW5nKTtcbiAgICAgIGxldCBhcnIwID0gW107XG4gICAgICBmZXRjaChzdHJpbmcpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgIGJvZHkubWFwKHIgPT4ge1xuICAgICAgICAgICAgcltcInNlY29uZFRpbWVcIl0gPSBkYXRlZm9ybWF0KHIudGltZXN0YW1wLCBcInNlY29uZFRpbWVcIik7XG4gICAgICAgICAgICBhcnIwLnB1c2gocik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJyMC5zb3J0KHNvcnRUaW1lcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coYXJyMCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR3ZWV0czogYXJyMCwgYnk6IG5leHRQcm9wcy5ieSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA9PSB0cnVlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+VGltZXN0YW1wPC90aD5cbiAgICAgICAgICAgICAgPHRoPlR3ZWV0PC90aD5cbiAgICAgICAgICAgICAgPHRoPlJldHdlZXQgQ291bnQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+U2NyZWVuIE5hbWU8L3RoPlxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAge3RoaXMuc3RhdGUudHdlZXRzWzBdXG4gICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS50d2VldHMubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsc1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtyLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIHR3ZWV0SWQ9e3IudHdlZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wPXtkYXRlZm9ybWF0KHIudGltZXN0YW1wLCBcIm15VGltZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgcG9sYXJpdHk9e3IucG9sYXJpdHl9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm09e3Iuc2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgaXNSZXBseVRvPXtyLmlzUmVwbHlUb31cbiAgICAgICAgICAgICAgICAgICAgaXNSZXR3ZWV0PXtyLmlzUmV0d2VldH1cbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZT17ci5zY3JlZW5OYW1lfVxuICAgICAgICAgICAgICAgICAgICByZXR3ZWV0Q291bnQ9e3IucmV0d2VldENvdW50fVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZUNvdW50PXtyLmZhdm9yaXRlQ291bnR9XG4gICAgICAgICAgICAgICAgICAgIHJlcGx5Q291bnQ9e3IucmVwbHlDb3VudH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIC50YWJsZS1oZWFkZXIge1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgIH1cbi8vICAgLnRhYmxlLWhlYWRlci1jZWxscyB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE4MSwgMTc4LCAwLjUpO1xuLy8gICAgIHBhZGRpbmc6IDAuMmVtIDFlbSAwLjJlbSAxZW07XG5cbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIH1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects-2/crypt-sent-frontend/components/MainDiv.js */",
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // .table-header {
//     padding: 20px;
//   }
//   .table-header-cells {
//     border: 1px solid rgba(157, 181, 178, 0.5);
//     padding: 0.2em 1em 0.2em 1em;
//     text-align: center;
//   }




/***/ })

})
//# sourceMappingURL=searchterm.js.50396d36f19f8809d09e.hot-update.js.map