(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddToBasket.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddToBasket.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: Object
  },
  computed: {
    quantity: function quantity() {
      return _.get(this.$root.basket, this.product.id + '.qty');
    }
  },
  methods: {
    add: function add() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$addToBasket(_this.product);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    remove: function remove() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$removeFromBasket(_this2.product);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    order: Object
  },
  data: function data() {
    return {
      charging: false,
      expanded: false,
      amending: false
    };
  },
  methods: {
    charge: function charge() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.charging = true;
                _context.next = 3;
                return ajax.post("/api/order/".concat(_this.order.id, "/charge"));

              case 3:
                _this.charging = false;

                _this.$emit('fetch');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    markAsDelivered: function markAsDelivered() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return ajax.post("/api/order/".concat(_this2.order.id, "/delivered"));

              case 2:
                _this2.expanded = false;

                _this2.$emit('fetch');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    decreaseQty: function decreaseQty(item) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.amending) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _this3.amending = true;
                _context3.next = 5;
                return ajax["delete"]("/api/order/".concat(_this3.order.id, "/").concat(item.id));

              case 5:
                _this3.$emit('fetch');

                _this3.amending = false;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddToBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AddToBasket */ "./resources/js/components/AddToBasket.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddToBasket: _components_AddToBasket__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    product: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: {},
      isCheckingOut: false,
      basketVisible: false,
      form: {
        telephone: null
      },
      stripe: Stripe(App.stripeToken)
    };
  },
  computed: {
    subTotal: function subTotal() {
      return _.sum(_.values(_.mapValues(this.$root.basket, function (_ref) {
        var qty = _ref.qty,
            price = _ref.price;
        return qty * price;
      })));
    },
    deliveryFee: function deliveryFee() {
      if (this.subTotal >= 30 * 100) return 0;
      if (this.subTotal >= 20 * 100) return 100;
      return 200;
    },
    total: function total() {
      return this.subTotal + this.deliveryFee;
    }
  },
  methods: {
    closeSidebars: function closeSidebars() {
      this.basketVisible = false;
      this.$root.menuVisible = false;
    },
    toggleMenu: function toggleMenu() {
      this.$root.menuVisible = !this.$root.menuVisible;
    },
    placeOrder: function placeOrder() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, sessionId, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return ajax.post('/api/order', _objectSpread({
                  basket: _this.$root.basket
                }, _this.form));

              case 3:
                _ref2 = _context.sent;
                sessionId = _ref2.data.sessionId;

                _this.stripe.redirectToCheckout({
                  sessionId: sessionId
                });

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                response = _context.t0.response;
                _this.errors = _.mapValues(response.data.errors, function (e) {
                  return _.first(e);
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    checkout: function checkout() {
      var _this2 = this;

      if (this.isCheckingOut) {
        return this.placeOrder();
      }

      this.isCheckingOut = true;
      setTimeout(function () {
        return _this2.$refs.telephoneInput.focus();
      }, 150);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product */ "./resources/js/components/Product.vue");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Product: _components_Product__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      products: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ajax.get("/api/group/".concat(to.params.group, "/").concat(to.params.category));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              next(function (vm) {
                return vm.fill(data);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fill: function fill(data) {
      this.products = data;
    }
  },
  created: function created() {
    this.$root.menuVisible = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.$clearBasket();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Group.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Group.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      categories: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var categories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ajax.get("/api/group/".concat(to.params.group));

            case 2:
              categories = _context.sent;
              next(function (vm) {
                return vm.fill(categories.data);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fill: function fill(categories) {
      this.categories = categories;
    }
  },
  created: function created() {
    this.$root.menuVisible = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      groups: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ajax.get('/api/group');

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              next(function (vm) {
                return vm.fill(data);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    fill: function fill(data) {
      this.groups = data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Order */ "./resources/js/components/Order.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Order: _components_Order__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      orders: {},
      secret: null,
      loggedIn: App.adminLoggedIn
    };
  },
  computed: {
    pending: function pending() {
      return _.pickBy(this.orders, function (_ref) {
        var charged_at = _ref.charged_at,
            delivered_at = _ref.delivered_at;
        return !charged_at && !delivered_at;
      });
    },
    outForDelivery: function outForDelivery() {
      return _.pickBy(this.orders, function (_ref2) {
        var charged_at = _ref2.charged_at,
            delivered_at = _ref2.delivered_at;
        return !!charged_at && !delivered_at;
      });
    },
    fulfilled: function fulfilled() {
      return _.pickBy(this.orders, function (_ref3) {
        var delivered_at = _ref3.delivered_at;
        return !!delivered_at;
      });
    }
  },
  methods: {
    keys: function keys(object) {
      return _.keys(object);
    },
    fetchOne: function fetchOne(orderId) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ajax.get("/api/order/".concat(orderId));

              case 2:
                _ref4 = _context.sent;
                data = _ref4.data;
                _this.orders[orderId] = data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetch: function fetch() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return ajax.get('/api/order');

              case 2:
                _ref5 = _context2.sent;
                data = _ref5.data;
                _this2.orders = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    login: function login() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return ajax.post('/api/login', {
                  secret: _this3.secret
                });

              case 3:
                _this3.loggedIn = true;

                _this3.fetch();

                setInterval(_this3.fetch, 60000);
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                response = _context3.t0.response;
                window.alert(response.data.message);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    }
  },
  created: function created() {
    if (this.loggedIn) {
      this.fetch();
      setInterval(this.fetch, 60000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".-mr-basket[data-v-91ac6b5c] {\n  margin-right: -24rem;\n}\n.-mb-checkout[data-v-91ac6b5c] {\n  margin-bottom: -7.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full mt-4" }, [
    _c(
      "button",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.quantity,
            expression: "! quantity"
          }
        ],
        staticClass: "w-full",
        on: { click: _vm.add }
      },
      [_vm._v("Add")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.quantity,
            expression: "quantity"
          }
        ],
        staticClass:
          "flex w-full items-center justify-center text-center select-none"
      },
      [
        _c("button", { staticClass: "w-12", on: { click: _vm.remove } }, [
          _vm._v("-")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "flex-1" }, [_vm._v(_vm._s(_vm.quantity))]),
        _vm._v(" "),
        _c("button", { staticClass: "w-12", on: { click: _vm.add } }, [
          _vm._v("+")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex flex-wrap w-full items-center my-4 bg-white shadow rounded p-6"
    },
    [
      _c("div", { staticClass: "inline-flex flex-1 items-center" }, [
        _c("span", { staticClass: "mr-6" }, [
          _vm._v(_vm._s(_vm.order.customer.shipping.name))
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "mr-6" }, [
          _vm._v(_vm._s(_vm.order.customer.shipping.phone))
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "underline cursor-pointer text-gray-600 select-none",
            on: {
              click: function($event) {
                _vm.expanded = !_vm.expanded
              }
            }
          },
          [_vm._v("See Order")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "flex-1 text-right font-number" }, [
          _vm._v("Total to pay " + _vm._s(_vm._f("currency")(_vm.order.total)))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.expanded,
              expression: "expanded"
            }
          ],
          staticClass: "block w-full border-t mt-6 pt-6"
        },
        [
          _c("div", { staticClass: "flex w-full mb-6" }, [
            _c("div", { staticClass: "inline-flex flex-shrink-0 flex-col" }, [
              _c("span", { staticClass: "font-bold" }, [
                _vm._v("Shipping Address")
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.order.customer.shipping.address.line1))
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.order.customer.shipping.address.line2))
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s(_vm.order.customer.shipping.address.city) +
                    ", " +
                    _vm._s(_vm.order.customer.shipping.address.country)
                )
              ]),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.order.customer.shipping.address.postal_code))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-1 text-right select-none" }, [
              _c(
                "button",
                {
                  staticClass: "px-4 ml-2",
                  attrs: { disabled: _vm.charging || _vm.order.charged_at },
                  on: { click: _vm.charge }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.charging
                          ? "Please Wait"
                          : _vm.order.charged_at
                          ? "Payment Received"
                          : "Take Payment"
                      ) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "px-4 ml-2",
                  attrs: { disabled: _vm.order.delivered_at },
                  on: { click: _vm.markAsDelivered }
                },
                [_vm._v("\n                    Delivered\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.order.items, function(item) {
            return _c(
              "div",
              {
                key: "orderitem-" + item.id,
                staticClass: "flex w-full items-center text-sm mb-1"
              },
              [
                _c("span", { staticClass: "flex-1 text-left truncate" }, [
                  _vm._v(_vm._s(item.product.title))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn-sm mr-4",
                    attrs: { disabled: _vm.amending },
                    on: {
                      click: function($event) {
                        return _vm.decreaseQty(item)
                      }
                    }
                  },
                  [_vm._v("-")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "font-number text-right mr-4" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(item.quantity) +
                      "\n                ×\n            "
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: item.amount / 100,
                      expression: "item.amount / 100",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass:
                    "font-number text-right border rounded px-1 w-16",
                  attrs: { placeholder: "Amount" },
                  domProps: { value: item.amount / 100 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        item,
                        "amount / 100",
                        _vm._n($event.target.value)
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]
            )
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "inline-flex flex-col w-product bg-white shadow m-2 p-4 rounded"
    },
    [
      _c("span", { staticClass: "w-full mb-4 text-sm" }, [
        _vm._v(_vm._s(_vm.product.title))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex-1 flex items-end" }, [
        _c(
          "div",
          { staticClass: "flex flex-col w-full" },
          [
            _c("span", { staticClass: "w-full text-xs" }, [
              _vm._v(_vm._s(_vm.product.unit_size))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "w-full font-bold" }, [
              _vm._v(_vm._s(_vm._f("currency")(_vm.product.price)))
            ]),
            _vm._v(" "),
            _c("add-to-basket", { attrs: { product: _vm.product } })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.$root.menuVisible,
          expression: "$root.menuVisible"
        }
      ],
      staticClass:
        "fixed z-50 flex flex-col left-0 top-0 bottom-0 w-basket transition-all duration-200 ease-in-out"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "flex flex-1 flex-col bg-background-lighter shadow-lg overflow-y-hidden"
        },
        [
          _c(
            "span",
            {
              staticClass:
                "flex items-center text-gray-900 font-bold text-xl px-6 py-4 bg-white border-b border-gray-200"
            },
            [
              _c("icon", {
                staticClass: "text-black mr-4 cursor-pointer select-none",
                attrs: { name: "close", width: "20", height: "20" },
                nativeOn: {
                  click: function($event) {
                    _vm.$root.menuVisible = false
                  }
                }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.title))])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "block w-full flex-1 px-6 py-4 overflow-y-auto" },
            [_vm._m(0), _vm._v(" "), _vm._t("default")],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "block w-full mb-4 text-black text-sm" }, [
      _vm._v("\n                Call us on "),
      _c("strong", [_vm._v("01872 275102")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "header",
      {
        staticClass:
          "fixed py-4 top-0 left-0 right-0 block bg-blue-500 text-white px-6 md:px-8 text-lg z-40"
      },
      [
        _c(
          "nav",
          { staticClass: "flex items-center justify-between w-full h-full" },
          [
            _c(
              "span",
              {
                staticClass:
                  "inline-flex items-center mr-6 cursor-pointer select-none",
                on: { click: _vm.toggleMenu }
              },
              [
                _c("icon", {
                  staticClass: "text-white mr-2",
                  attrs: { name: "menu", width: "20", height: "20" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "sm:hidden font-bold text-sm" }, [
                  _vm._v("Menu")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "hidden sm:flex flex-col" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-xl font-bold tracking-wide",
                    attrs: { to: "/" }
                  },
                  [
                    _vm._v(
                      "\n                    Shortlanesend Store\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(0)
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "inline-flex items-center justify-end flex-1" },
              [
                _c(
                  "span",
                  {
                    staticClass:
                      "inline-flex items-center text-lg font-bold cursor-pointer select-none",
                    on: {
                      click: function($event) {
                        _vm.basketVisible = !_vm.basketVisible
                      }
                    }
                  },
                  [
                    _c("icon", {
                      staticClass: "text-white mr-2",
                      attrs: {
                        name: "shopping-cart",
                        width: "20",
                        height: "20"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm._f("currency")(_vm.subTotal)))
                    ])
                  ],
                  1
                )
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "main",
      { staticClass: "w-full py-16 sm:py-20" },
      [_c("router-view")],
      1
    ),
    _vm._v(" "),
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.basketVisible || _vm.$root.menuVisible,
          expression: "basketVisible || $root.menuVisible"
        }
      ],
      staticClass: "fixed inset-0 z-10 bg-blue-500 opacity-25",
      on: { click: _vm.closeSidebars }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.basketVisible,
            expression: "basketVisible"
          }
        ],
        staticClass:
          "fixed z-50 flex flex-col right-0 top-0 bottom-0 w-full sm:w-basket transition-all duration-200 ease-in-out"
      },
      [
        _c(
          "div",
          {
            staticClass: "flex flex-1 flex-col bg-background-lighter shadow-lg"
          },
          [
            _c(
              "span",
              {
                staticClass:
                  "flex items-center text-gray-900 font-bold text-xl px-6 py-4 bg-white border-b border-gray-200"
              },
              [
                _c("icon", {
                  staticClass: "text-black mr-4 cursor-pointer select-none",
                  attrs: { name: "close", width: "20", height: "20" },
                  nativeOn: {
                    click: function($event) {
                      _vm.basketVisible = false
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("Your Basket")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex-1 bg-background-lighter p-4 xl:p-6 overflow-y-auto"
              },
              _vm._l(_vm.$root.basket, function(product, id) {
                return _c(
                  "div",
                  {
                    key: "basket-" + id,
                    staticClass: "flex w-full items-center text-sm mb-1"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "flex-1 text-left truncate",
                        attrs: { title: product.title }
                      },
                      [_vm._v(_vm._s(product.title))]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-number text-right mx-4" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(product.qty) +
                          "\n                        ×\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "font-number text-right" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm._f("currency")(product.price)) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-sm ml-4 mr-1",
                        on: {
                          click: function($event) {
                            return _vm.$removeFromBasket(product)
                          }
                        }
                      },
                      [_vm._v("-")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.$addToBasket(product)
                          }
                        }
                      },
                      [_vm._v("+")]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-shrink-0 px-4 xl:px-6 w-full text-sm mb-2"
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "flex-1 text-left text-gray-700 font-semibold"
                  },
                  [_vm._v("Sub-total")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "flex-1 text-right font-number text-black" },
                  [_vm._v(_vm._s(_vm._f("currency")(_vm.subTotal)))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-shrink-0 px-4 xl:px-6 w-full text-sm" },
              [
                _c(
                  "span",
                  {
                    staticClass: "flex-1 text-left text-gray-700 font-semibold"
                  },
                  [_vm._v("Delivery")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "flex-1 text-right font-number text-black" },
                  [_vm._v(_vm._s(_vm._f("currency")(_vm.deliveryFee)))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "block flex-shrink-0 p-4 xl:p-6 mt-4 xl:mt-6 border-t border-gray-200 w-full bg-white rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden"
              },
              [
                _c("div", { staticClass: "flex items-end w-full" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "flex-shrink-0 text-right font-number text-xl xl:text-2xl font-extrabold"
                    },
                    [_vm._v(_vm._s(_vm._f("currency")(_vm.total)))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isCheckingOut,
                        expression: "isCheckingOut"
                      }
                    ],
                    staticClass:
                      "block w-full mt-6 select-none transition-all duration-300 ease-in-out"
                  },
                  [
                    _c("label", { class: { error: _vm.errors.telephone } }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.telephone,
                            expression: "form.telephone"
                          }
                        ],
                        ref: "telephoneInput",
                        staticClass: "text-center",
                        attrs: {
                          required: "",
                          type: "tel",
                          name: "telephone",
                          placeholder: "Mobile or home number"
                        },
                        domProps: { value: _vm.form.telephone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "telephone", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.telephone,
                            expression: "errors.telephone"
                          }
                        ],
                        domProps: { textContent: _vm._s(_vm.errors.telephone) }
                      })
                    ])
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "w-full btn-primary py-4 text-lg rounded-none",
            attrs: {
              disabled:
                (_vm.isCheckingOut && !_vm.form.telephone) || !_vm.subTotal
            },
            on: { click: _vm.checkout }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(_vm.isCheckingOut ? "Place Order →" : "Checkout") +
                "\n        "
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-blue-200 text-sm" }, [
      _vm._v("\n                    Call us on "),
      _c("strong", { staticClass: "text-white" }, [_vm._v("01872 275102")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex-1 text-left" }, [
      _c("span", { staticClass: "block w-full font-bold" }, [
        _vm._v("Total to pay")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "block w-full text-xs text-gray-600" }, [
        _vm._v("You will be charged on delivery.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-sm mb-2 text-gray-700" }, [
      _vm._v("Please enter your phone number below."),
      _c("br"),
      _vm._v("We will contact you to confirm delivery of your items.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=template&id=6480121d&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Category.vue?vue&type=template&id=6480121d& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex" },
    [
      _c(
        "sidebar",
        { attrs: { title: "Pick a sub-category" } },
        [
          _c(
            "router-link",
            {
              staticClass:
                "hover:underline inline-block w-full py-1 text-sm text-black opacity-50",
              attrs: { to: "/group/" + _vm.$route.params.group }
            },
            [_vm._v("\n            ← Back to sub-categories\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap flex-1 p-4" },
        _vm._l(_vm.products, function(product) {
          return _c("product", {
            key: "product-" + product.id,
            attrs: { product: product }
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "sidebar",
        { attrs: { title: "Menu" } },
        [
          _c(
            "router-link",
            {
              staticClass:
                "hover:underline inline-block w-full py-1 text-sm text-black opacity-50",
              attrs: { to: "/" }
            },
            [_vm._v("\n            ← Back to home\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex w-full flex-col items-center py-8 px-6" },
        [
          _c(
            "span",
            { staticClass: "text-xl font-semibold mb-6 text-center" },
            [_vm._v("Thanks for shopping with us!")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex w-full flex-col items-center border-t mt-8 pt-8"
            },
            [
              _c(
                "p",
                { staticClass: "block text-black text-center font-light" },
                [
                  _vm._v(
                    "\n                When we're ready to deliver your order, we will charge your card\n                "
                  ),
                  _vm.$route.query.amount
                    ? _c("strong", { staticClass: "font-bold" }, [
                        _vm._v(
                          _vm._s(_vm._f("currency")(_vm.$route.query.amount))
                        )
                      ])
                    : _vm._e(),
                  _vm._v(".\n                "),
                  _c("br"),
                  _vm._v(
                    "If we're unable to deliver some items that are out of stock, you will not be charged for them.\n            "
                  )
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "block text-gray-700 text-center font-light" },
      [
        _vm._v(
          "\n            We have received your order and will contact you shortly to confirm the items you've chosen are in stock, and when you can expect delivery."
        ),
        _c("br"),
        _c("br"),
        _vm._v(
          "\n            If you need to make changes to your order, just call us on 01872 275102.\n        "
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Group.vue?vue&type=template&id=210ac570&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Group.vue?vue&type=template&id=210ac570& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex" },
    [
      _c(
        "sidebar",
        { attrs: { title: "Pick a sub-category" } },
        [
          _c(
            "router-link",
            {
              staticClass:
                "hover:underline inline-block w-full py-1 text-sm text-black opacity-50",
              attrs: { to: "/" }
            },
            [_vm._v("\n            ← Back to categories\n        ")]
          ),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c(
              "router-link",
              {
                key: "category-" + category.id,
                staticClass:
                  "hover:underline inline-block w-full py-1 text-sm text-black",
                attrs: {
                  to: "/group/" + _vm.$route.params.group + "/" + category.id
                }
              },
              [_vm._v("\n            " + _vm._s(category.title) + "\n        ")]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap flex-1 p-4" },
        _vm._l(_vm.categories, function(category) {
          return _c(
            "router-link",
            {
              key: "category-" + category.id,
              staticClass:
                "inline-block bg-white rounded shadow m-2 px-4 py-4 w-product text-base text-black",
              attrs: {
                to: "/group/" + _vm.$route.params.group + "/" + category.id
              }
            },
            [_vm._v("\n            " + _vm._s(category.title) + "\n        ")]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex flex-wrap" },
    [
      _c(
        "sidebar",
        { attrs: { title: "Pick a category" } },
        _vm._l(_vm.groups, function(group) {
          return _c(
            "router-link",
            {
              key: "group-" + group.id,
              staticClass:
                "hover:underline inline-block w-full py-1 text-sm text-black",
              attrs: { to: "/group/" + group.id }
            },
            [_vm._v("\n            " + _vm._s(group.title) + "\n        ")]
          )
        }),
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap p-6 flex-1" },
        _vm._l(_vm.groups, function(group) {
          return _c(
            "router-link",
            {
              key: "group-" + group.id,
              staticClass:
                "inline-block bg-white rounded shadow m-2 px-4 py-4 w-product text-base text-black",
              attrs: { to: "/group/" + group.id }
            },
            [_vm._v("\n            " + _vm._s(group.title) + "\n        ")]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block w-full px-6 py-8 text-center" }, [
      _c("span", { staticClass: "w-full text-xl sm:text-2xl font-bold" }, [
        _vm._v("To start, pick a category.")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "You can choose which items you would like, place your order online, and we'll deliver it to your door!"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container mx-auto p-6" },
    [
      _vm.loggedIn
        ? [
            _vm.keys(_vm.orders).length
              ? [
                  _c(
                    "span",
                    { staticClass: "text-3xl block w-full font-bold" },
                    [_vm._v("Awaiting packing")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.keys(_vm.pending).length,
                          expression: "! keys(pending).length"
                        }
                      ]
                    },
                    [_vm._v("No orders available.")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.pending, function(order) {
                    return _c("order", {
                      key: "order-" + order.id,
                      attrs: { order: order },
                      on: {
                        fetch: function($event) {
                          return _vm.fetchOne(order.id)
                        }
                      }
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-3xl block w-full font-bold mt-16" },
                    [_vm._v("Out for delivery")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.keys(_vm.outForDelivery).length,
                          expression: "! keys(outForDelivery).length"
                        }
                      ]
                    },
                    [_vm._v("No orders available.")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.outForDelivery, function(order) {
                    return _c("order", {
                      key: "order-" + order.id,
                      attrs: { order: order },
                      on: {
                        fetch: function($event) {
                          return _vm.fetchOne(order.id)
                        }
                      }
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-3xl block w-full font-bold mt-16" },
                    [_vm._v("Fulfilled")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.keys(_vm.fulfilled).length,
                          expression: "! keys(fulfilled).length"
                        }
                      ]
                    },
                    [_vm._v("No orders available.")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.fulfilled, function(order) {
                    return _c("livewire:order", {
                      key: "order-" + order.id,
                      attrs: { "order-id": order.id }
                    })
                  })
                ]
              : [
                  _c(
                    "span",
                    { staticClass: "block w-full text-center text-xl" },
                    [_vm._v("Loading, please wait.")]
                  )
                ]
          ]
        : [
            _c(
              "div",
              { staticClass: "w-1/3 bg-white shadow rounded p-6 mx-auto" },
              [
                _c("label", [
                  _c("span", [
                    _vm._v(
                      "Please enter the administrator password, and hit enter."
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.secret,
                        expression: "secret"
                      }
                    ],
                    attrs: { type: "password", placeholder: "Password" },
                    domProps: { value: _vm.secret },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.login($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.secret = $event.target.value
                      }
                    }
                  })
                ])
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./resources/js/icons/index.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/App */ "./resources/js/views/App.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var _default = /*#__PURE__*/function () {
  function _default(data) {
    _classCallCheck(this, _default);

    this.bus = new Vue();

    for (var key in data) {
      this[key] = data[key];
    }
  }

  _createClass(_default, [{
    key: "$emit",
    value: function $emit(name, data) {
      this.bus.$emit(name, data);
    }
  }, {
    key: "$on",
    value: function $on(name, handler) {
      this.bus.$on(name, handler);
    }
  }, {
    key: "mixin",
    value: function mixin() {
      return {
        filters: {
          currency: function currency(value) {
            var langage = (navigator.language || navigator.browserLanguage).split('-')[0];
            return (value / 100).toLocaleString(langage, {
              style: 'currency',
              currency: 'GBP'
            });
          }
        },
        computed: {
          $user: function $user() {
            return this.$root.user;
          }
        },
        methods: {
          $clearBasket: function $clearBasket() {
            this.$root.basket = {};
          },
          $addToBasket: function $addToBasket(product) {
            var existing = _.get(this.$root.basket, product.id, _objectSpread({}, product, {
              qty: 0
            }));

            if (existing.qty >= 10) {
              return;
            }

            _.set(existing, 'qty', existing.qty + 1);

            this.$set(this.$root.basket, product.id, existing);
          },
          $removeFromBasket: function $removeFromBasket(product) {
            var existing = _.get(this.$root.basket, product.id, _objectSpread({}, product, {
              qty: 1
            }));

            _.set(existing, 'qty', existing.qty - 1);

            if (existing.qty <= 0) {
              return this.$delete(this.$root.basket, product.id);
            }

            this.$set(this.$root.basket, product.id, existing);
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      Vue.mixin(this.mixin());
      Vue.use(vue_svgicon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        tagName: 'icon'
      });
      this.renderer = new Vue({
        el: '#app',
        render: function render(h) {
          return h(_views_App__WEBPACK_IMPORTED_MODULE_4__["default"]);
        },
        router: Object(_router__WEBPACK_IMPORTED_MODULE_2__["default"])(_routes__WEBPACK_IMPORTED_MODULE_3__["default"]),
        data: {
          basket: {},
          menuVisible: false,
          user: window.App.user
        },
        watch: {
          basket: {
            deep: true,
            handler: function handler(data) {
              localStorage.setItem('basket', JSON.stringify(data));
            }
          }
        },
        created: function created() {
          var saved = localStorage.getItem('basket');

          if (saved) {
            this.basket = JSON.parse(saved);
          }
        }
      });
    }
  }, {
    key: "boot",
    value: function boot() {
      this.render();
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./resources/js/app.js");
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
window.ajax = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
window.Vue.config.productionTip = false;

window.VueRouter = vue_router__WEBPACK_IMPORTED_MODULE_1__["default"];
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

(function () {
  this.CreateApp = function (config) {
    return new _app__WEBPACK_IMPORTED_MODULE_2__["default"](config);
  };
}).call(window); // import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js')
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// })

/***/ }),

/***/ "./resources/js/components/AddToBasket.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AddToBasket.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddToBasket.vue?vue&type=template&id=142691c7& */ "./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7&");
/* harmony import */ var _AddToBasket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddToBasket.vue?vue&type=script&lang=js& */ "./resources/js/components/AddToBasket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddToBasket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddToBasket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddToBasket.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AddToBasket.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddToBasket.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddToBasket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddToBasket.vue?vue&type=template&id=142691c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AddToBasket.vue?vue&type=template&id=142691c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_142691c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Order.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Order.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=8a00ae1a& */ "./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/components/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=8a00ae1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order.vue?vue&type=template&id=8a00ae1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_8a00ae1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Product.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Product.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7e94e6d4& */ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=7e94e6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product.vue?vue&type=template&id=7e94e6d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7e94e6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/icons/add-outline.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/add-outline.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'add-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/add-solid.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/add-solid.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'add-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 110-20 10 10 0 010 20z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/adjust.js":
/*!**************************************!*\
  !*** ./resources/js/icons/adjust.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'adjust': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 2v16a8 8 0 100-16zm0 18a10 10 0 110-20 10 10 0 010 20z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/airplane.js":
/*!****************************************!*\
  !*** ./resources/js/icons/airplane.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'airplane': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 110 4h-5.2L8 20H6l2.4-8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/album.js":
/*!*************************************!*\
  !*** ./resources/js/icons/album.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'album': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0h20v20H0V0zm10 18a8 8 0 100-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 010 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/align-center.js":
/*!********************************************!*\
  !*** ./resources/js/icons/align-center.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'align-center': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/align-justified.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/align-justified.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'align-justified': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h18v2H1V5zm0 8h18v2H1v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/align-left.js":
/*!******************************************!*\
  !*** ./resources/js/icons/align-left.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'align-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/align-right.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/align-right.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'align-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/anchor.js":
/*!**************************************!*\
  !*** ./resources/js/icons/anchor.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'anchor': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4.34 15.66A7.97 7.97 0 009 17.94V10H5V8h4V5.83a3 3 0 112 0V8h4v2h-4v7.94a7.97 7.97 0 004.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 01-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/announcement.js":
/*!********************************************!*\
  !*** ./resources/js/icons/announcement.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'announcement': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 01-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/apparel.js":
/*!***************************************!*\
  !*** ./resources/js/icons/apparel.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'apparel': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 01-6 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-down.js":
/*!******************************************!*\
  !*** ./resources/js/icons/arrow-down.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-left.js":
/*!******************************************!*\
  !*** ./resources/js/icons/arrow-left.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-outline-down.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/arrow-outline-down.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-outline-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-2-8V5h4v5h3l-5 5-5-5h3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-outline-left.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/arrow-outline-left.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-outline-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm2 0a8 8 0 1016 0 8 8 0 00-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-outline-right.js":
/*!***************************************************!*\
  !*** ./resources/js/icons/arrow-outline-right.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-outline-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-outline-up.js":
/*!************************************************!*\
  !*** ./resources/js/icons/arrow-outline-up.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-outline-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm2 8v5H8v-5H5l5-5 5 5h-3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-right.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/arrow-right.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thick-down.js":
/*!************************************************!*\
  !*** ./resources/js/icons/arrow-thick-down.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thick-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 10V2h6v8h5l-8 8-8-8h5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thick-left.js":
/*!************************************************!*\
  !*** ./resources/js/icons/arrow-thick-left.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thick-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thick-right.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/arrow-thick-right.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thick-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 7H2v6h8v5l8-8-8-8v5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thick-up.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/arrow-thick-up.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thick-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 10v8h6v-8h5l-8-8-8 8h5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thin-down.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/arrow-thin-down.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thin-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thin-left.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/arrow-thin-left.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thin-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thin-right.js":
/*!************************************************!*\
  !*** ./resources/js/icons/arrow-thin-right.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thin-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-thin-up.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/arrow-thin-up.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-thin-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/arrow-up.js":
/*!****************************************!*\
  !*** ./resources/js/icons/arrow-up.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'arrow-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/artist.js":
/*!**************************************!*\
  !*** ./resources/js/icons/artist.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'artist': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.82-3.08A4 4 0 0115.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/at-symbol.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/at-symbol.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'at-symbol': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13.6 13.47A4.99 4.99 0 015 10a5 5 0 018-4V5h2v6.5a1.5 1.5 0 003 0V10a8 8 0 10-4.42 7.16l.9 1.79A10 10 0 1120 10h-.18.17v1.5a3.5 3.5 0 01-6.4 1.97zM10 13a3 3 0 100-6 3 3 0 000 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/attachment.js":
/*!******************************************!*\
  !*** ./resources/js/icons/attachment.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'attachment': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 3H7a7 7 0 100 14h8v-2H7A5 5 0 017 5h8a3 3 0 010 6H7a1 1 0 010-2h8V7H7a3 3 0 100 6h8a5 5 0 000-10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/backspace.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/backspace.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'backspace': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/backward-step.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/backward-step.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'backward-step': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/backward.js":
/*!****************************************!*\
  !*** ./resources/js/icons/backward.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'backward': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/badge.js":
/*!*************************************!*\
  !*** ./resources/js/icons/badge.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'badge': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 12a6 6 0 110-12 6 6 0 010 12zm0-3a3 3 0 100-6 3 3 0 000 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 008 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/battery-full.js":
/*!********************************************!*\
  !*** ./resources/js/icons/battery-full.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'battery-full': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/battery-half.js":
/*!********************************************!*\
  !*** ./resources/js/icons/battery-half.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'battery-half': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/battery-low.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/battery-low.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'battery-low': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/beverage.js":
/*!****************************************!*\
  !*** ./resources/js/icons/beverage.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'beverage': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 100-4 2 2 0 000 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/block.js":
/*!*************************************!*\
  !*** ./resources/js/icons/block.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'block': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm16.32-4.9L5.09 16.31A8 8 0 0016.32 5.09zm-1.41-1.42A8 8 0 003.68 14.91L14.91 3.68z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bluetooth.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/bluetooth.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bluetooth': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9.41 0l6 6-4 4 4 4-6 6H9v-7.59l-3.3 3.3-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3 9 7.58V0h.41zM11 4.41V7.6L12.59 6 11 4.41zM12.59 14L11 12.41v3.18L12.59 14z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bolt.js":
/*!************************************!*\
  !*** ./resources/js/icons/bolt.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bolt': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/book-reference.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/book-reference.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'book-reference': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 4H5a1 1 0 110-2h11V1a1 1 0 00-1-1H4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V5a1 1 0 00-1-1h-7v8l-2-2-2 2V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bookmark copy 2.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/bookmark copy 2.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bookmark copy 2': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bookmark copy 3.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/bookmark copy 3.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bookmark copy 3': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bookmark-outline-add.js":
/*!****************************************************!*\
  !*** ./resources/js/icons/bookmark-outline-add.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bookmark-outline-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4zm5 5V5h2v2h2v2h-2v2H9V9H7V7h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bookmark-outline.js":
/*!************************************************!*\
  !*** ./resources/js/icons/bookmark-outline.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bookmark-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bookmark.js":
/*!****************************************!*\
  !*** ./resources/js/icons/bookmark.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bookmark': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-all.js":
/*!******************************************!*\
  !*** ./resources/js/icons/border-all.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-all': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-bottom.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/border-bottom.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-bottom': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h18v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm4-8h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm4-12h2v2h-2V1zm0 8h2v2h-2V9zm4-8h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-horizontal.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/border-horizontal.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-horizontal': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h18v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 8h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-inner.js":
/*!********************************************!*\
  !*** ./resources/js/icons/border-inner.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-inner': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 9V1h2v8h8v2h-8v8H9v-8H1V9h8zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 8h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zm8-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-left.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/border-left.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h2v18H1V1zm4 0h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-none.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/border-none.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-none': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-outer.js":
/*!********************************************!*\
  !*** ./resources/js/icons/border-outer.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-outer': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 19H1V1h18v18H2zm1-2h14V3H3v14zm10-8h2v2h-2V9zM9 9h2v2H9V9zM5 9h2v2H5V9zm4-4h2v2H9V5zm0 8h2v2H9v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-right.js":
/*!********************************************!*\
  !*** ./resources/js/icons/border-right.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM17 1h2v18h-2V1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-top.js":
/*!******************************************!*\
  !*** ./resources/js/icons/border-top.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-top': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4-8h2v2H5V9zm0 8h2v2H5v-2zM9 5h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V9zm0 8h2v2h-2v-2zm4-12h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/border-vertical.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/border-vertical.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'border-vertical': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v18H9V1zm4 0h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/box.js":
/*!***********************************!*\
  !*** ./resources/js/icons/box.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'box': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v2H0V2zm1 3h18v13a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm6 2v2h6V7H7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/brightness-down.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/brightness-down.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'brightness-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 13a3 3 0 110-6 3 3 0 010 6zM9 4a1 1 0 112 0 1 1 0 11-2 0zm4.54 1.05a1 1 0 111.41 1.41 1 1 0 11-1.41-1.41zM16 9a1 1 0 110 2 1 1 0 110-2zm-1.05 4.54a1 1 0 11-1.41 1.41 1 1 0 111.41-1.41zM11 16a1 1 0 11-2 0 1 1 0 112 0zm-4.54-1.05a1 1 0 11-1.41-1.41 1 1 0 111.41 1.41zM4 11a1 1 0 110-2 1 1 0 110 2zm1.05-4.54a1 1 0 111.41-1.41 1 1 0 11-1.41 1.41z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/brightness-up.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/brightness-up.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'brightness-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 14a4 4 0 110-8 4 4 0 010 8zM9 1a1 1 0 112 0v2a1 1 0 11-2 0V1zm6.65 1.94a1 1 0 111.41 1.41l-1.4 1.4a1 1 0 11-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 110 2h-1.98a1 1 0 110-2h1.98zm-1.93 6.65a1 1 0 11-1.41 1.41l-1.4-1.4a1 1 0 111.41-1.41l1.4 1.4zM11 18.99a1 1 0 11-2 0v-1.98a1 1 0 112 0v1.98zm-6.65-1.93a1 1 0 11-1.41-1.41l1.4-1.4a1 1 0 111.41 1.41l-1.4 1.4zM1.01 11a1 1 0 110-2h1.98a1 1 0 110 2H1.01zm1.93-6.65a1 1 0 111.41-1.41l1.4 1.4a1 1 0 11-1.41 1.41l-1.4-1.4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/browser-window-new.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/browser-window-new.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'browser-window-new': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/browser-window-open.js":
/*!***************************************************!*\
  !*** ./resources/js/icons/browser-window-open.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'browser-window-open': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/browser-window.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/browser-window.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'browser-window': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/bug.js":
/*!***********************************!*\
  !*** ./resources/js/icons/bug.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'bug': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15.3 14.89l2.77 2.77a1 1 0 010 1.41 1 1 0 01-1.41 0l-2.59-2.58A5.99 5.99 0 0111 18V9.04a1 1 0 00-2 0V18a5.98 5.98 0 01-3.07-1.51l-2.59 2.58a1 1 0 01-1.41 0 1 1 0 010-1.41l2.77-2.77A5.95 5.95 0 014.07 13H1a1 1 0 110-2h3V8.41L.93 5.34a1 1 0 010-1.41 1 1 0 011.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 011.41 0 1 1 0 010 1.41L16 8.41V11h3a1 1 0 110 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1110 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/buoy.js":
/*!************************************!*\
  !*** ./resources/js/icons/buoy.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'buoy': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17.16 6.42a8.03 8.03 0 00-3.58-3.58l-1.34 2.69a5.02 5.02 0 012.23 2.23l2.69-1.34zm0 7.16l-2.69-1.34a5.02 5.02 0 01-2.23 2.23l1.34 2.69a8.03 8.03 0 003.58-3.58zM6.42 2.84a8.03 8.03 0 00-3.58 3.58l2.69 1.34a5.02 5.02 0 012.23-2.23L6.42 2.84zM2.84 13.58a8.03 8.03 0 003.58 3.58l1.34-2.69a5.02 5.02 0 01-2.23-2.23l-2.69 1.34zM10 20a10 10 0 110-20 10 10 0 010 20zm0-7a3 3 0 100-6 3 3 0 000 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/calculator.js":
/*!******************************************!*\
  !*** ./resources/js/icons/calculator.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'calculator': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/calendar.js":
/*!****************************************!*\
  !*** ./resources/js/icons/calendar.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'calendar': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 4c0-1.1.9-2 2-2h14a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/camera.js":
/*!**************************************!*\
  !*** ./resources/js/icons/camera.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'camera': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm10 10a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/chart-bar.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/chart-bar.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'chart-bar': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/chart-pie.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/chart-pie.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'chart-pie': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M19.95 11A10 10 0 119 .05V11h10.95zm-.08-2.6H11.6V.13a10 10 0 018.27 8.27z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/chart.js":
/*!*************************************!*\
  !*** ./resources/js/icons/chart.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'chart': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4.13 12H4a2 2 0 101.8 1.11L7.86 10a2.03 2.03 0 00.65-.07l1.55 1.55a2 2 0 103.72-.37L15.87 8H16a2 2 0 10-1.8-1.11L12.14 10a2.03 2.03 0 00-.65.07L9.93 8.52a2 2 0 10-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/chat-bubble-dots.js":
/*!************************************************!*\
  !*** ./resources/js/icons/chat-bubble-dots.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'chat-bubble-dots': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 15l-4 4v-4H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/checkmark-outline.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/checkmark-outline.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'checkmark-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/checkmark.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/checkmark.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'checkmark': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-down.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/cheveron-down.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-left.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/cheveron-left.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-outline-down.js":
/*!*****************************************************!*\
  !*** ./resources/js/icons/cheveron-outline-down.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-outline-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zM10 2a8 8 0 100 16 8 8 0 000-16zm-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9 10 13.24l-.7-.7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-outline-left.js":
/*!*****************************************************!*\
  !*** ./resources/js/icons/cheveron-outline-left.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-outline-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm8-10a8 8 0 10-16 0 8 8 0 0016 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-outline-right.js":
/*!******************************************************!*\
  !*** ./resources/js/icons/cheveron-outline-right.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-outline-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 0a10 10 0 110 20 10 10 0 010-20zM2 10a8 8 0 1016 0 8 8 0 00-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-outline-up.js":
/*!***************************************************!*\
  !*** ./resources/js/icons/cheveron-outline-up.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-outline-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm10 8a8 8 0 100-16 8 8 0 000 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-right.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/cheveron-right.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cheveron-up.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/cheveron-up.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cheveron-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/clipboard.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/clipboard.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'clipboard': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7.03 2.6a3 3 0 015.94 0L15 3v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/close-outline.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/close-outline.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'close-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm1.41-1.41A8 8 0 1015.66 4.34 8 8 0 004.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/close-solid.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/close-solid.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'close-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/close.js":
/*!*************************************!*\
  !*** ./resources/js/icons/close.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'close': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cloud-upload.js":
/*!********************************************!*\
  !*** ./resources/js/icons/cloud-upload.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cloud-upload': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16.88 9.1A4 4 0 0116 17H5a5 5 0 01-1-9.9V7a3 3 0 014.52-2.59A4.98 4.98 0 0117 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cloud.js":
/*!*************************************!*\
  !*** ./resources/js/icons/cloud.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cloud': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16.88 9.1A4 4 0 0116 17H5a5 5 0 01-1-9.9V7a3 3 0 014.52-2.59A4.98 4.98 0 0117 8c0 .38-.04.74-.12 1.1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/code.js":
/*!************************************!*\
  !*** ./resources/js/icons/code.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'code': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/coffee.js":
/*!**************************************!*\
  !*** ./resources/js/icons/coffee.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'coffee': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 11H2a2 2 0 01-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 01-4 4H8a4 4 0 01-4-4zm0-2V5H2v4h2zm-2 8v-1h18v1l-4 2H6l-4-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/cog.js":
/*!***********************************!*\
  !*** ./resources/js/icons/cog.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'cog': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 100-6 3 3 0 000 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/color-palette.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/color-palette.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'color-palette': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 01-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 012.82 0l2.83 2.83a2 2 0 010 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zM4 17a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/compose.js":
/*!***************************************!*\
  !*** ./resources/js/icons/compose.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'compose': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/computer-desktop.js":
/*!************************************************!*\
  !*** ./resources/js/icons/computer-desktop.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'computer-desktop': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 17H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h16a2 2 0 012 2v13a2 2 0 01-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/computer-laptop.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/computer-laptop.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'computer-laptop': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 16h2v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/conversation.js":
/*!********************************************!*\
  !*** ./resources/js/icons/conversation.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'conversation': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 11v3l-3-3H8a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-1zm-3 2v2a2 2 0 01-2 2H6l-3 3v-3H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 004 4h6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/copy.js":
/*!************************************!*\
  !*** ./resources/js/icons/copy.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'copy': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/credit-card.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/credit-card.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'credit-card': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4 8h4v2H4v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/currency-dollar.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/currency-dollar.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'currency-dollar': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm1-5h1a3 3 0 000-6H7.99a1 1 0 010-2H14V5h-3V3H9v2H8a3 3 0 100 6h4a1 1 0 110 2H6v2h3v2h2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/dashboard.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/dashboard.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'dashboard': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm-5.6-4.29a9.95 9.95 0 0111.2 0 8 8 0 10-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 11-1.41-1.41z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/date-add.js":
/*!****************************************!*\
  !*** ./resources/js/icons/date-add.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'date-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 2h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/dial-pad.js":
/*!****************************************!*\
  !*** ./resources/js/icons/dial-pad.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'dial-pad': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 4a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM5 9a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zM5 14a2 2 0 110-4 2 2 0 010 4zm5 0a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm5-6a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/directions.js":
/*!******************************************!*\
  !*** ./resources/js/icons/directions.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'directions': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 00-2 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/document-add.js":
/*!********************************************!*\
  !*** ./resources/js/icons/document-add.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'document-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/document.js":
/*!****************************************!*\
  !*** ./resources/js/icons/document.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'document': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/dots-horizontal-double.js":
/*!******************************************************!*\
  !*** ./resources/js/icons/dots-horizontal-double.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'dots-horizontal-double': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/dots-horizontal-triple.js":
/*!******************************************************!*\
  !*** ./resources/js/icons/dots-horizontal-triple.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'dots-horizontal-triple': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 12a2 2 0 110-4 2 2 0 010 4zm0-6a2 2 0 110-4 2 2 0 010 4zm0 12a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/download.js":
/*!****************************************!*\
  !*** ./resources/js/icons/download.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'download': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/duplicate.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/duplicate.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'duplicate': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/edit-copy.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/edit-copy.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'edit-copy': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/edit-crop.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/edit-crop.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'edit-crop': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14 16H6a2 2 0 01-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 012 2v7h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/edit-cut.js":
/*!****************************************!*\
  !*** ./resources/js/icons/edit-cut.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'edit-cut': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38A3.5 3.5 0 105.5 8.37L7.73 10 5.5 11.63a3.5 3.5 0 101.38 1.99l2.9-2.12zM3.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15.1 4.59A3.53 3.53 0 0116.9 4H20l-7.5 5.5L10.45 8l4.65-3.41z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/edit-pencil.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/edit-pencil.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'edit-pencil': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/education.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/education.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'education': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/envelope.js":
/*!****************************************!*\
  !*** ./resources/js/icons/envelope.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'envelope': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/exclamation-outline.js":
/*!***************************************************!*\
  !*** ./resources/js/icons/exclamation-outline.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'exclamation-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/exclamation-solid.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/exclamation-solid.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'exclamation-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/explore.js":
/*!***************************************!*\
  !*** ./resources/js/icons/explore.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'explore': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 110-2 1 1 0 010 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/factory.js":
/*!***************************************!*\
  !*** ./resources/js/icons/factory.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'factory': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10.5 20H0V7l5 3.33V7l5 3.33V7l5 3.33V0h5v20h-9.5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/fast-forward.js":
/*!********************************************!*\
  !*** ./resources/js/icons/fast-forward.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'fast-forward': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/fast-rewind.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/fast-rewind.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'fast-rewind': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/film.js":
/*!************************************!*\
  !*** ./resources/js/icons/film.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'film': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm6 0v12h8V4H6zM2 5v2h2V5H2zm0 4v2h2V9H2zm0 4v2h2v-2H2zm14-8v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zM8 7l5 3-5 3V7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/filter.js":
/*!**************************************!*\
  !*** ./resources/js/icons/filter.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'filter': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/flag.js":
/*!************************************!*\
  !*** ./resources/js/icons/flag.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'flag': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/flashlight.js":
/*!******************************************!*\
  !*** ./resources/js/icons/flashlight.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'flashlight': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 7v11a2 2 0 01-2 2H9a2 2 0 01-2-2V7L5 5V3h10v2l-2 2zM9 8v1a1 1 0 102 0V8a1 1 0 00-2 0zM5 0h10v2H5V0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/folder-outline-add.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/folder-outline-add.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'folder-outline-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/folder-outline.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/folder-outline.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'folder-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/folder.js":
/*!**************************************!*\
  !*** ./resources/js/icons/folder.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'folder': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/format-bold.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/format-bold.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'format-bold': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3 19V1h8a5 5 0 013.88 8.16A5.5 5.5 0 0111.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 100-5zM7 4v4h3a2 2 0 100-4H7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/format-font-size.js":
/*!************************************************!*\
  !*** ./resources/js/icons/format-font-size.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'format-font-size': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/format-italic.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/format-italic.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'format-italic': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/format-text-size.js":
/*!************************************************!*\
  !*** ./resources/js/icons/format-text-size.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'format-text-size': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/format-underline.js":
/*!************************************************!*\
  !*** ./resources/js/icons/format-underline.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'format-underline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 9A6 6 0 114 9V1h3v8a3 3 0 006 0V1h3v8zM2 17h16v2H2v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/forward-step.js":
/*!********************************************!*\
  !*** ./resources/js/icons/forward-step.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'forward-step': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/forward.js":
/*!***************************************!*\
  !*** ./resources/js/icons/forward.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'forward': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/gift.js":
/*!************************************!*\
  !*** ./resources/js/icons/gift.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'gift': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0110 .76 3 3 0 0114.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/globe.js":
/*!*************************************!*\
  !*** ./resources/js/icons/globe.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'globe': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm2-2.25a8 8 0 004-2.46V9a2 2 0 01-2-2V3.07a7.95 7.95 0 00-3-1V3a2 2 0 01-2 2v1a2 2 0 01-2 2v2h3a2 2 0 012 2v5.75zm-4 0V15a2 2 0 01-2-2v-1h-.5A1.5 1.5 0 014 10.5V8H2.25A8.01 8.01 0 008 17.75z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/hand-stop.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/hand-stop.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'hand-stop': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 16a4 4 0 01-4 4H7a4 4 0 01-4-4.01V4a1 1 0 011-1 1 1 0 011 1v6h1V2a1 1 0 011-1 1 1 0 011 1v8h1V1a1 1 0 112 0v9h1V2a1 1 0 011-1 1 1 0 011 1v13h1V9a1 1 0 011-1h1v8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/hard-drive.js":
/*!******************************************!*\
  !*** ./resources/js/icons/hard-drive.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'hard-drive': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm10.4 5.6A5 5 0 1015 12V5l-2.6 2.6zM10 14a2 2 0 110-4 2 2 0 010 4zM6 3v2h4V3H6zM4 3a1 1 0 100-2 1 1 0 000 2zm0 16a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2zm0-16a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/headphones.js":
/*!******************************************!*\
  !*** ./resources/js/icons/headphones.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'headphones': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 8A6 6 0 104 8v11H2a2 2 0 01-2-2v-4a2 2 0 012-2V8a8 8 0 1116 0v3a2 2 0 012 2v4a2 2 0 01-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/heart.js":
/*!*************************************!*\
  !*** ./resources/js/icons/heart.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'heart': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/home.js":
/*!************************************!*\
  !*** ./resources/js/icons/home.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'home': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/hot.js":
/*!***********************************!*\
  !*** ./resources/js/icons/hot.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'hot': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 0s8 7.58 8 12a8 8 0 11-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0010 6V0zM8 0a3 3 0 100 6V0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/hour-glass.js":
/*!******************************************!*\
  !*** ./resources/js/icons/hour-glass.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'hour-glass': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3 18a7 7 0 014-6.33V8.33A7 7 0 013 2H1V0h18v2h-2a7 7 0 01-4 6.33v3.34A7 7 0 0117 18h2v2H1v-2h2zM5 2a5 5 0 004 4.9V10h2V6.9A5 5 0 0015 2H5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/inbox-check.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/inbox-check.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'inbox-check': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/inbox-download.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/inbox-download.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'inbox-download': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM9 8V5h2v3h3l-4 4-4-4h3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/inbox-full.js":
/*!******************************************!*\
  !*** ./resources/js/icons/inbox-full.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'inbox-full': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14 14h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 2h12v2H4V4zm0 3h12v2H4V7zm0 3h12v2H4v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/inbox.js":
/*!*************************************!*\
  !*** ./resources/js/icons/inbox.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'inbox': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/indent-decrease.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/indent-decrease.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'indent-decrease': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM5 6v8l-4-4 4-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/indent-increase.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/indent-increase.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'indent-increase': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM1 6l4 4-4 4V6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/index.js":
/*!*************************************!*\
  !*** ./resources/js/icons/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-outline */ "./resources/js/icons/add-outline.js");
/* harmony import */ var _add_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-solid */ "./resources/js/icons/add-solid.js");
/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust */ "./resources/js/icons/adjust.js");
/* harmony import */ var _airplane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airplane */ "./resources/js/icons/airplane.js");
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album */ "./resources/js/icons/album.js");
/* harmony import */ var _align_center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./align-center */ "./resources/js/icons/align-center.js");
/* harmony import */ var _align_justified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./align-justified */ "./resources/js/icons/align-justified.js");
/* harmony import */ var _align_left__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./align-left */ "./resources/js/icons/align-left.js");
/* harmony import */ var _align_right__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./align-right */ "./resources/js/icons/align-right.js");
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anchor */ "./resources/js/icons/anchor.js");
/* harmony import */ var _announcement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./announcement */ "./resources/js/icons/announcement.js");
/* harmony import */ var _apparel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apparel */ "./resources/js/icons/apparel.js");
/* harmony import */ var _arrow_down__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./arrow-down */ "./resources/js/icons/arrow-down.js");
/* harmony import */ var _arrow_left__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./arrow-left */ "./resources/js/icons/arrow-left.js");
/* harmony import */ var _arrow_outline_down__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./arrow-outline-down */ "./resources/js/icons/arrow-outline-down.js");
/* harmony import */ var _arrow_outline_left__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./arrow-outline-left */ "./resources/js/icons/arrow-outline-left.js");
/* harmony import */ var _arrow_outline_right__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./arrow-outline-right */ "./resources/js/icons/arrow-outline-right.js");
/* harmony import */ var _arrow_outline_up__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./arrow-outline-up */ "./resources/js/icons/arrow-outline-up.js");
/* harmony import */ var _arrow_right__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./arrow-right */ "./resources/js/icons/arrow-right.js");
/* harmony import */ var _arrow_thick_down__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./arrow-thick-down */ "./resources/js/icons/arrow-thick-down.js");
/* harmony import */ var _arrow_thick_left__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./arrow-thick-left */ "./resources/js/icons/arrow-thick-left.js");
/* harmony import */ var _arrow_thick_right__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./arrow-thick-right */ "./resources/js/icons/arrow-thick-right.js");
/* harmony import */ var _arrow_thick_up__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./arrow-thick-up */ "./resources/js/icons/arrow-thick-up.js");
/* harmony import */ var _arrow_thin_down__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./arrow-thin-down */ "./resources/js/icons/arrow-thin-down.js");
/* harmony import */ var _arrow_thin_left__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./arrow-thin-left */ "./resources/js/icons/arrow-thin-left.js");
/* harmony import */ var _arrow_thin_right__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./arrow-thin-right */ "./resources/js/icons/arrow-thin-right.js");
/* harmony import */ var _arrow_thin_up__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./arrow-thin-up */ "./resources/js/icons/arrow-thin-up.js");
/* harmony import */ var _arrow_up__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./arrow-up */ "./resources/js/icons/arrow-up.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./artist */ "./resources/js/icons/artist.js");
/* harmony import */ var _at_symbol__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./at-symbol */ "./resources/js/icons/at-symbol.js");
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./attachment */ "./resources/js/icons/attachment.js");
/* harmony import */ var _backspace__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./backspace */ "./resources/js/icons/backspace.js");
/* harmony import */ var _backward_step__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./backward-step */ "./resources/js/icons/backward-step.js");
/* harmony import */ var _backward__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./backward */ "./resources/js/icons/backward.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./badge */ "./resources/js/icons/badge.js");
/* harmony import */ var _battery_full__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./battery-full */ "./resources/js/icons/battery-full.js");
/* harmony import */ var _battery_half__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./battery-half */ "./resources/js/icons/battery-half.js");
/* harmony import */ var _battery_low__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./battery-low */ "./resources/js/icons/battery-low.js");
/* harmony import */ var _beverage__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./beverage */ "./resources/js/icons/beverage.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./block */ "./resources/js/icons/block.js");
/* harmony import */ var _bluetooth__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./bluetooth */ "./resources/js/icons/bluetooth.js");
/* harmony import */ var _bolt__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./bolt */ "./resources/js/icons/bolt.js");
/* harmony import */ var _book_reference__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./book-reference */ "./resources/js/icons/book-reference.js");
/* harmony import */ var _bookmark_copy_2__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./bookmark copy 2 */ "./resources/js/icons/bookmark copy 2.js");
/* harmony import */ var _bookmark_copy_3__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./bookmark copy 3 */ "./resources/js/icons/bookmark copy 3.js");
/* harmony import */ var _bookmark_outline_add__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./bookmark-outline-add */ "./resources/js/icons/bookmark-outline-add.js");
/* harmony import */ var _bookmark_outline__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./bookmark-outline */ "./resources/js/icons/bookmark-outline.js");
/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./bookmark */ "./resources/js/icons/bookmark.js");
/* harmony import */ var _border_all__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./border-all */ "./resources/js/icons/border-all.js");
/* harmony import */ var _border_bottom__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./border-bottom */ "./resources/js/icons/border-bottom.js");
/* harmony import */ var _border_horizontal__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./border-horizontal */ "./resources/js/icons/border-horizontal.js");
/* harmony import */ var _border_inner__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./border-inner */ "./resources/js/icons/border-inner.js");
/* harmony import */ var _border_left__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./border-left */ "./resources/js/icons/border-left.js");
/* harmony import */ var _border_none__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./border-none */ "./resources/js/icons/border-none.js");
/* harmony import */ var _border_outer__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./border-outer */ "./resources/js/icons/border-outer.js");
/* harmony import */ var _border_right__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./border-right */ "./resources/js/icons/border-right.js");
/* harmony import */ var _border_top__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./border-top */ "./resources/js/icons/border-top.js");
/* harmony import */ var _border_vertical__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./border-vertical */ "./resources/js/icons/border-vertical.js");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./box */ "./resources/js/icons/box.js");
/* harmony import */ var _brightness_down__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./brightness-down */ "./resources/js/icons/brightness-down.js");
/* harmony import */ var _brightness_up__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./brightness-up */ "./resources/js/icons/brightness-up.js");
/* harmony import */ var _browser_window_new__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./browser-window-new */ "./resources/js/icons/browser-window-new.js");
/* harmony import */ var _browser_window_open__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./browser-window-open */ "./resources/js/icons/browser-window-open.js");
/* harmony import */ var _browser_window__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./browser-window */ "./resources/js/icons/browser-window.js");
/* harmony import */ var _bug__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./bug */ "./resources/js/icons/bug.js");
/* harmony import */ var _buoy__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./buoy */ "./resources/js/icons/buoy.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./calculator */ "./resources/js/icons/calculator.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./calendar */ "./resources/js/icons/calendar.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./camera */ "./resources/js/icons/camera.js");
/* harmony import */ var _chart_bar__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./chart-bar */ "./resources/js/icons/chart-bar.js");
/* harmony import */ var _chart_pie__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./chart-pie */ "./resources/js/icons/chart-pie.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./chart */ "./resources/js/icons/chart.js");
/* harmony import */ var _chat_bubble_dots__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./chat-bubble-dots */ "./resources/js/icons/chat-bubble-dots.js");
/* harmony import */ var _checkmark_outline__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./checkmark-outline */ "./resources/js/icons/checkmark-outline.js");
/* harmony import */ var _checkmark__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./checkmark */ "./resources/js/icons/checkmark.js");
/* harmony import */ var _cheveron_down__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./cheveron-down */ "./resources/js/icons/cheveron-down.js");
/* harmony import */ var _cheveron_left__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./cheveron-left */ "./resources/js/icons/cheveron-left.js");
/* harmony import */ var _cheveron_outline_down__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./cheveron-outline-down */ "./resources/js/icons/cheveron-outline-down.js");
/* harmony import */ var _cheveron_outline_left__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./cheveron-outline-left */ "./resources/js/icons/cheveron-outline-left.js");
/* harmony import */ var _cheveron_outline_right__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./cheveron-outline-right */ "./resources/js/icons/cheveron-outline-right.js");
/* harmony import */ var _cheveron_outline_up__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./cheveron-outline-up */ "./resources/js/icons/cheveron-outline-up.js");
/* harmony import */ var _cheveron_right__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./cheveron-right */ "./resources/js/icons/cheveron-right.js");
/* harmony import */ var _cheveron_up__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./cheveron-up */ "./resources/js/icons/cheveron-up.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./clipboard */ "./resources/js/icons/clipboard.js");
/* harmony import */ var _close_outline__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./close-outline */ "./resources/js/icons/close-outline.js");
/* harmony import */ var _close_solid__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./close-solid */ "./resources/js/icons/close-solid.js");
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./close */ "./resources/js/icons/close.js");
/* harmony import */ var _cloud_upload__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./cloud-upload */ "./resources/js/icons/cloud-upload.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./cloud */ "./resources/js/icons/cloud.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./code */ "./resources/js/icons/code.js");
/* harmony import */ var _coffee__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./coffee */ "./resources/js/icons/coffee.js");
/* harmony import */ var _cog__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./cog */ "./resources/js/icons/cog.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./color-palette */ "./resources/js/icons/color-palette.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./compose */ "./resources/js/icons/compose.js");
/* harmony import */ var _computer_desktop__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./computer-desktop */ "./resources/js/icons/computer-desktop.js");
/* harmony import */ var _computer_laptop__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./computer-laptop */ "./resources/js/icons/computer-laptop.js");
/* harmony import */ var _conversation__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./conversation */ "./resources/js/icons/conversation.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./copy */ "./resources/js/icons/copy.js");
/* harmony import */ var _credit_card__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./credit-card */ "./resources/js/icons/credit-card.js");
/* harmony import */ var _currency_dollar__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./currency-dollar */ "./resources/js/icons/currency-dollar.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./dashboard */ "./resources/js/icons/dashboard.js");
/* harmony import */ var _date_add__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./date-add */ "./resources/js/icons/date-add.js");
/* harmony import */ var _dial_pad__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./dial-pad */ "./resources/js/icons/dial-pad.js");
/* harmony import */ var _directions__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./directions */ "./resources/js/icons/directions.js");
/* harmony import */ var _document_add__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./document-add */ "./resources/js/icons/document-add.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./document */ "./resources/js/icons/document.js");
/* harmony import */ var _dots_horizontal_double__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./dots-horizontal-double */ "./resources/js/icons/dots-horizontal-double.js");
/* harmony import */ var _dots_horizontal_triple__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./dots-horizontal-triple */ "./resources/js/icons/dots-horizontal-triple.js");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./download */ "./resources/js/icons/download.js");
/* harmony import */ var _duplicate__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./duplicate */ "./resources/js/icons/duplicate.js");
/* harmony import */ var _edit_copy__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./edit-copy */ "./resources/js/icons/edit-copy.js");
/* harmony import */ var _edit_crop__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./edit-crop */ "./resources/js/icons/edit-crop.js");
/* harmony import */ var _edit_cut__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./edit-cut */ "./resources/js/icons/edit-cut.js");
/* harmony import */ var _edit_pencil__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./edit-pencil */ "./resources/js/icons/edit-pencil.js");
/* harmony import */ var _education__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./education */ "./resources/js/icons/education.js");
/* harmony import */ var _envelope__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./envelope */ "./resources/js/icons/envelope.js");
/* harmony import */ var _exclamation_outline__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./exclamation-outline */ "./resources/js/icons/exclamation-outline.js");
/* harmony import */ var _exclamation_solid__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./exclamation-solid */ "./resources/js/icons/exclamation-solid.js");
/* harmony import */ var _explore__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./explore */ "./resources/js/icons/explore.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./factory */ "./resources/js/icons/factory.js");
/* harmony import */ var _fast_forward__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./fast-forward */ "./resources/js/icons/fast-forward.js");
/* harmony import */ var _fast_rewind__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./fast-rewind */ "./resources/js/icons/fast-rewind.js");
/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./film */ "./resources/js/icons/film.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./filter */ "./resources/js/icons/filter.js");
/* harmony import */ var _flag__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./flag */ "./resources/js/icons/flag.js");
/* harmony import */ var _flashlight__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./flashlight */ "./resources/js/icons/flashlight.js");
/* harmony import */ var _folder_outline_add__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./folder-outline-add */ "./resources/js/icons/folder-outline-add.js");
/* harmony import */ var _folder_outline__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./folder-outline */ "./resources/js/icons/folder-outline.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./folder */ "./resources/js/icons/folder.js");
/* harmony import */ var _format_bold__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./format-bold */ "./resources/js/icons/format-bold.js");
/* harmony import */ var _format_font_size__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./format-font-size */ "./resources/js/icons/format-font-size.js");
/* harmony import */ var _format_italic__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./format-italic */ "./resources/js/icons/format-italic.js");
/* harmony import */ var _format_text_size__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./format-text-size */ "./resources/js/icons/format-text-size.js");
/* harmony import */ var _format_underline__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./format-underline */ "./resources/js/icons/format-underline.js");
/* harmony import */ var _forward_step__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./forward-step */ "./resources/js/icons/forward-step.js");
/* harmony import */ var _forward__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./forward */ "./resources/js/icons/forward.js");
/* harmony import */ var _gift__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./gift */ "./resources/js/icons/gift.js");
/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./globe */ "./resources/js/icons/globe.js");
/* harmony import */ var _hand_stop__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./hand-stop */ "./resources/js/icons/hand-stop.js");
/* harmony import */ var _hard_drive__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./hard-drive */ "./resources/js/icons/hard-drive.js");
/* harmony import */ var _headphones__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./headphones */ "./resources/js/icons/headphones.js");
/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./heart */ "./resources/js/icons/heart.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./home */ "./resources/js/icons/home.js");
/* harmony import */ var _hot__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./hot */ "./resources/js/icons/hot.js");
/* harmony import */ var _hour_glass__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./hour-glass */ "./resources/js/icons/hour-glass.js");
/* harmony import */ var _inbox_check__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./inbox-check */ "./resources/js/icons/inbox-check.js");
/* harmony import */ var _inbox_download__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./inbox-download */ "./resources/js/icons/inbox-download.js");
/* harmony import */ var _inbox_full__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./inbox-full */ "./resources/js/icons/inbox-full.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./inbox */ "./resources/js/icons/inbox.js");
/* harmony import */ var _indent_decrease__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./indent-decrease */ "./resources/js/icons/indent-decrease.js");
/* harmony import */ var _indent_increase__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./indent-increase */ "./resources/js/icons/indent-increase.js");
/* harmony import */ var _information_outline__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./information-outline */ "./resources/js/icons/information-outline.js");
/* harmony import */ var _information_solid__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./information-solid */ "./resources/js/icons/information-solid.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./key */ "./resources/js/icons/key.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./keyboard */ "./resources/js/icons/keyboard.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./layers */ "./resources/js/icons/layers.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./library */ "./resources/js/icons/library.js");
/* harmony import */ var _light_bulb__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./light-bulb */ "./resources/js/icons/light-bulb.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./link */ "./resources/js/icons/link.js");
/* harmony import */ var _list_add__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./list-add */ "./resources/js/icons/list-add.js");
/* harmony import */ var _list_bullet__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./list-bullet */ "./resources/js/icons/list-bullet.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./list */ "./resources/js/icons/list.js");
/* harmony import */ var _load_balancer__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./load-balancer */ "./resources/js/icons/load-balancer.js");
/* harmony import */ var _location_current__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./location-current */ "./resources/js/icons/location-current.js");
/* harmony import */ var _location_food__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./location-food */ "./resources/js/icons/location-food.js");
/* harmony import */ var _location_gas_station__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./location-gas-station */ "./resources/js/icons/location-gas-station.js");
/* harmony import */ var _location_hotel__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./location-hotel */ "./resources/js/icons/location-hotel.js");
/* harmony import */ var _location_marina__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./location-marina */ "./resources/js/icons/location-marina.js");
/* harmony import */ var _location_park__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./location-park */ "./resources/js/icons/location-park.js");
/* harmony import */ var _location_restroom__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./location-restroom */ "./resources/js/icons/location-restroom.js");
/* harmony import */ var _location_shopping__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./location-shopping */ "./resources/js/icons/location-shopping.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./location */ "./resources/js/icons/location.js");
/* harmony import */ var _lock_closed__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./lock-closed */ "./resources/js/icons/lock-closed.js");
/* harmony import */ var _lock_open__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./lock-open */ "./resources/js/icons/lock-open.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./map */ "./resources/js/icons/map.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./menu */ "./resources/js/icons/menu.js");
/* harmony import */ var _mic__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./mic */ "./resources/js/icons/mic.js");
/* harmony import */ var _minus_outline__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./minus-outline */ "./resources/js/icons/minus-outline.js");
/* harmony import */ var _minus_solid__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./minus-solid */ "./resources/js/icons/minus-solid.js");
/* harmony import */ var _mobile_devices__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./mobile-devices */ "./resources/js/icons/mobile-devices.js");
/* harmony import */ var _mood_happy_outline__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./mood-happy-outline */ "./resources/js/icons/mood-happy-outline.js");
/* harmony import */ var _mood_happy_solid__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./mood-happy-solid */ "./resources/js/icons/mood-happy-solid.js");
/* harmony import */ var _mood_neutral_outline__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./mood-neutral-outline */ "./resources/js/icons/mood-neutral-outline.js");
/* harmony import */ var _mood_neutral_solid__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./mood-neutral-solid */ "./resources/js/icons/mood-neutral-solid.js");
/* harmony import */ var _mood_sad_outline__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./mood-sad-outline */ "./resources/js/icons/mood-sad-outline.js");
/* harmony import */ var _mood_sad_solid__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./mood-sad-solid */ "./resources/js/icons/mood-sad-solid.js");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./mouse */ "./resources/js/icons/mouse.js");
/* harmony import */ var _music_album__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./music-album */ "./resources/js/icons/music-album.js");
/* harmony import */ var _music_artist__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./music-artist */ "./resources/js/icons/music-artist.js");
/* harmony import */ var _music_notes__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./music-notes */ "./resources/js/icons/music-notes.js");
/* harmony import */ var _music_playlist__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./music-playlist */ "./resources/js/icons/music-playlist.js");
/* harmony import */ var _navigation_more__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./navigation-more */ "./resources/js/icons/navigation-more.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./network */ "./resources/js/icons/network.js");
/* harmony import */ var _news_paper__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./news-paper */ "./resources/js/icons/news-paper.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./notification */ "./resources/js/icons/notification.js");
/* harmony import */ var _notifications_outline__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./notifications-outline */ "./resources/js/icons/notifications-outline.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./notifications */ "./resources/js/icons/notifications.js");
/* harmony import */ var _paste__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./paste */ "./resources/js/icons/paste.js");
/* harmony import */ var _pause_outline__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./pause-outline */ "./resources/js/icons/pause-outline.js");
/* harmony import */ var _pause_solid__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./pause-solid */ "./resources/js/icons/pause-solid.js");
/* harmony import */ var _pause__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./pause */ "./resources/js/icons/pause.js");
/* harmony import */ var _pen_tool__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./pen-tool */ "./resources/js/icons/pen-tool.js");
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./phone */ "./resources/js/icons/phone.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./photo */ "./resources/js/icons/photo.js");
/* harmony import */ var _php_elephant__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./php-elephant */ "./resources/js/icons/php-elephant.js");
/* harmony import */ var _pin__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./pin */ "./resources/js/icons/pin.js");
/* harmony import */ var _play_outline__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./play-outline */ "./resources/js/icons/play-outline.js");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./play */ "./resources/js/icons/play.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./playlist */ "./resources/js/icons/playlist.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./plugin */ "./resources/js/icons/plugin.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./portfolio */ "./resources/js/icons/portfolio.js");
/* harmony import */ var _printer__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./printer */ "./resources/js/icons/printer.js");
/* harmony import */ var _pylon__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./pylon */ "./resources/js/icons/pylon.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./question */ "./resources/js/icons/question.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./queue */ "./resources/js/icons/queue.js");
/* harmony import */ var _radar_copy_2__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./radar copy 2 */ "./resources/js/icons/radar copy 2.js");
/* harmony import */ var _radar__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./radar */ "./resources/js/icons/radar.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./radio */ "./resources/js/icons/radio.js");
/* harmony import */ var _refresh__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./refresh */ "./resources/js/icons/refresh.js");
/* harmony import */ var _reload__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./reload */ "./resources/js/icons/reload.js");
/* harmony import */ var _reply_all__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./reply-all */ "./resources/js/icons/reply-all.js");
/* harmony import */ var _reply__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./reply */ "./resources/js/icons/reply.js");
/* harmony import */ var _repost__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./repost */ "./resources/js/icons/repost.js");
/* harmony import */ var _save_disk__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./save-disk */ "./resources/js/icons/save-disk.js");
/* harmony import */ var _screen_full__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./screen-full */ "./resources/js/icons/screen-full.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./search */ "./resources/js/icons/search.js");
/* harmony import */ var _send__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./send */ "./resources/js/icons/send.js");
/* harmony import */ var _servers__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./servers */ "./resources/js/icons/servers.js");
/* harmony import */ var _share_01__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./share-01 */ "./resources/js/icons/share-01.js");
/* harmony import */ var _share_alt__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./share-alt */ "./resources/js/icons/share-alt.js");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./share */ "./resources/js/icons/share.js");
/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./shield */ "./resources/js/icons/shield.js");
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./shopping-cart */ "./resources/js/icons/shopping-cart.js");
/* harmony import */ var _show_sidebar__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./show-sidebar */ "./resources/js/icons/show-sidebar.js");
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./shuffle */ "./resources/js/icons/shuffle.js");
/* harmony import */ var _stand_by__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./stand-by */ "./resources/js/icons/stand-by.js");
/* harmony import */ var _star_full__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./star-full */ "./resources/js/icons/star-full.js");
/* harmony import */ var _station__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./station */ "./resources/js/icons/station.js");
/* harmony import */ var _step_backward__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./step-backward */ "./resources/js/icons/step-backward.js");
/* harmony import */ var _step_forward__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ./step-forward */ "./resources/js/icons/step-forward.js");
/* harmony import */ var _stethoscope__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ./stethoscope */ "./resources/js/icons/stethoscope.js");
/* harmony import */ var _store_front__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ./store-front */ "./resources/js/icons/store-front.js");
/* harmony import */ var _stroke_width__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ./stroke-width */ "./resources/js/icons/stroke-width.js");
/* harmony import */ var _subdirectory_left__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ./subdirectory-left */ "./resources/js/icons/subdirectory-left.js");
/* harmony import */ var _subdirectory_right__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ./subdirectory-right */ "./resources/js/icons/subdirectory-right.js");
/* harmony import */ var _swap__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ./swap */ "./resources/js/icons/swap.js");
/* harmony import */ var _tablet__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(/*! ./tablet */ "./resources/js/icons/tablet.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(/*! ./tag */ "./resources/js/icons/tag.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(/*! ./target */ "./resources/js/icons/target.js");
/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(/*! ./text-box */ "./resources/js/icons/text-box.js");
/* harmony import */ var _text_decoration__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(/*! ./text-decoration */ "./resources/js/icons/text-decoration.js");
/* harmony import */ var _thermometer__WEBPACK_IMPORTED_MODULE_251__ = __webpack_require__(/*! ./thermometer */ "./resources/js/icons/thermometer.js");
/* harmony import */ var _thumbs_down__WEBPACK_IMPORTED_MODULE_252__ = __webpack_require__(/*! ./thumbs-down */ "./resources/js/icons/thumbs-down.js");
/* harmony import */ var _thumbs_up__WEBPACK_IMPORTED_MODULE_253__ = __webpack_require__(/*! ./thumbs-up */ "./resources/js/icons/thumbs-up.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_254__ = __webpack_require__(/*! ./ticket */ "./resources/js/icons/ticket.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_255__ = __webpack_require__(/*! ./time */ "./resources/js/icons/time.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_256__ = __webpack_require__(/*! ./timer */ "./resources/js/icons/timer.js");
/* harmony import */ var _tools_copy__WEBPACK_IMPORTED_MODULE_257__ = __webpack_require__(/*! ./tools copy */ "./resources/js/icons/tools copy.js");
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_258__ = __webpack_require__(/*! ./translate */ "./resources/js/icons/translate.js");
/* harmony import */ var _trash__WEBPACK_IMPORTED_MODULE_259__ = __webpack_require__(/*! ./trash */ "./resources/js/icons/trash.js");
/* harmony import */ var _travel_bus__WEBPACK_IMPORTED_MODULE_260__ = __webpack_require__(/*! ./travel-bus */ "./resources/js/icons/travel-bus.js");
/* harmony import */ var _travel_car__WEBPACK_IMPORTED_MODULE_261__ = __webpack_require__(/*! ./travel-car */ "./resources/js/icons/travel-car.js");
/* harmony import */ var _travel_case__WEBPACK_IMPORTED_MODULE_262__ = __webpack_require__(/*! ./travel-case */ "./resources/js/icons/travel-case.js");
/* harmony import */ var _travel_taxi_cab__WEBPACK_IMPORTED_MODULE_263__ = __webpack_require__(/*! ./travel-taxi-cab */ "./resources/js/icons/travel-taxi-cab.js");
/* harmony import */ var _travel_train__WEBPACK_IMPORTED_MODULE_264__ = __webpack_require__(/*! ./travel-train */ "./resources/js/icons/travel-train.js");
/* harmony import */ var _travel_walk__WEBPACK_IMPORTED_MODULE_265__ = __webpack_require__(/*! ./travel-walk */ "./resources/js/icons/travel-walk.js");
/* harmony import */ var _travel__WEBPACK_IMPORTED_MODULE_266__ = __webpack_require__(/*! ./travel */ "./resources/js/icons/travel.js");
/* harmony import */ var _trophy__WEBPACK_IMPORTED_MODULE_267__ = __webpack_require__(/*! ./trophy */ "./resources/js/icons/trophy.js");
/* harmony import */ var _tuning__WEBPACK_IMPORTED_MODULE_268__ = __webpack_require__(/*! ./tuning */ "./resources/js/icons/tuning.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_269__ = __webpack_require__(/*! ./upload */ "./resources/js/icons/upload.js");
/* harmony import */ var _usb__WEBPACK_IMPORTED_MODULE_270__ = __webpack_require__(/*! ./usb */ "./resources/js/icons/usb.js");
/* harmony import */ var _user_add__WEBPACK_IMPORTED_MODULE_271__ = __webpack_require__(/*! ./user-add */ "./resources/js/icons/user-add.js");
/* harmony import */ var _user_group__WEBPACK_IMPORTED_MODULE_272__ = __webpack_require__(/*! ./user-group */ "./resources/js/icons/user-group.js");
/* harmony import */ var _user_solid_circle__WEBPACK_IMPORTED_MODULE_273__ = __webpack_require__(/*! ./user-solid-circle */ "./resources/js/icons/user-solid-circle.js");
/* harmony import */ var _user_solid_square__WEBPACK_IMPORTED_MODULE_274__ = __webpack_require__(/*! ./user-solid-square */ "./resources/js/icons/user-solid-square.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_275__ = __webpack_require__(/*! ./user */ "./resources/js/icons/user.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_276__ = __webpack_require__(/*! ./vector */ "./resources/js/icons/vector.js");
/* harmony import */ var _video_camera__WEBPACK_IMPORTED_MODULE_277__ = __webpack_require__(/*! ./video-camera */ "./resources/js/icons/video-camera.js");
/* harmony import */ var _view_carousel__WEBPACK_IMPORTED_MODULE_278__ = __webpack_require__(/*! ./view-carousel */ "./resources/js/icons/view-carousel.js");
/* harmony import */ var _view_column__WEBPACK_IMPORTED_MODULE_279__ = __webpack_require__(/*! ./view-column */ "./resources/js/icons/view-column.js");
/* harmony import */ var _view_hide__WEBPACK_IMPORTED_MODULE_280__ = __webpack_require__(/*! ./view-hide */ "./resources/js/icons/view-hide.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_281__ = __webpack_require__(/*! ./view-list */ "./resources/js/icons/view-list.js");
/* harmony import */ var _view_show__WEBPACK_IMPORTED_MODULE_282__ = __webpack_require__(/*! ./view-show */ "./resources/js/icons/view-show.js");
/* harmony import */ var _view_tile__WEBPACK_IMPORTED_MODULE_283__ = __webpack_require__(/*! ./view-tile */ "./resources/js/icons/view-tile.js");
/* harmony import */ var _volume_down__WEBPACK_IMPORTED_MODULE_284__ = __webpack_require__(/*! ./volume-down */ "./resources/js/icons/volume-down.js");
/* harmony import */ var _volume_mute__WEBPACK_IMPORTED_MODULE_285__ = __webpack_require__(/*! ./volume-mute */ "./resources/js/icons/volume-mute.js");
/* harmony import */ var _volume_off__WEBPACK_IMPORTED_MODULE_286__ = __webpack_require__(/*! ./volume-off */ "./resources/js/icons/volume-off.js");
/* harmony import */ var _volume_up__WEBPACK_IMPORTED_MODULE_287__ = __webpack_require__(/*! ./volume-up */ "./resources/js/icons/volume-up.js");
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_288__ = __webpack_require__(/*! ./wallet */ "./resources/js/icons/wallet.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_289__ = __webpack_require__(/*! ./watch */ "./resources/js/icons/watch.js");
/* harmony import */ var _window_new__WEBPACK_IMPORTED_MODULE_290__ = __webpack_require__(/*! ./window-new */ "./resources/js/icons/window-new.js");
/* harmony import */ var _window_open__WEBPACK_IMPORTED_MODULE_291__ = __webpack_require__(/*! ./window-open */ "./resources/js/icons/window-open.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_292__ = __webpack_require__(/*! ./window */ "./resources/js/icons/window.js");
/* harmony import */ var _wrench__WEBPACK_IMPORTED_MODULE_293__ = __webpack_require__(/*! ./wrench */ "./resources/js/icons/wrench.js");
/* harmony import */ var _yin_yang__WEBPACK_IMPORTED_MODULE_294__ = __webpack_require__(/*! ./yin-yang */ "./resources/js/icons/yin-yang.js");
/* harmony import */ var _zoom_in__WEBPACK_IMPORTED_MODULE_295__ = __webpack_require__(/*! ./zoom-in */ "./resources/js/icons/zoom-in.js");
/* harmony import */ var _zoom_out__WEBPACK_IMPORTED_MODULE_296__ = __webpack_require__(/*! ./zoom-out */ "./resources/js/icons/zoom-out.js");
/* eslint-disable */










































































































































































































































































































/***/ }),

/***/ "./resources/js/icons/information-outline.js":
/*!***************************************************!*\
  !*** ./resources/js/icons/information-outline.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'information-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/information-solid.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/information-solid.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'information-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/key.js":
/*!***********************************!*\
  !*** ./resources/js/icons/key.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'key': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 114 4zm4.86-4.62A3 3 0 0015 2a3 3 0 00-2.12.88l4.24 4.24z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/keyboard.js":
/*!****************************************!*\
  !*** ./resources/js/icons/keyboard.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'keyboard': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v2h2V6H2zm1 3v2h2V9H3zm-1 3v2h2v-2H2zm3 0v2h10v-2H5zm11 0v2h2v-2h-2zM6 9v2h2V9H6zm3 0v2h2V9H9zm3 0v2h2V9h-2zm3 0v2h2V9h-2zM5 6v2h2V6H5zm3 0v2h2V6H8zm3 0v2h2V6h-2zm3 0v2h4V6h-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/layers.js":
/*!**************************************!*\
  !*** ./resources/js/icons/layers.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'layers': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/library.js":
/*!***************************************!*\
  !*** ./resources/js/icons/library.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'library': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/light-bulb.js":
/*!******************************************!*\
  !*** ./resources/js/icons/light-bulb.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'light-bulb': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 13.33a7 7 0 116 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 18.5V17zm2-5.1V14h2v-2.1a5 5 0 10-2 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/link.js":
/*!************************************!*\
  !*** ./resources/js/icons/link.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'link': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/list-add.js":
/*!****************************************!*\
  !*** ./resources/js/icons/list-add.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'list-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/list-bullet.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/list-bullet.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'list-bullet': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/list.js":
/*!************************************!*\
  !*** ./resources/js/icons/list.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'list': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/load-balancer.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/load-balancer.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'load-balancer': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 12h-6v4h1v4H8v-4h1v-4H3v4h1v4H0v-4h1v-4a2 2 0 012-2h6V6H7V0h6v6h-2v4h6a2 2 0 012 2v4h1v4h-4v-4h1v-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-current.js":
/*!************************************************!*\
  !*** ./resources/js/icons/location-current.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-current': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0l20 8-8 4-2 8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-food.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/location-food.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-food': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 11v7a2 2 0 01-4 0v-5h-2V3a3 3 0 013-3h3v11zM4 10a2 2 0 01-2-2V1a1 1 0 012 0v4h1V1a1 1 0 012 0v4h1V1a1 1 0 012 0v7a2 2 0 01-2 2v8a2 2 0 01-4 0v-8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-gas-station.js":
/*!****************************************************!*\
  !*** ./resources/js/icons/location-gas-station.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-gas-station': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 012 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 012 2v3a1 1 0 002 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 01-6 0v-3h-1v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-hotel.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/location-hotel.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-hotel': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 12h18v6h-2v-2H2v2H0V2h2v10zm8-6h8a2 2 0 012 2v3H10V6zm-4 5a3 3 0 110-6 3 3 0 010 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-marina.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/location-marina.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-marina': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M8 1.88V0h2v16h10l-4 4H2l-2-4h8v-2H0v-.26A24.03 24.03 0 008 1.88zM19.97 14H10v-.36A11.94 11.94 0 0010 .36v-.2A16.01 16.01 0 0119.97 14z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-park.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/location-park.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-park': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5.33 12.77A4 4 0 113 5.13V5a4 4 0 015.71-3.62 3.5 3.5 0 016.26 1.66 2.5 2.5 0 012 2.08 4 4 0 11-2.7 7.49A5.02 5.02 0 0112 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-restroom.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/location-restroom.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-restroom': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 012 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 00-2-2H3a2 2 0 00-2 2v4h2v7h4v-7zM5 6a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location-shopping.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/location-shopping.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location-shopping': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1112 0zm-2 0a4 4 0 10-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/location.js":
/*!****************************************!*\
  !*** ./resources/js/icons/location.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'location': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 000 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/lock-closed.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/lock-closed.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'lock-closed': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 8V6a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2 0zM7 6v2h6V6a3 3 0 00-6 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/lock-open.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/lock-open.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'lock-open': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 8V6a6 6 0 1112 0h-3v2h4a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2 0zM7 6v2h6V6a3 3 0 00-6 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/map.js":
/*!***********************************!*\
  !*** ./resources/js/icons/map.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'map': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/menu.js":
/*!************************************!*\
  !*** ./resources/js/icons/menu.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'menu': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mic.js":
/*!***********************************!*\
  !*** ./resources/js/icons/mic.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mic': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 18v-1.06A8 8 0 012 9h2a6 6 0 1012 0h2a8 8 0 01-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 118 0v5a4 4 0 11-8 0V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/minus-outline.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/minus-outline.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'minus-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/minus-solid.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/minus-solid.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'minus-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm5-11H5v2h10V9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mobile-devices.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/mobile-devices.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mobile-devices': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-happy-outline.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/mood-happy-outline.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-happy-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm2.16 3a6 6 0 01-11.32 0h11.32z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-happy-solid.js":
/*!************************************************!*\
  !*** ./resources/js/icons/mood-happy-solid.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-happy-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.16 3H4.34a6 6 0 0011.32 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-neutral-outline.js":
/*!****************************************************!*\
  !*** ./resources/js/icons/mood-neutral-outline.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-neutral-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7 13h6a1 1 0 010 2H7a1 1 0 010-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-neutral-solid.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/mood-neutral-solid.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-neutral-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 13a1 1 0 000 2h6a1 1 0 000-2H7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-sad-outline.js":
/*!************************************************!*\
  !*** ./resources/js/icons/mood-sad-outline.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-sad-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm2.16 6H4.34a6 6 0 0111.32 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mood-sad-solid.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/mood-sad-solid.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mood-sad-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zM6.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.16 6a6 6 0 00-11.32 0h11.32z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/mouse.js":
/*!*************************************!*\
  !*** ./resources/js/icons/mouse.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'mouse': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 9V6A6 6 0 019 .08V9H4zm0 2v3a6 6 0 1012 0v-3H4zm12-2V6a6 6 0 00-5-5.92V9h5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/music-album.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/music-album.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'music-album': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0h20v20H0V0zm10 18a8 8 0 100-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 010 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/music-artist.js":
/*!********************************************!*\
  !*** ./resources/js/icons/music-artist.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'music-artist': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.82-3.08A4 4 0 0115.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/music-notes.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/music-notes.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'music-notes': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 2.5V0L6 2v12.17A3 3 0 005 14H3a3 3 0 000 6h2a3 3 0 003-3V5.71L18 4.3v7.88a3 3 0 00-1-.17h-2a3 3 0 000 6h2a3 3 0 003-3V2.5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/music-playlist.js":
/*!**********************************************!*\
  !*** ./resources/js/icons/music-playlist.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'music-playlist': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 17a3 3 0 01-3 3h-2a3 3 0 010-6h2a3 3 0 011 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/navigation-more.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/navigation-more.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'navigation-more': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 12a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/network.js":
/*!***************************************!*\
  !*** ./resources/js/icons/network.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'network': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm7.75-8a8.01 8.01 0 000-4h-3.82a28.81 28.81 0 010 4h3.82zm-.82 2h-3.22a14.44 14.44 0 01-.95 3.51A8.03 8.03 0 0016.93 14zm-8.85-2h3.84a24.61 24.61 0 000-4H8.08a24.61 24.61 0 000 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 010-4H2.25a8.01 8.01 0 000 4zm.82 2a8.03 8.03 0 004.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 00-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 003.07 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/news-paper.js":
/*!******************************************!*\
  !*** ./resources/js/icons/news-paper.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'news-paper': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/notification.js":
/*!********************************************!*\
  !*** ./resources/js/icons/notification.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'notification': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 8a6 6 0 014.03-5.67 2 2 0 113.95 0A6 6 0 0116 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 11-4 0h4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/notifications-outline.js":
/*!*****************************************************!*\
  !*** ./resources/js/icons/notifications-outline.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'notifications-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 8v7h8V8a4 4 0 10-8 0zm2.03-5.67a2 2 0 113.95 0A6 6 0 0116 8v6l3 2v1H1v-1l3-2V8a6 6 0 014.03-5.67zM12 18a2 2 0 11-4 0h4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/notifications.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/notifications.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'notifications': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 8a6 6 0 014.03-5.67 2 2 0 113.95 0A6 6 0 0116 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 11-4 0h4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/paste.js":
/*!*************************************!*\
  !*** ./resources/js/icons/paste.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'paste': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10.5 20H2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 015.94 0L13 3v1h1a2 2 0 012 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 100-2 1 1 0 000 2zm2 4h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pause-outline.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/pause-outline.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pause-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6h2v8H7V6zm4 0h2v8h-2V6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pause-solid.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/pause-solid.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pause-solid': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM7 6v8h2V6H7zm4 0v8h2V6h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pause.js":
/*!*************************************!*\
  !*** ./resources/js/icons/pause.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pause': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pen-tool.js":
/*!****************************************!*\
  !*** ./resources/js/icons/pen-tool.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pen-tool': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 102 0zM6 18h8v2H6v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/phone.js":
/*!*************************************!*\
  !*** ./resources/js/icons/phone.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'phone': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 18.35V19a1 1 0 01-1 1h-2A17 17 0 010 3V1a1 1 0 011-1h4a1 1 0 011 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 01.99 1v3.35z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/photo.js":
/*!*************************************!*\
  !*** ./resources/js/icons/photo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'photo': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 100-4 2 2 0 000 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/php-elephant.js":
/*!********************************************!*\
  !*** ./resources/js/icons/php-elephant.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'php-elephant': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" fill-rule="evenodd" d="M10 12v8A10 10 0 018.17.17L10 2h5a5 5 0 015 4.99v9.02A4 4 0 0116 20v-2a2 2 0 100-4h-4l-2-2zm5.5-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pin.js":
/*!***********************************!*\
  !*** ./resources/js/icons/pin.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pin': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/play-outline.js":
/*!********************************************!*\
  !*** ./resources/js/icons/play-outline.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'play-outline': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6l8 4-8 4V6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/play.js":
/*!************************************!*\
  !*** ./resources/js/icons/play.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'play': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 4l12 6-12 6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/playlist.js":
/*!****************************************!*\
  !*** ./resources/js/icons/playlist.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'playlist': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 17a3 3 0 01-3 3h-2a3 3 0 010-6h2a3 3 0 011 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/plugin.js":
/*!**************************************!*\
  !*** ./resources/js/icons/plugin.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'plugin': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 14v4a2 2 0 01-2 2h-4v-2a2 2 0 00-2-2 2 2 0 00-2 2v2H6a2 2 0 01-2-2v-4H2a2 2 0 01-2-2 2 2 0 012-2h2V6c0-1.1.9-2 2-2h4V2a2 2 0 012-2 2 2 0 012 2v2h4a2 2 0 012 2v4h-2a2 2 0 00-2 2 2 2 0 002 2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/portfolio.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/portfolio.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'portfolio': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/printer.js":
/*!***************************************!*\
  !*** ./resources/js/icons/printer.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'printer': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/pylon.js":
/*!*************************************!*\
  !*** ./resources/js/icons/pylon.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'pylon': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17.4 18H20v2H0v-2h2.6L8 0h4l5.4 18zm-3.2-4H5.8l-1.2 4h10.8l-1.2-4zm-2.4-8H8.2L7 10h6l-1.2-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/question.js":
/*!****************************************!*\
  !*** ./resources/js/icons/question.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'question': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 10-8 0h2a2 2 0 114 0zm-3 8v2h2v-2H9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/queue.js":
/*!*************************************!*\
  !*** ./resources/js/icons/queue.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'queue': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/radar copy 2.js":
/*!********************************************!*\
  !*** ./resources/js/icons/radar copy 2.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'radar copy 2': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 10a2 2 0 01-3.41 1.41A2 2 0 0110 8V0a9.97 9.97 0 0110 10h-8zm7.9 1.41A10 10 0 118.59.1v2.03a8 8 0 109.29 9.29h2.02zm-4.07 0a6 6 0 11-7.25-7.25v2.1a3.99 3.99 0 00-1.4 6.57 4 4 0 006.56-1.42h2.1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/radar.js":
/*!*************************************!*\
  !*** ./resources/js/icons/radar.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'radar': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 10a2 2 0 01-3.41 1.41A2 2 0 0110 8V0a9.97 9.97 0 0110 10h-8zm7.9 1.41A10 10 0 118.59.1v2.03a8 8 0 109.29 9.29h2.02zm-4.07 0a6 6 0 11-7.25-7.25v2.1a3.99 3.99 0 00-1.4 6.57 4 4 0 006.56-1.42h2.1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/radio.js":
/*!*************************************!*\
  !*** ./resources/js/icons/radio.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'radio': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 9v9a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h13.8L.74 1.97 1.26.03 20 5.06V9zm-5 9a3 3 0 100-6 3 3 0 000 6zM2 8v2h16V8H2zm1.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/refresh.js":
/*!***************************************!*\
  !*** ./resources/js/icons/refresh.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'refresh': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 3v2a5 5 0 00-3.54 8.54l-1.41 1.41A7 7 0 0110 3zm4.95 2.05A7 7 0 0110 17v-2a5 5 0 003.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/reload.js":
/*!**************************************!*\
  !*** ./resources/js/icons/reload.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'reload': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14.66 15.66A8 8 0 1117 10h-2a6 6 0 10-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/reply-all.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/reply-all.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'reply-all': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 17v-2.99A4 4 0 0014 10h-3v5L5 9l6-6v5h3a6 6 0 016 6v3h-2zM6 6V3L0 9l6 6v-3L3 9l3-3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/reply.js":
/*!*************************************!*\
  !*** ./resources/js/icons/reply.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'reply': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 17v-2.99A4 4 0 0011 10H8v5L2 9l6-6v5h3a6 6 0 016 6v3h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/repost.js":
/*!**************************************!*\
  !*** ./resources/js/icons/repost.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'repost': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 4a2 2 0 00-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 01-2 2H6l2-2h7V8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/save-disk.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/save-disk.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'save-disk': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/screen-full.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/screen-full.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'screen-full': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/search.js":
/*!**************************************!*\
  !*** ./resources/js/icons/search.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'search': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/send.js":
/*!************************************!*\
  !*** ./resources/js/icons/send.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'send': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/servers.js":
/*!***************************************!*\
  !*** ./resources/js/icons/servers.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'servers': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/share-01.js":
/*!****************************************!*\
  !*** ./resources/js/icons/share-01.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'share-01': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/share-alt.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/share-alt.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'share-alt': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5.08 12.16A2.99 2.99 0 010 10a3 3 0 015.08-2.16l8.94-4.47a3 3 0 11.9 1.79L5.98 9.63a3.03 3.03 0 010 .74l8.94 4.47A2.99 2.99 0 0120 17a3 3 0 11-5.98-.37l-8.94-4.47z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/share.js":
/*!*************************************!*\
  !*** ./resources/js/icons/share.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'share': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/shield.js":
/*!**************************************!*\
  !*** ./resources/js/icons/shield.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'shield': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M19 11a7.5 7.5 0 01-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 011 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/shopping-cart.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/shopping-cart.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'shopping-cart': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 2h16l-3 9H4a1 1 0 100 2h13v2H4a3 3 0 010-6h.33L3 5 2 2H0V0h3a1 1 0 011 1v1zm1 18a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/show-sidebar.js":
/*!********************************************!*\
  !*** ./resources/js/icons/show-sidebar.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'show-sidebar': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/shuffle.js":
/*!***************************************!*\
  !*** ./resources/js/icons/shuffle.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'shuffle': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/stand-by.js":
/*!****************************************!*\
  !*** ./resources/js/icons/stand-by.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'stand-by': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" fill-rule="evenodd" d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0010 18a7 7 0 004.42-12.42l1.42-1.42a9 9 0 11-11.69 0zM9 0h2v8H9V0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/star-full.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/star-full.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'star-full': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/station.js":
/*!***************************************!*\
  !*** ./resources/js/icons/station.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'station': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 11.73a2 2 0 112 0V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0010 6a4 4 0 00-2.83 6.83l-1.41 1.41a6 6 0 118.49 0zm2.83 2.83l-1.41-1.41a8 8 0 10-11.31 0l-1.42 1.41a10 10 0 1114.14 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/step-backward.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/step-backward.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'step-backward': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/step-forward.js":
/*!********************************************!*\
  !*** ./resources/js/icons/step-forward.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'step-forward': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/stethoscope.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/stethoscope.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'stethoscope': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 10.27V4.99a1 1 0 00-2 0V15a5 5 0 01-10 0v-1.08A6 6 0 010 8V2C0 .9.9 0 2 0h1a1 1 0 011 1 1 1 0 01-1 1H2v6a4 4 0 108 0V2H9a1 1 0 01-1-1 1 1 0 011-1h1a2 2 0 012 2v6a6 6 0 01-5 5.92V15a3 3 0 006 0V5a3 3 0 016 0v5.27a2 2 0 11-2 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/store-front.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/store-front.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'store-front': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 9.87V20H2V9.87a4.25 4.25 0 003-.38V14h10V9.5a4.26 4.26 0 003 .37zM3 0h4l-.67 6.03A3.43 3.43 0 013 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 017.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 01-3.33-2.97L13 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/stroke-width.js":
/*!********************************************!*\
  !*** ./resources/js/icons/stroke-width.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'stroke-width': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/subdirectory-left.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/subdirectory-left.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'subdirectory-left': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/subdirectory-right.js":
/*!**************************************************!*\
  !*** ./resources/js/icons/subdirectory-right.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'subdirectory-right': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/swap.js":
/*!************************************!*\
  !*** ./resources/js/icons/swap.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'swap': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 6a4 4 0 118 0v8h3l-4 4-4-4h3V6a2 2 0 00-2-2 2 2 0 00-2 2v8a4 4 0 11-8 0V6H0l4-4 4 4H5v8a2 2 0 002 2 2 2 0 002-2V6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/tablet.js":
/*!**************************************!*\
  !*** ./resources/js/icons/tablet.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'tablet': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 100-2 1 1 0 000 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/tag.js":
/*!***********************************!*\
  !*** ./resources/js/icons/tag.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'tag': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/target.js":
/*!**************************************!*\
  !*** ./resources/js/icons/target.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'target': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17.94 11H13V9h4.94A8 8 0 0011 2.06V7H9V2.06A8 8 0 002.06 9H7v2H2.06A8 8 0 009 17.94V13h2v4.94A8 8 0 0017.94 11zM10 20a10 10 0 110-20 10 10 0 010 20z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/text-box.js":
/*!****************************************!*\
  !*** ./resources/js/icons/text-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'text-box': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0h6v6H0V0zm2 2v2h2V2H2zm12-2h6v6h-6V0zm2 2v2h2V2h-2zm-2 12h6v6h-6v-6zm2 2v2h2v-2h-2zM0 14h6v6H0v-6zm2 2v2h2v-2H2zM6 2h8v2H6V2zm0 14h8v2H6v-2zM16 6h2v8h-2V6zM2 6h2v8H2V6zm5 1h6v2H7V7zm2 2h2v4H9V9z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/text-decoration.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/text-decoration.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'text-decoration': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 5h-2v12H8V3h8v2h-2v12h-2V5zM8 3a4 4 0 100 8V3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/thermometer.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/thermometer.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'thermometer': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 11.17V7h2v4.17a3 3 0 11-2 0zm-1-.63a4 4 0 104 0V4a2 2 0 10-4 0v6.53zM6 9.53V4a4 4 0 018 0v5.53A5.99 5.99 0 0110 20 6 6 0 016 9.53z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/thumbs-down.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/thumbs-down.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'thumbs-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 20a2 2 0 01-2-2v-6H2a2 2 0 01-2-2V8l2.3-6.12A3.11 3.11 0 015 0h8a2 2 0 012 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/thumbs-up.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/thumbs-up.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'thumbs-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 0h1v3l3 7v8a2 2 0 01-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 012-2h7V2a2 2 0 012-2zm6 10h3v10h-3V10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/ticket.js":
/*!**************************************!*\
  !*** ./resources/js/icons/ticket.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'ticket': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M20 12v5H0v-5a2 2 0 100-4V3h20v5a2 2 0 100 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/time.js":
/*!************************************!*\
  !*** ./resources/js/icons/time.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'time': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/timer.js":
/*!*************************************!*\
  !*** ./resources/js/icons/timer.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'timer': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16.32 7.1A8 8 0 119 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 100-12 6 6 0 000 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/tools copy.js":
/*!******************************************!*\
  !*** ./resources/js/icons/tools copy.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'tools copy': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 0s8 7.58 8 12a8 8 0 11-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0010 6V0zM8 0a3 3 0 100 6V0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/translate.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/translate.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'translate': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/trash.js":
/*!*************************************!*\
  !*** ./resources/js/icons/trash.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'trash': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-bus.js":
/*!******************************************!*\
  !*** ./resources/js/icons/travel-bus.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-bus': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 18H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v14a2 2 0 01-2 2v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zM4 5v6h5V5H4zm7 0v6h5V5h-5zM5 2v1h10V2H5zm.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-car.js":
/*!******************************************!*\
  !*** ./resources/js/icons/travel-car.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-car': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 14v-3H1a1 1 0 01-1-1 1 1 0 011-1h1l4-7h8l4 7h1a1 1 0 011 1 1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-3zm13.86-5L13 4H7L4.14 9h11.72zM5.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-case.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/travel-case.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-case': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14 5h2v14H4V5h2V4a2 2 0 012-2h4a2 2 0 012 2v1zm3 0h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V5zM3 5v14H2a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-taxi-cab.js":
/*!***********************************************!*\
  !*** ./resources/js/icons/travel-taxi-cab.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-taxi-cab': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 3h2l4 7h1a1 1 0 011 1 1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-6H1a1 1 0 01-1-1 1 1 0 011-1h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-train.js":
/*!********************************************!*\
  !*** ./resources/js/icons/travel-train.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-train': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 18H8l-2 2H3l2-2a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v14a2 2 0 01-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 2v1h4V2H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel-walk.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/travel-walk.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel-walk': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 00-1.4-1.4l-1.32-.88a1.72 1.72 0 00-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 100-4 2 2 0 000 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/travel.js":
/*!**************************************!*\
  !*** ./resources/js/icons/travel.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'travel': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M14 5h2v14H4V5h2V4a2 2 0 012-2h4a2 2 0 012 2v1zm3 0h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V5zM3 5v14H2a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/trophy.js":
/*!**************************************!*\
  !*** ./resources/js/icons/trophy.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'trophy': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 9a3 3 0 003-3h2a5 5 0 01-5.1 5 5 5 0 01-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 015.1 11H5a5 5 0 01-5-5h2a3 3 0 003 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/tuning.js":
/*!**************************************!*\
  !*** ./resources/js/icons/tuning.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'tuning': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M17 16v4h-2v-4h-2v-3h6v3h-2zM1 9h6v3H1V9zm6-4h6v3H7V5zM3 0h2v8H3V0zm12 0h2v12h-2V0zM9 0h2v4H9V0zM3 12h2v8H3v-8zm6-4h2v12H9V8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/upload.js":
/*!**************************************!*\
  !*** ./resources/js/icons/upload.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'upload': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/usb.js":
/*!***********************************!*\
  !*** ./resources/js/icons/usb.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'usb': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 8v2h-4V4h2l-3-4-3 4h2v8H5V9.73a2 2 0 10-2 0V12a2 2 0 002 2h4v2.27a2 2 0 102 0V12h4a2 2 0 002-2V8h1V4h-4v4h1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/user-add.js":
/*!****************************************!*\
  !*** ./resources/js/icons/user-add.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'user-add': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 016 0v2a3 3 0 01-6 0V6zm11 9.14A15.93 15.93 0 0012 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/user-group.js":
/*!******************************************!*\
  !*** ./resources/js/icons/user-group.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'user-group': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 8a4 4 0 110-8 4 4 0 010 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 017 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 11-1.33 7.76 5.96 5.96 0 000-7.52C12.1.1 12.53 0 13 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/user-solid-circle.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/user-solid-circle.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'user-solid-circle': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M10 20a10 10 0 110-20 10 10 0 010 20zM7 6v2a3 3 0 106 0V6a3 3 0 10-6 0zm-3.65 8.44a8 8 0 0013.3 0 15.94 15.94 0 00-13.3 0z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/user-solid-square.js":
/*!*************************************************!*\
  !*** ./resources/js/icons/user-solid-square.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'user-solid-square': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/user.js":
/*!************************************!*\
  !*** ./resources/js/icons/user.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'user': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/vector.js":
/*!**************************************!*\
  !*** ./resources/js/icons/vector.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'vector': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 4h4.27a2 2 0 110 2h-2.14a9 9 0 014.84 7.25 2 2 0 11-2 .04 7 7 0 00-4.97-6V8H8v-.71a7 7 0 00-4.96 6 2 2 0 11-2-.04A9 9 0 015.86 6H3.73a2 2 0 110-2H8V3h4v1z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/video-camera.js":
/*!********************************************!*\
  !*** ./resources/js/icons/video-camera.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'video-camera': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 7l4-4v14l-4-4v3a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v3zm-8 7a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-carousel.js":
/*!*********************************************!*\
  !*** ./resources/js/icons/view-carousel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-carousel': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-column.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/view-column.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-column': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12 4H8v12h4V4zm2 0v12h4V4h-4zM6 4H2v12h4V4zM0 2h20v16H0V2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-hide.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/view-hide.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-hide': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-list.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/view-list.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-list': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-show.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/view-show.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-show': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/view-tile.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/view-tile.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'view-tile': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/volume-down.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/volume-down.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'volume-down': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M7 7H3v6h4l5 5V2L7 7zm8.54 6.54l-1.42-1.42a3 3 0 000-4.24l1.42-1.42a4.98 4.98 0 010 7.08z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/volume-mute.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/volume-mute.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'volume-mute': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 7H5v6h4l5 5V2L9 7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/volume-off.js":
/*!******************************************!*\
  !*** ./resources/js/icons/volume-off.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'volume-off': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/volume-up.js":
/*!*****************************************!*\
  !*** ./resources/js/icons/volume-up.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'volume-up': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 000-9.9l1.41-1.41a8.97 8.97 0 010 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 000-4.24l1.42-1.42a4.98 4.98 0 010 7.08z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/wallet.js":
/*!**************************************!*\
  !*** ./resources/js/icons/wallet.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'wallet': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 4c0-1.1.9-2 2-2h15a1 1 0 011 1v1H2v1h17a1 1 0 011 1v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm16.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/watch.js":
/*!*************************************!*\
  !*** ./resources/js/icons/watch.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'watch': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M11 9h2v2H9V7h2v2zm-5.82 6.08a6.98 6.98 0 010-10.16L6 0h8l.82 4.92a6.98 6.98 0 010 10.16L14 20H6l-.82-4.92zM10 15a5 5 0 100-10 5 5 0 000 10z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/window-new.js":
/*!******************************************!*\
  !*** ./resources/js/icons/window-new.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'window-new': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/window-open.js":
/*!*******************************************!*\
  !*** ./resources/js/icons/window-open.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'window-open': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/window.js":
/*!**************************************!*\
  !*** ./resources/js/icons/window.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'window': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/wrench.js":
/*!**************************************!*\
  !*** ./resources/js/icons/wrench.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'wrench': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" d="M6.47 9.8A5 5 0 01.2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 016.4 6.68l10 10-2.83 2.83L6.47 9.8z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/yin-yang.js":
/*!****************************************!*\
  !*** ./resources/js/icons/yin-yang.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'yin-yang': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" fill-rule="evenodd" d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 4 4 0 110-8 4 4 0 100-8zm0 13a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 110-2 1 1 0 010 2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/zoom-in.js":
/*!***************************************!*\
  !*** ./resources/js/icons/zoom-in.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'zoom-in': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"/>'
  }
});

/***/ }),

/***/ "./resources/js/icons/zoom-out.js":
/*!****************************************!*\
  !*** ./resources/js/icons/zoom-out.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* tslint:disable */
// @ts-ignore

vue_svgicon__WEBPACK_IMPORTED_MODULE_0___default.a.register({
  'zoom-out': {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    data: '<path pid="0" fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12zM5 7h6v2H5V7z"/>'
  }
});

/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function (routes) {
  var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
    routes: routes,
    mode: 'history'
  }); // Hook router events

  return router;
});

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Home */ "./resources/js/views/Home.vue");
/* harmony import */ var _views_Orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Orders */ "./resources/js/views/Orders.vue");
/* harmony import */ var _views_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Group */ "./resources/js/views/Group.vue");
/* harmony import */ var _views_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Category */ "./resources/js/views/Category.vue");
/* harmony import */ var _views_CheckoutComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/CheckoutComplete */ "./resources/js/views/CheckoutComplete.vue");





