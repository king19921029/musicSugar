<template>
	<view class="box">
		<!-- banner -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="swiper_num">{{swiperIdx+1}}/{{miObj.swiper.length}}</view>
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FF65A0" :indicator-dots="indicatorDots"
					 :autoplay="autoplay" :interval="interval" :duration="duration" @change="intervalChange">
						<swiper-item v-for="(item,index) in miObj.swiper" :key="index">
							<image class="swiper_img" :src="item.swiperimg" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="headers display_flex com_width">
			<view>
				<view class="pic_color"><text class="som_font">¥</text>{{miObj.commodity_price}}</view>
				<view class="mic_name">{{miObj.starName}}《{{miObj.audio_name}}》</view>
			</view>
			<view class="bg_all display_flex" @click="goMic()">试听 <image src="/static/img/test_mic.png" mode=""></image>
			</view>
		</view>
		<!-- 站位 -->
		<view class="com_block"></view>
		<!-- shop_msg -->
		<view class="shop_msg display_flex com_width">
			<view>
				<text class="color_gray">发货：</text>
				<text>深圳</text>
				<text class="color_gray">丨</text>
				<text class="color_gray">快递：</text>
				<text>免运费</text>
			</view>
			<!-- <view class="color_gray">月销 3826</view> -->
		</view>
		<!-- 站位 -->
		<view class="com_block"></view>
		<!-- 介绍 -->
		<view class="com_width fwb display_flex">
			<!-- 			富文本区域-->
			<view class="richbox">
				<view class="richli" v-for="(item,index) in miObj.richText" :key="index">
					<text>{{item.imgDec}}</text>
					<image :src="item.richImg" mode="widthFix"></image>
				</view>
			</view>

		</view>
		<!-- footer -->
		<view class="border_top footer_fbox">
			<view class="footer com_width display_flex">
				<button open-type="share" class="display_column">
					<image src="/static/img/fx_icon.png" mode=""></image>
					<text>分享</text>
				</button>
				<view class="display_flex">
					<view @click="addShop()" class="add">加入购物车</view>
					<view @click="buyShop()" class="bg_all">立即购买</view>
				</view>
			</view>
		</view>


		<!-- 购物弹框 -->
		<view v-if="shopIsShow" class="show_block">
			<view class="shop_content">
				<view class="shop_info com_width display_flex">

					<image class="shop_img" :src="miObj.productImg" mode=""></image>
					<view class="shop_msg">
						<view class="pic_color">¥ {{miObj.commodity_price}}</view>
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
						<view class="count_num">{{miObj.commodity_num}}</view>
						<view @click="addBtn('add')" class="count_btn">+</view>
					</view>
				</view>
				<view @click="confirmBtn" class="yes com_width">确定</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnType: 0, //添加到购物0 购买1
				shopId: 22,
				miObj: {},
				// 轮播相关
				swiperIdx: 0,
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				micTabStatus: 0,
				shopIsShow: false,
				shopDetails: {
					"audio_name": "华晨宇",
					"commodity_price": 10,
					"starName": "烟火里的尘埃",
					"commodity_num": 1,
					"audio_id": "2",
					isChecked: false,
				},
				fullScreen: false,
				goodsDetail: '', //商品详情
				shopIndex: '', //商品下标

			}
		},
		onLoad(options) {
			let micList = uni.getStorageSync("micList");
			this.shopId = options.id || 9;
			micList.map((item, index) => {
				if (item.id == this.shopId) {
					this.miObj = item
					this.shopIndex = index;
					console.log(index);
				}
			})
			this.goodsDetail = micList;
			console.log(micList);
		},
		onShow() {
			// let obj = this.shopDetails;
			// let cardShopList = uni.getStorageSync("cardShopList") || [];
			// if (cardShopList.length > 0) {
			// 	cardShopList.map((item) => {
			// 		if (item.id == obj.id) {
			// 			console.log("同一个商品")
			// 			item.num++;
			// 			console.log(obj.num)
			// 		} else {
			// 			cardShopList.push(obj)
			// 		}
			// 	})
			// } else {
			// 	cardShopList.push(obj)
			// }
			// uni.setStorageSync("cardShopList", cardShopList)


		},

		methods: {
			intervalChange(e) {
				this.swiperIdx = e.detail.current
			},
			onShareAppMessage: function(res) {
				console.log(res)
				if (res.from === 'button') {
					return {
						title: this.miObj.audio_name,
						path: '/pages/shopDetails/shopDetails'
					}
				}
				return {
					title: this.miObj.audio_name,
					path: '/pages/shopDetails/shopDetails'
				}
			},
			// 购买
			buyShop() {
				this.shopIsShow = true;
				this.btnType = 1;
				//组建立即购买信息
				var buyNowInfo = this.buliduBuyNowInfo();

				console.log(buyNowInfo);
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
					let miObj = this.miObj;

					var shop = addShowList.find(function(e) {
						return e.version === miObj.version
					})

					if (shop) {
						addShowList.map((item) => {
							if (item.version == shop.version) {
								item.commodity_num += +miObj.commodity_num
							}
						})
					} else {
						addShowList.push(miObj)
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
				let shopDetails = this.miObj;
				if (type == "add") {
					console.log("add")
					shopDetails.commodity_num++;

				} else {
					console.log("减")
					if (shopDetails.commodity_num == 1) {
						uni.showToast({
							icon: "none",
							duration: 1000,
							title: "不能在少啦"
						})
					} else {
						shopDetails.commodity_num--;
					}

				}
				this.miObj = shopDetails
			},
			// 音乐
			goMic() {
				uni.navigateTo({
					url: "/pages/micPlayPage/micPlayPage?id=" + this.miObj.id
				})
			},
			// 关闭
			close() {
				this.shopIsShow = false;
			},
			/**
			 * 组建立即购买信息
			 */
			buliduBuyNowInfo: function() {
				let shopIndex = this.shopIndex;
				// 写入本地存储
				uni.setStorage({
					key: "buyNowInfo",
					data: ''
				})
				let miObj = [];
				var shopCarMap = {};
				shopCarMap.active = this.goodsDetail[shopIndex].isChecked
				shopCarMap.audio_id = this.goodsDetail[shopIndex].audio_id
				shopCarMap.productImg = this.goodsDetail[shopIndex].productImg
				shopCarMap.isChecked = this.goodsDetail[shopIndex].isChecked
				shopCarMap.lyric = this.goodsDetail[shopIndex].lyric;
				shopCarMap.audio_name = this.goodsDetail[shopIndex].audio_name;
				shopCarMap.commodity_num = this.shopDetails.commodity_num;
				shopCarMap.commodity_price = this.goodsDetail[shopIndex].commodity_price;
				shopCarMap.playbackVolume = this.goodsDetail[shopIndex].playbackVolume;
				shopCarMap.starName = this.goodsDetail[shopIndex].starName;
				shopCarMap.audio_path = this.goodsDetail[shopIndex].audio_path;
				shopCarMap.vshopCarMapersion = this.goodsDetail[shopIndex].vshopCarMapersion;
				miObj.push(shopCarMap)
				// 写入本地存储
				uni.setStorage({
					key: "buyNowInfo",
					data: miObj
				})
				return miObj;
			},

		}
	}
