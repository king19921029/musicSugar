<template>
	<view class="box border_top">
		<view class="bg_fff border_bottom">
			<view class="com_width order_status ">
				订单状态：<text class="color_all">{{orderType}}</text>
			</view>
		</view>
		<view class="com_width city_dz display_flex bg_fff">
			<view class="headers display_flex com_width">
				<image src="/static/img/coordinate.png" mode=""></image>
				<view class="user_msg">
					<view class="user_name display_flex">
						<view><text class="name">{{userAddress.name}}</text><text class="color_gray">{{userAddress.phone}}</text></view>
					</view>
					<view class="city">{{userAddress.address}}</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="com_width bg_fff" v-for="(item,index) in order_shop" :key="index">
				<view class="com_width shop_list">
					<view class="list_content space_between display_flex">
						<image class="list_img" :src="item.productImg" mode=""></image>
						<view class="list_msg">
							<view class="list_msg_top display_flex">
								<view class="list_name_box">
									<view>{{item.audio_name}}</view>
									<view class="margin_tops">{{item.starName}}</view>
								</view>
								<view class="list_num_box">
									<view>¥{{item.commodity_price}}</view>
									<view class="margin_tops color_gray">x{{item.commodity_num}}</view>
								</view>
							</view>
							<view class="list_msg_bot">
								共计{{item.commodity_num}}件商品 合计：¥ <text>{{item.allPic}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="com_width">
					<view class="order_msg_color display_flex order_msg space_between">
						<view>商品总价</view>
						<view>¥ {{item.allPic}}</view>
					</view>

					<view class="order_msg_color display_flex order_msg space_between">
						<view>运费（快递）</view>
						<view>¥ 0</view>
					</view>

					<view class="margin_bottoms display_flex order_msg space_between">
						<view>订单总价</view>
						<view>¥ {{item.allPic}}</view>
					</view>
				</view>
				<view class="border_top">
					<view class="com_width display_flex space_between">
						<view>实际支付</view>
						<view class="pic_color">¥ {{item.allPic}}</view>
					</view>
				</view>

			</view>
		</view>
		<view class="bg_fff bottom_box com_width">
			<view class="com_width display_flex space_between">
				<view>订单编号：</view>
				<view>2131214918712491231</view>
			</view>
			<view class="com_width display_flex space_between">
				<view>创建时间：</view>
				<view>2019-08-29 11:28:23</view>
			</view>
			<view class="com_width display_flex space_between">
				<view>付款时间：</view>
				<view>2019-08-29 11:28:23</view>
			</view>
			<view class="com_width display_flex space_between">
				<view>发货时间：</view>
				<view>2019-08-29 11:28:23</view>
			</view>
			<view class="com_width display_flex space_between">
				<view>成交时间：</view>
				<view>2019-08-29 11:28:23</view>
			</view>
		</view>
	</view>
</template>

<script>
	var wx_formatTime = require('../../utils/wx_formatTime.js');
	export default {
		data() {
			return {
				orderType: "2",
				userAddress: {},
				allPic: 0,
				order_shop: {

				}
			}
		},
		onLoad(option) {
			console.log(option)
			let obj = {
				"region": '1', //地区
				"gender": '2', //性别
				"musicType": '1', //音乐类型
				"commodity_num": 2,
				"commodity_price": 0.1,
				"audio_id": 2,
				"audio_name": "你看到的我是蓝色的",
				"starName": "杨超越",
				"playbackVolume": "3.29",
				"audio_path": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E4%BD%A0%E7%9C%8B%E5%88%B0%E7%9A%84%E6%88%91%E6%98%AF%E8%93%9D%E8%89%B2%E7%9A%84.mp3",
				"starBagImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%9D%A8%E8%B6%85%E8%B6%8A.jpg",
				"productImg": 'https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/product2.jpg',
				"starImg": 'https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%A0%B7%E8%B6%85%E8%B6%8A%E5%A4%B4%E5%83%8F.png',
				"swiper": [{
						'swiperimg': "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childswip1.jpg"
					},
					{
						'swiperimg': "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childswip2.jpg"
					},
					{
						'swiperimg': "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childswip3.jpg"
					}
				],
				"richText": [{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec1.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec2.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec3.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec4.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec5.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec6.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec7.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					},
					{
						"richImg": "https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/childdec8.jpg",
						'imgDec': "乳脂棒棒糖：胶质型糖果，表面光滑，口感细腻、润滑、软硬适口，不粘牙，不粘纸，咀嚼适口，无杂质；砂质型糖果，表面光滑，口感细腻、润滑、软硬适中，剖面有均匀、细小结晶，不粘牙、不粘纸，不粗糙，无杂质。"
					}
				],
				"version": 9,
				"id": 2,
				"isChecked": false,
				"lyric": "[00:00.000] 作曲 : 周佳佑 [00:01.000] 作词 : 何厚华 [00:12.300]你的嘴角 说话的时候有浅浅的笑 [00:20.040]那道线条 像一个记号永远都擦不掉 [00:27.490]午后的猫 懒懒的躺在阳光下睡著了 [00:34.540]我的心跳 却在奔跑 跟随你到天涯海角 [00:42.130]我曾经 在这条路上 转了好几个弯 [00:49.320]才终於懂得张开翅膀 [00:53.260]放你去蓝天尽情的飞翔 [00:57.440]现在的 你看到的我是蓝色的 [01:02.860]我的快乐 是当你仰望天空飘过的云朵 [01:09.890]你知道吗 那偶然滑落在你脸颊的雨滴 [01:17.340]是我的泪 成全你的自由 [01:24.550] [01:37.730]每个街角 不断的寻找有你的味道 [01:45.890]没有解药 我无法抗拒你独特的讯号 [01:52.890]午夜两点 有一些感觉突然都清楚了 [02:00.110]我的骄傲 不再燃烧 就让回忆将我拥抱 [02:07.850]我曾经 在这条路上 转了好几个弯 [02:14.720]才终於懂得张开翅膀 [02:18.540]放你去蓝天尽情的飞翔 [02:22.760]现在的 你看到的我是蓝色的 [02:28.410]我的快乐 是当你仰望天空飘过的云朵 [02:35.490]你知道吗 那偶然滑落在你脸颊的雨滴 [02:42.520]是我的泪 成全你的自由 [02:50.470] [02:54.880]现在的 你看到的我是蓝色的 [03:00.620]我的快乐 是当你仰望天空飘过的云朵 [03:07.640]你知道吗 那偶然滑落在你脸颊的雨滴 [03:14.880]是我的泪 成全你的自由 [03:22.070]是我的泪 成全你的自由 [03:33.850]"
			}
			uni.setStorageSync("order_shop", obj)
			//this.order_shop = obj
			this.allPic = obj.commodity_price * obj.commodity_num
			// this.userAddress = uni.getStorageSync("address") || {
			// 	userPhoto: "137109278219",
			// 	userName: "马云1",
			// 	cityArr: "北京市朝阳区",
			// 	address: "国贸大厦20层2014"
			// }

			if (option.orderType == "1") {
				this.orderType = "待发货"
			} else if (option.orderType == "2") {
				this.orderType = "待收货"
			}
			var time = wx_formatTime.formatTime(new Date());
			// 获取购物车数据
			this.userAddress = wx.getStorageSync('address');
			// 获取糖盒数据
			var carShopBean= uni.getStorageSync("tbox_audio");
			for (let i = 0; i <carShopBean.length; i++) {
				var allPic = Number(carShopBean[i].commodity_price) * Number(carShopBean[i].commodity_num);
				carShopBean[i].allPic=allPic;
			}
			this.order_shop =carShopBean;
			console.log(time);
		},
		methods: {

		},
	}
</script>

<style lang="scss">
	.box {
		background: rgba(244, 244, 244, 1);
		height: 100vh;

		.order_status {
			padding: 30upx 0;
		}

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

		.content {
			.bg_fff {
				padding: 40upx 0 20upx 0;
				border-radius: 20upx;
				margin-top: 30upx;

				.border_top {
					padding: 30upx 0 10upx 0;
				}

				.shop_list {
					image {
						width: 42upx;
						height: 42upx;
						margin-right: 21upx;
					}

					.list_content {
						margin: 30upx 0 5upx 0;

						.list_img {
							width: 195upx;
							height: 188upx;
							background: rgba(0, 0, 0, 0.4);
							border-radius: 16upx;
						}

						.list_msg {
							width: 64%;
							height: 148upx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.list_msg_top {
								justify-content: space-between;

								.list_num_box {
									text-align: end;
									width: 25%;
									font-size: 24upx;
								}

								.list_name_box {
									font-size: 28upx;
									font-weight: bold;
									width: 70%;
								}

								.margin_tops {
									margin-top: 10upx;
								}
							}

							.list_msg_bot {
								font-size: 24upx;
								text-align: end;

								text {
									font-size: 28upx;
								}
							}
						}
					}
				}

				.order_msg {
					margin-top: 30upx;
				}

				.margin_bottoms {
					margin-bottom: 30upx;
				}

				.order_msg_color {
					color: #999999;
				}
			}
		}

		.bottom_box {
			font-size: 24upx;
			color: #333333;
			margin-top: 30upx;
			padding: 30upx 0 1upx 0;
			border-radius: 20upx;

			>view {
				margin-bottom: 30upx;

			}
		}

	}
</style>
