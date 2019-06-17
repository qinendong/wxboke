<template>
<view>
		<view class="markdown_view">
		<img :src="items[0].image ? items[0].image :''" alt="" width="100%;">
		<div v-html="html_r()" class="markdown"></div>
<!-- 	<div>	  
    <u-parse :content="html" @preview="preview" @navigate="navigate" ></u-parse>
  </div> -->
 </view>
	<view>
		<!-- {{items[0].markdown}} -->
		<!-- {{html.replace(/\pre/g, "div")}} -->
		<loding></loding>
	</view>
</view>
</template>

<script>

	
let marked = require('marked');
let hljs = require('highlight.js');
import 'highlight.js/styles/dark.css';    
 marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
              if (lang && hljs.getLanguage(lang)) {    
                return hljs.highlight(lang, code, true).value;
              } else {
                return hljs.highlightAuto(code).value;
              }
          }

  });
	
	export default {
 data(){
	 return{
		 id:"",
		 items:"",
		 html:"",
		 article: '<div>我是HTML代码</div>'
	 }
 },

methods:{
	html_r(){
		return this.html.replace(/\pre/g, "div").replace(/\<div>/g, "<div class= 'pre'>")
	},
	 preview(src, e) {
      // do something
    },
    navigate(href, e) {
      // do something
    }
},
 onLoad:function(options){
	 this.$loading(); 
  console.log(options);
  this.id = options.id
  uni.request({
      url: 'https://www.qinendong.com/api/post_id', //仅为示例，并非真实接口地址。
      method:"POST",
	  data: {
		  id:options.id,
      },
      header: {
          'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
      },
      success: (res) => {
          //console.log(res.data);
          this.items = res.data.rows;
		  this.html =marked(this.items[0].markdown, { sanitize: true })
		  //console.log(this.html.replace(/\pre/g, "div").replace(/\<div>/g, "<div class= 'pre'>"))
		  this.$loading(false); 
      }
  });
 }
}
</script>

<style>

.wxParse .pre{
	background:#2b303b;

}
.wxParse view{
	display: inline-block;
}
.pre{
	background:#2b303b;
	overflow: auto;
    color: #cccccc;
    padding: 20upx;
	margin: 20upx 0;
}
.pre .hljs-attr {
    color: #8fa1b3;
}
.markdown{font-size: 1.3em;line-height: 1.8em;}
.markdown_view{width: 94%;margin: 0 auto;}
image{
	width: 100%;
}
</style>
