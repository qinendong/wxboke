<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap" style="text-align: center;">
                <audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
            </view>
        </view>
		<button type="primary" @click="btn">播放背景音频</button>
		<button type="primary" @click="btn1">播放背景音频1</button>
    </view>
</template>

<script>

	export default {
    data() {
        return {
            current: {
                poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
                name: '致爱丽丝',
                author: '暂无',
                src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
            },
            audioAction: {
                method: 'pause'
            }
        }
		
    },
	methods:{
		btn(src){
			console.log(src)
			const bgAudioMannager = uni.getBackgroundAudioManager();
			bgAudioMannager.title = '致爱丽丝';
			bgAudioMannager.singer = '暂无';
			bgAudioMannager.coverImgUrl = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg';
			bgAudioMannager.src = src;
		},
		btn1(){
			
			uni.request({
			    url: 'https://www.qinendong.com/api/Voice/speech_synthesis', //仅为示例，并非真实接口地址。
			    method:"POST",
				  data: {
					  value:"明天会更好，今天也会更美",
			    },
			    header: {
			        'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data.path)
					this.btn(`https://www.qinendong.com/Audio/${res.data.path}`)
			    }
			});
			
		}
	}
}
</script>

<style>
</style>
