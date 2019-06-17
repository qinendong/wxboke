<template>
<view>
		<view class="markdown_view">
		<view class="markdown_view_header">
			<view class="content_body_title">
				<text>{{items.Title[0]}}</text>
			</view>
			<view style="width: 100%;height:40upx;">
				<text style="float: left;">{{items.SubmitDate[0]}}</text>
				<text style="float: right;">{{items.SourceName[0]}}</text>
			</view>
		</view>
		<div v-html="html_r(items.Content[0])" class="markdown"></div>
	</view>
	<view>
		<loding></loding>
	</view>
</view>
</template>

<script>
	export default{
		data(){
			return{
				items:""
			}
		},
		 onLoad:function(options){
			 this.$loading(); 
		 uni.request({
		    url: 'https://www.qinendong.com/api/cnblogs/content', 
		    method:"POST",
			  data: {
				  id:options.id,
		    },
		    header: {
		        'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
		       console.log(res.data.json)
				  this.items = JSON.parse(res.data.json).NewsBody
				  this.$loading(false); 
				 console.log(this.items) 
		    }
		});
		
		},
		methods:{
			html_r(str){
				//console.log(str.replace(/\<img/g, "<img class='content_body_img'").replace(/\<p>/g, "<p class='content_body_p'>"))
				return str.replace(/\<img/g, "<img class='content_body_img'").replace(/\<p>/g, "<p class='content_body_p'>")
			}
		}
	}
	
	 
</script>

<style>
	.markdown{font-size: 1.3em;line-height: 1.8em;}
	.markdown_view{width: 94%;margin: 0 auto;}
	.content_body_img{
		width: 100%;
		margin: 8px 0;
	}
	.content_body_p{
		margin: 8px 0;
	}
	.content_body_title{
		font-size: 1.5em;font-weight: 700;margin-bottom: 20px;margin-top: 5px;
	}
	.markdown_view_header{
		border-bottom: 1px solid #cccccc;
	}
</style>
