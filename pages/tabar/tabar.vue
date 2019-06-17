<template>
	<view class="content">
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view 
				v-for="(item,index) in tabBars" :key="item.id"
				class="nav-item"
				:class="{current: index === tabCurrentIndex}"
				:id="'tab'+index"
				@click="changeTab(index)"
			>{{item.name}}</view>
		</scroll-view>

	
		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
			<!-- 内容部分 -->
			<swiper 
				id="swiper"
				class="swiper-box" 
				:duration="300" 
				:current="tabCurrentIndex" 
				@change="changeTab"
			>
				<swiper-item>
					<scroll-view 
						class="panel-scroll-box" 
						:scroll-y="enableScroll" 
						@scrolltolower="loadMore"
						>
						<!-- 
							* 新闻列表 
							* 和nvue的区别只是需要把uni标签转为weex标签而已
							* class 和 style的绑定限制了一些语法，其他并没有不同
						-->
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
													   <text class="column-description"> {{str_slice1(item.summary[0])}}</text>
													</view>
												  	<view class="flex-img" v-show="item.topicIcon[0]">
										<image  class="flex_image" style="display: inline-block;" mode="aspectFit" :src=geturl(item.topicIcon[0])
									@error="imageError" ></image>
												  			</view>
															
												  	</view>
													<view style="width: 94%;margin: 10upx auto;color: #999;">
														<text>{{time_slice(item.published[0])}}<text style="float: right;">{{item.views[0]}}阅读</text><text style="float: right;margin-right: 40upx;">{{item.diggs[0]}}推荐</text></text>
													</view>
								</navigator>				  	
												  	</view>
													
						
					
					<!-- 上滑加载更多组件 -->
					<mix-load-more :status="tabItem.loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view 
						class="panel-scroll-box" 
						:scroll-y="enableScroll" 
						@scrolltolower="loadMore"
						>
						<!-- 
							* 新闻列表 
							* 和nvue的区别只是需要把uni标签转为weex标签而已
							* class 和 style的绑定限制了一些语法，其他并没有不同
						-->
									<view v-for="item in bkylist1" class="bky_list" >
											<navigator :url=" '../content_body/content_body?id='+item.id[0]" hover-class="navigator-hover">
													  <view class="row">
													  	<text class="column-title">{{item.title[0]._}}</text>
													  </view>
													  <view class="row">
													  	<view class="flex-txt" v-show="item.topicIcon[0]">
														   <text class="column-description"> {{str_slice(item.summary[0])}}</text>
													  	</view>
														<view class="text-danger" v-show="!item.topicIcon[0]">
														   <text class="column-description"> {{str_slice1(item.summary[0])}}</text>
														</view>
													  	<view class="flex-img" v-show="item.topicIcon[0]">
											<image  class="flex_image" style="display: inline-block;" mode="aspectFit" :src=geturl(item.topicIcon[0])
										@error="imageError" ></image>
													  			</view>
																
													  	</view>
														<view style="width: 94%;margin: 10upx auto;color: #999;">
															<text>{{time_slice(item.published[0])}}<text style="float: right;">{{item.views[0]}}阅读</text><text style="float: right;margin-right: 40upx;">{{item.diggs[0]}}推荐</text></text>
														</view>
									</navigator>				  	
													  	</view>
						
						<!-- 上滑加载更多组件 -->
						<!-- <mix-load-more :status="tabItem.loadMoreStatus"></mix-load-more> -->
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view 
						class="panel-scroll-box" 
						:scroll-y="enableScroll" 
						@scrolltolower="loadMore"
						>
						<!-- 
							* 新闻列表 
							* 和nvue的区别只是需要把uni标签转为weex标签而已
							* class 和 style的绑定限制了一些语法，其他并没有不同
						-->
										<view v-for="item in bkylist2" class="bky_list" >
											<navigator :url=" '../content_body/content_body?id='+item.id[0]" hover-class="navigator-hover">
													  <view class="row">
													  	<text class="column-title">{{item.title[0]._}}</text>
													  </view>
													  <view class="row">
													  	<view class="flex-txt" v-show="item.topicIcon[0]">
														   <text class="column-description"> {{str_slice(item.summary[0])}}</text>
													  	</view>
														<view class="text-danger" v-show="!item.topicIcon[0]">
														   <text class="column-description"> {{str_slice1(item.summary[0])}}</text>
														</view>
													  	<view class="flex-img" v-show="item.topicIcon[0]">
											<image  class="flex_image" style="display: inline-block;" mode="aspectFit" :src=geturl(item.topicIcon[0])
										@error="imageError" ></image>
													  			</view>
																
													  	</view>
														<view style="width: 94%;margin: 10upx auto;color: #999;">
															<text>{{time_slice(item.published[0])}}<text style="float: right;">{{item.views[0]}}阅读</text><text style="float: right;margin-right: 40upx;">{{item.diggs[0]}}推荐</text></text>
														</view>
									</navigator>				  	
													  	</view>
						
						<!-- 上滑加载更多组件 -->
						<mix-load-more :status="tabItem.loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</mix-pulldown-refresh>
			
	</view>
</template>

