<template>
	<view class="content">

		    <view v-for="item in items">
				<navigator :url=" '../markdown/markdown?id='+item.id" hover-class="navigator-hover">
					<view class="row">
		        <view class="flex-txt">
					<view class="column">
						<view class="column-title">
							<text>{{item.title}}</text>
						</view>
						<view class="column-description">
							<text>{{str_slice(item.meta_description)}}</text>
						</view>
					</view>
				</view>
		        <view class="flex-img"><image class="flex_image" style="height: 100%; background-color: #eeeeee;" mode="aspectFit" :src=item.image
                        @error="imageError"></image></view>
						
						
						</view>
					</navigator>	
						          
		
						
		    </view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: Array
			}
		},
		onLoad(option) {
			uni.request({
    url: 'https://www.qinendong.com/api/posts', //仅为示例，并非真实接口地址。
    data: {
        text: 'uni.request'
    },
    header: {
        'custom-header': 'hello' //自定义请求头信息
    },
    success: (res) => {
        console.log(res.data);
        this.items = res.data.rows;
    }
});
console.log(option.id); //打印出上个页面传递的参数。
console.log(option.name); //打印出上个页面传递的参数。

		},

		methods: {
			/* str_slice(str){
				if (!str) return ''
            
			 var str_L =  this.$options.methods.CheckStringLength(str)
			if(str_L > 50){
                return str.slice(0,50)+'...'
            }else{
                return str
            }
			
			},
			CheckStringLength(txt) {
				//区分半角全角
            var len = Number;
            len = 0;
            for (var i = 0; i < txt.length; i++) {
                //trace(txt.charCodeAt(i))
                if (txt.charCodeAt(i) >= 0x4e00 && txt.charCodeAt(i) <= 0x9fa5) {
                    //trace (txt.charAt (i));
                    len += 2;
                } else {
                    len += 1;
                }
            }
            return len;
        }, */
		str_slice(obj1){
					var str = obj1
					if(this.$options.methods.GetLength(str)>100){
						return this.$options.methods.cutstr(str,100)
					} else{
						return str
					}
				},
				
				cutstr(str, len) {
		    var str_length = 0;
		    var str_len = 0;
		    var str_cut = new String();
		    str_len = str.length;
		    for (var i = 0; i < str_len; i++) {
		        var a = str.charAt(i);
		        str_length++;
		        if (escape(a).length > 4) {
		            //中文字符的长度经编码之后大于4  
		            str_length++;
		        }
		        str_cut = str_cut.concat(a);
		        if (str_length >= len) {
		            str_cut = str_cut.concat("...");
		            return str_cut;
		        }
		    }
		    //如果给定字符串小于指定长度，则返回源字符串；  
		    if (str_length < len) {
		        return str;
		    }
		}, 
		GetLength(str) {
		    var realLength = 0, len = str.length, charCode = -1;
		    for (var i = 0; i < len; i++) {
		        charCode = str.charCodeAt(i);
		        if (charCode >= 0 && charCode <= 128) realLength += 1;
		        else realLength += 2;
		    }
		    return realLength;
		},

		}
	}
</script>



<style lang="scss">

	.row{
		    display: -webkit-flex;
            display: flex;
            text-align: center;
            flex-direction: row;
            flex-wrap: wrap;
			width: 94%;
			margin: 20upx auto;
			
			.flex-txt{
				width: 68%;
				height: 200upx;
				//background: red;
				text-align: left;
				
				padding-right: 2%;
			}
			.flex-img{
				width: 30%;
				height: 190upx;
				//background: green;
				overflow: hidden;
				position: relative;
				.flex_image{
					position: absolute;
					margin: auto;
            top: -9999px;
            right: -9999px;
            bottom: -9999px;
            left: -9999px;
				}
			}
	}
	.column{
		display: block;
	}
	.column-title{color: #333;font-size: 1.3em;font-weight: 700;}
	.column-description{color: #999;padding:10upx 0;}
</style>

