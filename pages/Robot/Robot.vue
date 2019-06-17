<template>
	<view class="">
		
		<view v-for="(item, index) in my">
			<view :class="{ active: isActive(index),active1: isActive1(index)}">
				<text>{{item.time}}</text>
				<text>{{item.message}}</text>
			</view>
		</view>
		
		
		<view class="bottom">
			<input class="uni-input" focus placeholder="自动获得焦点" v-model="title" />
			<button type="primary" @click="btn">发送</button>
		</view>
		
		
	</view>
</template>

<script>
	var myDate = new Date();
	var datenow = myDate.toLocaleString();
	var requestNum = 0
	export default{
		data(){
			return{
				title:"你好",
				data:Array,
				my:[],
				you:[],
				a_int:0
			}
		},
		methods:{
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
				       console.log(res.data)
						 if(res.data.error_code==0){
							 this.data = res.data
							 this.title = ""
							 this.a_int++;
							 this.$set(this.my,this.a_int,{message:this.data.result.response_list[0].action_list[0].say,time:datenow})
							 this.a_int++;
							 this.yuhc(this.data.result.response_list[0].action_list[0].say)
							 
						 }else{
							 
							 if(requestNum<3){
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
						bgAudioMannager.title = '致爱丽丝';
						bgAudioMannager.singer = '暂无';
						bgAudioMannager.coverImgUrl = 'http://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg';
						bgAudioMannager.src = `http://www.qinendong.com/Audio/${res.data.path}`;							
				    }
				});
			}
		}
	}
	
</script>

<style>
	.active{
		text-align: right;
	}
	.active1{
		text-align: left;
	}
	.bottom{
		position: absolute;bottom:0;left: 0;width: 100%;border-top: #000000 2upx solid;
	}
</style>
