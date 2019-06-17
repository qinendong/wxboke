(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cpimg"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  name: "cpimg",
  props: {
    maxWidth: {
      type: Number,
      default: 750 },

    minWidth: {
      type: Number,
      default: 0 },

    type: {
      type: String,
      default: 'url' },

    ql: {
      type: Number,
      default: 0.92 },

    src: {
      type: String,
      default: '' },

    size: {
      type: Number,
      default: 500 } },


  data: function data() {
    return {
      cWidth: 750,
      cHeight: 750 };

  },
  onUnload: function onUnload() {
  },
  methods: {
    // 选择照片
    _changImg: function _changImg() {
      var that = this;
      if (that.src == '') {
        uni.chooseImage({
          count: 1, //默认9
          // sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
          sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
          success: function success(res) {
            uni.showLoading({
              title: "处理中",
              mask: true });

            that._cpImg(res.tempFilePaths[0]);
          },
          fail: function fail(e) {
            that._err(e);
            // console.log(JSON.stringify(res.tempFilePaths));
          } });

      } else {
        _cpImg(that.src);
      }
    },
    // 压缩图片
    _cpImg: function _cpImg(resPath) {
      var that = this;
      var imgFile = resPath;
      var sysInfo = uni.getSystemInfoSync();
      // 获取图片信息，
      uni.getImageInfo({
        src: imgFile,
        success: function success(image) {
          console.log(image.width);
          console.log(image.height);

          // 如果图片的大小大于设定值才压缩

          uni.getFileInfo({
            filePath: imgFile,
            success: function success(res) {
              _img(image, res.size);
            },
            fail: function fail(e) {
              that._err(e);
            } });






        },
        fail: function fail(e) {
          that._err(e);
        } });

      // 处理图片
      function _img(image, size) {
        var oW = image.width,oH = image.height,scaleWidth = 1,scaleHeight = 1;
        if (size / 1024 >= that.size || image.width >= that.maxWidth) {
          // 控制上传图片的宽高
          if (image.width >= image.height && image.width >= that.maxWidth) {
            image.height = that.maxWidth * image.height / image.width;
            image.width = that.maxWidth;
          } else if (image.width < image.height && image.height >= that.maxWidth) {
            image.width = that.maxWidth * image.width / image.height;
            image.height = that.maxWidth;
          }
          scaleWidth = image.width / oW;
          scaleHeight = image.height / oH;
        }
        var ctx = uni.createCanvasContext('_myCanvas', that);
        that.cWidth = image.width;
        that.cHeight = image.height;

        //console.log(that.cWidth);
        //console.log(that.cHeight);
        that._result_wh(that.cWidth, that.cHeight);

        // 旋转图片
        switch (image.orientation) {
          case 'right': // 旋转90度
            that.cWidth = image.height;
            that.cHeight = image.width;
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(imgFile, 0, -image.height, oW * scaleWidth, oH * scaleHeight);
            break;
          case 'down': // 旋转180度
            ctx.rotate(Math.PI);
            ctx.drawImage(imgFile, -image.width, -image.height, oW * scaleWidth, oH * scaleHeight);
            break;
          case 'left': // 旋转-90度
            that.cWidth = image.height;
            that.cHeight = image.width;
            ctx.rotate(3 * Math.PI / 2);
            ctx.drawImage(imgFile, -image.width, 0, oW * scaleWidth, oH * scaleHeight);
            break;
          case 'up':
            ctx.drawImage(imgFile, 0, 0, oW * scaleWidth, oH * scaleHeight);
            break;
          default:
            ctx.drawImage(imgFile, 0, 0, oW * scaleWidth, oH * scaleHeight);
            break;}

        ctx.draw(false, function () {
          var time = 0;




          time = 500;

          setTimeout(function () {
            uni.canvasToTempFilePath({
              width: Number(that.cWidth),
              height: Number(that.cHeight),
              destWidth: Number(that.cWidth),
              destHeight: Number(that.cHeight),
              canvasId: '_myCanvas',
              fileType: 'jpg',
              quality: Number(that.ql),
              success: function success(res) {
                console.log("图片" + res.tempFilePath);
                that._result_path(res.tempFilePath);
                if (that.type == 'base64') {
                  var img = '';
                  // let platform = uni.getSystemInfoSync().platform
                  // if (platform == 'ios') {
                  // 	// 兼容处理：ios获取的图片上下颠倒
                  // 	img = that._reverseImgData(res)
                  // }

                  img = 'data:image/jpeg;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePath, "base64");
                  that._result(img);
























                } else {
                  that._result(res.tempFilePath);
                }
              },
              fail: function fail(e) {
                that._err(e);
              } },
            that);
          }, time);
        });
      }
    },
    // ios翻转图片
    _reverseImgData: function _reverseImgData(res) {
      var w = res.width;
      var h = res.height;
      var con = 0;
      for (var i = 0; i < h / 2; i++) {
        for (var j = 0; j < w * 4; j++) {
          con = res.data[i * w * 4 + j];
          res.data[i * w * 4 + j] = res.data[(h - i - 1) * w * 4 + j];
          res.data[(h - i - 1) * w * 4 + j] = con;
        }
      }
      return res;
    },
    // 返回图片数据
    _result: function _result(src) {
      uni.hideLoading();
      this.$emit("result", src);
    },
    _result_wh: function _result_wh(w, h) {
      uni.hideLoading();
      this.$emit("result_wh", w, h);
    },
    _result_path: function _result_path(path) {
      uni.hideLoading();
      this.$emit("result_path", path);
    },
    _err: function _err(src) {
      uni.hideLoading();
      this.$emit("err", src);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue":
/*!********************************************************!*\
  !*** E:/Desktop/uni-app/project1/components/cpimg.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue& */ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue&");
/* harmony import */ var _cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cpimg.vue?vue&type=script&lang=js& */ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpimg.vue?vue&type=style&index=0&lang=css& */ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/Desktop/uni-app/project1/components/cpimg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./cpimg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./cpimg.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue&":
/*!***************************************************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/components/cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue?vue&type=template&id=476320aa&xlang=wxml&minapp=mpvue&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cpimg_vue_vue_type_template_id_476320aa_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/cpimg.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cpimg-create-component',
    {
        'components/cpimg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('./node_modules/@dcloudio/uni-mp-weixin/dist/index.js')['createComponent'](__webpack_require__("E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue"))
        })
    },
    [['components/cpimg-create-component']]
]);                
