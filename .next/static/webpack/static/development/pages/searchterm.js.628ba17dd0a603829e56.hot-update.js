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
          var startVal = 0;
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
          lineNumber: 75
        },
        __self: this
      }, this.state.loading == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\xA0"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Timestamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Tweet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Retweet Count"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-904613867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
            lineNumber: 96
          },
          __self: this
        });
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "904613867",
        css: ".table-header.jsx-904613867{padding:20px;}.table-header-cells.jsx-904613867{border:1px solid rgba(157,181,178,0.5);padding:0.2em 1em 0.2em 1em;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL01haW5EaXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUh3QixBQUc4QixBQUc2QixhQUY1QywwQkFHOEIsNEJBRVYsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL01haW5EaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUd2VldHMsIHNvcnRUaW1lcyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmV0Y2hGdW5jdGlvbnNcIjtcbmltcG9ydCBUYWJsZUNlbGxzIGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCBcIi4uL21haW5EaXYuY3NzXCI7XG5cbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5jb25zdCBkYXRlZm9ybWF0ID0gcmVxdWlyZShcImRhdGVmb3JtYXRcIik7XG5kYXRlZm9ybWF0Lm1hc2tzLnNlY29uZFRpbWUgPSBcInl5bW1kZEhITU1zc1wiO1xuZGF0ZWZvcm1hdC5tYXNrcy5teVRpbWUgPSBcIm1tbSBkZCBoOk1NIFRUXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR3ZWV0czogW10sXG4gICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXJtOiB0aGlzLnByb3BzLnNlYXJjaHRlcm0sIGJ5OiB0aGlzLnByb3BzLmJ5IH0pO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnR3ZWV0c1swXSAmJiB0aGlzLnByb3BzLmJ5ID09IFwidG9wXCIpIHtcbiAgICAgIGxldCBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS90b3AvXCIgKyB0aGlzLnByb3BzLnNlYXJjaHRlcm07XG4gICAgICBmZXRjaChzdHJpbmcpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgIGxldCBhcnIwID0gW107XG4gICAgICAgICAgbGV0IHN0YXJ0VmFsID0gMDtcbiAgICAgICAgICBib2R5Lm1hcChyID0+IHtcbiAgICAgICAgICAgIHJbXCJzZWNvbmRUaW1lXCJdID0gZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJzZWNvbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXJyMC5wdXNoKHIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFycjAuc29ydChzb3J0VGltZXMpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0d2VldHM6IGFycjAsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLnR3ZWV0c1swXSAmJiB0aGlzLnByb3BzLmJ5ID09IFwibGF0ZXN0XCIpIHtcbiAgICAgIGxldCBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS9sYXRlc3QvXCIgKyB0aGlzLnByb3BzLnNlYXJjaHRlcm07XG4gICAgICBmZXRjaChzdHJpbmcpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgIGxldCBhcnIwID0gW107XG4gICAgICAgICAgYm9keS5tYXAociA9PiB7XG4gICAgICAgICAgICByW1wic2Vjb25kVGltZVwiXSA9IGRhdGVmb3JtYXQoci50aW1lc3RhbXAsIFwic2Vjb25kVGltZVwiKTtcbiAgICAgICAgICAgIGFycjAucHVzaChyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcnIwLnNvcnQoc29ydFRpbWVzKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdHdlZXRzOiBhcnIwLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5ieSAhPT0gbmV4dFByb3BzLmJ5KSB7XG4gICAgICBsZXQgc3RyaW5nID1cbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvXCIgKyBuZXh0UHJvcHMuYnkgKyBcIi9cIiArIHRoaXMuc3RhdGUuc2VhcmNoVGVybTtcbiAgICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XG4gICAgICBsZXQgYXJyMCA9IFtdO1xuICAgICAgZmV0Y2goc3RyaW5nKVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihib2R5ID0+IHtcbiAgICAgICAgICBib2R5Lm1hcChyID0+IHtcbiAgICAgICAgICAgIHJbXCJzZWNvbmRUaW1lXCJdID0gZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJzZWNvbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXJyMC5wdXNoKHIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFycjAuc29ydChzb3J0VGltZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFycjApO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0d2VldHM6IGFycjAsIGJ5OiBuZXh0UHJvcHMuYnksIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPT0gdHJ1ZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlRpbWVzdGFtcDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ud2VldDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5SZXR3ZWV0IENvdW50PC90aD5cbiAgICAgICAgICAgICAgPHRoPlNjcmVlbiBOYW1lPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnR3ZWV0c1swXVxuICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudHdlZXRzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbHNcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17ci50ZXh0fVxuICAgICAgICAgICAgICAgICAgICB0d2VldElkPXtyLnR3ZWV0SWR9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17ZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJteVRpbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIHBvbGFyaXR5PXtyLnBvbGFyaXR5fVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtPXtyLnNlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICAgIGlzUmVwbHlUbz17ci5pc1JlcGx5VG99XG4gICAgICAgICAgICAgICAgICAgIGlzUmV0d2VldD17ci5pc1JldHdlZXR9XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9e3Iuc2NyZWVuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcmV0d2VldENvdW50PXtyLnJldHdlZXRDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVDb3VudD17ci5mYXZvcml0ZUNvdW50fVxuICAgICAgICAgICAgICAgICAgICByZXBseUNvdW50PXtyLnJlcGx5Q291bnR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWJsZS1oZWFkZXItY2VsbHMge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU3LCAxODEsIDE3OCwgMC41KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJlbSAxZW0gMC4yZW0gMWVtO1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects-2/crypt-sent-frontend/components/MainDiv.js */",
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=searchterm.js.628ba17dd0a603829e56.hot-update.js.map