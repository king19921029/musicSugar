<template>
	<view class="box border_top">
		<view class="com_width headers" v-if="shopId.length>0">共{{shopCount}}件宝贝</view>
		<!-- 商品盒子 -->
		<view class="shop_box">
			<view class="shop_list com_width" v-for="(item,idx) in shopList" :key="idx">
				<view class="com_width">
					<view class="shop_list_top display_flex">
						<image @click="checkedBtn(item.id)" class="rid_icon" v-if="item.isChecked" src="/static/img/shi.png" mode=""></image>
						<image @click="checkedBtn(item.id)" class="rid_icon" v-else src="/static/img/kong.png" mode=""></image>

						<image class="shop_img" :src="item.img"></image>

						<view class="shop_info">
							<view class="shop_mic_name">{{item.name}}</view>
							<view class="shop_name color_gray">{{item.starName}}</view>
							<view class="pic_color">¥{{item.pic}}</view>
						</view>
					</view>
					<view class="shop_list_bottom">
						<view class="display_flex shop_list_count">
							<view @click="addBtn(item.id,'reduce',idx)" class="count_btn">
								<image class="re_icon" src="/static/img/reduce.png" mode=""></image>
							</view>
							<view class="count_num">{{item.num}}</view>
							<view @click="addBtn(item.id,'add',idx)" class="count_btn">
								<image class="add_icon" src="/static/img/add.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 空的购物车 -->
		<view class="cartnull" v-if="shopId.length<=0">
			<view class="cartimg">
				<image src="/static/img/card.png" mode=""></image>
			</view>
			<view class="textnull"><text>购物车空空如也~</text></view>
			<view class="stroll" @click="strobtn"><text>去逛逛</text></view>
		</view>
		<!-- footer -->
		<view class="footer" v-if="shopId.length>0">
			<view class="com_width display_flex footer_box">
				<view class="all_shop display_flex">
					<image @click="allChecken" class="rid_icon" v-if="isAllChecked" src="/static/img/shi.png" mode=""></image>
					<image @click="allChecken" class="rid_icon" v-else src="/static/img/kong.png" mode=""></image>
					<text class="color_gray">全选</text>
				</view>
				<view class="display_flex">
					<view>合计：</view>
					<view class="pic_color">{{allPic}}</view>
					<view @click="goConfirmation" class="buy_btn">结算</view>
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<alert-box @alertBoxClose="alertBoxClose" @alertBoxDelete="alertBoxDelete" v-if="alertBoxIsShow">
		</alert-box>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				alertBoxIsShow: false,
				allPic: 0, //全部价格
				shopId: [], //所有商品id
				delId: 0, //删除ID
				shopCount: 0, //全部商品数量
				isAllChecked: false,
				shopList: [
					/* {
											"name": "周杰伦",
											"pic": 0.1,
											"micName": "黑色毛衣",
											"num": 1,
											"id": "1",
											"isChecked": false,
										},
										{
											"name": "华晨宇",
											"pic": 0.1,
											"micName": "烟火里的尘埃",
											"num": 2,
											"id": "2",
											"isChecked": false,
										} */
				],
			}
		},
		onShow() {

			var shopList = [];
			// 获取购物车数据
			shopList = wx.getStorageSync('addShowList');

			let arr = [];
			var shopnum = 0;
			if (shopList.length > 0) {
				shopList.map((item) => {
					arr.push(item.id);
					shopnum += item.num;
				})
			}
			this.shopCount = shopnum;
			this.shopId = arr;
			this.shopList = shopList;

		},
		methods: {
			// 去订单页
			goConfirmation() {
				if (this.allPic > 0) {
					uni.navigateTo({
						url: "/pages/shopConfirmation/shopConfirmation"
					})
				} else {
					wx.showToast({
						title: '请选择商品',
						image: '/static/img/login_close.png',
						duration: 2000
					})
				}

			},
			//加减合并
			addBtn(e, type, idx) {
				let list = this.shopList;
				let allPic = this.allPic;
				list.map((item) => {
					if (item.id == e) {
						if (type == "add") {
							console.log("add")
							item.num++;
							this.shopCount++;
							if (item.isChecked) {
								this.allPic = Number((item.pic + allPic).toFixed(2));
							}
						} else {
							console.log("减")
							if (item.num == 1) {
								this.delId = idx;
								this.alertBoxIsShow = true
							} else {
								item.num--;
								this.shopCount--;
								if (item.isChecked) {
									this.allPic = Number((allPic - item.pic).toFixed(2));
								}
							}

						}

					}
				})
				this.shopList = list
			},
			// 全选
			allChecken() {
				if (this.isAllChecked) {
					// 取消全选
					let list = this.shopList;
					this.isAllChecked = false;
					this.allPic = 0;
					list.map((item) => {
						item.isChecked = false
					})

				} else {
					// 全选
					let list = this.shopList;
					this.isAllChecked = true;
					let allPic = 0;
					list.map((item) => {
						item.isChecked = true
						allPic += parseFloat(item.pic) * item.num;
					})
					this.list = list
					this.allPic = parseFloat(allPic.toFixed(2));
				}

			},
			// 单选中
			checkedBtn(e) {
				let list = this.shopList;
				let allPic = this.allPic;
				let checkedArr = [];
				list.map((item) => {
					if (item.id == e) {
						item.isChecked = !item.isChecked
						if (item.isChecked) {
							this.allPic = Number((item.pic * item.num + allPic).toFixed(2));
						} else {
							console.log("未选择")
							console.log(item.pic * item.num)
							console.log(allPic)
							this.allPic = Number((allPic - item.pic * item.num).toFixed(2));
						}
					}
					// 判断全选
					if (item.isChecked) {
						checkedArr.push(item.id)
					}

				})
				if (this.shopId.length == checkedArr.length) {
					this.isAllChecked = true
				} else {
					this.isAllChecked = false
				}
				this.shopList = list
			},
			// 浮层关闭
			alertBoxClose() {
				this.alertBoxIsShow = false
			},
			// 删除
			alertBoxDelete(e) {
				let delId = this.delId;
				console.log(delId);
				this.shopList.splice(delId, 1);
				this.shopCount--;
				this.alertBoxIsShow = false
				// this.shopId.splice(delId, 1);
			},
			strobtn() {
				uni.switchTab({
					url: '../index/index',
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: rgba(244, 244, 244, 1);
	}

	.box {

		.headers {
			font-size: 32upx;
			font-weight: bold;
			padding-top: 40upx;
		}

		// 商品
		.shop_box {
			padding-bottom: 122upx;

			.shop_list {
				height: 230upx;
				padding: 30upx 0;
				background: rgba(255, 255, 255, 1);
				border-radius: 20upx;
				margin-top: 30upx;

				.shop_list_top {
					.rid_icon {
						width: 42upx;
						height: 42upx;
						margin-right: 20upx;
					}

					.shop_img {
						width: 196upx;
						height: 189upx;
						background: rgba(0, 0, 0, 0.4);
						border-radius: 16px;
						margin-right: 20upx;
					}

					.shop_info {
						height: 129upx;

						.shop_mic_name {
							font-size: 32upx;
							font-weight: bold;
							line-height: 50upx;
						}

						.shop_name {
							font-size: 28upx;
							margin-top: 5upx;
						}

						.pic_color {
							margin-top: 20upx;
							font-size: 32upx;
						}
					}
				}

				.shop_list_bottom {
					display: flex;
					justify-content: flex-end;
				}

			}
		}

		//空的购物车
		.cartnull {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 330upx;
			font-size: 28upx;
			color: #999;
			margin-bottom: 50upx;

			.cartimg image {
				height: 70rpx;
				width: 70rpx;
			}

			.textnull {
				font-size: 28upx;
				color: #C8C7CC;
				margin-top: 50upx;
			}

			.stroll {
				color: #fff;
				background: #e64340;
				border-radius: 6px;
				width: 300upx;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				font-size: 28upx;
				margin-top: 50upx;
			}
		}

		//footer 
		.footer {
			width: 100%;
			height: 112upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px -1upx 4upx 0upx rgba(224, 224, 224, 0.1);
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;

			.footer_box {
				height: 112upx;
				justify-content: space-between;
				font-size: 32upx;

				.rid_icon {
					width: 42upx;
					height: 42upx;
					margin-right: 20upx;
				}

				.buy_btn {
					width: 200upx;
					height: 84upx;
					background: rgba(255, 102, 102, 1);
					border-radius: 42upx;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 18upx;
				}
			}
		}
	}
</style>
