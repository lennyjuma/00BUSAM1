(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "publication",
  components: {
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        title: null,
        excerpt: null,
        tags: [],
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
        category: [2]
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
          "title": "body sculpt offer",
          "alt_text": "body sculpt offer alt",
          "caption": "body sculpt offer caption",
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
        console.log("New publication Data", outgoingData);
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

      _.filter(this.allPublications, function (publication) {
        if (publication.id === _this3.postId) {
          _this3.postOfInterest = publication;
        }
      });

      this.postContent = this.postOfInterest.id;
      this.form.title = this.postOfInterest.title.rendered;
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
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    jwttoken: function jwttoken(state) {
      return state.cmsSec['token'];
    },
    allTags: function allTags(state) {
      return state.tags;
    },
    allPublications: function allPublications(state) {
      return state.publications;
    },
    allCategories: function allCategories(state) {
      return state.categories;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Publications.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Publications.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DashLayout.vue */ "./resources/js/components/DashLayout.vue");
/* harmony import */ var _components_publication_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/publication.vue */ "./resources/js/components/publication.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Publications',
  components: {
    'dash-layout': _components_DashLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'publication': _components_publication_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'jw-pagination': jw_vue_pagination__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      drawer: false,
      direction: 'rtl',
      drawer2: false,
      publications: null,
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
    publicationTypes: function publicationTypes(state) {
      return state.publications;
    },
    jwttoken: function jwttoken(state) {
      return state.cmsSec['token'];
    },
    activeTab: function activeTab() {
      return this.activeChunk.filter();
    }
  }),
  beforeMount: function beforeMount() {
    console.log("publications component loaded");
    this.setPublicationTypes();
  },
  mounted: function mounted() {},
  methods: {
    handleAdd: function handleAdd() {
      this.drawer = true;
    },
    handleClose: function handleClose(done) {
      done();
    },
    handleEdit: function handleEdit(id) {
      this.drawer2 = true;
      this.postId = id;
    },
    handleDelete: function handleDelete() {
      this.$store.dispatch('deletePublications', {
        id: id,
        token: this.jwttoken
      }).then(function (results) {
        console.log('Publications Deleted', results);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.activeChunk = pageOfItems;
      this.currentPage += 1;
    },
    mineTag: function mineTag(service) {
      var publication_tag = [];
      service['_embedded']['wp:term'].filter(function (taxonomy) {
        taxonomy.filter(function (term) {
          if (term.taxonomy === "post_tag") {
            publication_tag.push(term.name);
          }
        });
      });
      return publication_tag;
    },
    setPublicationTypes: function setPublicationTypes() {
      this.publications = this.minePublications();
    },
    minePublications: function minePublications() {
      var _this = this;

      var newPublications = [];
      this.publicationTypes.filter(function (service) {
        var moded = _objectSpread({}, service, {
          tag: _this.mineTag(service)
        });

        newPublications.push(moded);
      });
      return newPublications;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true& ***!
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
              _c("div", { staticClass: "container-fluid" }, [
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
                                      id: "specializations",
                                      type: "text",
                                      name: "username",
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
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c(
                                      "el-select",
                                      {
                                        attrs: {
                                          multiple: "",
                                          filterable: "",
                                          remote: "",
                                          "reserve-keyword": "",
                                          placeholder: "Please enter a keyword",
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
        _vm._v("Publication Details")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34& ***!
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
    { staticClass: "publications" },
    [
      _c("dash-layout"),
      _vm._v(" "),
      _c("div", { staticClass: "content-view" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "h3",
            { staticClass: "text-dark mb-4" },
            [
              _vm._v("Publications   |  "),
              _c("el-button", {
                attrs: {
                  size: "small",
                  type: "primary",
                  icon: "el-icon-plus",
                  circle: ""
                },
                on: {
                  click: function($event) {
                    _vm.drawer = true
                  }
                }
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
                        _vm._l(_vm.activeChunk, function(publication) {
                          return _c("tr", [
                            _c("td", [
                              _vm._v(
                                _vm._s(publication.title.rendered.toLowerCase())
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(publication.modified))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(publication.tag, function(tag) {
                                return _c("span", [
                                  _vm._v(_vm._s(tag) + ", "),
                                  _c("br")
                                ])
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
                                      return _vm.handleEdit(publication.id)
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
                                      return _vm.handleDelete(publication.id)
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
                          attrs: {
                            pageSize: _vm.pageSize,
                            items: _vm.publications
                          },
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
            title: "Add Articles",
            size: "100%",
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
        [_c("publication")],
        1
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "Edit Article",
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
        [_c("publication", { attrs: { postId: _vm.postId } })],
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
        _c("th", [_c("strong", [_vm._v("Title")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Date Updated")])]),
        _vm._v(" "),
        _c("th", [_c("strong", [_vm._v("Category")])]),
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
        _c("td", [_c("strong", [_vm._v("Title")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Date Updated")])]),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("Category")])]),
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

/***/ "./resources/js/components/publication.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/publication.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publication.vue?vue&type=template&id=7db6ef31&scoped=true& */ "./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true&");
/* harmony import */ var _publication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publication.vue?vue&type=script&lang=js& */ "./resources/js/components/publication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _publication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7db6ef31",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/publication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/publication.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/publication.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./publication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./publication.vue?vue&type=template&id=7db6ef31&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/publication.vue?vue&type=template&id=7db6ef31&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publication_vue_vue_type_template_id_7db6ef31_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Publications.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Publications.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Publications.vue?vue&type=template&id=a97d5e34& */ "./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34&");
/* harmony import */ var _Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publications.vue?vue&type=script&lang=js& */ "./resources/js/views/Publications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Publications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Publications.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Publications.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Publications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Publications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Publications.vue?vue&type=template&id=a97d5e34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Publications.vue?vue&type=template&id=a97d5e34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publications_vue_vue_type_template_id_a97d5e34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);