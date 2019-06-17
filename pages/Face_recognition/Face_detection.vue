<template xlang="wxml">
	<view class="content">
		<button @tap="addPhoto">添加图片</button>
		<!-- <cpimg ref="cpimg" @ok="cpimgOk" @err="cpimgErr" size="500" maxWidth="300" ql="0.5" type="base64"></cpimg> -->
		<cpimg ref="cpimg" @result="cpimgOk" @err="cpimgErr" @result_path="cpimgPath" @result_wh="cpimgWH" :size="500" :maxWidth="1000" :ql="0.9" type="base64"></cpimg>
		<view class="img">
			<image :src="src" class="showimg" mode="aspectFit"/>
			
		</view>
		<view class="imgPath">
			<!-- <view>{{resdata}}</view> -->
			<!-- 文件路径/base64<view>{{src}}</view> -->
			<!-- <view class="result"  v-for=" item in data.result">
				<navigator :url="item.baike_info.baike_url">百度百科</navigator>
				<view class="result_title"><text>名称:{{item.name}}</text><text style="float: right;"></text></view>
				<view class="result_description">{{item.baike_info.description}}</view>
				<view><image :src="item.baike_info.image_url" mode="" style="width: 100%;"></image></view>
			</view> -->
			 <view style="width:1000upx;height:1000px;position: fixed;top: -99999px;left: -9999px;">
				 <canvas style="width: 1000px;height:1000px;" canvas-id="firstCanvas"></canvas>
			 </view>
			 <view class="img">
				 <image :src="src1" class="showimg" mode="aspectFit"/>
			 </view>
			 <view>
				 <text>年龄{{data.result.face_list[0].age}}</text>
				 <text>颜值{{data.result.face_list[0].beauty}}</text>
				 <text>人脸置信度{{data.result.face_list[0].face_probability}}</text>
				 <text>性别{{data.result.face_list[0].gender.type}}</text>
				 
			 </view>
			 <button type="primary" @click="filepath">重新识别</button>
		</view>
	</view>
