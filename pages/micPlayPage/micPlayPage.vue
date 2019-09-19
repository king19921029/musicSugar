<template>
	<view class="box display_column border_top">
		<!-- 头像 -->
		<view class="star_box">
			<view class="big_block display_flex">
				<!--  -->
				<image :class="[isPlay?'arunning':'apaused']" class="star_img" :src="playingObj.productImg" mode=""></image>
				<view class="center_block display_flex">
					<view class="bg_fff"></view>
				</view>
			</view>
		</view>
		<!-- 歌词老板 -->
		<view class="scroll_top"></view>
		<scroll-view class="scroll_view" scroll-y="true" scroll-with-animation='true' :scroll-top='marginTop'>
			
			<block v-for="(item, index) in storyContent" :key="index">
				<view class="gc_view color_gray overflow" :class="[currentIndex == index ? 'currentTime' : '']">
					{{item[1]}}
				</view>
			</block>
		</scroll-view>
		<view class="scroll_bottom"></view>

		<!-- 进图条 -->
		<view class="com_width display_flex space_between">
			<view class="time_str">{{now}}</view>
			<view class="bg_time_box">
				<view class="bg_time">
					<view :style="{width:time_width+'%'}" class="red"></view>
				</view>
			</view>
			<view class="time_str">{{long}}</view>
		</view>

		<view class="display_flex mic_controller">
			<image class="com_mic_c" src="/static/img/up.png" @click="nextMic('reduce')" mode=""></image>
			<image @click="micControllerFun('play')" v-if="isPlay" class="mic_play_icon" src="/static/img/pause_icon.png" mode=""></image>
			<image @click="micControllerFun('pause')" v-else class="mic_play_icon" src="/static/img/mic_play.png" mode=""></image>
			<image class="com_mic_c" src="/static/img/bom.png" @click="nextMic('add')" mode=""></image>
		</view>

		<!-- footer -->
		<view class="border_top footer_box">
			<view class="footer com_width display_flex">
				<view class="display_column">
					<image src="/static/img/fx_icon.png" mode=""></image>
					<view>分享</view>
				</view>

				<view class="display_flex">
					<view @click="addShop" class="add">加入购物车</view>
					<view @click="buyShop" class="bg_all">立即购买</view>
				</view>
			</view>
		</view>
		<!-- 购物弹框 -->
		<view v-if="shopIsShow" class="show_block">
			<view class="shop_content">
				<view class="shop_info com_width display_flex">

					<image class="shop_img" :src="playingObj.productImg" mode=""></image>
					<view class="shop_msg">
						<view class="pic_color">¥ {{playingObj.commodity_price}}</view>
						<view class="color_gray">库存充足</view>
					</view>
					<view class="close" @click="close">
						<image class="close_icon" src="/static/img/close.png" mode=""></image>
					</view>
				</view>
				<view class="shop_num com_width display_flex">
					<view>购买数量</view>
					<view class="display_flex shop_list_count">
						<view @click="addBtn('reduce')" class="count_btn">-</view>
						<view class="count_num">{{playingObj.commodity_num}}</view>
						<view @click="addBtn('add')" class="count_btn">+</view>
					</view>
				</view>
				<view @click="confirmBtn" class="yes com_width">确定</view>
			</view>
		</view>


	</view>
</template>

