module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainDiv.js":
/*!*******************************!*\
  !*** ./components/MainDiv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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






var fetch = __webpack_require__(/*! node-fetch */ "node-fetch");

var dateformat = __webpack_require__(/*! dateformat */ "dateformat");

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
            startVal += r.polarity;
            arr0.push(r);
          });
          var endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);

          _this2.setState({
            tweets: arr0,
            totalPolarity: endVal,
            loading: false
          });
        });
      } else if (!this.state.tweets[0] && this.props.by == "latest") {
        var _string = "http://localhost:4005/latest/" + this.props.searchterm;

        fetch(_string).then(function (r) {
          return r.json();
        }).then(function (body) {
          var arr0 = [];
          var startVal = 0;
          body.map(function (r) {
            startVal += r.polarity;
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          var endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);

          _this2.setState({
            tweets: arr0,
            totalPolarity: endVal,
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
          var startVal = 0;
          body.map(function (r) {
            startVal += r.polarity;
            r["secondTime"] = dateformat(r.timestamp, "secondTime");
            arr0.push(r);
          });
          var endVal = startVal / 50;
          endVal = endVal / 4;
          arr0.sort(_functions_fetchFunctions__WEBPACK_IMPORTED_MODULE_2__["sortTimes"]);
          console.log(arr0);

          _this3.setState({
            tweets: arr0,
            by: nextProps.by,
            totalPolarity: endVal,
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
          lineNumber: 99
        },
        __self: this
      }, this.state.loading == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "\xA0"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.state.totalPolarity), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Timestamp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Tweet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Retweet Count"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        className: "jsx-2249478052",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
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
            lineNumber: 122
          },
          __self: this
        });
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2249478052",
        css: ".table-header.jsx-2249478052{padding:20px;}.table-header-cells.jsx-2249478052{border:1px solid rgba(157,181,178,0.5);padding:0.2em 1em 0.2em 1em;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL01haW5EaXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkkwQixBQUdnQyxBQUc2QixhQUY1QywwQkFHOEIsNEJBRVYsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL01haW5EaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUd2VldHMsIHNvcnRUaW1lcyB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZmV0Y2hGdW5jdGlvbnNcIjtcbmltcG9ydCBUYWJsZUNlbGxzIGZyb20gXCIuL1RhYmxlQ2VsbHNcIjtcbmltcG9ydCBcIi4uL21haW5EaXYuY3NzXCI7XG5cbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5jb25zdCBkYXRlZm9ybWF0ID0gcmVxdWlyZShcImRhdGVmb3JtYXRcIik7XG5kYXRlZm9ybWF0Lm1hc2tzLnNlY29uZFRpbWUgPSBcInl5bW1kZEhITU1zc1wiO1xuZGF0ZWZvcm1hdC5tYXNrcy5teVRpbWUgPSBcIm1tbSBkZCBoOk1NIFRUXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR3ZWV0czogW10sXG4gICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXJtOiB0aGlzLnByb3BzLnNlYXJjaHRlcm0sIGJ5OiB0aGlzLnByb3BzLmJ5IH0pO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnR3ZWV0c1swXSAmJiB0aGlzLnByb3BzLmJ5ID09IFwidG9wXCIpIHtcbiAgICAgIGxldCBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwNS90b3AvXCIgKyB0aGlzLnByb3BzLnNlYXJjaHRlcm07XG4gICAgICBmZXRjaChzdHJpbmcpXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgIGxldCBhcnIwID0gW107XG4gICAgICAgICAgbGV0IHN0YXJ0VmFsID0gMDtcbiAgICAgICAgICBib2R5Lm1hcChyID0+IHtcbiAgICAgICAgICAgIHJbXCJzZWNvbmRUaW1lXCJdID0gZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJzZWNvbmRUaW1lXCIpO1xuICAgICAgICAgICAgc3RhcnRWYWwgKz0gci5wb2xhcml0eTtcbiAgICAgICAgICAgIGFycjAucHVzaChyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgZW5kVmFsID0gc3RhcnRWYWwgLyA1MDtcbiAgICAgICAgICBlbmRWYWwgPSBlbmRWYWwgLyA0O1xuICAgICAgICAgIGFycjAuc29ydChzb3J0VGltZXMpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHdlZXRzOiBhcnIwLFxuICAgICAgICAgICAgdG90YWxQb2xhcml0eTogZW5kVmFsLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS50d2VldHNbMF0gJiYgdGhpcy5wcm9wcy5ieSA9PSBcImxhdGVzdFwiKSB7XG4gICAgICBsZXQgc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDUvbGF0ZXN0L1wiICsgdGhpcy5wcm9wcy5zZWFyY2h0ZXJtO1xuICAgICAgZmV0Y2goc3RyaW5nKVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihib2R5ID0+IHtcbiAgICAgICAgICBsZXQgYXJyMCA9IFtdO1xuICAgICAgICAgIGxldCBzdGFydFZhbCA9IDA7XG4gICAgICAgICAgYm9keS5tYXAociA9PiB7XG4gICAgICAgICAgICBzdGFydFZhbCArPSByLnBvbGFyaXR5O1xuICAgICAgICAgICAgcltcInNlY29uZFRpbWVcIl0gPSBkYXRlZm9ybWF0KHIudGltZXN0YW1wLCBcInNlY29uZFRpbWVcIik7XG4gICAgICAgICAgICBhcnIwLnB1c2gocik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IGVuZFZhbCA9IHN0YXJ0VmFsIC8gNTA7XG4gICAgICAgICAgZW5kVmFsID0gZW5kVmFsIC8gNDtcbiAgICAgICAgICBhcnIwLnNvcnQoc29ydFRpbWVzKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR3ZWV0czogYXJyMCxcbiAgICAgICAgICAgIHRvdGFsUG9sYXJpdHk6IGVuZFZhbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYnkgIT09IG5leHRQcm9wcy5ieSkge1xuICAgICAgbGV0IHN0cmluZyA9XG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDA1L1wiICsgbmV4dFByb3BzLmJ5ICsgXCIvXCIgKyB0aGlzLnN0YXRlLnNlYXJjaFRlcm07XG4gICAgICBjb25zb2xlLmxvZyhzdHJpbmcpO1xuICAgICAgbGV0IGFycjAgPSBbXTtcbiAgICAgIGZldGNoKHN0cmluZylcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgbGV0IHN0YXJ0VmFsID0gMDtcbiAgICAgICAgICBib2R5Lm1hcChyID0+IHtcbiAgICAgICAgICAgIHN0YXJ0VmFsICs9IHIucG9sYXJpdHk7XG4gICAgICAgICAgICByW1wic2Vjb25kVGltZVwiXSA9IGRhdGVmb3JtYXQoci50aW1lc3RhbXAsIFwic2Vjb25kVGltZVwiKTtcbiAgICAgICAgICAgIGFycjAucHVzaChyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgZW5kVmFsID0gc3RhcnRWYWwgLyA1MDtcbiAgICAgICAgICBlbmRWYWwgPSBlbmRWYWwgLyA0O1xuICAgICAgICAgIGFycjAuc29ydChzb3J0VGltZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFycjApO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHdlZXRzOiBhcnIwLFxuICAgICAgICAgICAgYnk6IG5leHRQcm9wcy5ieSxcbiAgICAgICAgICAgIHRvdGFsUG9sYXJpdHk6IGVuZFZhbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA9PSB0cnVlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnRvdGFsUG9sYXJpdHl9PC9wPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlRpbWVzdGFtcDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlR3ZWV0PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UmV0d2VldCBDb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlNjcmVlbiBOYW1lPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50d2VldHNbMF1cbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUudHdlZXRzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsc1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtyLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgdHdlZXRJZD17ci50d2VldElkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17ZGF0ZWZvcm1hdChyLnRpbWVzdGFtcCwgXCJteVRpbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgcG9sYXJpdHk9e3IucG9sYXJpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybT17ci5zZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgIGlzUmVwbHlUbz17ci5pc1JlcGx5VG99XG4gICAgICAgICAgICAgICAgICAgICAgaXNSZXR3ZWV0PXtyLmlzUmV0d2VldH1cbiAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lPXtyLnNjcmVlbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0d2VldENvdW50PXtyLnJldHdlZXRDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZUNvdW50PXtyLmZhdm9yaXRlQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgcmVwbHlDb3VudD17ci5yZXBseUNvdW50fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlci1jZWxscyB7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NywgMTgxLCAxNzgsIDAuNSk7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJlbSAxZW0gMC4yZW0gMWVtO1xuXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/manx/projects-2/crypt-sent-frontend/components/MainDiv.js */",
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/components/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MyForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyForm, _React$Component);

  function MyForm(props) {
    _classCallCheck(this, MyForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyForm).call(this, props));
  }

  _createClass(MyForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
        pills: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        href: "/",
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "post"))));
    }
  }]);

  return MyForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/components/Pagination.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/searchterm?term=".concat(props.searchterm, "&by=").concat(props.by),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.by));
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      term: _this.props.searchterm,
      by: _this.props.by
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
        "aria-label": "Page navigation example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
        searchterm: this.state.term,
        by: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
        searchterm: this.state.term,
        by: "latest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/TableCells.js":
