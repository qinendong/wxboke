<template>
	<view class="content">

	<view v-for="item in bkylist" class="bky_list" >
		<navigator :url=" '../content_body/content_body?id='+item.id[0]" hover-class="navigator-hover">
				  <view class="row">
				  	<text class="column-title">{{item.title[0]._}}</text>
				  </view>
				  <view class="row">
				  	<view class="flex-txt" v-show="item.topicIcon[0]">
					   <text class="column-description"> {{str_slice(item.summary[0])}}</text>
				  	</view>
					<view class="text-danger" v-show="!item.topicIcon[0]">
					   <text class="column-description"> {{str_slice(item.summary[0])}}</text>
					</view>
				  	<view class="flex-img" v-show="item.topicIcon[0]">
		<image  class="flex_image" style="display: inline-block;" mode="aspectFit" :src=geturl(item.topicIcon[0])
	@error="imageError" ></image>
				  			</view>
				  	</view>
					<view style="width: 94%;margin: 10upx auto;color: #999;">
						<text>{{time_slice(item.published[0])}}</text><text style="float: right;">{{item.views[0]}}阅读</text><text style="float: right;margin-right: 40upx;">{{item.diggs[0]}}推荐</text>
					</view>
</navigator>				  	
				  	</view>
				  	

<view class="loading">{{loadingText}}</view>
		  
		
			 
		   <loding></loding>
		
	</view>
</template>

<script>
	var timer = null;
	var page = 2
	export default {
		data() {
			return {
				items: "",
				bkylist:Array,
				loadingText:"加载更多..."
				
			}
		},
		onLoad(option) {
  uni.request({
      url: 'https://www.qinendong.com/api/cnblogs/recent', //仅为示例，并非真实接口地址。
      method:"POST",
	  data: {
		  id:1,
      },
      header: {
          'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
      },
      success: (res) => {
         console.log(res.data.json)
		 this.items = res.data.json
		 this.bkylist = JSON.parse(this.items).feed.entry
		 console.log(JSON.parse(this.items).feed.entry)
      }
  });
console.log(option.id); //打印出上个页面传递的参数。
console.log(option.name); //打印出上个页面传递的参数。

		},
		onReachBottom(){
		 if(timer != null){
		  clearTimeout(timer);
		 }
		 timer = setTimeout(()=>{
		  this.getmorenews();
		  /* uni.showLoading({
		  	title: '加载中'
		  }); */
		 }, 1000);
		},

		methods: {
			time_slice(str){
				var timestr = str.replace("T"," ").substring(0,19)
				return this.$options.methods.timesFun(timestr).timesString
			},
			timesFun(timesData){
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(timesData.replace(/-/g, "/"));//将-转化为/，使用new Date
    var dateEnd = new Date();//获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    var timesString = '';

    if (dayDiff != 0) {
        timesString = dayDiff + '天前';
    } else if (dayDiff == 0 && hours != 0) {
        timesString = hours + '小时前';
    } else if (dayDiff == 0 && hours == 0) {
        timesString = minutes + '分钟前';
    }

    return {
        timesString: timesString
    }
},

			getmorenews(){
				  uni.request({
				    url: 'https://www.qinendong.com/api/cnblogs/recent', //仅为示例，并非真实接口地址。
				    method:"POST",
					  data: {
						  id:page,
				    },
				    header: {
				        'Content-type':'application/x-www-form-urlencoded' //自定义请求头信息
				    },
				    success: (res) => {
						page++
						console.log(page)
				       //console.log(res.data.json)
						 this.items = res.data.json
						 this.bkylist = this.bkylist.concat(JSON.parse(this.items).feed.entry)
						 console.log(JSON.parse(res.data.json).feed.entry)
						//uni.hideLoading();
				    }
				});
			},
			/* xml(){//此方法微信小程序报错，所以采用后端重定向来做
				console.log(1)
			var jsonObj = this.$x2js.xml2js('<feed xmlns="http://www.w3.org/2005/Atom"><title type="text">博客园新闻频道</title><id>uuid:12ce4385-34d0-4b89-8363-f15878493e12;id=124900</id><updated>2019-04-19T23:13:05Z</updated><link href="http://news.cnblogs.com/"/><entry><id>624068</id><title type="text">特斯拉在自动驾驶领域落后但仍是消费者最信任制造商</title><summary type="text">...</summary><published>2019-04-20T07:10:55+08:00</published><updated>2019-04-19T23:13:05Z</updated><link rel="alternate" href="http://news.cnblogs.com/n/624068/"/><diggs>0</diggs><views>6</views><comments>0</comments><topic/><topicIcon>http://images0.cnblogs.com/news_topic///images0.cnblogs.com/news_topic/tesla.png</topicIcon><sourceName>新浪科技</sourceName></entry></feed>')
            console.log(jsonObj)
						} */
			geturl(url){
				//console.log(url.substr(38))
				
				var str = url.substr(38)
				var str1= "https://images.weserv.nl/?url="
				//console.log(str)
				console.log(str1+str)
				return str1+str
			},
			str_slice(obj){
				var str = obj._
				if(this.$options.methods.GetLength(str)>120){
					return this.$options.methods.cutstr(str,120)
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
    }

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
				width: 77%;
				height: 120upx;
				//background: red;
				text-align: left;
				
				padding-right: 2%;
			}
			.text-danger
			{
				width: 100%;
				height: 120upx;
				//background: red;
				text-align: left;
				
				
			}
			.flex-img{
				width: 18%;
				height: 120upx;
				//background: green;
				overflow: hidden;
				position: relative;
				
			}
	}
	.column{
		display: block;
	}
	.column-title{color: #333;font-size: 1.3em;font-weight: 700;text-align: left}
	.column-description{color: #999;padding:10upx 0;line-height: 40upx;}
	.bky_list{
		margin-bottom: 20upx;border-bottom:2upx solid #cccccc;
	}
	.flex_image{float: right}
	image{
		width: 100%;
		height: 120upx;
	}
	.loading{text-align: center;}
</style>

