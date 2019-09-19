<template>
	<view class="box border_top">
		<!-- 地址 -->
		<view @click="goAddress" v-if="userAddress == null" class="com_width none_dz display_flex bg_fff">
			<view class="headers display_flex com_width">
				<image class="address_icon" src="/static/img/coordinate.png" mode=""></image>
				<view class="name">请选择配送地址</view>
				<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
			</view>
			<image class="none_dz_d" src="/static/img/address_icon.png" mode=""></image>
		</view>

		<view v-else @click="goAddress" class="com_width city_dz display_flex bg_fff">
			<view class="headers display_flex com_width">
				<image src="/static/img/coordinate.png" mode=""></image>
				<view class="user_msg">
					<view class="user_name display_flex">
						<view><text class="name">{{userAddress.name}}</text><text class="color_gray">{{userAddress.phone}}</text></view>
						<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
					</view>
					<view class="city">{{userAddress.cityArr}} {{userAddress.addressarr}}</view>
				</view>
			</view>
		</view>
		<!-- 商品信息 -->
		<view class="shop_content_bot">
			<view class="shop_content com_width bg_fff" v-for="(item,index) in addShowList" :key="index">
				<view class="shop_info com_width display_flex">
					<image class="shop_img" :src="item.productImg" mode=""></image>
					<view class="shop_msg">
						<view class="mic_name">{{item.audio_name}}</view>
						<view class="color_gray">{{item.starName}}</view>
						<view class="pic_color">¥ {{item.commodity_price}}</view>
					</view>
				</view>
				<view class="shop_num com_width display_flex">
					<view class="left_title">购买数量</view>
					<view class="right_title color_gray">x{{item.commodity_num}}</view>
				</view>
				<view class="shop_num com_width display_flex">
					<view class="left_title">服务</view>
					<view class="right_title color_gray">此商品性质不支持7天退货</view>
				</view>

				<view class="shop_num com_width display_flex">
					<view class="left_title">配送方式</view>
					<view class="right_title color_gray">普通快递 快递免邮</view>
				</view>

			</view>
		</view>

		<!-- footer -->
		<view class="footer bg_fff display_flex">
			<text class="footer_shop_num">共计{{allGoodsNum}}件</text>
			<text class="all_pic">合计：</text>
			<text class="pic_color">¥{{allGoodsPrice}}</text>
			<text @click="confirmation" class="footer_btn">提交订单</text>
		</view>
		<!-- 弹框 -->
		<home-alert v-if="isFrist" @homeGoRegister='homeGoRegister'></home-alert>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userAddress: null,
				num: 0,
				allNum: 0,
				addShowList: [],
				orderType: "", //订单类型，购物车下单或立即支付下单，默认是购物车，
				allGoodsPrice: 0, //总的价格
				allGoodsNum: 0, //总的数量,
				isFrist: false, //是否登陆

			}
		},
		onLoad: function(e) {
			var that = this;
			//显示收货地址标识
			that.orderType = e.orderType;
		},
		onShow() {
			var that = this;
			var shopList = [];
			var productid = '';
			let accesstoken = uni.getStorageSync("access_token");
			this.accesstoken = accesstoken;
			console.log(accesstoken);
			if (accesstoken != "" || accesstoken != undefined) {
				that.isFrist = false;
			}

			//立即购买下单
			if (that.orderType == '1') {
				var shopList = uni.getStorageSync('buyNowInfo');
				console.log(shopList);
			} else {
				//购物车下单
				var shopCarInfoMem = uni.getStorageSync('addShowList');
				// shopList = shopCarInfoMem.shopList
				shopList = shopCarInfoMem.filter(entity => {
					return entity.active;
				});

			}
			that.addShowList = shopList;

			that.initShippingAddress();


		},
		methods: {
			initShippingAddress: function() {
				// 地址
				this.userAddress = uni.getStorageSync("address") || null;
				//
				this.processYunfei();
			},
			processYunfei: function() {
				var that = this;
				var goodsList = this.addShowList;
				var goodsJsonStr = "[";

				var allGoodsPrice = 0;
				var allGoodsNum = 0;
				var goodsId = '';
				for (let i = 0; i < goodsList.length; i++) {
					let carShopBean = goodsList[i];

					allGoodsPrice += Number(carShopBean.commodity_price) * Number(carShopBean.commodity_num);
					allGoodsNum += carShopBean.commodity_num;
					var goodsJsonStrTmp = '';
					if (i > 0) {
						goodsJsonStrTmp = ",";
					}
					if (i >= 0) {
						goodsId += carShopBean.audio_id + ",";
					}

					goodsJsonStrTmp += '{"audio_id":' + carShopBean.audio_id + ',"commodity_num":' + carShopBean.commodity_num + '}';
					goodsJsonStr += goodsJsonStrTmp;


				}
				goodsJsonStr += "]";
				//console.log(goodsJsonStr);
				that.allGoodsPrice = Number(allGoodsPrice).toFixed(2);
				that.goodsJsonStr = goodsJsonStr;
				that.goodsId = goodsId;
				that.allGoodsNum = allGoodsNum;

				//that.createOrder();
			},
			goAddress() {
				uni.navigateTo({
					url: "/pages/address/address"
				})
			},
			// 去注册
			homeGoRegister() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			confirmation() {
				var that = this;
				//是否注册
				let accesstoken = uni.getStorageSync("access_token");
				this.accesstoken = accesstoken;
				console.log(accesstoken);

				if (accesstoken == "" || accesstoken == undefined) {
					that.isFrist = true
				} else {
					that.isFrist = false;
					if (!this.userAddress) {
						uni.showToast({
							title: "请选择配送地址",
							duration: 1000,
							icon: "none"
						})
					} else {

						//去支付
						this.payOrder();
					}

				}
			},
			async payOrder(e) {
				const that = this;
				//拼接字段
				let accesstoken = uni.getStorageSync("access_token");
				var goodsJsonStr = JSON.parse(this.goodsJsonStr)
				var postData = {};
				postData.id = accesstoken.id;
				postData.access_token = accesstoken.access_token;
				postData.ip = '192.168.1.126';
				postData.logistics = this.userAddress;
				postData.commodity_list = goodsJsonStr;
				console.log(postData);
				//var goodsJsonStr = "[";
				try {
					let data = await that.$wxhttp.post({
						url: '/lollipop/api/v1/request_order',
						data: JSON.stringify(postData),
						headers: {
							"content-type": "application/json"
						}
					})
					if (data.message) {
						console.log(data.message);
						//微信支付
						wx.requestPayment({
							'timeStamp': data.message.wx_timeStamp,
							'nonceStr': data.message.wx_nonceStr,
							'package': data.message.wx_package,
							'signType': 'MD5',
							'paySign': data.message.wx_paySign,
							success: function(res) {
								// 清空购物车数据
								//基本数据
								uni.showToast({
									title: '支付成功',
									icon: 'none',
									duration: 3000
								});
							},
							fail: function(res) {
								console.log(res.errMsg);
								uni.showToast({
									title: res.errMsg,
									icon: 'none',
									duration: 2000
								});
							}
						})
						//uni.navigateBack()
					}

				} catch (error) {
					console.log(error);
				}

			},

		}
	}