</script>


<style lang="scss">
	button::after {
		border: none;
	}

	button {
		border: none;
		background: #FFFFFF;
		padding: 0;
		margin: 0;
		font-size: 22upx;
		line-height: 1;
	}

	.box {

		// banner
		.uni-padding-wrap {
			width: 100%;
			height: 620upx;

			.swiper {
				width: 100%;
				height: 620upx;
				position: relative;

				.swiper_num {
					position: absolute;
					background: rgba(0, 0, 0, 0.30);
					border-radius: 25upx;
					width: 80upx;
					height: 50upx;
					color: #fff;
					z-index: 998;
					text-align: center;
					line-height: 50upx;
					right: 5%;
					bottom: 5%;
				}

				image {
					width: 100%;
					height: 620upx
				}
			}
		}

		// header
		.headers {
			height: 160upx;
			justify-content: space-between;

			.pic_color {
				font-size: 40upx;
				margin-bottom: 14upx;

				.som_font {
					font-size: 28upx;
				}
			}

			.mic_name {
				font-weight: 500;
				font-size: 32upx;
				margin-top: 14upx;
			}

			.bg_all {
				width: 150upx;
				height: 66upx;
				background: rgba(255, 102, 102, 1);
				border-radius: 56upx;
				color: #fff;
				justify-content: center;
				line-height: 66upx;
				font-size: 28upx;

				image {
					width: 40upx;
					height: 40upx;
					margin-left: 14upx;
				}
			}
		}

		// 站位
		.com_block {
			width: 100%;
			height: 20upx;
			background: rgba(248, 248, 248, 1);
		}

		.shop_msg {
			height: 84upx;
			justify-content: space-between;
		}

		.fwb {
			justify-content: center;
			flex-direction: column;

			.richbox {
				justify-content: center;
				align-items: center;
				padding-bottom: 150upx;

				.richli {
					margin-top: 20upx;
					text{
						font-size: 24upx;
						color: #333333;
						line-height: 48upx;
					}
					image {
						margin-top: 20upx;
						width: 100%;
					}
				}


			}

		}

		// footer
		.footer_fbox {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			background: #FFFFFF;
		}

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