/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  component: _views_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/orders',
  component: _views_Orders__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/checkout/completed',
  component: _views_CheckoutComplete__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: '/group/:group',
  component: _views_Group__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/group/:group/:category',
  component: _views_Category__WEBPACK_IMPORTED_MODULE_3__["default"]
}]);

/***/ }),

/***/ "./resources/js/views/App.vue":
/*!************************************!*\
  !*** ./resources/js/views/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=91ac6b5c&scoped=true& */ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& */ "./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91ac6b5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&id=91ac6b5c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_91ac6b5c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=91ac6b5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Category.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Category.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=6480121d& */ "./resources/js/views/Category.vue?vue&type=template&id=6480121d&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Category.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category.vue?vue&type=template&id=6480121d&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Category.vue?vue&type=template&id=6480121d& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=6480121d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=template&id=6480121d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/CheckoutComplete.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/CheckoutComplete.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckoutComplete.vue?vue&type=template&id=468c623e& */ "./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e&");
/* harmony import */ var _CheckoutComplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutComplete.vue?vue&type=script&lang=js& */ "./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckoutComplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CheckoutComplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CheckoutComplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckoutComplete.vue?vue&type=template&id=468c623e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CheckoutComplete.vue?vue&type=template&id=468c623e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckoutComplete_vue_vue_type_template_id_468c623e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Group.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Group.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group.vue?vue&type=template&id=210ac570& */ "./resources/js/views/Group.vue?vue&type=template&id=210ac570&");
/* harmony import */ var _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue?vue&type=script&lang=js& */ "./resources/js/views/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Group.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Group.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Group.vue?vue&type=template&id=210ac570&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Group.vue?vue&type=template&id=210ac570& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Group.vue?vue&type=template&id=210ac570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Group.vue?vue&type=template&id=210ac570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Group_vue_vue_type_template_id_210ac570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Orders.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Orders.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=36c3bb78& */ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=36c3bb78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./resources/js/bootstrap.js ./resources/sass/app.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/james/Documents/Code/shop/resources/js/bootstrap.js */"./resources/js/bootstrap.js");
module.exports = __webpack_require__(/*! /Users/james/Documents/Code/shop/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);