</script>

<style lang="scss">
	page {
		background: rgba(244, 244, 244, 1);
	}

	.box {

		// height: 100vh;
		>.city_dz {
			margin-top: 40upx;
			border-radius: 20upx;

			.headers {
				justify-content: space-between;

				>image {
					width: 64upx;
					height: 64upx;
				}

				.user_msg {
					padding: 30upx 0 20upx 0;
					width: 84%;

					.city {
						line-height: 46upx;
					}

					.user_name {
						justify-content: space-between;
						margin-bottom: 30upx;

						.name {
							font-size: 32upx;
							font-weight: bold;
							margin-right: 20upx;
						}

					}
				}
			}
		}

		.none_dz {
			margin-top: 40upx;
			border-radius: 20upx;
			padding: 72upx 0;
			justify-content: space-between;
			position: relative;

			.address_icon {
				width: 64upx;
				height: 64upx;
				margin-right: 30upx;
			}

			.right_icon {
				width: 14upx;
				height: 22upx;
			}

			.name {
				width: 82%;
			}

			.none_dz_d {
				position: absolute;
				width: 92%;
				height: 4upx;
				left: 4%;
				bottom: 0;
			}
		}

		.shop_content_bot {
			padding-bottom: 142upx;
		}

		.shop_content {
			// height: 471upx;
			padding: 30upx 0 50upx 0;
			border-radius: 20upx;
			margin-top: 30upx;

			.shop_info {
				justify-content: space-between;

				.shop_img {
					width: 196upx;
					height: 189upx;
					background: rgba(0, 0, 0, 0.3);
					border-radius: 16upx;
				}

				.shop_msg {
					width: 62%;
					height: 130upx;

					.mic_name {
						font-size: 32upx;
						font-weight: 500;
						margin-bottom: 14upx;
					}

					.pic_color {
						font-size: 32upx;
						margin-top: 20upx;
					}
				}
			}
		}

		.shop_num {
			margin-top: 40upx;
			justify-content: space-between;

			.left_title {
				width: 33%;
				text-align: end;
			}

			.right_title {
				width: 62%;
			}
		}

		.footer {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 112upx;
			justify-content: flex-end;

			.footer_shop_num {
				font-size: 28upx;
				color: rgba(102, 102, 102, 1);
			}

			.all_pic {
				font-size: 32upx;
				margin-left: 24upx;
			}

			.pic_color {
				font-size: 32upx;
			}

			.footer_btn {
				width: 240upx;
				height: 84upx;
				background: rgba(255, 102, 102, 1);
				border-radius: 42upx;
				color: #fff;
				line-height: 84upx;
				text-align: center;
				margin: 0 30upx;
				font-size: 32upx;
			}
		}

	}
</style>