<script>
	const backgroundAudioManager = wx.getBackgroundAudioManager()
	var animation = uni.createAnimation({
		duration: 12000,
		timingFunction: 'linear',
	})
	export default {
		data() {
			return {
				shopIdx: 0, //下标
				shopId: 0,
				playingObj: {},
				playNum: 0,
				isPlay: true,
				//文稿数组，转化完成用来在wxml中使用
				storyContent: [],
				//文稿滚动距离
				marginTop: 0,
				//当前正在第几行
				currentIndex: 0,
				sliderValue: Number, //正式播放的长度
				sliderMax: Number, //进度条总时长
				now: "00:00", //正在播放时长
				long: "04:00", //总时长
				time_width: 0, //进度条长度
				micList: [],
				shopIsShow: false,
				shopDetails: {
					"audio_name": "华晨宇",
					"commodity_price": 10,
					"starName": "烟火里的尘埃",
					"commodity_num": 1,
					"audio_id": "2",
					isChecked: false,
				},
			}
		},
		onLoad(options) {
			
			uni.getSystemInfo({
			  success (res) {
			    console.log(res)
			  }
			})
			const that = this;
			// backgroundAudioManager.seek(100)
			let micList = uni.getStorageSync("micList")
			this.shopId = options.id || 2;
			micList.map((item, idx) => {
				if (item.audio_id == this.shopId) {
					this.playingObj = item;
					this.shopIdx = idx;
					this.playFun();
				}
			})
			this.micList = micList

		},
		onShow() {
			const that = this;
			let globalData = getApp().globalData;
			// 监听开始播放
			backgroundAudioManager.onPlay(function() {
				if (backgroundAudioManager.duration != that.max) {
					let long = that.formStr(backgroundAudioManager.duration);
					globalData.duration = backgroundAudioManager.duration;
					that.sliderMax = backgroundAudioManager.duration
					that.long = long
				}
			})
			// 监听播放进度
			backgroundAudioManager.onTimeUpdate(function() {
				//时间更新
				var currentTime = parseInt(backgroundAudioManager.currentTime);
				if (currentTime > 0 && currentTime != globalData.currentTime) {
					globalData.currentTime = currentTime;
					let now = that.formStr(currentTime);
					globalData.currentTime = currentTime;
					that.sliderValue = currentTime
					that.now = now
					let userInfo = uni.getStorageSync("userInfo") || false;
					if( userInfo ){
						if (currentTime == 30 || currentTime > 30) {
							that.isPlay = false
							backgroundAudioManager.pause()
							backgroundAudioManager.seek(0)
							uni.showToast({
								title: "亲～未购买只能试听30秒，快去购买吧！",
								duration:1500,
								icon:"none"
							})
						}
					}
					
					// 进度条
					let num = (backgroundAudioManager.duration / 100).toFixed(2)
					if (backgroundAudioManager.currentTime / num > 0) {
						let cunt = (backgroundAudioManager.currentTime / num).toFixed(2)
						that.time_width = cunt
					}
				}
				//超过6行开始滚动
				if (that.storyContent.length - that.currentIndex == 2) {
					console.log("到底了")
				} else {
					if (that.currentIndex >= 2) {
						that.marginTop = (that.currentIndex - 1) * 46/2
					}
				}
				// 文稿对应行颜色改变
				if (that.currentIndex != that.storyContent.length - 1) {
					var j = 0;
					for (var j = that.currentIndex; j < that.storyContent.length; j++) {

						if (that.currentIndex == that.storyContent.length - 2) {
							//最后一行只能与前一行时间比较
							if (parseFloat(backgroundAudioManager.currentTime) > parseFloat(that.storyContent[that.storyContent.length -
									1][0])) {
								that.currentIndex = that.storyContent.length - 1
								return;
							}
						} else {
							if (
								parseFloat(backgroundAudioManager.currentTime) > parseFloat(that.storyContent[j][0]) &&
								parseFloat(backgroundAudioManager.currentTime) < parseFloat(that.storyContent[j + 1][0])
							) {
								// console.log(that.currentIndex)
								that.currentIndex = j

								return;
							}
						}
					}
				}
			});
		},
		methods: {
			nextMic(e) {
				if (e == "add") {
					let idx = this.shopIdx;
					this.playingObj = this.micList[idx + 1] || this.micList[0];
					this.shopIdx = this.micList[idx + 1] ? idx + 1 : 0
					backgroundAudioManager.pause();
					this.playFun();
					console.log(idx)
				} else {
					let micList = this.micList;
					let idx = this.shopIdx;
					let num = this.micList.length;
					this.playingObj = this.micList[idx - 1] || this.micList[num-1];
					this.shopIdx = this.micList[idx - 1] ? idx - 1 : num
					backgroundAudioManager.pause();
					this.playFun();
				}

			},
			micControllerFun(e) {

				if (e == "pause") {
					this.isPlay = true
					backgroundAudioManager.play()
				} else {
					this.isPlay = false
					backgroundAudioManager.pause()
				}
			},
			// 时间转换
			formStr(seconds) {
				var durationMinute = parseInt(seconds / 60);
				var durationSecond = parseInt(seconds % 60);
				if (durationSecond < 10) {
					durationSecond = '0' + durationSecond;
				}
				if (durationMinute < 10) {
					durationMinute = '0' + durationMinute;
				}
				return (durationMinute + ':' + durationSecond)
			},

			playFun(playingObj) {
				this.initMic()
				backgroundAudioManager.title = this.playingObj.audio_name
				backgroundAudioManager.epname = this.playingObj.starName
				backgroundAudioManager.singer = this.playingObj.audio_name
				// backgroundAudioManager.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
				backgroundAudioManager.src = this.playingObj.audio_path

				// 歌词老版
				// this.storyContent = this.sliceNull(this.parseLyric(this.playingObj.lyric))
				
				// 歌词新版
				let lyric = this.playingObj.lyric.split('[')
				let arr = [];
				
				const data = lyric.map((items, index) => {
					items = items.split(']')
					if( items[0] !=""){
						items[0] = items[0].replace(/^\[/g, '').split(':')
						items[0] = (items[0][0] * 60 + +items[0][1]).toFixed(2)
						arr.push(items)
					}
					
					
				})
				this.storyContent = arr
				
			},
			// 初始化
			initMic() {
				this.marginTop = 0;
				this.currentIndex = 0;
				this.now = "00:00";
				this.long = "00:00";
				this.sliderMax = 0;
				this.sliderValue = 0
			},

			//去除空白
			parseLyric: function(text) {
				let result = [];
				var lines = text.split('\n');
				var pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
				while (!pattern.test(lines[0])) {
					lines = lines.slice(1);
				};
				//上面用'\n'生成数组时，结果中最后一个为空元素，这里将去掉
				lines[lines.length - 1].length === 0 && lines.pop();
				lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
					//提取出时间[xx:xx.xx]
					var time = v.match(pattern),
						//提取歌词
						value = v.replace(pattern, '');
					// 因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
					time.forEach(function(v1, i1, a1) {
						//去掉时间里的中括号得到xx:xx.xx
						var t = v1.slice(1, -1).split(':');
						//将结果压入最终数组
						result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
					});
				});
				//最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
				result.sort(function(a, b) {
					return a[0] - b[0];
				});
				return result;
			},
			sliceNull: function(lrc) {
				var result = []
				for (var i = 0; i < lrc.length; i++) {
					if (lrc[i][1] == "") {} else {
						result.push(lrc[i]);
					}
				}
				return result
			},
			//添加到购物车
			addShop() {
				this.shopIsShow = true;
				this.btnType = 0;
			},
			add: function(item, option) {
				let sumsdata = {
					audio_name: item.audio_name,
					size: option.size,
					commodity_price: option.commodity_price,
					cunt: 1
				};

				if (this.pazzdata.length > 0) {
					let pd = this.pazzdata.filter(pazznew => {
						return pazznew.audio_name == item.audio_name && pazznew.commodity_price == option.commodity_price;
					});
					if (pd != null && pd.length > 0) {
						pd[0].cunt++;
					} else {
						this.pazzdata.push(sumsdata);
					}
				}
			},
			// 底部确定
			confirmBtn() {
				uni
				if (this.btnType == 0) {
					let addShowList = uni.getStorageSync("addShowList") || [];
					let playingObj = this.playingObj;

					var shop = addShowList.find(function(e) {
						return e.version === playingObj.version
					})

					if (shop) {
						addShowList.map((item) => {
							if (item.version == shop.version) {
								item.commodity_num += +playingObj.commodity_num
							}
						})
					} else {
						addShowList.push(playingObj)
					}

					uni.setStorageSync("addShowList", addShowList)
					uni.showToast({
						duration: 1000,
						icon: "none",
						title: "添加成功，在购物车等您"
					})
					this.shopIsShow = false;
				} else {
					uni.navigateTo({
						url: "/pages/shopConfirmation/shopConfirmation?orderType=1"
					})
					this.shopIsShow = false;
				}
			},
			//加减合并
			addBtn(type) {
				let playingObj = this.playingObj;
				if (type == "add") {
					console.log("add")
					playingObj.commodity_num++;

				} else {
					console.log("减")
					if (playingObj.commodity_num == 1) {
						uni.showToast({
							icon: "none",
							duration: 1000,
							title: "不能在少啦"
						})
					} else {
						playingObj.commodity_num--;
					}

				}
				this.playingObj = playingObj
			},
			// 购买
			buyShop() {
				this.shopIsShow = true;
				this.btnType = 1;
				//组建立即购买信息
				var buyNowInfo = this.buliduBuyNowInfo();

				console.log(buyNowInfo);
			},
			/**
			 * 组建立即购买信息
			 */
			buliduBuyNowInfo: function() {
				let shopIndex = this.shopIdx;
				// 写入本地存储
				uni.setStorage({
					key: "buyNowInfo",
					data: ''
				})
				let miObj = [];
				var shopCarMap = {};
				console.log(this.playingObj);
				shopCarMap.active = this.playingObj.isChecked
				shopCarMap.audio_id = this.playingObj.audio_id
				shopCarMap.productImg = this.playingObj.productImg
				shopCarMap.isChecked = this.playingObj.isChecked
				shopCarMap.lyric = this.playingObj.lyric;
				shopCarMap.audio_name = this.playingObj.audio_name;
				shopCarMap.commodity_num = this.shopDetails.commodity_num;
				shopCarMap.commodity_price = this.playingObj.commodity_price;
				shopCarMap.playbackVolume = this.playingObj.playbackVolume;
				shopCarMap.starName = this.playingObj.starName;
				shopCarMap.audio_path = this.playingObj.audio_path;
				shopCarMap.vshopCarMapersion = this.playingObj.vshopCarMapersion;
				miObj.push(shopCarMap)
				// 写入本地存储
				uni.setStorage({
					key: "buyNowInfo",
					data: miObj
				})
				return miObj;
			},
			// 关闭
			close() {
				this.shopIsShow = false;
			},
		}
	}
