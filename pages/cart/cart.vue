<template>
	<view class="box border_top">
		<view class="com_width headers" v-if="goodsList.list.length > 0">共{{goodsList.list.length}}件宝贝</view>
		<!-- 商品盒子 -->
		<view class="shop_box">
			<view class="shop_list com_width" v-for="(item,idx) in shopList" :key="idx">
				<view class="com_width">
					<view class="shop_list_top display_flex">
						<image @click="selectTap(item.audio_id,idx)" class="rid_icon" v-if="item.active" src="/static/img/shi.png" mode=""></image>
						<image @click="selectTap(item.audio_id,idx)" class="rid_icon" v-else src="/static/img/kong.png" mode=""></image>

						<image class="shop_img" :src="item.productImg"></image>

						<view class="shop_info">
							<view class="shop_mic_name">{{item.audio_name}}</view>
							<view class="shop_name color_gray">{{item.starName}}</view>
							<view class="pic_color">¥{{item.commodity_price}}</view>
						</view>
					</view>
					<view class="shop_list_bottom">
						<view class="display_flex shop_list_count">
							<view @click="jianBtnTap(item.audio_id,'reduce',idx)" class="count_btn">
								<image class="re_icon" src="/static/img/reduce.png" mode=""></image>
							</view>
							<view class="count_num">{{item.commodity_num}}</view>
							<view @click="jiaBtnTap(item.audio_id,'add',idx)" class="count_btn">
								<image class="add_icon" src="/static/img/add.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 空的购物车 -->
		<view class="cartnull" v-if="goodsList.list.length <= 0">
			<view class="cartimg">
				<image src="/static/img/cart-off3.png" mode=""></image>
			</view>
			<view class="textnull"><text>购物车空空如也~</text></view>
			<view class="stroll" @click="toIndexPage"><text>去逛逛</text></view>
		</view>
		<!-- footer -->
		<view class="footer" v-if="goodsList.list.length > 0">
			<view class="com_width display_flex footer_box">
				<view class="all_shop display_flex" @click="bindAllSelect">
					<image class="rid_icon" v-if="goodsList.allSelect" src="/static/img/shi.png" mode=""></image>
					<image class="rid_icon" v-else src="/static/img/kong.png" mode=""></image>
					<text class="color_gray">全选</text>
				</view>
				<view class="display_flex">
					<view>合计：</view>
					<view class="pic_color">{{goodsList.totalPrice}}</view>
					<view @click="goConfirmation" :class="[goodsList.noSelect?'buy_btn':'buyselect_btn']">结算</view>
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
				shopList: [],
				goodsList: {
					saveHidden: true,
					totalPrice: 0,
					allSelect: true,
					noSelect: false,
					list: [],
				},
			}
		},
		onShow() {

			var shopList = [];
			// 获取购物车数据
			var shopCarInfoMem = wx.getStorageSync('addShowList');
			this.goodsList.list = shopCarInfoMem;
			shopList = shopCarInfoMem;
			console.log(shopList);
			this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), shopList);

		},
		methods: {
			// 去订单页
			goConfirmation() {
				
				var that = this;
				if (this.goodsList.noSelect) {
					wx.showToast({
						title: '请选择商品',
						image: '/static/img/login_close.png',
						duration: 2000
					})
					return;
				}
				var shopList = [];
				var shopCarInfoMem = wx.getStorageSync('addShowList');

				shopList = shopCarInfoMem.filter(entity => {
					return entity.active;
				});

				if (shopList.length == 0) {
					wx.showToast({
						title: '请选择商品',
						image: '/static/img/login_close.png',
						duration: 2000
					})
					return;
				}
				this.navigateToPayOrder();

			},
			delItem: function(index) {
				//var index = e.currentTarget.dataset.index;
				var list = this.goodsList.list;
				list.splice(index, 1);
				this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
			},
			selectTap: function(itemid, index) {
				//var index = e.currentTarget.dataset.index;
				var list = this.goodsList.list;
				if (index !== "" && index != null) {
					list[parseInt(index)].active = !list[parseInt(index)].active;
					this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
				}
			},
			totalPrice: function() {
				var list = this.goodsList.list;
				var total = 0;
				for (var i = 0; i < list.length; i++) {
					var curItem = list[i];
					if (curItem.active) {
						total += parseFloat(curItem.commodity_price) * curItem.commodity_num;
					}
				}
				total = parseFloat(total.toFixed(2)); //js浮点计算bug，取两位小数精度
				return total;
			},
			allSelect: function() {
				var list = this.goodsList.list;
				var allSelect = false;
				for (var i = 0; i < list.length; i++) {
					var curItem = list[i];
					if (curItem.active) {
						allSelect = true;
					} else {
						allSelect = false;
						break;
					}
				}
				return allSelect;
			},
			noSelect: function() {
				var list = this.goodsList.list;
				var noSelect = 0;
				for (var i = 0; i < list.length; i++) {
					var curItem = list[i];
					if (!curItem.active) {
						noSelect++;
					}
				}
				if (noSelect == list.length) {
					return true;
				} else {
					return false;
				}
			},
			setGoodsList: function(saveHidden, total, allSelect, noSelect, list) {
				this.goodsList.saveHidden = saveHidden;
				this.goodsList.totalPrice = total;
				this.goodsList.allSelect = allSelect;
				this.goodsList.noSelect = noSelect;
				this.goodsList.list = list;
				this.shopList = list;
				console.log(list);
				var shopCarInfo = {};
				var tempNumber = 0;
				shopCarInfo.shopList = list;
				for (var i = 0; i < list.length; i++) {
					tempNumber = tempNumber + list[i].number
				}
				shopCarInfo.shopNum = tempNumber;
				wx.setStorage({
					key: "addShowList",
					data: list
				})
			},
			bindAllSelect: function() {
				var currentAllSelect = this.goodsList.allSelect;
				var list = this.goodsList.list;
				if (currentAllSelect) {
					for (var i = 0; i < list.length; i++) {
						var curItem = list[i];
						curItem.active = false;
					}
				} else {
					for (var i = 0; i < list.length; i++) {
						var curItem = list[i];
						curItem.active = true;
					}
				}

				this.setGoodsList(this.getSaveHide(), this.totalPrice(), !currentAllSelect, this.noSelect(), list);
			},
			jiaBtnTap: function(itemId, jia, index) {
				// var index = e.currentTarget.dataset.index;
				var list = this.goodsList.list;
				if (index !== "" && index != null) {
					// if (list[parseInt(index)].number < 10) {
					list[parseInt(index)].commodity_num++;
					this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
					//}
				}
			},
			jianBtnTap: function(itemId, jian, index) {
				//var index = e.currentTarget.dataset.index;
				var list = this.goodsList.list;
				if (index !== "" && index != null) {
					if (list[parseInt(index)].commodity_num > 1) {
						list[parseInt(index)].commodity_num--;
						this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
					} else if (list[parseInt(index)].num == 1) {
						this.delId = index;
						this.alertBoxIsShow = true
					}
				}
			},
			editTap: function() {
				var list = this.goodsList.list;
				for (var i = 0; i < list.length; i++) {
					var curItem = list[i];
					curItem.active = false;
				}
				this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
			},
			saveTap: function() {
				var list = this.goodsList.list;
				for (var i = 0; i < list.length; i++) {
					var curItem = list[i];
					curItem.active = true;
				}
				this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
			},
			getSaveHide: function() {
				var saveHidden = this.goodsList.saveHidden;
				return saveHidden;
			},
			deleteSelected: function() {
				var list = this.goodsList.list;
				/*
				 for(let i = 0 ; i < list.length ; i++){
				       let curItem = list[i];
				       if(curItem.active){
				         list.splice(i,1);
				       }
				 }
				 */
				// above codes that remove elements in a for statement may change the length of list dynamically
				list = list.filter(function(curGoods) {
					return !curGoods.active;
				});
				this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
			},
			// 浮层关闭
			alertBoxClose() {
				this.alertBoxIsShow = false
			},
			// 删除
			alertBoxDelete(e) {
				this.delItem(this.delId);
				this.alertBoxIsShow = false
			},
			toIndexPage: function() {
				wx.switchTab({
					url: "/pages/index/index"
				});
			},
			navigateToPayOrder: function() {
				wx.hideLoading();
				wx.navigateTo({
					url: "/pages/shopConfirmation/shopConfirmation"
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
				background: #FF6666;
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

				.buyselect_btn {
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

				.buy_btn {
					width: 200upx;
					height: 84upx;
					background: #ccc;
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
