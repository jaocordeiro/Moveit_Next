webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/joao/Documentos/developer/moveit-next/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(50),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      experienceToNextLevel: experienceToNextLevel,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"gUNov4GO5PkTEEKUwUuvEqt0SHM=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXVCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQWlFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxrQkFDMUNDLHNEQUFRLENBQUMsQ0FBRCxDQURrQztBQUFBLE1BQzdEQyxLQUQ2RDtBQUFBLE1BQ3REQyxRQURzRDs7QUFBQSxtQkFFbEJGLHNEQUFRLENBQUMsRUFBRCxDQUZVO0FBQUEsTUFFN0RHLGlCQUY2RDtBQUFBLE1BRTFDQyxvQkFGMEM7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsQ0FBRCxDQUhNO0FBQUEsTUFHN0RLLG1CQUg2RDtBQUFBLE1BR3hDQyxzQkFId0M7O0FBQUEsbUJBS3RCTixzREFBUSxDQUFDLElBQUQsQ0FMYztBQUFBLE1BSzdETyxlQUw2RDtBQUFBLE1BSzVDQyxrQkFMNEM7O0FBT3BFLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCOztBQUVBLFdBQVNXLE9BQVQsR0FBbUI7QUFDZlYsWUFBUSxDQUFDRCxLQUFLLEdBQUUsQ0FBUixDQUFSO0FBQ0g7O0FBRUQsV0FBU1ksaUJBQVQsR0FBNkI7QUFDekIsUUFBTUMsb0JBQW9CLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXTCxJQUFJLENBQUNNLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUVBTixzQkFBa0IsQ0FBQ1csU0FBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDdEJaLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNJLFNBQUssRUFBRTtBQUNIUCxXQUFLLEVBQUxBLEtBREc7QUFFSEUsdUJBQWlCLEVBQWpCQSxpQkFGRztBQUdIRSx5QkFBbUIsRUFBbkJBLG1CQUhHO0FBSUhPLGFBQU8sRUFBUEEsT0FKRztBQUtIQyx1QkFBaUIsRUFBakJBLGlCQUxHO0FBTUhKLDJCQUFxQixFQUFyQkEscUJBTkc7QUFPSEYscUJBQWUsRUFBZkEsZUFQRztBQVFIYSxvQkFBYyxFQUFkQTtBQVJHLEtBRFg7QUFBQSxjQVlLckI7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBeENlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzIHtcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlcztcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW59OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSg1MCk7XG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xuICAgICAgICBzZXRMZXZlbChsZXZlbCArMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgIFxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICAgICAgICAgIGxldmVsVXAsXG4gICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})