/*!**********************************!*\
  !*** ./components/TableCells.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/components/TableCells.js";


// import React from "react";
// import { Alert } from "reactstrap";
// import { Table } from "reactstrap";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-3911341397",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3911341397" + " " + "color-coded-".concat(props.polarity, " table-data"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.timestamp), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3911341397" + " " + "color-coded-".concat(props.polarity, " table-data"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3911341397" + " " + "color-coded-".concat(props.polarity, " table-data"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.retweetCount), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3911341397" + " " + "color-coded-".concat(props.polarity, " table-data"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.screenName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3911341397",
    css: ".color-coded-4.jsx-3911341397{background-color:#a0e8af;}.color-coded-0.jsx-3911341397{background-color:#e8aeb7;}.color-coded-2.jsx-3911341397{background-color:#edf5fc;}.table-data.jsx-3911341397{border:1px solid rgba(157,181,178,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzLTIvY3J5cHQtc2VudC1mcm9udGVuZC9jb21wb25lbnRzL1RhYmxlQ2VsbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JPLEFBR29DLEFBR0EsQUFHQSxBQUdpQix5QkFSNUMsQUFHQSxBQUdBLGNBR0EiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMtMi9jcnlwdC1zZW50LWZyb250ZW5kL2NvbXBvbmVudHMvVGFibGVDZWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbi8vIGltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8dHI+XG4gICAgPHRkIGNsYXNzTmFtZT17YGNvbG9yLWNvZGVkLSR7cHJvcHMucG9sYXJpdHl9IHRhYmxlLWRhdGFgfT5cbiAgICAgIHtwcm9wcy50aW1lc3RhbXB9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPXtgY29sb3ItY29kZWQtJHtwcm9wcy5wb2xhcml0eX0gdGFibGUtZGF0YWB9Pntwcm9wcy50ZXh0fTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT17YGNvbG9yLWNvZGVkLSR7cHJvcHMucG9sYXJpdHl9IHRhYmxlLWRhdGFgfT5cbiAgICAgIHtwcm9wcy5yZXR3ZWV0Q291bnR9XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPXtgY29sb3ItY29kZWQtJHtwcm9wcy5wb2xhcml0eX0gdGFibGUtZGF0YWB9PlxuICAgICAge3Byb3BzLnNjcmVlbk5hbWV9XG4gICAgPC90ZD5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuY29sb3ItY29kZWQtNCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwZThhZjtcbiAgICAgICAgfVxuICAgICAgICAuY29sb3ItY29kZWQtMCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YWViNztcbiAgICAgICAgfVxuICAgICAgICAuY29sb3ItY29kZWQtMiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjVmYztcbiAgICAgICAgfVxuICAgICAgICAudGFibGUtZGF0YSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTcsIDE4MSwgMTc4LCAwLjUpO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvdHI+XG4pO1xuXG4vLyBjbGFzc05hbWU9e2Bjb2xvci1jb2RlZC0ke3Byb3BzLnBvbGFyaXR5fSB0YWJsZS1kYXRhYH1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects-2/crypt-sent-frontend/components/TableCells.js */",
    __self: this
  }));
}); // className={`color-coded-${props.polarity} table-data`}

