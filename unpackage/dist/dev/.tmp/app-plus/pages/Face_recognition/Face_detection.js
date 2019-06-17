(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/Face_recognition/Face_detection"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































var _logo = _interopRequireDefault(__webpack_require__(/*! @/static/logo.png */ "E:\\Desktop\\uni-app\\project1\\static\\logo.png"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var cpimg = function cpimg() {return __webpack_require__.e(/*! import() | components/cpimg */ "components/cpimg").then(__webpack_require__.bind(null, /*! @/components/cpimg.vue */ "E:\\Desktop\\uni-app\\project1\\components\\cpimg.vue"));};var _default =
{
  data: function data() {
    return {
      src: '',
      data: Array,
      resdata: "",
      w: "",
      h: "",
      src1: "",
      path: "" };

  },
  methods: {

    filepath: function filepath() {var _this = this;
      console.log(this.h, " at pages\\Face_recognition\\Face_detection.vue:54");
      console.log(this.w, " at pages\\Face_recognition\\Face_detection.vue:55");
      uni.canvasToTempFilePath({
        width: this.w,
        height: this.h,
        canvasId: 'firstCanvas',
        success: function success(res) {
          console.log(res.tempFilePath, " at pages\\Face_recognition\\Face_detection.vue:61");
          _this.src1 = res.tempFilePath;
        } });

    },

    canvasImg: function canvasImg(src, data) {
      var that = this;
      var context = uni.createCanvasContext('firstCanvas');


      //console.log(src)
      //console.log(this.data.result.face_list[i].landmark[0].x)

      context.drawImage(this.path, 0, 0);
      for (var i = 0; i < this.data.result.face_list.length; i++) {
        console.log(i, " at pages\\Face_recognition\\Face_detection.vue:77");
        context.beginPath();

        context.setStrokeStyle("#ff0000");
        //脸型0-12
        context.moveTo(this.data.result.face_list[i].landmark72[0].x, this.data.result.face_list[i].landmark72[0].y);
        context.lineTo(this.data.result.face_list[i].landmark72[1].x, this.data.result.face_list[i].landmark72[1].y);
        context.lineTo(this.data.result.face_list[i].landmark72[2].x, this.data.result.face_list[i].landmark72[2].y);
        context.lineTo(this.data.result.face_list[i].landmark72[3].x, this.data.result.face_list[i].landmark72[3].y);
        context.lineTo(this.data.result.face_list[i].landmark72[4].x, this.data.result.face_list[i].landmark72[4].y);
        context.lineTo(this.data.result.face_list[i].landmark72[5].x, this.data.result.face_list[i].landmark72[5].y);
        context.lineTo(this.data.result.face_list[i].landmark72[6].x, this.data.result.face_list[i].landmark72[6].y);
        context.lineTo(this.data.result.face_list[i].landmark72[7].x, this.data.result.face_list[i].landmark72[7].y);
        context.lineTo(this.data.result.face_list[i].landmark72[8].x, this.data.result.face_list[i].landmark72[8].y);
        context.lineTo(this.data.result.face_list[i].landmark72[9].x, this.data.result.face_list[i].landmark72[9].y);
        context.lineTo(this.data.result.face_list[i].landmark72[10].x, this.data.result.face_list[i].landmark72[10].y);
        context.lineTo(this.data.result.face_list[i].landmark72[11].x, this.data.result.face_list[i].landmark72[11].y);
        context.lineTo(this.data.result.face_list[i].landmark72[12].x, this.data.result.face_list[i].landmark72[12].y);
        context.stroke(); //绘制已定义的路径
        //左眼13-21
        context.moveTo(this.data.result.face_list[i].landmark72[13].x, this.data.result.face_list[i].landmark72[13].y);
        context.lineTo(this.data.result.face_list[i].landmark72[14].x, this.data.result.face_list[i].landmark72[14].y);
        context.lineTo(this.data.result.face_list[i].landmark72[15].x, this.data.result.face_list[i].landmark72[15].y);
        context.lineTo(this.data.result.face_list[i].landmark72[16].x, this.data.result.face_list[i].landmark72[16].y);
        context.lineTo(this.data.result.face_list[i].landmark72[17].x, this.data.result.face_list[i].landmark72[17].y);
        context.lineTo(this.data.result.face_list[i].landmark72[18].x, this.data.result.face_list[i].landmark72[18].y);
        context.lineTo(this.data.result.face_list[i].landmark72[19].x, this.data.result.face_list[i].landmark72[19].y);
        context.lineTo(this.data.result.face_list[i].landmark72[20].x, this.data.result.face_list[i].landmark72[20].y);
        context.lineTo(this.data.result.face_list[i].landmark72[13].x, this.data.result.face_list[i].landmark72[13].y);
        context.lineTo(this.data.result.face_list[i].landmark72[21].x, this.data.result.face_list[i].landmark72[21].y);
        context.stroke(); //绘制已定义的路径
        //左眉22-29
        context.moveTo(this.data.result.face_list[i].landmark72[22].x, this.data.result.face_list[i].landmark72[22].y);
        context.lineTo(this.data.result.face_list[i].landmark72[23].x, this.data.result.face_list[i].landmark72[23].y);
        context.lineTo(this.data.result.face_list[i].landmark72[24].x, this.data.result.face_list[i].landmark72[24].y);
        context.lineTo(this.data.result.face_list[i].landmark72[25].x, this.data.result.face_list[i].landmark72[25].y);
        context.lineTo(this.data.result.face_list[i].landmark72[26].x, this.data.result.face_list[i].landmark72[26].y);
        context.lineTo(this.data.result.face_list[i].landmark72[27].x, this.data.result.face_list[i].landmark72[27].y);
        context.lineTo(this.data.result.face_list[i].landmark72[28].x, this.data.result.face_list[i].landmark72[28].y);
        context.lineTo(this.data.result.face_list[i].landmark72[29].x, this.data.result.face_list[i].landmark72[29].y);
        context.lineTo(this.data.result.face_list[i].landmark72[22].x, this.data.result.face_list[i].landmark72[22].y);
        context.stroke(); //绘制已定义的路径
        //右眼30-38
        context.moveTo(this.data.result.face_list[i].landmark72[30].x, this.data.result.face_list[i].landmark72[30].y);
        context.lineTo(this.data.result.face_list[i].landmark72[31].x, this.data.result.face_list[i].landmark72[31].y);
        context.lineTo(this.data.result.face_list[i].landmark72[32].x, this.data.result.face_list[i].landmark72[32].y);
        context.lineTo(this.data.result.face_list[i].landmark72[33].x, this.data.result.face_list[i].landmark72[33].y);
        context.lineTo(this.data.result.face_list[i].landmark72[34].x, this.data.result.face_list[i].landmark72[34].y);
        context.lineTo(this.data.result.face_list[i].landmark72[35].x, this.data.result.face_list[i].landmark72[35].y);
        context.lineTo(this.data.result.face_list[i].landmark72[36].x, this.data.result.face_list[i].landmark72[36].y);
        context.lineTo(this.data.result.face_list[i].landmark72[37].x, this.data.result.face_list[i].landmark72[37].y);
        context.lineTo(this.data.result.face_list[i].landmark72[30].x, this.data.result.face_list[i].landmark72[30].y);
        context.lineTo(this.data.result.face_list[i].landmark72[38].x, this.data.result.face_list[i].landmark72[38].y);
        context.stroke(); //绘制已定义的路径
        //右眉39-43
        context.moveTo(this.data.result.face_list[i].landmark72[39].x, this.data.result.face_list[i].landmark72[39].y);
        context.lineTo(this.data.result.face_list[i].landmark72[40].x, this.data.result.face_list[i].landmark72[40].y);
        context.lineTo(this.data.result.face_list[i].landmark72[41].x, this.data.result.face_list[i].landmark72[41].y);
        context.lineTo(this.data.result.face_list[i].landmark72[42].x, this.data.result.face_list[i].landmark72[42].y);
        context.lineTo(this.data.result.face_list[i].landmark72[43].x, this.data.result.face_list[i].landmark72[43].y);
        context.lineTo(this.data.result.face_list[i].landmark72[44].x, this.data.result.face_list[i].landmark72[44].y);
        context.lineTo(this.data.result.face_list[i].landmark72[45].x, this.data.result.face_list[i].landmark72[45].y);
        context.lineTo(this.data.result.face_list[i].landmark72[46].x, this.data.result.face_list[i].landmark72[46].y);
        context.lineTo(this.data.result.face_list[i].landmark72[39].x, this.data.result.face_list[i].landmark72[39].y);
        context.stroke(); //绘制已定义的路径
        //鼻子
        context.moveTo(this.data.result.face_list[i].landmark72[47].x, this.data.result.face_list[i].landmark72[47].y);
        context.lineTo(this.data.result.face_list[i].landmark72[48].x, this.data.result.face_list[i].landmark72[48].y);
        context.lineTo(this.data.result.face_list[i].landmark72[49].x, this.data.result.face_list[i].landmark72[49].y);
        context.lineTo(this.data.result.face_list[i].landmark72[50].x, this.data.result.face_list[i].landmark72[50].y);
        context.lineTo(this.data.result.face_list[i].landmark72[51].x, this.data.result.face_list[i].landmark72[51].y);
        context.lineTo(this.data.result.face_list[i].landmark72[52].x, this.data.result.face_list[i].landmark72[52].y);
        context.lineTo(this.data.result.face_list[i].landmark72[53].x, this.data.result.face_list[i].landmark72[53].y);
        context.lineTo(this.data.result.face_list[i].landmark72[54].x, this.data.result.face_list[i].landmark72[54].y);
        context.lineTo(this.data.result.face_list[i].landmark72[55].x, this.data.result.face_list[i].landmark72[55].y);
        context.lineTo(this.data.result.face_list[i].landmark72[56].x, this.data.result.face_list[i].landmark72[56].y);
        context.lineTo(this.data.result.face_list[i].landmark72[47].x, this.data.result.face_list[i].landmark72[47].y);
        context.lineTo(this.data.result.face_list[i].landmark72[57].x, this.data.result.face_list[i].landmark72[57].y);

        context.stroke(); //绘制已定义的路径
        //嘴
        context.moveTo(this.data.result.face_list[i].landmark72[58].x, this.data.result.face_list[i].landmark72[58].y);
        context.lineTo(this.data.result.face_list[i].landmark72[59].x, this.data.result.face_list[i].landmark72[59].y);
        context.lineTo(this.data.result.face_list[i].landmark72[60].x, this.data.result.face_list[i].landmark72[60].y);
        context.lineTo(this.data.result.face_list[i].landmark72[61].x, this.data.result.face_list[i].landmark72[61].y);
        context.lineTo(this.data.result.face_list[i].landmark72[62].x, this.data.result.face_list[i].landmark72[62].y);
        context.lineTo(this.data.result.face_list[i].landmark72[63].x, this.data.result.face_list[i].landmark72[63].y);
        context.lineTo(this.data.result.face_list[i].landmark72[64].x, this.data.result.face_list[i].landmark72[64].y);
        context.lineTo(this.data.result.face_list[i].landmark72[65].x, this.data.result.face_list[i].landmark72[65].y);
        context.lineTo(this.data.result.face_list[i].landmark72[58].x, this.data.result.face_list[i].landmark72[58].y);
        context.moveTo(this.data.result.face_list[i].landmark72[58].x, this.data.result.face_list[i].landmark72[58].y);
        context.lineTo(this.data.result.face_list[i].landmark72[66].x, this.data.result.face_list[i].landmark72[66].y);
        context.lineTo(this.data.result.face_list[i].landmark72[67].x, this.data.result.face_list[i].landmark72[67].y);
        context.lineTo(this.data.result.face_list[i].landmark72[68].x, this.data.result.face_list[i].landmark72[68].y);
        context.lineTo(this.data.result.face_list[i].landmark72[62].x, this.data.result.face_list[i].landmark72[62].y);
        context.lineTo(this.data.result.face_list[i].landmark72[69].x, this.data.result.face_list[i].landmark72[69].y);
        context.lineTo(this.data.result.face_list[i].landmark72[70].x, this.data.result.face_list[i].landmark72[70].y);
        context.lineTo(this.data.result.face_list[i].landmark72[71].x, this.data.result.face_list[i].landmark72[71].y);
        context.lineTo(this.data.result.face_list[i].landmark72[58].x, this.data.result.face_list[i].landmark72[58].y);



        context.stroke(); //绘制已定义的路径
        context.beginPath();
        context.translate(this.data.result.face_list[i].location.width / 2 + this.data.result.face_list[i].location.left, this.data.result.face_list[i].location.height / 2 + this.data.result.face_list[i].location.top);
        console.log(this.data.result.face_list[i].location.width / 2 + this.data.result.face_list[i].location.left, " at pages\\Face_recognition\\Face_detection.vue:182");
        console.log(this.data.result.face_list[i].location.height / 2 + this.data.result.face_list[i].location.top, " at pages\\Face_recognition\\Face_detection.vue:183");
        context.rotate(Math.PI / 180 * this.data.result.face_list[i].location.rotation);
        //console.log("度"+Math.PI/6)
        //console.log("度"+Math.PI)
        console.log(this.data.result.face_list[i].location.rotation, " at pages\\Face_recognition\\Face_detection.vue:187");
        context.setStrokeStyle("#00ff00");
        context.rect(-this.data.result.face_list[i].location.width / 2, -this.data.result.face_list[i].location.height / 2, this.data.result.face_list[i].location.width, this.data.result.face_list[i].location.height);
        //context.rect(this.data.result.face_list[i].location.left, this.data.result.face_list[i].location., this.data.result.face_list[i].location.width, this.data.result.face_list[i].location.height)

        context.stroke(); //绘制已定义的路径
        context.rotate(-(Math.PI / 180 * this.data.result.face_list[i].location.rotation));
        context.translate(-(this.data.result.face_list[i].location.width / 2 + this.data.result.face_list[i].location.left), -(this.data.result.face_list[i].location.height / 2 + this.data.result.face_list[i].location.top));

      }
      context.draw(false,
      function (e)
      {
        console.log('draw callback', " at pages\\Face_recognition\\Face_detection.vue:200");
        that.filepath();
      });

    },
    // 添加图片
    addPhoto: function addPhoto() {
      var that = this;
      that.$refs.cpimg._changImg();
    },
    cpimgWH: function cpimgWH(w, h) {
      console.log("阿斯顿撒" + w, " at pages\\Face_recognition\\Face_detection.vue:211");
      console.log("阿斯顿撒" + h, " at pages\\Face_recognition\\Face_detection.vue:212");
      this.w = w;
      this.h = h;
    },
    cpimgPath: function cpimgPath(path) {
      console.log('tu片' + path, " at pages\\Face_recognition\\Face_detection.vue:217");
      this.path = path;
    },
    cpimgOk: function cpimgOk(file) {var _this2 = this;
      var that = this;
      that.src = file;
      //console.log(file)


      uni.request({
        url: 'https://www.qinendong.com/api/Face_recognition/Face_detection', //仅为示例，并非真实接口地址。
        data: {
          id: file.replace("data:image/png;base64,", "").replace("data:image/jpeg;base64,", "") },

        method: "POST",
        header: {
          'Content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
        },
        success: function success(res) {
          //console.log(res.data.data);
          _this2.resdata = res.data.data;
          _this2.data = JSON.parse(res.data.data);
          console.log(_this2.data, " at pages\\Face_recognition\\Face_detection.vue:239");

          _this2.canvasImg(_this2.src, _this2.data);


        } });

      //console.log(this.src)
      //console.log(this.data)


    },
    cpimgErr: function cpimgErr(e) {
      console.log(e, " at pages\\Face_recognition\\Face_detection.vue:252");
    } },

  components: {
    cpimg: cpimg } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue":
/*!*****************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml& */ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml&");
/* harmony import */ var _Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Face_detection.vue?vue&type=script&lang=js& */ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Face_detection.vue?vue&type=style&index=0&lang=css& */ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./Face_detection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./Face_detection.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml&":
/*!***********************************************************************************************************************!*\
  !*** E:/Desktop/uni-app/project1/pages/Face_recognition/Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\Desktop\\uni-app\\project1\\pages\\Face_recognition\\Face_detection.vue?vue&type=template&id=a8735d16&xlang=wxml&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Face_detection_vue_vue_type_template_id_a8735d16_xlang_wxml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\Desktop\\uni-app\\project1\\main.js?{\"page\":\"pages%2FFace_recognition%2FFace_detection\"}","common/runtime","common/vendor"]]]);