</script>

<style lang="scss">
	.box {
		height: 90vh;
		justify-content: center;

		/* 播放头像 */
		.star_box {
			// animation: headRotate 11s linear infinite;

			.big_block {
				justify-content: center;
				position: relative;

				.star_img {
					width: 340upx;
					height: 340upx;
					background: rgba(216, 216, 216, 1);
					border-radius: 50%;
					border: 60upx solid rgba(0, 0, 0, 1);
					animation: headRotate 11s linear infinite;
				}

				.arunning {
					animation-play-state: running;
				}

				.apaused {
					animation-play-state: paused;
				}

				.center_block {
					width: 96upx;
					height: 96upx;
					background: rgba(0, 0, 0, 0.5);
					border-radius: 50%;
					position: absolute;
					margin: 0 auto;
					justify-content: center;

					.bg_fff {
						width: 45upx;
						height: 45upx;
						border-radius: 50%;
					}
				}

			}

			.photo_animation {
				animation: headRotate 11s linear infinite;
			}

			@keyframes headRotate {
				0% {
					transform: rotate(0deg);
				}

				50% {
					transform: rotate(180deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}
		}

		//歌词
		.scroll_view {
			position:relative;
			height: 69px;
			overflow: hidden;
			text-align: center;
			// margin-top: 80upx;
			// margin-bottom:50upx;
			// box-shadow:20upx 0 20upx 0 #D9D9D9;
			.gc_view {
				height: 23px;
				line-height: 23px;
				font-weight: 400;
				font-size: 32upx;
			}

			.currentTime {
				color: #333333;
			}
		}
		.scroll_top{
			width:100%;
			height: 80upx;
			// background: #007AFF;
		}
		.scroll_bottom{
			width:100%;
			height: 50upx;
			// background: rgba(255,255,255,.6);
			// z-index: 999;
		}

		.time_str {
			color: #999999;
			font-size: 22upx;
		}

		.bg_time_box {
			height: 100rpx;
			width: 100%;
			display: flex;
			align-items: center;

			.bg_time {
				position: relative;
				width: 90%;
				margin-left: 5%;
				background: #999999;
				height: 5rpx;
				border-radius: 20rpx;

				.red {
					width: 0;
					background: #FF65A1;
					height: 100%;
					font-weight: bold;
				}
			}
		}

		.mic_controller {
			margin-top: 3%;
			justify-content: center;

			.mic_play_icon {
				width: 102upx;
				height: 102upx;
				margin: 0 74upx;
			}

			.com_mic_c {
				width: 30upx;
				height: 34upx;
			}
		}

		.footer_box {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;

			// footer
			.footer {
				height: 128upx;
				justify-content: space-between;

				.display_column {
					font-size: 22upx;
					color: #333333;

				}

				image {
					width: 33upx;
					height: 33upx;
					margin-bottom: 10upx;
				}

				.display_flex {
					width: 562upx;
					height: 84upx;
					border-radius: 40upx;
					overflow: hidden;

					view {
						width: 50%;
						height: 84upx;
						line-height: 84upx;
						text-align: center;
						color: #fff;

					}

					.add {
						background: #F7B500;
					}
				}
			}


		}

		.show_block {
			height: 100vh;
			width: 100%;
			background: rgba(0, 0, 0, .4);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;

			.shop_content {
				width: 100%;
				background: #fff;
				height: 471upx;
				padding: 30upx 0;
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;

				.shop_info {
					justify-content: space-between;

					.shop_img {
						width: 196upx;
						height: 189upx;
						background: rgba(0, 0, 0, 0.3);
						border-radius: 16upx;
					}

					.shop_msg {
						width: 58%;
						height: 130upx;

						.pic_color {
							font-size: 50upx;
							margin-bottom: 20upx;
						}
					}

					.close {
						height: 189upx;

						.close_icon {
							width: 22upx;
							height: 22upx;
						}
					}
				}
			}

			.shop_num {
				margin-top: 40upx;
				justify-content: space-between;
			}

			.yes {
				height: 84upx;
				background: rgba(255, 102, 102, 1);
				border-radius: 42upx;
				line-height: 84upx;
				text-align: center;
				color: #FFFFFF;
				margin-top: 15%;
			}
		}

	}
</style>
