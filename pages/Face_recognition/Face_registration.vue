<template xlang="wxml">
	<view class="content">
		<button @tap="addPhoto">添加图片</button>
		<view class="uni-title">此功能采用人像分离，人体关键点识别</view>
		<view class="uni-title">选择尺寸</view>
            <radio-group @change="radioChange" class="radio-group">
                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
                    <view>
                        <radio :value="item.value" :checked="index === current" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </radio-group>
			<view class="uni-title">选择底色</view>
			<radio-group @change="radioChange1" class="radio-group">
			    <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items1" :key="item.value">
			        <view>
			            <radio :value="item.value" :checked="index === current1" />
			        </view>
			        <view>{{item.name}}</view>
			    </label>
			</radio-group>
        
		<!-- <cpimg ref="cpimg" @ok="cpimgOk" @err="cpimgErr" size="500" maxWidth="300" ql="0.5" type="base64"></cpimg> -->
		<cpimg ref="cpimg" @result="cpimgOk" @err="cpimgErr" @result_path="cpimgPath"  @result_wh="cpimgWH"  :size="500" :maxWidth="1000" :ql="0.9" type="base64"></cpimg>
		<view class="img">
			<image v-show="src" :src="src" class="showimg" mode="aspectFit"/>
			<image v-show="!src" src="../../static/timg.jpg" class="showimg" mode="aspectFit"/>
		</view>
		<view class="imgPath">
			
			<image v-show="src" :src="data.data" class="showimg" mode="aspectFit"/>
			<image v-show="!src" src="../../static/timg1.png" class="showimg" mode="aspectFit"/>
			<button type="primary" @click="baocun">保存</button>
		</view>
	</view>
</template>
<script>
	import cpimg from "@/components/cpimg.vue"
	import { pathToBase64, base64ToPath } from '@/node_modules/image-tools/index.js' 
	export default {
		data() {
			return {
				src:'',
				data:Array,
				w:"",
				h:"",
				path:"",
				items: [{
                    value: 'one',
                    name: '一寸'
                },
                {
                    value: 'two',
                    name: '二寸',
                }
				],
			    items1: [{
                    value: 'red',
                    name: '红底'
                },
                {
                    value: 'blue',
                    name: '蓝底',
                },
                {
                    value: 'white',
                    name: '白底',
                }
				],
            current: 0,
			current1:0,
			inch:"one",
			bgcolor:"red"
			};
		},
		methods: {
			radioChange(evt) {
				//选择尺寸
			console.log(evt.detail.value)
			this.inch = evt.detail.value
        },
		radioChange1(evt) {
			//选择底色
			console.log(evt.detail.value)
			this.bgcolor = evt.detail.value
		},
			baocun(){
				uni.showLoading({
					title: '保存中'
				});
				base64ToPath(this.data.data)  
				  .then(path => {  
					console.log(path)
					  uni.saveImageToPhotosAlbum({
						filePath: path,
						success: function () {
							console.log('save success');
							uni.hideLoading();
						
						}
					});
				  })  
				  .catch(error => {  
					console.error(error)  
				  })  
			},
			cpimgWH(w,h){
				console.log("阿斯顿撒"+w);
				console.log("阿斯顿撒"+h);
				this.w= w
				this.h= h
			},
			cpimgPath(path){
				console.log('tu片'+path)
				this.path = path
			},
			// 添加图片
			addPhoto() {
				let that = this
				that.$refs.cpimg._changImg()
			},
			cpimgOk(file) {
				uni.showLoading({
					title: '加载中'
				});
				let that = this
				that.src = file
				//console.log(file)
				uni.request({
					url: 'https://www.qinendong.com/api/Face_recognition/Portrait_segmentation', //仅为示例，并非真实接口地址。
						data: {
							id: file.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,",""),
							width:this.w,
							height:this.h,
							inch:this.inch,
							bgcolor:this.bgcolor
						},
						method:"POST",
					header: {
						'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success: (res) => {
									//console.log(res.data.data);	
									 //this.data =  JSON.parse(res.data.data)
									console.log(res.data)
									this.data = res.data
									uni.hideLoading();
									//console.log(this.data.foreground) 
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
		computed:{
			
		},
		
	}
</script>

<style lang="scss">
	.radio-group{
		display: flex;
		.uni-list-cell{
			width: 200upx;
			display: flex;
			view{
				display: flex;
			}
		}
	}
	
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
