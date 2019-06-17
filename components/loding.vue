<template>
    <view class="loading_box" v-show="is_loading" @click="switch_loading">
        <view class="loading">
            <!-- <view class="loader loader-17">
              <view class="css-square square1"></view>
              <view class="css-square square2"></view>
              <view class="css-square square3"></view>
              <view class="css-square square4"></view>
              <view class="css-square square5"></view>
              <view class="css-square square6"></view>
              <view class="css-square square7"></view>
              <view class="css-square square8"></view>
            </view> -->
			<image src="../static/a.gif" mode=""></image>
             <!-- <view class="loader loader-4"></view> -->
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        },
        methods:{
            switch_loading(){
                this.$store.commit("switch_loading")
            }
        },
        //实测直接在标签属性里写  $store.state.XX  拿不到数据  所以这里通过 计算属性去监听一下
        computed:{
            is_loading(){
                return this.$store.state.loading
            }
        }
    }
</script>

<style lang="scss">
.loading{
	width: 100%;
	image{
		width: 50%;position: absolute;top: 20%;left: 25%;
	}
}
</style>