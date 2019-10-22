(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DashLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "DashLayout",
  data: function data() {
    return {
      isCollapse: true,
      activeIndex: '1',
      activeIndex2: '1',
      authentication: "Logoff",
      notifications: 0
    };
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    handleOpen: function handleOpen(key, keyPath) {
      console.log('closing', key, keyPath);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-list').css("display", "none");
    },
    handleClose: function handleClose(key, keyPath) {
      console.log('closing', key, keyPath);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-list').css("display", "none");
    },
    handleSelect: function handleSelect(key, keyPath) {
      console.log('closing', key, keyPath);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "appointment",
  data: function data() {
    return {
      appointmnt: []
    };
  },
  mounted: function mounted() {
    console.log(this.appointmentId);
    this.appointmnt.push(this.appointmentId);
  },
  props: ['appointmentId'],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({}),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/date.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/date.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "date",
  data: function data() {
    return {
      selectedDate: '',
      startTime1: '',
      endTime1: '',
      startTime2: '',
      endTime2: '',
      startTime3: '',
      endTime3: '',
      startTime4: '',
      endTime4: '',
      startTime5: '',
      endTime5: '',
      startTime6: '',
      endTime6: '',
      startTime7: '',
      endTime7: '',
      startTime8: '',
      endTime8: '',

      /*startTime9: '',
      endTime9: '',*/
      caption: '',
      service_id1: '',
      service_id2: '',
      service_id3: '',
      service_id4: '',
      service_id5: '',
      service_id6: '',
      service_id7: '',
      service_id8: '',
      // service_id9: '',
      slot1Out: '',
      slot2Out: '',
      slot3Out: '',
      slot4Out: '',
      slot5Out: '',
      slot6Out: '',
      slot7Out: '',
      slot8Out: '',
      // slot9Out: '',
      okay: false,
      leapTime: 0,
      leapJump: null,
      hideSingle: false,
      bulkOut: null
    };
  },
  methods: {
    handleLeap: function handleLeap(value) {
      console.log('number of days to add', value);
      this.hideSingle = true;
      this.leapJump = value;
    },
    AddDateSlots: function AddDateSlots() {
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

      if (this.selectedDate !== '') {
        var selectedDate = this.selectedDate.addDays(1);
        var outgoingDate = selectedDate.toISOString().slice(0, 19).replace('T', ' ');
        var temp = outgoingDate.slice(0, 10);
        outgoingDate = "".concat(outgoingDate.slice(0, 10), " 00:00:00");
        var outDate = {
          day: outgoingDate,
          caption: this.caption
        };
        var slot1Out = {
          from: "".concat(temp, " 00:").concat(this.startTime1),
          to: "".concat(temp, " 00:").concat(this.endTime1),
          service_id: this.service_id1
        };
        var slot2Out = {
          from: "".concat(temp, " 00:").concat(this.startTime2),
          to: "".concat(temp, " 00:").concat(this.endTime2),
          service_id: this.service_id2
        };
        var slot3Out = {
          from: "".concat(temp, " 00:").concat(this.startTime3),
          to: "".concat(temp, " 00:").concat(this.endTime3),
          service_id: this.service_id3
        };
        var slot4Out = {
          from: "".concat(temp, " 00:").concat(this.startTime4),
          to: "".concat(temp, " 00:").concat(this.endTime4),
          service_id: this.service_id4
        };
        var slot5Out = {
          from: "".concat(temp, " 00:").concat(this.startTime5),
          to: "".concat(temp, " 00:").concat(this.endTime5),
          service_id: this.service_id5
        };
        var slot6Out = {
          from: "".concat(temp, " 00:").concat(this.startTime6),
          to: "".concat(temp, " 00:").concat(this.endTime6),
          service_id: this.service_id6
        };
        var slot7Out = {
          from: "".concat(temp, " 00:").concat(this.startTime7),
          to: "".concat(temp, " 00:").concat(this.endTime7),
          service_id: this.service_id7
        };
        var slot8Out = {
          from: "".concat(temp, " 00:").concat(this.startTime8),
          to: "".concat(temp, " 00:").concat(this.endTime8),
          service_id: this.service_id8
        };
        /*let slot9Out = {
            from: `${temp} 00:${this.startTime9}`,
            to: `${temp} 00:${this.endTime9}`,
            service_id: this.service_id9
        };*/

        console.log(outDate, slot1Out, slot2Out, slot3Out, slot4Out, slot5Out, slot6Out, slot7Out, slot8Out);
        this.uploadDate(outDate);
        this.slot1Out = slot1Out;
        this.slot2Out = slot2Out;
        this.slot3Out = slot3Out;
        this.slot4Out = slot4Out;
        this.slot5Out = slot5Out;
        this.slot6Out = slot6Out;
        this.slot7Out = slot7Out;
        this.slot8Out = slot8Out; // this.slot9Out = slot9Out;
      }

      if (this.leapJump !== null) {
        var date = new Date();
        var leapDays = [];

        for (var i = 0; i < this.leapJump; i++) {
          var day = date.addDays(i + 1).toISOString().slice(0, 19).replace('T', ' ');

          var _temp = day.slice(0, 10);

          var _slot1Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime1),
            to: "".concat(_temp, " 00:").concat(this.endTime1),
            service_id: this.service_id1
          };
          var _slot2Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime2),
            to: "".concat(_temp, " 00:").concat(this.endTime2),
            service_id: this.service_id2
          };
          var _slot3Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime3),
            to: "".concat(_temp, " 00:").concat(this.endTime3),
            service_id: this.service_id3
          };
          var _slot4Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime4),
            to: "".concat(_temp, " 00:").concat(this.endTime4),
            service_id: this.service_id4
          };
          var _slot5Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime5),
            to: "".concat(_temp, " 00:").concat(this.endTime5),
            service_id: this.service_id5
          };
          var _slot6Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime6),
            to: "".concat(_temp, " 00:").concat(this.endTime6),
            service_id: this.service_id6
          };
          var _slot7Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime7),
            to: "".concat(_temp, " 00:").concat(this.endTime7),
            service_id: this.service_id7
          };
          var _slot8Out = {
            from: "".concat(_temp, " 00:").concat(this.startTime8),
            to: "".concat(_temp, " 00:").concat(this.endTime8),
            service_id: this.service_id8
          };
          /*let slot9Out = {
              from: `${temp} 00:${this.startTime9}`,
              to: `${temp} 00:${this.endTime9}`,
              service_id: this.service_id9
          };*/

          var respSlots = [_slot1Out, _slot2Out, _slot3Out, _slot4Out, _slot5Out, _slot6Out, _slot7Out, _slot8Out];
          var _outDate = {
            day: "".concat(day.slice(0, 10), " 00:00:00"),
            caption: this.caption,
            slots: respSlots
          };
          leapDays.push(_outDate);
        }

        this.bulkOut = leapDays;
        this.uploadBulk();
      }
    },
    uploadSlot: function uploadSlot(data) {
      return this.$store.dispatch('doPost', {
        url: '/api/slots',
        data: {
          slot_data: data
        }
      }).then(function (results) {
        console.log('slots results', results);
      })["catch"](function (error) {
        console.log('slots error', error);
      });
    },
    uploadBulk: function uploadBulk() {
      var _this = this;

      _.forEach(this.bulkOut, function (snippet) {
        _this.$store.dispatch('doPost', {
          url: '/api/dates',
          data: {
            date_data: {
              day: snippet.day,
              caption: snippet.caption
            }
          }
        }).then(function (results) {
          var s1 = _objectSpread({}, snippet.slots[0], {
            date_id: results.id
          });

          var s2 = _objectSpread({}, snippet.slots[1], {
            date_id: results.id
          });

          var s3 = _objectSpread({}, snippet.slots[2], {
            date_id: results.id
          });

          var s4 = _objectSpread({}, snippet.slots[3], {
            date_id: results.id
          });

          var s5 = _objectSpread({}, snippet.slots[4], {
            date_id: results.id
          });

          var s6 = _objectSpread({}, snippet.slots[5], {
            date_id: results.id
          });

          var s7 = _objectSpread({}, snippet.slots[6], {
            date_id: results.id
          });

          var s8 = _objectSpread({}, snippet.slots[7], {
            date_id: results.id
          });

          _this.uploadSlot(s1);

          _this.uploadSlot(s2);

          _this.uploadSlot(s3);

          _this.uploadSlot(s4);

          _this.uploadSlot(s5);

          _this.uploadSlot(s6);

          _this.uploadSlot(s7);

          _this.uploadSlot(s8);
        })["catch"](function (error) {
          console.log('dates error', error);
        });
      });
    },
    uploadDate: function uploadDate(data) {
      var _this2 = this;

      return this.$store.dispatch('doPost', {
        url: '/api/dates',
        data: {
          date_data: data
        }
      }).then(function (results) {
        var s1 = _objectSpread({}, _this2.slot1Out, {
          date_id: results.id
        });

        var s2 = _objectSpread({}, _this2.slot2Out, {
          date_id: results.id
        });

        var s3 = _objectSpread({}, _this2.slot3Out, {
          date_id: results.id
        });

        var s4 = _objectSpread({}, _this2.slot4Out, {
          date_id: results.id
        });

        var s5 = _objectSpread({}, _this2.slot5Out, {
          date_id: results.id
        });

        var s6 = _objectSpread({}, _this2.slot6Out, {
          date_id: results.id
        });

        var s7 = _objectSpread({}, _this2.slot7Out, {
          date_id: results.id
        });

        var s8 = _objectSpread({}, _this2.slot8Out, {
          date_id: results.id
        });
        /*let s9 = {
            ...this.slot9Out,
            date_id: results.id
        };*/


        _this2.uploadSlot(s1);

        _this2.uploadSlot(s2);

        _this2.uploadSlot(s3);

        _this2.uploadSlot(s4);

        _this2.uploadSlot(s5);

        _this2.uploadSlot(s6);

        _this2.uploadSlot(s7);

        _this2.uploadSlot(s8);
        /*this.uploadSlot(s9);*/


        console.log('slots results', results);
        _this2.okay = true;
      })["catch"](function (error) {
        console.log('dates error', error);
      });
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    services: function services(state) {
      return state.dbServices;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DashLayout.vue */ "./resources/js/components/DashLayout.vue");
/* harmony import */ var _components_date_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/date.vue */ "./resources/js/components/date.vue");
/* harmony import */ var _components_appointment_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/appointment.vue */ "./resources/js/components/appointment.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  components: {
    'dash-layout': _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'date-component': _components_date_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'appointment-component': _components_appointment_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeMount: function beforeMount() {
    this.setPublicationsData();
  },
  mounted: function mounted() {
    this.setServiceNames();
  },
  data: function data() {
    return {
      drawer: false,
      drawer2: false,
      direction: 'rtl',
      totalMembers: null,
      totalServices: null,
      totalPublications: null,
      totaljobs: null,
      appointmentdata: null,
      servicedata: null,
      datesdata: null,
      slotdata: null,
      dateMode: true,
      appointmentId: null
    };
  },
  methods: {
    handleClose: function handleClose(done) {
      this.getDBDates();
      done();
    },
    handleView: function handleView(id) {
      this.drawer = true;
      this.appointmentId = id;
    },
    setPublicationsData: function setPublicationsData() {
      this.totaljobs = this.jobs;
      this.totalPublications = this.publications;
      this.totalServices = this.services;
      this.totalMembers = this.members;
    },
    handleAdd: function handleAdd() {
      this.drawer2 = true;
    },
    handleDelete: function handleDelete(id) {
      var _this = this;

      this.$store.dispatch('doDelete', {
        url: "/api/dates/".concat(id)
      }).then(function (results) {
        console.log('deleted', results);

        if (results === 204) {
          console.log('removing date');

          _this.getDBDates();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleDelete2: function handleDelete2(id) {
      var _this2 = this;

      this.$store.dispatch('doDelete', {
        url: "/api/appointments/".concat(id)
      }).then(function (results) {
        console.log('deleted', results);

        if (results === 204) {
          console.log('removing appointment');

          _this2.doGetBooking();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    doGetBooking: function doGetBooking() {
      var _this3 = this;

      return this.$store.dispatch('doGet', {
        url: '/api/appointments'
      }).then(function (results) {
        _this3.$store.commit('setDBAppointments', results);

        console.log('component booking', results);

        _this3.setServiceNames();
      })["catch"](function (error) {
        console.log('booking data', error);
      });
    },
    getDBDates: function getDBDates() {
      var _this4 = this;

      return this.$store.dispatch('doGet', {
        url: '/api/dates'
      }).then(function (results) {
        console.log('dates results', results);

        _this4.$store.commit('setDBDates', results);
      })["catch"](function (error) {
        console.log('dates error', error);
      });
    },
    mineServiceNames: function mineServiceNames(appointment) {
      var name;

      if (appointment !== undefined) {
        this.servicesDB.filter(function (service) {
          if (appointment.service_id === service.id) {
            name = service.service_type;
          }
        });
      }

      return name;
    },
    mineSlots: function mineSlots(appointment) {
      var slotdata;

      if (appointment !== undefined) {
        this.slots.filter(function (slot) {
          if (appointment.slot_id === slot.id) {
            slotdata = slot;
          }
        });
      }

      return slotdata;
    },
    mineServices: function mineServices() {
      var _this5 = this;

      var newAppointments = [];
      this.appointments.filter(function (appointment) {
        var modded = _objectSpread({}, appointment, {
          serviceName: _this5.mineServiceNames(appointment),
          slotData: _this5.mineSlots(appointment)
        });

        newAppointments.push(modded);
      });
      console.log(newAppointments);
      return newAppointments;
    },
    setServiceNames: function setServiceNames() {
      this.appointmentdata = this.mineServices();
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    jobs: function jobs(state) {
      var total = 0;
      state.jobs.forEach(function () {
        total = total + 1;
      });
      return total;
    },
    publications: function publications(state) {
      var total = 0;
      state.publications.forEach(function () {
        total = total + 1;
      });
      return total;
    },
    services: function services(state) {
      var total = 0;
      state.services.forEach(function () {
        total = total + 1;
      });
      return total;
    },
    members: function members(state) {
      var total = 0;
      state.members.forEach(function () {
        total = total + 1;
      });
      return total;
    },
    appointments: function appointments(state) {
      return state.dbAppointments;
    },
    servicesDB: function servicesDB(state) {
      return state.dbServices;
    },
    slots: function slots(state) {
      return state.dbSlots;
    },
    dates: function dates(state) {
      return state.dbDates;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntd[data-v-723e91b8] {\n    text-align: left !important;\n    padding: 8px !important;\n    border-top: 1px solid lightgrey;\n}\n.appointmentCl[data-v-723e91b8] {\n    text-align: center;\n    width: 45vw;\n    margin-left: auto;\n    margin-right: auto;\n    border-left: 1px solid lightgrey;\n}\n.labl[data-v-723e91b8] {\n    width: 40%;\n}\n.dta[data-v-723e91b8] {\n    width: 60%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "appointmentCl" },
    [
      _vm._l(_vm.appointmnt, function(appointment) {
        return [
          _c("tr", [
            _vm._m(0, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [
                _vm._v(
                  _vm._s(new Date(appointment.slotData.from).toDateString())
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(1, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [
                _vm._v(_vm._s(new Date(appointment.slotData.to).toDateString()))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(2, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [_vm._v(_vm._s(appointment.first_name))])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(3, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [_vm._v(_vm._s(appointment.last_name))])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(4, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [_vm._v(_vm._s(appointment.email))])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(5, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [_vm._v(_vm._s(appointment.phone_number))])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(6, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [
                _vm._v(_vm._s(appointment.serviceName.toUpperCase()))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm._m(7, true),
            _vm._v(" "),
            _c("td", { staticClass: "dta" }, [
              _c("span", [_vm._v(_vm._s(appointment.description))])
            ])
          ])
        ]
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [_c("strong", [_vm._v("From ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [_c("strong", [_vm._v("To ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [
      _c("strong", [_vm._v("First Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [
      _c("strong", [_vm._v("Last Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [_c("strong", [_vm._v("Email")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [
      _c("strong", [_vm._v("Cellphone")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [
      _c("strong", [_vm._v("Service ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "labl" }, [
      _c("strong", [_vm._v("Description ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6 mb-4" }, [
        _c("small", { staticClass: "text-muted" }, [
          _vm._v("  Time Leap - Seed days")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("el-input-number", {
              attrs: { min: 0, max: 365 },
              on: { change: _vm.handleLeap },
              model: {
                value: _vm.leapTime,
                callback: function($$v) {
                  _vm.leapTime = $$v
                },
                expression: "leapTime"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 mb-4" }, [
        !_vm.hideSingle
          ? _c(
              "div",
              [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("  Specific Day *")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("el-date-picker", {
                  attrs: { type: "date", placeholder: "Pick a day" },
                  model: {
                    value: _vm.selectedDate,
                    callback: function($$v) {
                      _vm.selectedDate = $$v
                    },
                    expression: "selectedDate"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("small", { staticClass: "text-muted" }, [
          _vm._v("  Days Description")
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("el-input", {
              attrs: {
                name: "description",
                type: "textarea",
                rows: 2,
                placeholder: "Launch Day"
              },
              model: {
                value: _vm.caption,
                callback: function($$v) {
                  _vm.caption = $$v
                },
                expression: "caption"
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 1")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime1,
              callback: function($$v) {
                _vm.startTime1 = $$v
              },
              expression: "startTime1"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime1
              }
            },
            model: {
              value: _vm.endTime1,
              callback: function($$v) {
                _vm.endTime1 = $$v
              },
              expression: "endTime1"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id1,
                callback: function($$v) {
                  _vm.service_id1 = $$v
                },
                expression: "service_id1"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 2")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime2,
              callback: function($$v) {
                _vm.startTime2 = $$v
              },
              expression: "startTime2"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime2
              }
            },
            model: {
              value: _vm.endTime2,
              callback: function($$v) {
                _vm.endTime2 = $$v
              },
              expression: "endTime2"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id2,
                callback: function($$v) {
                  _vm.service_id2 = $$v
                },
                expression: "service_id2"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 3")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime3,
              callback: function($$v) {
                _vm.startTime3 = $$v
              },
              expression: "startTime3"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime3
              }
            },
            model: {
              value: _vm.endTime3,
              callback: function($$v) {
                _vm.endTime3 = $$v
              },
              expression: "endTime3"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id3,
                callback: function($$v) {
                  _vm.service_id3 = $$v
                },
                expression: "service_id3"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 4")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime4,
              callback: function($$v) {
                _vm.startTime4 = $$v
              },
              expression: "startTime4"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime4
              }
            },
            model: {
              value: _vm.endTime4,
              callback: function($$v) {
                _vm.endTime4 = $$v
              },
              expression: "endTime4"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id4,
                callback: function($$v) {
                  _vm.service_id4 = $$v
                },
                expression: "service_id4"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 5")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime5,
              callback: function($$v) {
                _vm.startTime5 = $$v
              },
              expression: "startTime5"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime5
              }
            },
            model: {
              value: _vm.endTime5,
              callback: function($$v) {
                _vm.endTime5 = $$v
              },
              expression: "endTime5"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id5,
                callback: function($$v) {
                  _vm.service_id5 = $$v
                },
                expression: "service_id5"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 6")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime6,
              callback: function($$v) {
                _vm.startTime6 = $$v
              },
              expression: "startTime6"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime6
              }
            },
            model: {
              value: _vm.endTime6,
              callback: function($$v) {
                _vm.endTime6 = $$v
              },
              expression: "endTime6"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id6,
                callback: function($$v) {
                  _vm.service_id6 = $$v
                },
                expression: "service_id6"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 7")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime7,
              callback: function($$v) {
                _vm.startTime7 = $$v
              },
              expression: "startTime7"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime7
              }
            },
            model: {
              value: _vm.endTime7,
              callback: function($$v) {
                _vm.endTime7 = $$v
              },
              expression: "endTime7"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id7,
                callback: function($$v) {
                  _vm.service_id7 = $$v
                },
                expression: "service_id7"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("h6", { staticClass: "dropdown-header" }, [_vm._v("Slot 8")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "Start time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00"
              }
            },
            model: {
              value: _vm.startTime8,
              callback: function($$v) {
                _vm.startTime8 = $$v
              },
              expression: "startTime8"
            }
          })
        ],
        1
      ),
      _vm._v("  \n        "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c("el-time-select", {
            attrs: {
              placeholder: "End time",
              "picker-options": {
                start: "09:00",
                step: "01:00",
                end: "17:00",
                minTime: _vm.startTime8
              }
            },
            model: {
              value: _vm.endTime8,
              callback: function($$v) {
                _vm.endTime8 = $$v
              },
              expression: "endTime8"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-xl-3 mb-4" },
        [
          _c(
            "el-select",
            {
              attrs: { filterable: "", placeholder: "Services" },
              model: {
                value: _vm.service_id8,
                callback: function($$v) {
                  _vm.service_id8 = $$v
                },
                expression: "service_id8"
              }
            },
            _vm._l(_vm.services, function(service) {
              return _c(
                "el-option",
                {
                  key: service.id,
                  attrs: { label: service.service_type, value: service.id }
                },
                [
                  _c("span", {
                    staticStyle: { float: "left" },
                    domProps: {
                      innerHTML: _vm._s(service.service_type.toUpperCase())
                    }
                  })
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "div",
          { staticClass: "col-md-6 col-xl-3 mb-4" },
          [
            _c(
              "el-button",
              {
                attrs: { type: "primary", plain: "" },
                on: { click: _vm.AddDateSlots }
              },
              [_vm._v("SAVE")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.okay
          ? _c("el-alert", {
              attrs: {
                title: "success alert",
                type: "success",
                description: "more text description",
                "show-icon": ""
              }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    { staticClass: "dashboard" },
    [
      _c("dash-layout"),
      _vm._v(" "),
      _c("div", { staticClass: "content-view container-fluid" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6 col-xl-3 mb-4" },
            [
              _c(
                "el-card",
                { staticClass: "main-card", attrs: { shadow: "hover" } },
                [
                  _vm._v("\n                    Jobs\n                    "),
                  _c("span", [_vm._v(_vm._s(_vm.totaljobs))])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6 col-xl-3 mb-4" },
            [
              _c(
                "el-card",
                { staticClass: "main-card", attrs: { shadow: "hover" } },
                [
                  _vm._v(
                    "\n                    Services\n                    "
                  ),
                  _c("span", [_vm._v(_vm._s(_vm.totalServices))])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6 col-xl-3 mb-4" },
            [
              _c(
                "el-card",
                { staticClass: "main-card", attrs: { shadow: "hover" } },
                [
                  _vm._v(
                    "\n                    Publications\n                    "
                  ),
                  _c("span", [_vm._v(_vm._s(_vm.totalPublications))])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6 col-xl-3 mb-4" },
            [
              _c(
                "el-card",
                { staticClass: "main-card", attrs: { shadow: "hover" } },
                [
                  _vm._v("\n                    Team\n                    "),
                  _c("span", [_vm._v(_vm._s(_vm.totalMembers))])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card shadow mb-4" }),
            _vm._v(" "),
            _c("div", { staticClass: "card shadow mb-4" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "appointmentData list-group list-group-flush" },
                _vm._l(_vm.appointmentdata, function(appointment) {
                  return _c("li", { staticClass: "list-group-item" }, [
                    _c("div", { staticClass: "row align-items-center" }, [
                      _c("div", { staticClass: "col mr-2" }, [
                        _c("h6", { staticClass: "mb-0" }, [
                          _c("strong", [_vm._v("From:")]),
                          _vm._v(
                            " " +
                              _vm._s(
                                new Date(
                                  appointment.slotData.from
                                ).toDateString()
                              ) +
                              "  "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("strong", [_vm._v("To:")]),
                          _vm._v(
                            " " +
                              _vm._s(
                                new Date(appointment.slotData.to).toDateString()
                              ) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Full Name: ")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _vm._v(_vm._s(appointment.first_name.toUpperCase()))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _vm._v(_vm._s(appointment.last_name.toUpperCase()))
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _c("strong", [_vm._v("Cellphone: ")]),
                          _vm._v(_vm._s(appointment.phone_number))
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Service: ")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs" }, [
                          _vm._v(_vm._s(appointment.serviceName.toUpperCase()))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-auto" },
                        [
                          _c("el-button", {
                            attrs: {
                              size: "small",
                              icon: "el-icon-top-right",
                              circle: ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.handleView(appointment)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("el-button", {
                            attrs: {
                              size: "small",
                              icon: "el-icon-delete",
                              circle: ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.handleDelete2(appointment.id)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 mb-4" }, [
            _c("div", { staticClass: "card shadow mb-4" }),
            _vm._v(" "),
            _c("div", { staticClass: "card shadow mb-4" }, [
              _c("div", { staticClass: "card-header py-3" }, [
                _c(
                  "h6",
                  { staticClass: "text-primary font-weight-bold m-0" },
                  [
                    _vm._v("Defined Dates   |   "),
                    _vm.dateMode === true
                      ? _c("el-button", {
                          attrs: {
                            size: "small",
                            type: "primary",
                            icon: "el-icon-plus",
                            circle: ""
                          },
                          on: { click: _vm.handleAdd }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.dateMode === true
                ? _c(
                    "ul",
                    {
                      staticClass: "appointmentData list-group list-group-flush"
                    },
                    _vm._l(_vm.dates, function(date) {
                      return _c("li", { staticClass: "list-group-item" }, [
                        _c(
                          "div",
                          { staticClass: "row align-items-center no-gutters" },
                          [
                            _c("div", { staticClass: "col mr-2" }, [
                              _c("h6", { staticClass: "mb-0" }, [
                                _c("strong", [_vm._v(_vm._s(date.caption))])
                              ]),
                              _c("span", { staticClass: "text-xs" }, [
                                _vm._v(
                                  _vm._s(new Date(date.day).toDateString())
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-auto" },
                              [
                                _c("el-button", {
                                  attrs: {
                                    size: "small",
                                    icon: "el-icon-delete",
                                    circle: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.handleDelete(date.id)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Appointment Details",
            size: "50%",
            visible: _vm.drawer,
            "destroy-on-close": true,
            direction: _vm.direction,
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [
          _c("appointment-component", {
            attrs: { appointmentId: _vm.appointmentId }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Add Appointment Dates",
            size: "70%",
            "destroy-on-close": true,
            visible: _vm.drawer2,
            direction: _vm.direction,
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer2 = $event
            }
          }
        },
        [_c("date-component")],
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
    return _c(
      "div",
      {
        staticClass: "d-sm-flex justify-content-between align-items-center mb-4"
      },
      [_c("h4", { staticClass: "text-dark mb-0" }, [_vm._v("Dashboard")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("h6", { staticClass: "text-primary font-weight-bold m-0" }, [
        _vm._v("Appointments")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DashLayout.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DashLayout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true& */ "./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true&");
/* harmony import */ var _DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/DashLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ba61fff2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DashLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DashLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DashLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DashLayout.vue?vue&type=template&id=ba61fff2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_ba61fff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/appointment.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/appointment.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment.vue?vue&type=template&id=723e91b8&scoped=true& */ "./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true&");
/* harmony import */ var _appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.vue?vue&type=script&lang=js& */ "./resources/js/components/appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& */ "./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "723e91b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/appointment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/appointment.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/appointment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./appointment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=style&index=0&id=723e91b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_style_index_0_id_723e91b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./appointment.vue?vue&type=template&id=723e91b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/appointment.vue?vue&type=template&id=723e91b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_vue_vue_type_template_id_723e91b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/date.vue":
/*!******************************************!*\
  !*** ./resources/js/components/date.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.vue?vue&type=template&id=0aa07b79&scoped=true& */ "./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true&");
/* harmony import */ var _date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.vue?vue&type=script&lang=js& */ "./resources/js/components/date.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0aa07b79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/date.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/date.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/date.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./date.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/date.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_date_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./date.vue?vue&type=template&id=0aa07b79&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/date.vue?vue&type=template&id=0aa07b79&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_date_vue_vue_type_template_id_0aa07b79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);