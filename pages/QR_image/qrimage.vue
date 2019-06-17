<template>
    <view>
       
            <view class="uni-form-item uni-column">
                <input class="uni-input" focus placeholder="文字/链接"  v-model="title"/>
				<button type="primary" @click="btn">生成二维码</button>
				
            </view>
           <view v-show="src">
			   <image :src="urlFile" class="showimg" mode="aspectFit"></image>
			   <button type="primary" @click="btn1">保存二维码到手机</button>
		   </view>
    </view>
</template>

<script>
	export default {
    data() {
        return {
            title: '',
            src:'',
			urlFile:""
        }
    },
    methods: {
        btn(){
			this.src =  `https://www.qinendong.com/api/qsImage/qsImage?name=${this.title}`
				uni.downloadFile({
					url: this.src, //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							console.log(res.tempFilePath);
							this.urlFile = res.tempFilePath
						}
						
					}
				});			
		},
		btn1(){
			uni.showLoading({
				title: '保存中'
			});
			uni.saveImageToPhotosAlbum({
            filePath: this.urlFile,
            success: function () {
                console.log('save success');
				uni.hideLoading();
            }
        });
		}
    }
}
</script>

<style>
	.showimg{
		margin: 20upx 0;
		width: 750upx;
	}
	.imgPath{
		
		word-break: break-all;
	}
	.uni-input{
		height: 2rem;
		min-height: 2rem;
	}
</style>
