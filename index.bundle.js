/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
function createTodo(projectObj, title, description, priority, dueDate) {
    return {title, description, priority, dueDate};
}

/***/ }),

/***/ "./src/modules/utility/makeProject.js":
/*!********************************************!*\
  !*** ./src/modules/utility/makeProject.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeProject: () => (/* binding */ makeProject)
/* harmony export */ });
// example todo

// todo: {
//     projectName: {
    // {

        //         title: title,
        //         description: description,
        //         dueDate: dueDate,
        //         priority: priority,
    // }
//     }
// }




function makeProject(projectName) {

    return {
        name: projectName,
        todos: [],

        addTodo: function(todo) {
            this.todos.push(todo)
        }
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_utility_makeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utility/makeProject */ "./src/modules/utility/makeProject.js");
/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTodo */ "./src/modules/createTodo.js");





const defaultP = (0,_modules_utility_makeProject__WEBPACK_IMPORTED_MODULE_0__.makeProject)("defaultProject");
const newTodo = (0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])("finishing Todo", "finsish the project: Todo", new Date(2023, 11, 11), 10);

defaultP.addTodo(newTodo);

const anotherTodo = (0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_1__["default"])("another todo", "just another todo", new Date(2023, 11, 12), 10);
defaultP.addTodo(anotherTodo)

localStorage.setItem('DefaultProject', JSON.stringify(defaultP))


localStorage.setItem("abc", "123")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZixZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNkOzs7O0FBSTlDLGlCQUFpQix5RUFBVztBQUM1QixnQkFBZ0IsK0RBQVU7O0FBRTFCOztBQUVBLG9CQUFvQiwrREFBVTtBQUM5Qjs7QUFFQTs7O0FBR0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy91dGlsaXR5L21ha2VQcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0T2JqLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlfTtcbn0iLCIvLyBleGFtcGxlIHRvZG9cblxuLy8gdG9kbzoge1xuLy8gICAgIHByb2plY3ROYW1lOiB7XG4gICAgLy8ge1xuXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgLy8gICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAvLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAvLyB9XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogcHJvamVjdE5hbWUsXG4gICAgICAgIHRvZG9zOiBbXSxcblxuICAgICAgICBhZGRUb2RvOiBmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHttYWtlUHJvamVjdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG1ha2VQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy91dGlsaXR5L21ha2VQcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVRvZG9cIjtcblxuXG5cbmNvbnN0IGRlZmF1bHRQID0gbWFrZVByb2plY3QoXCJkZWZhdWx0UHJvamVjdFwiKTtcbmNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKFwiZmluaXNoaW5nIFRvZG9cIiwgXCJmaW5zaXNoIHRoZSBwcm9qZWN0OiBUb2RvXCIsIG5ldyBEYXRlKDIwMjMsIDExLCAxMSksIDEwKTtcblxuZGVmYXVsdFAuYWRkVG9kbyhuZXdUb2RvKTtcblxuY29uc3QgYW5vdGhlclRvZG8gPSBjcmVhdGVUb2RvKFwiYW5vdGhlciB0b2RvXCIsIFwianVzdCBhbm90aGVyIHRvZG9cIiwgbmV3IERhdGUoMjAyMywgMTEsIDEyKSwgMTApO1xuZGVmYXVsdFAuYWRkVG9kbyhhbm90aGVyVG9kbylcblxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFApKVxuXG5cbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWJjXCIsIFwiMTIzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9