<script>
	
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';

	let windowWidth = 0, scrollTimer = false, tabBar;
	var page = 1
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
		},
		data() {
			return {
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				load:1,
				tabBars: [{
	name: '最新',
	id: '1',
}, {
	name: '推荐',
	id: '2'
}, {
	name: '热门',
	id: '3'
}],
				bkylist:[],
				bkylist1:[],
				bkylist2:[]
			}
		},
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
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
						geturl(url){
						//console.log(url.substr(38))
						
						var str = url.substr(38)
						var str1= "https://images.weserv.nl/?url="
						//console.log(str)
						//console.log(str1+str)
						return str1+str
					},
					str_slice(obj){
						var str = obj._
						if(this.$options.methods.GetLength(str)>125){
							return this.$options.methods.cutstr(str,125)
						}
					},
					str_slice1(obj){
						var str = obj._
						if(this.$options.methods.GetLength(str)>170){
							return this.$options.methods.cutstr(str,170)
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
			/**
			 * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
			 * 这里直接写的
			 * mixin使用方法看index.nuve
			 */
			//获取分类
			loadTabbars(){
				this.loadNewsList('add');
			},
			//新闻列表
			loadNewsList(type){
				let tabItem = this.tabBars[this.tabCurrentIndex];
				
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					
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
					uni.request({
					    url: 'https://www.qinendong.com/api/cnblogs/recommend', //仅为示例，并非真实接口地址。
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
							 this.bkylist1 = this.bkylist1.concat(JSON.parse(this.items).feed.entry)
							 console.log(JSON.parse(res.data.json).feed.entry)
							//uni.hideLoading();
					    }
					});
					uni.request({
					    url: 'https://www.qinendong.com/api/cnblogs/hot', //仅为示例，并非真实接口地址。
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
							 this.bkylist2 = JSON.parse(this.items).feed.entry
							 console.log(JSON.parse(res.data.json).feed.entry)
							//uni.hideLoading();
					    }
					});
					
				}
				
				else if(type === 'refresh'){
					
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
							page++
							console.log(page)
					       //console.log(res.data.json)
							 this.items = res.data.json
							 this.bkylist = JSON.parse(this.items).feed.entry
							 
							tabItem.refreshing = false;
					    }
					});
				}
				
				
			},
			
			
			
			//下拉刷新
			onPulldownReresh(){
				this.loadNewsList('refresh');
			},
			//上滑加载
			loadMore(){
				this.loadNewsList('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable;
				}
			},

			//tab切换
			async changeTab(e){
				
				console.log(e)
				console.log(tabBar)
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
					console.log("index"+index)
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
					console.log("tabBar"+tabBar)
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
					}
					this.tabCurrentIndex = index; 
					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					
				}, 100)
				
			},
			//获得元素的size
			getElSize(id) { 
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
		}
	}
</script>

<style lang='scss'>
	

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
	page, .content{
		background-color: #ffffff;
		height: 100%;
		overflow: hidden;
	}

	/* 顶部tabbar */
	.nav-bar{
		position: relative;
		z-index: 10;
		height: 90upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
		background-color: #fff;
		.nav-item{
			display: inline-block;
			width: 250upx;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #303133;
			position: relative;
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-bottom: 4upx solid #007aff;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: .3s;
			}
		}
		.current{
			color: #007aff;
			&:after{
				width: 50%;
			}
		}
	}

	.swiper-box{
		height: 100%;
	}

	.panel-scroll-box{
		height: 100%;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	
	/**
	 * 新闻列表 直接拿的nvue样式修改，,
	 * 一共需要修改不到10行代码, 另外px需要直接修改为upx，只有单位不一样，计算都是一样的
	 * 吐槽：难道不能在编译的时候把nuve中的upx转为px? 这样就不用修改单位了
	 */
	.video-wrapper{
		width: 100%;
		height: 440upx;
		.video{
			width: 100%;
		}
	}
	
	view{
		display:flex;
		flex-direction: column;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.news-item{
		position:relative;
	}
	/* 修改结束 */
	
	/* 新闻列表  emmm 仅供参考 */
	.news-item{
		width: 750upx;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
	}
	.title{
		font-size: 32upx;
		color: #303133;
		line-height: 46upx;
	}
	.bot{
		flex-direction: row;
	}
	.author{
		font-size: 26upx;
		color: #aaa;
	}
	.time{
		font-size: 26upx;
		color: #aaa;
		margin-left: 20upx;
	}
	.img-list{
		flex-shrink: 0;
		flex-direction: row;
		background-color: #fff;
		width: 220upx;
		height: 140upx;
	}
	.img-wrapper{
		flex: 1;
		flex-direction: row;
		height: 140upx;
		position: relative;
	}
	.img{
		flex: 1;
	}
	.img-empty{
		height: 20upx;
	}
	
	/* 图在左 */
	.img-list1{
		position:absolute;
		left: 30upx;
		top: 24upx;
	}
	.title1{
		padding-left: 240upx; 
	}
	.bot1{
		padding-left: 240upx; 
		margin-top: 20upx;
	}
	/* 图在右 */
	.img-list2{
		position:absolute;
		right: 30upx;
		top: 24upx;
	}
	.title2{
		padding-right: 210upx; 
	}
	.bot2{
		margin-top: 20upx;
	}
	/* 底部3图 */
	.img-list3{
		width: 700upx;
		margin: 16upx 0upx;
	}
	.img-wrapper3{
		margin-right: 4upx;
	}
	/* 底部大图 */
	.img-list-single{
		width: 690upx;
		height: 240upx;
		margin: 16upx 0upx;
	}
	.img-wrapper-single{
		height: 240upx;
		margin-right: 0upx;
	}
	
	.video-tip{
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.3);
	}
	.video-tip-icon{
		width: 60upx;
		height:60upx; 
	}
</style>
