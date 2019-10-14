(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "service",
  components: {
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        title: null,
        type: null,
        price: null,
        tags: [],
        excerpt: null,
        content: null
      },
      selectedImage: null,
      featuredImg: null,
      hasMedia: false,
      hasMeta: false,
      postContext: null,
      options: [],
      value: [],
      list: [],
      loading: false,
      postOfInterest: null,
      okay: false
    };
  },
  props: ['postId'],
  methods: {
    makeSubmit: function makeSubmit() {
      var _this = this;

      var outgoingData = _objectSpread({}, this.form, {
        featuredImage: this.selectedImage,
        token: this.jwttoken,
        hasMedia: this.hasMedia,
        hasMeta: this.hasMeta,
        category: [4]
      });

      outgoingData.postContent = {
        title: outgoingData.title,
        excerpt: outgoingData.excerpt,
        content: outgoingData.content,
        tags: outgoingData.tags,
        category: outgoingData.category
      };
      delete outgoingData.title;
      delete outgoingData.excerpt;
      delete outgoingData.content;
      delete outgoingData.tags;
      delete outgoingData.category;
      outgoingData.metaObj = [{
        "field_name": "price",
        "value": outgoingData.price
      }, {
        "field_name": "serviceType",
        "value": outgoingData.type
      }];
      outgoingData.mediaObj = {
        "featuredImage": outgoingData.featuredImage,
        "details": {
          "title": "body sculpt service",
          "alt_text": "body sculpt service alt",
          "caption": "body sculpt service caption",
          "description": "".concat(outgoingData.type)
        }
      };
      delete outgoingData.price;
      delete outgoingData.type;
      delete outgoingData.featuredImage;

      if (typeof this.postId !== 'undefined') {
        outgoingData.id = this.postId;
        this.$store.dispatch('editPublications', outgoingData).then(function (result) {
          console.log(result);

          _this.$store.commit('setComplete', true);

          _this.okay = true;
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        console.log("New Service Data", outgoingData);
        this.$store.dispatch('createPublications', outgoingData).then(function (result) {
          _this.$store.commit('setComplete', true);

          _this.okay = true;
          console.log(result);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    onImageAdd: function onImageAdd(event) {
      this.selectedImage = event.target.files[0];
      this.hasMedia = true;
    },
    remoteMethod: function remoteMethod(query) {
      var _this2 = this;

      if (query !== '') {
        this.loading = true;
        setTimeout(function () {
          _this2.loading = false;
          _this2.options = _this2.list.filter(function (item) {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    doDataBinding: function doDataBinding() {
      var _this3 = this;

      _.filter(this.allServices, function (service) {
        if (service.id === _this3.postId) {
          _this3.postOfInterest = service;
        }
      });

      this.postContext = this.postOfInterest.id;
      this.form.title = this.postOfInterest.title.rendered;
      this.form.type = this.postOfInterest['metadata']['serviceType'] !== undefined ? this.postOfInterest['metadata']['serviceType'][0] : '';
      this.form.price = this.postOfInterest['metadata']['price'] !== undefined ? this.postOfInterest['metadata']['price'][0] : '';
      this.form.excerpt = this.postOfInterest.excerpt.rendered;
      this.form.content = this.postOfInterest.content.rendered;
      this.featuredImg = this.postOfInterest['_embedded']['wp:featuredmedia'] !== undefined ? this.postOfInterest['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'] : '';
    },
    genTags: function genTags() {
      this.list = this.allTags.map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      this.hasMeta = true;
    }
  },
  mounted: function mounted() {
    if (typeof this.postId !== 'undefined') {
      this.doDataBinding();
    }

    this.genTags();
    console.log(this.post);
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    jwttoken: function jwttoken(state) {
      return state.cmsSec['token'];
    },
    allServices: function allServices(state) {
      return state.services;
    },
    allTags: function allTags(state) {
      return state.tags;
    },
    allCategories: function allCategories(state) {
      return state.categories;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Services.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Services.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DashLayout.vue */ "./resources/js/components/DashLayout.vue");
/* harmony import */ var _components_service_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/service.vue */ "./resources/js/components/service.vue");
/* harmony import */ var jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jw-vue-pagination */ "./node_modules/jw-vue-pagination/lib/JwPagination.js");
/* harmony import */ var jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Services",
  components: {
    'dash-layout': _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'service': _components_service_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'jw-pagination': jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      drawer: false,
      direction: 'rtl',
      drawer2: false,
      practices: null,
      currentPage: 0,
      totalPages: null,
      chunks: null,
      activeChunk: [],
      pageSize: 5,
      postId: null,
      search: ''
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    serviceTypes: function serviceTypes(state) {
      return state.services;
    },
    jwttoken: function jwttoken(state) {
      return state.cmsSec['token'];
    },
    activeTab: function activeTab() {
      return this.activeChunk.filter();
    },
    closeRes: function closeRes(state) {
      return this.doClose(state.complete);
    }
  }),
  beforeMount: function beforeMount() {
    console.log("services component loaded");
    this.setServiceTypes();
  },
  methods: {
    handleAdd: function handleAdd() {
      this.drawer = true;
    },
    doClose: function doClose() {
      return this.handleClose;
    },
    handleClose: function handleClose(done) {
      done();
    },
    handleEdit: function handleEdit(id) {
      this.drawer2 = true;
      this.postId = id;
    },
    handleDelete: function handleDelete(id) {
      this.$store.dispatch('deletePublications', {
        id: id,
        token: this.jwttoken
      }).then(function (results) {
        console.log('deleted', results);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.activeChunk = pageOfItems;
      this.currentPage += 1;
    },
    mineTag: function mineTag(service) {
      var service_tag = [];
      service['_embedded']['wp:term'].filter(function (taxonomy) {
        taxonomy.filter(function (term) {
          if (term.taxonomy === "post_tag") {
            service_tag.push(term.name);
          }
        });
      });
      return service_tag;
    },
    mineServiceType: function mineServiceType(service) {
      if (service['metadata']['serviceType'] !== undefined) {
        return service['metadata']['serviceType'][0];
      }

      return '';
    },
    minePrice: function minePrice(service) {
      if (service['metadata']['price'] !== undefined) {
        return service['metadata']['price'][0];
      }

      return '';
    },
    mineServices: function mineServices() {
      var _this = this;

      var newServices = [];
      this.serviceTypes.filter(function (service) {
        var moded = _objectSpread({}, service, {
          tag: _this.mineTag(service),
          serviceType: _this.mineServiceType(service),
          price: _this.minePrice(service)
        });

        newServices.push(moded);
      });
      return newServices;
    },
    setServiceTypes: function setServiceTypes() {
      this.practices = this.mineServices();
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      !_vm.okay
        ? _c(
            "form",
            {
              attrs: { model: _vm.form },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.makeSubmit($event)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "container-fluid",
                  staticStyle: { "margin-top": "50px" }
                },
                [
                  _c("div", { staticClass: "row mb-3" }, [
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "card mb-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "card-body text-center shadow",
                            staticStyle: { height: "330px" }
                          },
                          [
                            _c("div", { staticClass: "mb-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _vm._m(0),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: { type: "file" },
                                  on: { change: _vm.onImageAdd }
                                }),
                                _c("br"),
                                _c("br"),
                                _vm._v(" "),
                                _vm.featuredImg !== null
                                  ? _c(
                                      "span",
                                      [
                                        _c("el-image", {
                                          attrs: {
                                            src: _vm.featuredImg,
                                            fit: "cover"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-8" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "card shadow mb-3" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "form-row" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.title,
                                          expression: "form.title"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "title",
                                        type: "text",
                                        name: "title",
                                        "aria-required": "true"
                                      },
                                      domProps: { value: _vm.form.title },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "title",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-row" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.type,
                                          expression: "form.type"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "type",
                                        type: "text",
                                        name: "type",
                                        "aria-required": "true"
                                      },
                                      domProps: { value: _vm.form.type },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "type",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.price,
                                          expression: "form.price"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "price",
                                        type: "text",
                                        name: "price",
                                        "aria-required": "true"
                                      },
                                      domProps: { value: _vm.form.price },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "price",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-row" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _vm._m(5),
                                      _vm._v(" "),
                                      _c(
                                        "el-select",
                                        {
                                          attrs: {
                                            multiple: "",
                                            filterable: "",
                                            remote: "",
                                            "reserve-keyword": "",
                                            placeholder:
                                              "Please enter a keyword",
                                            "remote-method": _vm.remoteMethod,
                                            loading: _vm.loading
                                          },
                                          model: {
                                            value: _vm.form.tags,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "tags", $$v)
                                            },
                                            expression: "form.tags"
                                          }
                                        },
                                        _vm._l(_vm.options, function(item) {
                                          return _c("el-option", {
                                            key: item.value,
                                            attrs: {
                                              label: item.label,
                                              value: item.value
                                            }
                                          })
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card shadow mb-5" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6 col-xl-12" },
                          [
                            _c("editor", {
                              attrs: {
                                "api-key":
                                  "mtb1w2le4xo5fgte5ixt2mdz1ib9e6aoxqqdbqsstfo1yuz0",
                                init: { plugins: ["link", "code"] }
                              },
                              model: {
                                value: _vm.form.excerpt,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "excerpt", $$v)
                                },
                                expression: "form.excerpt"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card shadow mb-5" }, [
                    _vm._m(7),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6 col-xl-12" },
                          [
                            _c("editor", {
                              attrs: {
                                "api-key":
                                  "mtb1w2le4xo5fgte5ixt2mdz1ib9e6aoxqqdbqsstfo1yuz0",
                                init: { plugins: ["link", "code"] }
                              },
                              model: {
                                value: _vm.form.content,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "content", $$v)
                                },
                                expression: "form.content"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(8)
                      ])
                    ])
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Featured Image")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("p", { staticClass: "text-primary m-0 font-weight-bold" }, [
        _vm._v("Service Details")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Title")]), _c("br")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Type")]), _c("br")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Price")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticStyle: { display: "block" } }, [
      _c("strong", [_vm._v("Tags")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("p", { staticClass: "text-primary m-0 font-weight-bold" }, [
        _vm._v("Excerpt")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("p", { staticClass: "text-primary m-0 font-weight-bold" }, [
        _vm._v("Description")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "submit-btn col-md-6 col-xl-12" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary btn-sm", attrs: { type: "submit" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "services" },
    [
      _c("dash-layout"),
      _vm._v(" "),
      _c("div", { staticClass: "content-view" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "h3",
            {
              staticClass: "text-dark mb-4",
              staticStyle: { "margin-bottom": "10px !important" }
            },
            [
              _vm._v("Services   |  "),
              _c("el-button", {
                attrs: {
                  size: "small",
                  type: "primary",
                  icon: "el-icon-plus",
                  circle: ""
                },
                on: { click: _vm.handleAdd }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card shadow" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "div",
                    {
                      staticClass: "text-md-right dataTables_filter",
                      attrs: { id: "dataTable_filter" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search,
                              expression: "search"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "search",
                            "aria-controls": "dataTable",
                            placeholder: "Search"
                          },
                          domProps: { value: _vm.search },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "table-responsive table mt-2",
                  attrs: { role: "grid", "aria-describedby": "dataTable_info" }
                },
                [
                  _c(
                    "table",
                    {
                      staticClass: "table dataTable my-0",
                      attrs: { id: "dataTable" }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.activeChunk, function(practice) {
                          return _c("tr", [
                            _c("td", [
                              _c("span", [
                                _vm._v(
                                  _vm._s(practice.serviceType.toLowerCase()) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(practice.title.rendered))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(practice.modified))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(practice.tag, function(category) {
                                return _c("span", [
                                  _vm._v(_vm._s(category) + ", "),
                                  _c("br")
                                ])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(practice.metadata.price, function(cost) {
                                return _c("span", [_vm._v(_vm._s(cost) + " ")])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("el-button", {
                                  attrs: {
                                    size: "small",
                                    type: "primary",
                                    icon: "el-icon-edit",
                                    circle: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.handleEdit(practice.id)
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("el-button", {
                                  staticClass: "el-icon-delete",
                                  attrs: { size: "small", circle: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.handleDelete(practice.id)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _vm._m(2)
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6 align-self-center" }, [
                  _c(
                    "p",
                    {
                      staticClass: "dataTables_info",
                      attrs: {
                        id: "dataTable_info",
                        role: "status",
                        "aria-live": "polite"
                      }
                    },
                    [
                      _vm._v(
                        "Showing " +
                          _vm._s(_vm.currentPage) +
                          " to 5 of " +
                          _vm._s(_vm.practices.length)
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c(
                    "nav",
                    {
                      staticClass:
                        "d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers"
                    },
                    [
                      _c("jw-pagination", {
                        attrs: { pageSize: _vm.pageSize, items: _vm.practices },
                        on: { changePage: _vm.onChangePage }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Add Services",
            size: "100%",
            "destroy-on-close": true,
            visible: _vm.drawer,
            direction: _vm.direction,
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [_c("service")],
        1
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Edit Service",
            size: "100%",
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
        [_c("service", { attrs: { postId: _vm.postId } })],
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
    return _c("div", { staticClass: "col-md-6 text-nowrap" }, [
      _c(
        "div",
        {
          staticClass: "dataTables_length",
          attrs: { id: "dataTable_length", "aria-controls": "dataTable" }
        },
        [
          _c("label", [
            _vm._v("Show \n                                    "),
            _c(
              "select",
              {
                staticClass:
                  "form-control form-control-sm custom-select custom-select-sm"
              },
              [
                _c("option", { attrs: { value: "10", selected: "" } }, [
                  _vm._v("10")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
              ]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_c("strong", [_vm._v("Service Name")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Title")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Date Updated")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Category")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Price")])]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("td", [_c("strong", [_vm._v("Service Name")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Title")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Date Updated")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Category")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Price")])]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td")
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

/***/ "./resources/js/components/service.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/service.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.vue?vue&type=template&id=0122e5ba&scoped=true& */ "./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true&");
/* harmony import */ var _service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.vue?vue&type=script&lang=js& */ "./resources/js/components/service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0122e5ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/service.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/service.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./service.vue?vue&type=template&id=0122e5ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service.vue?vue&type=template&id=0122e5ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_template_id_0122e5ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Services.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Services.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=6199b57d&scoped=true& */ "./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/views/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6199b57d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Services.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Services.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=6199b57d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Services.vue?vue&type=template&id=6199b57d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_6199b57d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);