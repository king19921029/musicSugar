<template>
	<view class="box border_top">

		<view class="bg_fff border_bottom">
			<view class="com_width com_list display_flex">
				<view class="list_title">收货人</view>
				<input v-model="name" value="" type="text" placeholder="请输入收货人姓名">
				<view class="icon_bix">
					<image @click="initInput(0)" v-if="name!=''" src="/static/img/login_close.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="bg_fff border_bottom">
			<view class="com_width com_list display_flex">
				<view class="list_title">手机号码</view>
				<input v-model="phone" type="number" value="phone" placeholder="请输入收货人联系电话">
				<view class="icon_bix">
					<image @click="initInput(1)" v-if="phone!=''" src="/static/img/login_close.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="bg_fff border_bottom">
			<view class="com_width com_list display_flex">
				<view v-model="phone" class="list_title">所在地区</view>
				<!-- <input type="text" placeholder="请输入收货人联系电话"> -->
				<picker mode="region" @change="cityChange">
					<!-- <view v-if="city.length > 0">{{cityArr[0]}} {{cityArr[1]}} {{cityArr[2]}}</view> -->
					<view v-if="cityArr.length>0" class="">{{cityArr}}</view>
					<view v-else class="picker_view">选择省、市、区</view>
				</picker>
				<view class="icon_bix">
					<image class="right_icon" src="/static/img/right_icon.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="bg_fff border_bottom">
			<view class="com_width com_list display_flex">
				<view class="list_title">详细地址</view>
				<input v-model="addressarr" type="text" placeholder="请输入街道、小区、楼层、门牌号">
				<view class="icon_bix"></view>
			</view>
		</view>

		<view @click="saveFun" class="footer color_fff bg_all display_flex com_width">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				phone: "",
				cityArr: [],
				addressarr: "",
				citybox: "",
				ajxtrue: false,
			}
		},
		onShow() {
			var addressList = [];
			// 获取购物车数据
			var adrarr = wx.getStorageSync('address');

			this.name = adrarr.name;
			this.phone = adrarr.phone;
			this.cityArr = adrarr.cityArr;
			this.addressarr = adrarr.addressarr;

		},
		methods: {

			cityChange(e) {
				console.log(e);
				this.cityArr = e.detail.value[0] + e.detail.value[1] + e.detail.value[2];

			},
			initInput(e) {
				if (e == 0) {
					this.name = "";
				} else {
					this.phone = "";
				}
			},
			saveFun() {

				if (this.name != "" && this.phone != "" && this.cityArr.length > 0 && this.address != "") {
					if (this.blurPhone(this.phone)) {
						let obj = {
							"name": this.name,
							"phone": this.phone,
							"cityArr": this.cityArr,
							"addressarr": this.addressarr,
							"address": this.cityArr+this.addressarr,
						}
						console.log(obj)
						uni.setStorageSync("address", obj)
						uni.navigateBack()
					}

				} else {
					uni.showToast({
						title: "请填写完整信息",
						icon: "none",
						duration: 1000
					})
				}
			},
			// 手机号验证
			blurPhone: function(phone) {
				let that = this
				var ajxtrue = false;
				if (!(/^1[34578]\d{9}$/.test(phone))) {
					ajxtrue = false;
					wx.showToast({
						title: '手机号有误',
						icon: '/static/img/login_close.png',
						duration: 2000
					})

				} else {
					ajxtrue = true;
				}
				return ajxtrue;
			},

		}
	}
</script>

<style lang="scss">
	.box {
		font-size: 28upx;
		background: rgba(244, 244, 244, 1);
		height: 99vh;

		.com_list {
			padding: 28upx 0;
			justify-content: space-between;

			.list_title {
				width: 20%;
				color: #999999;
			}

			input {
				width: 70%;
				justify-content: space-between;
			}

			picker {
				width: 70%;
			}

			.picker_view {
				width: 100%;
				color: #999999;
			}

			.icon_bix {
				width: 32upx;
				height: 32upx;
				display: flex;
				justify-content: flex-end;

				image {
					width: 100%;
					height: 100%;
				}

				.right_icon {
					width: 14upx;
					height: 22upx;
				}
			}
		}

		.footer {
			height: 84upx;
			border-radius: 42upx;
			justify-content: center;
			margin-top: 40upx;
			font-size: 32upx;
		}
	}
</style>
