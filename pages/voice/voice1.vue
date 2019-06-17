<template>
    <view>
        <view v-for="(item, index) in my">
        	<view :class="{ active: isActive(index),active1: isActive1(index)}">
        		<text>{{item.time}}</text>
        		<text>{{item.message}}</text>
        	</view>
        </view>
        
        
        <view class="bottom">
        	<!-- <input class="uni-input" focus placeholder="自动获得焦点" v-model="title" /> -->
        	<!-- <button type="primary" @click="btn">发送</button> -->
        </view>
        <!-- <button @tap="startRecord">开始录音</button>
        <button @tap="endRecord">停止录音</button> -->
        <!-- <button @tap="playVoice">播放录音</button> -->
		<view class="input_view bottom">
			<view class="Voice" @click="open_sr">
				<image v-show="sr" src="../../static/mpxiaomi.png" mode="aspectFit" style="width: 100upx;height: 60upx;margin-top: 20upx;"></image>
				<image v-show="!sr" src="../../static/jianpan.png" mode="aspectFit" style="width: 100upx;height: 60upx;margin-top: 20upx;"></image>
			</view>
			<view class="input">
				<input v-show="sr" type="text" value="" v-model="title"/>
				<view  v-show="!sr"  class="" @touchstart="startRecord" @touchend="endRecord">
					按住说话
				</view>
			</view>
			<view class="btn" @click="btn">
				<view>发送</view>
			</view>
		</view>
		
		<!-- <view class="">
			{{name.result}}
		</view> -->
    </view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

	var requestNum = 0
export default {
    data(){
		return{
			name:"",
			sr:true,
			
			title:"你好",
			data:Array,
			my:[],
			you:[],
			a_int:0
		}
    },
    onLoad() {
        
    },
    methods: {
		isActive(i){
			if(i%2 ==0){
				return true
			}
			if(i%2 ==1){
				return false
			}
		},
		isActive1(i){
				if(i%2 ==0){
					return false
				}
				if(i%2 ==1){
					return true
				}
		},
		btn(){
			var myDate = new Date();
				var datenow = myDate.toLocaleString();
			
			this.$set(this.my,this.a_int,{message:this.title,time:datenow})
			console.log(this.my)
			uni.request({
			    url: 'https://www.qinendong.com/api/Robot/Robot', 
			    method:"POST",
				  data: {
					  string:this.title,
			    },
			    header: {
			        'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
			    },
			    success: (res) => {
			       console.log(res)
					 if(res.data.error_code==0){
						 
						 this.data = res.data
						 this.title = ""
						 this.a_int++
						 this.$set(this.my,this.a_int,{message:this.data.result.response_list[0].action_list[0].say,time:this.data.result.timestamp})
						 this.a_int++
						 this.yuhc(this.data.result.response_list[0].action_list[0].say)
					 }else{
						 
						 if(requestNum<0){
							this.btn(); 
						 }else{
							 this.a_int++
							 this.$set(this.my,this.a_int,{message:"不好意思这个问题我现在不知道怎么回复您",time:datenow})
							 this.a_int++
						 }
						 requestNum++
					 }
					 
			    }
			});
		},
		open_sr(){
			this.sr = !this.sr
		},
        startRecord() {
            console.log('开始录音');

            recorderManager.start({
					format: 'mp3'
				});
        },
        endRecord() {
            console.log('录音结束');
            recorderManager.stop();
			this.onstop()
        },
		onstop(){
			let self = this;
			recorderManager.onStop(function (res) {
			    //console.log('recorder stop' + JSON.stringify(res));
			    self.voicePath = res.tempFilePath;
				console.log(res.tempFilePath)
				uni.uploadFile({
				    url: 'https://www.qinendong.com/api/vx_upload', //仅为示例，非真实的接口地址
				    filePath: res.tempFilePath,
				    name: 'file',
				    formData: {
				        'user': 'test'
				    },
				    success: (uploadFileRes) => {
				        //console.log(uploadFileRes.data);
						console.log(JSON.parse(JSON.parse(uploadFileRes.data).path))
						//console.log(JSON.parse(JSON.parse(uploadFileRes.data).path).result)
						self.name = JSON.parse(JSON.parse(uploadFileRes.data).path)
						//console.log(self.name)
						self.title = JSON.parse(JSON.parse(uploadFileRes.data).path).result
						self.btn()
				    }
				});
			});
		},
		
		
		
		
        playVoice() {
            console.log('播放录音'+this.voicePath);
        
            if (this.voicePath) {
                innerAudioContext.src = this.voicePath;
                innerAudioContext.play();
            }
        },
		yuhc(value){
			console.log(1)
			uni.request({
			    url: 'https://www.qinendong.com/api/Voice/speech_synthesis', //仅为示例，并非真实接口地址。
			    method:"POST",
				  data: {
					  value:value,
			    },
			    header: {
			        'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data.path)
					//this.btn(`http://localhost:3000/Audio/${res.data.path}`)
					const bgAudioMannager = uni.getBackgroundAudioManager();
					bgAudioMannager.title = '小琴机器人';
					bgAudioMannager.singer = '暂无';
					bgAudioMannager.coverImgUrl = 'http://www.qinendong.com/Images/imgUploader_db3c5ae0-601b-11e9-9c4f-4d49ff1664ec_微信图片_20190226103535.jpg';
					bgAudioMannager.src = `http://www.qinendong.com/Audio/${res.data.path}`;							
			    }
			});
		}
    }
}
</script>

<style lang="scss">
	.input_view{
		width: 750upx;
		height: 100upx;
		background: #f9f9f9;
		display: flex;
        flex-direction: row;
        flex-wrap: wrap;
		.Voice{
			width: 100upx;
			height: 50upx;
			
		}
		.input{
			width: 500upx;
			background: #ffffff;
			height: 70upx;
			margin-top: 15upx;
			input{
				line-height: 70upx;
				height: 70upx;
				padding-left: 20upx;
			}
			view{
				width: 500upx;
				line-height: 70upx;
				height: 70upx;
				text-align: center;
				
			}
		}
		.btn{
			width: 150upx;
			view{
				margin: 0 auto;
				width: 100upx;
				height: 70upx;
				margin-top: 15upx;
				font-size: 28upx;
				background: #22ac38;
				color: #ffffff;
				text-align: center;
				line-height: 70upx;
			}
		}
	}
	.active{
		text-align: right;
	}
	.active1{
		text-align: left;
	}
	.bottom{
		position: absolute;bottom:0;left: 0;width: 100%;
	}
</style>