/***/ }),

/***/ "./functions/fetchFunctions.js":
/*!*************************************!*\
  !*** ./functions/fetchFunctions.js ***!
  \*************************************/
/*! exports provided: getTweets, sortTimes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTweets", function() { return getTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTimes", function() { return sortTimes; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = __webpack_require__(/*! node-fetch */ "node-fetch"); // import * as fetch from 'node-fetch';


var getTweets =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(term) {
    var string, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            string = "http://localhost:4005/" + term;
            fetch(string, function (res) {
              response = res;
            });
            _context.next = 4;
            return response;

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getTweets(_x) {
    return _ref.apply(this, arguments);
  };
}();
var sortTimes = function sortTimes(a, b) {
  if (a.secondTime > b.secondTime) return -1;
  if (a.secondTime < b.secondTime) return 1;
  return 0;
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_Fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/Fonts */ "./layouts/index/Fonts.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/layouts/MainLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout(props) {
    _classCallCheck(this, MainLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainLayout).call(this, props));
  }

  _createClass(MainLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_index_Fonts__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: layoutStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), this.props.children);
    }
  }]);

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./layouts/index/Fonts.js":
/*!********************************!*\
  !*** ./layouts/index/Fonts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

var Fonts = function Fonts() {
  var link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500,700,900";
  link.rel = "stylesheet";
  document.head.appendChild(link);
  var josefinSans = new FontFaceObserver("Josefin Sans");
  josefinSans.load().then(function () {
    document.documentElement.classList.add("josefinSans");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./mainDiv.css":
/*!*********************!*\
  !*** ./mainDiv.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/searchterm.js":
/*!*****************************!*\
  !*** ./pages/searchterm.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_MainDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainDiv */ "./components/MainDiv.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
var _jsxFileName = "/Users/manx/projects-2/crypt-sent-frontend/pages/searchterm.js";



 // import MainCard from "../components/MainCard";


var Content = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchterm: props.router.query.term,
    by: props.router.query.by,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    searchterm: props.router.query.term,
    by: props.router.query.by,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
});

var Page = function Page(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/searchterm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/searchterm.js */"./pages/searchterm.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=searchterm.js.map