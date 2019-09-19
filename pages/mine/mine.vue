<template>
	<view class="box">
		<image class="bg_top" src="/static/img/bg_bop.png" mode=""></image>
		<!-- headers -->
		<view class="headers display_column com_width">
			<image class="headers_img" :src="userInfo.avatarUrl" mode=""></image>
			<view class="headers_name">{{userInfo.nickName}}</view>
		</view>
		<!-- list -->
		<view class="list_box bg_fff com_width">
			<view @click="goOrder(0)" class="border_bottom display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/wddd.png" mode=""></image>
						<view>我的订单</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>

		<!-- 	<view @click="goOrder(1) " class="border_bottom display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/dfk.png" mode=""></image>
						<view>待付款</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>
 -->
			<view @click="goOrder(1)" class="border_bottom display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/dfh.png" mode=""></image>
						<view>待发货</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>

			<view @click="goOrder(2)" class="border_bottom display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/dsh.png" mode=""></image>
						<view>待收货</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>

			<!-- <view @click="goOrder(4)" class="display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/dpj.png" mode=""></image>
						<view>待评价</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view> -->
		</view>

		<view class="list_box bg_fff com_width">
			<view class="border_bottom display_flex">
				<view class="com_width com_list display_flex">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/set.png" mode=""></image>
						<view>设置</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>

			<view class="border_bottom display_flex">
				<!-- <view class="com_width com_list display_flex"> -->
				<button class="com_width com_but display_flex" open-type="contact">
					<view class="display_flex">
						<image class="som_icon" src="/static/img/kf.png" mode=""></image>
						<view class="customer">联系客服</view>
					</view>
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</button>

				<!-- </view> -->
			</view>

		</view>
		<view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					"avatarUrl": "/static/img/dj.png",
					"nickName": "尼米用户"
				},
				statusType: [{
						name: "扫一扫",
						page: 0,
						iconPath: "../../assets/images/tab_new.png",
						selectedIconPath: "../../assets/images/tab_new.png",
						selected: true
					},
					{
						name: "我的糖盒",
						page: 0,
						iconPath: "../../assets/images/tab_new.png",
						selectedIconPath: "../../assets/images/tab_new.png",
						selected: false
					},
					{
						name: "消息",
						page: 0,
						iconPath: "../../assets/images/tab_new.png",
						selectedIconPath: "../../assets/images/tab_new.png",
						selected: false
					},
				],
				currentType: 0,
				list: [
					[],
					[],
					[]
				],
				windowHeight: ''
			}
		},
		onLoad() {
			if (uni.getStorageSync("userInfo")) {
				this.userInfo = uni.getStorageSync("userInfo")
			}
		},
		onShow() {
			if (uni.getStorageSync("userInfo")) {
				this.userInfo = uni.getStorageSync("userInfo")
			}
		},
		onLoad(options) {
			var systemInfo = wx.getSystemInfoSync();
			this.windowHeight = systemInfo.windowHeight;
			this.currentType = options.id ? options.id : 0
		},
		methods: {

			goOrder(e) {
				uni.navigateTo({
					url: "/pages/myOrder/myOrder?micTabStatus=" + e
				})
			},

			// 点击tab切换 
			swichNav: function(res) {
				if (this.currentType == res.detail.currentNum) return;
				this.currentType = res.detail.currentNum;
			},
			bindChange: function(e) {
				this.currentType = e.detail.current;
				if (!this.list[e.detail.current].length) {
					//this.getList();
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
		button {
			padding-left: 0;
			padding-right: 0;
			background-color: #fff;
			border-top: 1rpx solid #e8e8e8;
		}

		button::after {
			border: none;
		}

		// headers
		.headers {
			height: 225upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			z-index: 999;
			margin-top: 100upx;

			.headers_img {
				width: 146upx;
				height: 146upx;
				border-radius: 50%;
				border: 6upx solid rgba(255, 255, 255, 1);
				margin-top: -80upx;
			}

			.headers_name {
				font-size: 32upx;
				font-weight: 500;
				color: rgba(38, 38, 40, 1);
				margin-top: 20upx;
			}
		}

		.list_box {
			border-radius: 20upx;
			margin-top: 30upx;

			.border_bottom {
				border-bottom: 1upx solid #EEEEEE;
			}

			.com_list {
				height: 97upx;
				justify-content: space-between;

				.som_icon {
					width: 42upx;
					height: 42upx;
					margin-right: 22upx;
				}
			}

			.com_but {
				height: 97upx;
				justify-content: space-between;
				background: none;
				border: none;

				.som_icon {
					width: 42upx;
					height: 42upx;
					margin-right: 22upx;
				}

				.customer {
					font-size: 28upx;
				}
			}
		}
	}
</style>
