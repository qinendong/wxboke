<template xlang="wxml">
	<view class="content">
		<button @tap="addPhoto">添加图片</button>
		<!-- <cpimg ref="cpimg" @ok="cpimgOk" @err="cpimgErr" size="500" maxWidth="300" ql="0.5" type="base64"></cpimg> -->
		<cpimg ref="cpimg" @result="cpimgOk" @err="cpimgErr" :size="500" :maxWidth="1000" :ql="0.9" type="base64"></cpimg>
		<view class="img">
			<image :src="src" class="showimg" mode="aspectFit"/>
		</view>
		<view class="imgPath">
			
			<!-- 文件路径/base64<view>{{src}}</view> -->
			<view class="result"  v-for=" item in data.result">
				<navigator :url="item.baike_info.baike_url">百度百科</navigator>
				<view class="result_title"><text>名称:{{item.name}}</text><text style="float: right;">可信度{{num_j(item.score)}}</text></view>
				<view class="result_description">{{item.baike_info.description}}</view>
				<view><image :src="item.baike_info.image_url" mode="" style="width: 100%;"></image></view>
			</view>
		</view>
	</view>
</template>
<script>
	import cpimg from "@/components/cpimg.vue"
	export default {
		data() {
			return {
				src:'',
				data:Array
			};
		},
		methods: {
			// 添加图片
			num_j(num){
				return num.toFixed(2)*100 + "%"
			},
			addPhoto() {
				let that = this
				that.$refs.cpimg._changImg()
			},
			cpimgOk(file) {
				let that = this
				that.src = file
				console.log(file)
				uni.request({
					url: 'https://www.qinendong.com/api/image_recognition/Vehicle_type_recognition', //仅为示例，并非真实接口地址。
						data: {
							id: file.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","")
						},
						method:"POST",
					header: {
						'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success: (res) => {
									console.log(res.data.data);	
									this.data =  JSON.parse(res.data.data)
									console.log(this.data)
						}
					});
				
			},
			cpimgErr(e) {
				console.log(e)
			},
		},
		components: {
			cpimg
		},
	}
</script>

<style>
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.showimg{
		margin: 20upx 0;
		width: 750upx;
	}
	.imgPath{
		
		word-break: break-all;
	}
	.result{
		width: 94%;
		margin: 20upx auto;
		border-bottom: 1px solid #CCCCCC;
		
	}
	.result_title{
		font-size: 1.3em;color: #333333;
	}
	.result_description{
		color: #999999;
		margin: 10upx 0;
	}
</style>