</template>
<script>
	import cpimg from "@/components/cpimg.vue"
	import aimg from "@/static/logo.png"
	export default {
		data() {
			return {
				src:'',
				data:Array,
				resdata:"",
				w:"",
				h:"",
				src1:"",
				path:""
			};
		},
		methods: {
			
			filepath(){
			console.log(this.h)
			console.log(this.w)
				uni.canvasToTempFilePath({
				 width: this.w,
				height: this.h,
				  canvasId: 'firstCanvas',
				  success:(res) => {
					console.log(res.tempFilePath)
					this.src1 = res.tempFilePath
				  } 
				})
			},
			
			canvasImg(src,data){
				let that = this
				 var context = uni.createCanvasContext('firstCanvas')
				
		
				//console.log(src)
				//console.log(this.data.result.face_list[i].landmark[0].x)
				
				context.drawImage(this.path, 0, 0)
				 for(let i=0;i<this.data.result.face_list.length;i++){
					console.log(i)
					context.beginPath();
					
					context.setStrokeStyle("#ff0000"); 
					//脸型0-12
					context.moveTo(this.data.result.face_list[i].landmark72[0].x,this.data.result.face_list[i].landmark72[0].y);
					context.lineTo(this.data.result.face_list[i].landmark72[1].x,this.data.result.face_list[i].landmark72[1].y);
					context.lineTo(this.data.result.face_list[i].landmark72[2].x,this.data.result.face_list[i].landmark72[2].y);
					context.lineTo(this.data.result.face_list[i].landmark72[3].x,this.data.result.face_list[i].landmark72[3].y);
					context.lineTo(this.data.result.face_list[i].landmark72[4].x,this.data.result.face_list[i].landmark72[4].y);
					context.lineTo(this.data.result.face_list[i].landmark72[5].x,this.data.result.face_list[i].landmark72[5].y);
					context.lineTo(this.data.result.face_list[i].landmark72[6].x,this.data.result.face_list[i].landmark72[6].y);
					context.lineTo(this.data.result.face_list[i].landmark72[7].x,this.data.result.face_list[i].landmark72[7].y);
					context.lineTo(this.data.result.face_list[i].landmark72[8].x,this.data.result.face_list[i].landmark72[8].y);
					context.lineTo(this.data.result.face_list[i].landmark72[9].x,this.data.result.face_list[i].landmark72[9].y);
					context.lineTo(this.data.result.face_list[i].landmark72[10].x,this.data.result.face_list[i].landmark72[10].y);
					context.lineTo(this.data.result.face_list[i].landmark72[11].x,this.data.result.face_list[i].landmark72[11].y);
					context.lineTo(this.data.result.face_list[i].landmark72[12].x,this.data.result.face_list[i].landmark72[12].y);
					context.stroke()//绘制已定义的路径
					//左眼13-21
					context.moveTo(this.data.result.face_list[i].landmark72[13].x,this.data.result.face_list[i].landmark72[13].y);
					context.lineTo(this.data.result.face_list[i].landmark72[14].x,this.data.result.face_list[i].landmark72[14].y);
					context.lineTo(this.data.result.face_list[i].landmark72[15].x,this.data.result.face_list[i].landmark72[15].y);
					context.lineTo(this.data.result.face_list[i].landmark72[16].x,this.data.result.face_list[i].landmark72[16].y);
					context.lineTo(this.data.result.face_list[i].landmark72[17].x,this.data.result.face_list[i].landmark72[17].y);
					context.lineTo(this.data.result.face_list[i].landmark72[18].x,this.data.result.face_list[i].landmark72[18].y);
					context.lineTo(this.data.result.face_list[i].landmark72[19].x,this.data.result.face_list[i].landmark72[19].y);
					context.lineTo(this.data.result.face_list[i].landmark72[20].x,this.data.result.face_list[i].landmark72[20].y);
					context.lineTo(this.data.result.face_list[i].landmark72[13].x,this.data.result.face_list[i].landmark72[13].y);
					context.lineTo(this.data.result.face_list[i].landmark72[21].x,this.data.result.face_list[i].landmark72[21].y);
					context.stroke()//绘制已定义的路径
					//左眉22-29
					context.moveTo(this.data.result.face_list[i].landmark72[22].x,this.data.result.face_list[i].landmark72[22].y);
					context.lineTo(this.data.result.face_list[i].landmark72[23].x,this.data.result.face_list[i].landmark72[23].y);
					context.lineTo(this.data.result.face_list[i].landmark72[24].x,this.data.result.face_list[i].landmark72[24].y);
					context.lineTo(this.data.result.face_list[i].landmark72[25].x,this.data.result.face_list[i].landmark72[25].y);
					context.lineTo(this.data.result.face_list[i].landmark72[26].x,this.data.result.face_list[i].landmark72[26].y);
					context.lineTo(this.data.result.face_list[i].landmark72[27].x,this.data.result.face_list[i].landmark72[27].y);
					context.lineTo(this.data.result.face_list[i].landmark72[28].x,this.data.result.face_list[i].landmark72[28].y);
					context.lineTo(this.data.result.face_list[i].landmark72[29].x,this.data.result.face_list[i].landmark72[29].y);
					context.lineTo(this.data.result.face_list[i].landmark72[22].x,this.data.result.face_list[i].landmark72[22].y);
					context.stroke()//绘制已定义的路径
					//右眼30-38
					context.moveTo(this.data.result.face_list[i].landmark72[30].x,this.data.result.face_list[i].landmark72[30].y);
					context.lineTo(this.data.result.face_list[i].landmark72[31].x,this.data.result.face_list[i].landmark72[31].y);
					context.lineTo(this.data.result.face_list[i].landmark72[32].x,this.data.result.face_list[i].landmark72[32].y);
					context.lineTo(this.data.result.face_list[i].landmark72[33].x,this.data.result.face_list[i].landmark72[33].y);
					context.lineTo(this.data.result.face_list[i].landmark72[34].x,this.data.result.face_list[i].landmark72[34].y);
					context.lineTo(this.data.result.face_list[i].landmark72[35].x,this.data.result.face_list[i].landmark72[35].y);
					context.lineTo(this.data.result.face_list[i].landmark72[36].x,this.data.result.face_list[i].landmark72[36].y);
					context.lineTo(this.data.result.face_list[i].landmark72[37].x,this.data.result.face_list[i].landmark72[37].y);
					context.lineTo(this.data.result.face_list[i].landmark72[30].x,this.data.result.face_list[i].landmark72[30].y);
					context.lineTo(this.data.result.face_list[i].landmark72[38].x,this.data.result.face_list[i].landmark72[38].y);
					context.stroke()//绘制已定义的路径
					//右眉39-43
					context.moveTo(this.data.result.face_list[i].landmark72[39].x,this.data.result.face_list[i].landmark72[39].y);
					context.lineTo(this.data.result.face_list[i].landmark72[40].x,this.data.result.face_list[i].landmark72[40].y);
					context.lineTo(this.data.result.face_list[i].landmark72[41].x,this.data.result.face_list[i].landmark72[41].y);
					context.lineTo(this.data.result.face_list[i].landmark72[42].x,this.data.result.face_list[i].landmark72[42].y);
					context.lineTo(this.data.result.face_list[i].landmark72[43].x,this.data.result.face_list[i].landmark72[43].y);
					context.lineTo(this.data.result.face_list[i].landmark72[44].x,this.data.result.face_list[i].landmark72[44].y);
					context.lineTo(this.data.result.face_list[i].landmark72[45].x,this.data.result.face_list[i].landmark72[45].y);
					context.lineTo(this.data.result.face_list[i].landmark72[46].x,this.data.result.face_list[i].landmark72[46].y);
					context.lineTo(this.data.result.face_list[i].landmark72[39].x,this.data.result.face_list[i].landmark72[39].y);
					context.stroke()//绘制已定义的路径
					//鼻子
					context.moveTo(this.data.result.face_list[i].landmark72[47].x,this.data.result.face_list[i].landmark72[47].y);
					context.lineTo(this.data.result.face_list[i].landmark72[48].x,this.data.result.face_list[i].landmark72[48].y);
					context.lineTo(this.data.result.face_list[i].landmark72[49].x,this.data.result.face_list[i].landmark72[49].y);
					context.lineTo(this.data.result.face_list[i].landmark72[50].x,this.data.result.face_list[i].landmark72[50].y);
					context.lineTo(this.data.result.face_list[i].landmark72[51].x,this.data.result.face_list[i].landmark72[51].y);
					context.lineTo(this.data.result.face_list[i].landmark72[52].x,this.data.result.face_list[i].landmark72[52].y);
					context.lineTo(this.data.result.face_list[i].landmark72[53].x,this.data.result.face_list[i].landmark72[53].y);
					context.lineTo(this.data.result.face_list[i].landmark72[54].x,this.data.result.face_list[i].landmark72[54].y);
					context.lineTo(this.data.result.face_list[i].landmark72[55].x,this.data.result.face_list[i].landmark72[55].y);
					context.lineTo(this.data.result.face_list[i].landmark72[56].x,this.data.result.face_list[i].landmark72[56].y);
					context.lineTo(this.data.result.face_list[i].landmark72[47].x,this.data.result.face_list[i].landmark72[47].y);
					context.lineTo(this.data.result.face_list[i].landmark72[57].x,this.data.result.face_list[i].landmark72[57].y);
					
					context.stroke()//绘制已定义的路径
					//嘴
					context.moveTo(this.data.result.face_list[i].landmark72[58].x,this.data.result.face_list[i].landmark72[58].y);
					context.lineTo(this.data.result.face_list[i].landmark72[59].x,this.data.result.face_list[i].landmark72[59].y);
					context.lineTo(this.data.result.face_list[i].landmark72[60].x,this.data.result.face_list[i].landmark72[60].y);
					context.lineTo(this.data.result.face_list[i].landmark72[61].x,this.data.result.face_list[i].landmark72[61].y);
					context.lineTo(this.data.result.face_list[i].landmark72[62].x,this.data.result.face_list[i].landmark72[62].y);
					context.lineTo(this.data.result.face_list[i].landmark72[63].x,this.data.result.face_list[i].landmark72[63].y);
					context.lineTo(this.data.result.face_list[i].landmark72[64].x,this.data.result.face_list[i].landmark72[64].y);
					context.lineTo(this.data.result.face_list[i].landmark72[65].x,this.data.result.face_list[i].landmark72[65].y);
					context.lineTo(this.data.result.face_list[i].landmark72[58].x,this.data.result.face_list[i].landmark72[58].y);
					context.moveTo(this.data.result.face_list[i].landmark72[58].x,this.data.result.face_list[i].landmark72[58].y);
					context.lineTo(this.data.result.face_list[i].landmark72[66].x,this.data.result.face_list[i].landmark72[66].y);
					context.lineTo(this.data.result.face_list[i].landmark72[67].x,this.data.result.face_list[i].landmark72[67].y);
					context.lineTo(this.data.result.face_list[i].landmark72[68].x,this.data.result.face_list[i].landmark72[68].y);
					context.lineTo(this.data.result.face_list[i].landmark72[62].x,this.data.result.face_list[i].landmark72[62].y);
					context.lineTo(this.data.result.face_list[i].landmark72[69].x,this.data.result.face_list[i].landmark72[69].y);
					context.lineTo(this.data.result.face_list[i].landmark72[70].x,this.data.result.face_list[i].landmark72[70].y);
					context.lineTo(this.data.result.face_list[i].landmark72[71].x,this.data.result.face_list[i].landmark72[71].y);
					context.lineTo(this.data.result.face_list[i].landmark72[58].x,this.data.result.face_list[i].landmark72[58].y);
					
					
					
					context.stroke()//绘制已定义的路径
					context.beginPath();
					context.translate((this.data.result.face_list[i].location.width/2)+this.data.result.face_list[i].location.left,(this.data.result.face_list[i].location.height/2)+this.data.result.face_list[i].location.top)
					console.log((this.data.result.face_list[i].location.width/2)+this.data.result.face_list[i].location.left)
					console.log((this.data.result.face_list[i].location.height/2)+this.data.result.face_list[i].location.top)
					context.rotate(Math.PI/180*this.data.result.face_list[i].location.rotation);
					//console.log("度"+Math.PI/6)
					//console.log("度"+Math.PI)
					console.log(this.data.result.face_list[i].location.rotation)
					context.setStrokeStyle("#00ff00");
					context.rect(-this.data.result.face_list[i].location.width/2, -this.data.result.face_list[i].location.height/2, this.data.result.face_list[i].location.width, this.data.result.face_list[i].location.height)
					//context.rect(this.data.result.face_list[i].location.left, this.data.result.face_list[i].location., this.data.result.face_list[i].location.width, this.data.result.face_list[i].location.height)
					
					context.stroke()//绘制已定义的路径
					context.rotate(-(Math.PI/180*this.data.result.face_list[i].location.rotation));
					context.translate(-((this.data.result.face_list[i].location.width/2)+this.data.result.face_list[i].location.left),-((this.data.result.face_list[i].location.height/2)+this.data.result.face_list[i].location.top))
					
				} 
				context.draw(false, 
				function (e)
				{
				console.log('draw callback');
				that.filepath()
				})
				
			},
			// 添加图片
			addPhoto() {
				let that = this
				that.$refs.cpimg._changImg()
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
			cpimgOk(file) {
				let that = this
				that.src = file
				//console.log(file)
				
				
				uni.request({
					url: 'https://www.qinendong.com/api/Face_recognition/Face_detection', //仅为示例，并非真实接口地址。
						data: {
							id: file.replace("data:image/png;base64,","").replace("data:image/jpeg;base64,","")
						},
						method:"POST",
					header: {
						'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
						},
						success: (res) => {
									//console.log(res.data.data);
									this.resdata = 	res.data.data
									this.data =  JSON.parse(res.data.data)
									console.log(this.data)
									
									this.canvasImg(this.src,this.data)
									
									
						}
					});
					//console.log(this.src)
					//console.log(this.data)
					
				
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

