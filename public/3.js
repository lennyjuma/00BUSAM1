(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "profile",
  components: {
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        specialization: null,
        email: null,
        name: null,
        excerpt: null,
        content: null
      },
      selectedImage: null,
      selectedDoctor: null,
      featuredImg: null,
      postContext: null,
      postOfInterest: null
    };
  },
  props: ['postId'],
  methods: {
    makeSubmit: function makeSubmit() {
      var outgoingData = _objectSpread({}, this.form, {
        featuredImage: this.selectedImage
      });

      console.log(outgoingData);
    },
    onImageAdd: function onImageAdd(event) {
      this.selectedImage = event.target.files[0];
    },
    populatePostData: function populatePostData(post_id) {
      var _this = this;

      this.doctors.forEach(function (doctor) {
        if (doctor.id === post_id) {
          _this.selectedDoctor = doctor;
        }
      });
      console.log('Our Doctor Profile', this.selectedDoctor);
    },
    doDataBinding: function doDataBinding() {
      var _this2 = this;

      _.filter(this.doctors, function (doctor) {
        if (doctor.id === _this2.postId) {
          _this2.postOfInterest = doctor;
        }
      });

      this.postContext = this.postOfInterest.id;
      console.log(this.postOfInterest);
      this.form.name = this.postOfInterest.title.rendered;
      this.form.email = this.postOfInterest['metadata']['email'] !== undefined ? this.postOfInterest['metadata']['email'][0] : '';
      this.form.specialization = this.postOfInterest['metadata']['specialization'] !== undefined ? this.postOfInterest['metadata']['specialization'][0] : '';
      this.form.excerpt = this.postOfInterest.excerpt.rendered;
      this.form.content = this.postOfInterest.content.rendered;
      this.featuredImg = this.postOfInterest['_embedded']['wp:featuredmedia'] !== undefined ? this.postOfInterest['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium']['source_url'] : '';
    }
  },
  mounted: function mounted() {
    this.populatePostData(this.selectedPost);

    if (typeof this.postId !== 'undefined') {
      this.doDataBinding();
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    jwttoken: function jwttoken(state) {
      return state.cmsSec['token'];
    },
    selectedPost: function selectedPost(state) {
      return state.selectedPost;
    },
    doctors: function doctors(state) {
      return state.doctors;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Team.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Team.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DashLayout.vue */ "./resources/js/components/DashLayout.vue");
/* harmony import */ var _components_profile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/profile.vue */ "./resources/js/components/profile.vue");
/* harmony import */ var jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jw-vue-pagination */ "./node_modules/jw-vue-pagination/lib/JwPagination.js");
/* harmony import */ var jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Team',
  components: {
    'dash-layout': _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'profile': _components_profile_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'jw-pagination': jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      options: [{
        value: 'doctor',
        label: 'Doctor'
      }, {
        value: 'general',
        label: 'General'
      }],
      options2: [{
        value: 'specialization 1',
        label: 'SPEC 1'
      }, {
        value: 'specialization 2',
        label: 'SPEC 2'
      }],
      value: [],
      value2: [],
      drawer: false,
      drawer2: false,
      direction: 'rtl',
      pageSize: 5,
      activeChunk: [],
      currentPage: 0,
      postId: null
    };
  },
  methods: {
    handleAdd: function handleAdd() {
      this.drawer2 = true;
    },
    handleClose: function handleClose(done) {
      done();
    },
    handleEdit: function handleEdit(id) {
      this.drawer = true;
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
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
    doctors: function doctors(state) {
      return state.doctors;
    },
    activeTab: function activeTab() {
      return this.activeChunk.filter();
    }
  }),
  mounted: function mounted() {
    console.log("team component loaded");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile.vue?vue&type=template&id=7eab0eae&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile.vue?vue&type=template&id=7eab0eae& ***!
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
  return _c("div", [
    _c(
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
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-3" }, [
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "card mb-3" }, [
                _c("div", { staticClass: "card-body text-center shadow" }, [
                  _vm.featuredImg !== null
                    ? _c(
                        "span",
                        [
                          _c("el-image", {
                            staticClass: "rounded-circle",
                            staticStyle: { width: "200px", height: "200px" },
                            attrs: { src: _vm.featuredImg, fit: "cover" }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("input", {
                      attrs: { type: "file" },
                      on: { change: _vm.onImageAdd }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-8" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c("div", { staticClass: "card shadow mb-3" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.specialization,
                                  expression: "form.specialization"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "specializations",
                                type: "text",
                                placeholder: "user.name",
                                name: "username"
                              },
                              domProps: { value: _vm.form.specialization },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "specialization",
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
                            _vm._m(2),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.email,
                                  expression: "form.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "emails",
                                type: "email",
                                placeholder: "user@example.com",
                                name: "email"
                              },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
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
                                  value: _vm.form.name,
                                  expression: "form.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "names",
                                type: "text",
                                placeholder: "John Doe"
                              },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
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
            _vm._m(4),
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
            _vm._m(5),
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
                _vm._m(6)
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-3" }, [
      _c("p", { staticClass: "text-primary m-0 font-weight-bold" }, [
        _vm._v("Doctor Details")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Specialization")]), _c("br")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Email Address")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_c("strong", [_vm._v("Full Name")]), _c("br")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true& ***!
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
    { staticClass: "team" },
    [
      _c("dash-layout"),
      _vm._v(" "),
      _c("div", { staticClass: "content-view" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "h3",
            { staticClass: "text-dark mb-4" },
            [
              _vm._v("Team   |  "),
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
              _vm._m(0),
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
                        _vm._l(_vm.activeChunk, function(member) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(member.title.rendered))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(member.metadata.specialization, function(
                                spec
                              ) {
                                return _c("span", [_vm._v(_vm._s(spec) + " ")])
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(member.modified))]),
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
                                      return _vm.handleEdit(member.id)
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
                                      return _vm.handleDelete(member.id)
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
              _c(
                "div",
                { staticClass: "row", staticStyle: { display: "none" } },
                [
                  _vm._m(3),
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
                          attrs: { pageSize: _vm.pageSize, items: _vm.doctors },
                          on: { changePage: _vm.onChangePage }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Team Profile",
            size: "100%",
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
        [_c("profile", { attrs: { postId: _vm.postId } })],
        1
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "New Member",
            size: "100%",
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
        [_c("profile")],
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6 text-nowrap" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_length",
            attrs: { id: "dataTable_length", "aria-controls": "dataTable" }
          },
          [
            _c("label", [
              _vm._v("Show "),
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
                  _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                  _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                  _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
                ]
              )
            ])
          ]
        )
      ]),
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
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "search",
                  "aria-controls": "dataTable",
                  placeholder: "Search"
                }
              })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Specialization")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Updated")]),
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
        _c("td", [_c("strong", [_vm._v("Name")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Specialization")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Date Updated")])]),
        _vm._v(" "),
        _c("td"),
        _vm._v(" "),
        _c("td")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 align-self-center" }, [
      _c(
        "p",
        {
          staticClass: "dataTables_info",
          attrs: { id: "dataTable_info", role: "status", "aria-live": "polite" }
        },
        [_vm._v("Showing 1 to 10 of 27")]
      )
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

/***/ "./resources/js/components/profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=7eab0eae& */ "./resources/js/components/profile.vue?vue&type=template&id=7eab0eae&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/components/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile.vue?vue&type=template&id=7eab0eae&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/profile.vue?vue&type=template&id=7eab0eae& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=7eab0eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile.vue?vue&type=template&id=7eab0eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7eab0eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Team.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Team.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team.vue?vue&type=template&id=f0c0a908&scoped=true& */ "./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true&");
/* harmony import */ var _Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team.vue?vue&type=script&lang=js& */ "./resources/js/views/Team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0c0a908",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Team.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Team.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Team.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Team.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Team.vue?vue&type=template&id=f0c0a908&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Team.vue?vue&type=template&id=f0c0a908&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_f0c0a908_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);