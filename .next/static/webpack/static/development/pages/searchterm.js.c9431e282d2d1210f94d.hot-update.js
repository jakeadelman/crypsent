webpackHotUpdate("static/development/pages/searchterm.js",{

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js"); // import * as fetch from 'node-fetch';


var getTweets =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(term) {
    var string, response, theRes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            string = "http://localhost:4005/" + term;
            fetch(string, function (res) {
              response = res;
              return response.json();
            }).then(function (r) {
              return console.log(r);
            });
            _context.next = 4;
            return response;

          case 4:
            theRes = _context.sent;
            return _context.abrupt("return", theRes);

          case 6:
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

/***/ })

})
//# sourceMappingURL=searchterm.js.c9431e282d2d1210f94d.hot-update.js.map