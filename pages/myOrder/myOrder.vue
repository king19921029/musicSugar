<template>
	<view class="box border_top">
		<!-- 音乐tab -->
		<scroll-view scroll-x :scroll-left="scrollLeft" class="bg_fff mic_tab" :class="[isTop?'is_g_top':'']">
			<view class="mic_tab_name" :class="[micTabStatus == idx ? 'add_color':'']" v-for="(item,idx) in micTab" :key="idx"
			 @click="micTabClick(idx)">
				{{item.name}}
				<text></text>
			</view>
		</scroll-view>
		<view class="content">
			<!-- 全部 -->
			<view v-if="micTabStatus == 0">
				<block v-if="tboxList.length<=0">
					<view class="none_status display_column">
						<image src="/static/img/no.png" mode=""></image>
						<view>您还没有相关的订单哦</view>
					</view>
				</block>
				<block v-else>
					<view  @click="go_order" class="com_width bg_fff" v-for="(item,index) in tboxList" :key="index">
						<view class="com_width shop_list">
							<view class="list_top display_flex space_between">
								<view class="display_flex ">
									<!-- <image src="/static/img/kong.png" mode=""></image> -->
									<view class="color_gray">音乐棒棒糖</view>
								</view>
								<view class="color_all">待发货</view>
							</view>
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
											<view class="margin_tops color_gray">x1</view>
										</view>
									</view>
									<view class="list_msg_bot">
										共计1件商品 合计：¥ <text>{{item.commodity_price}}</text>
									</view>
								</view>
							</view>
							<!-- 修改地址等 -->
							<view class="list_bot display_flex">
								<view>查看订单</view>
								<!-- <view>取消订单</view>
								<view class="color_all">付款</view> -->
							</view>
						</view>
					</view>
				</block>


			</view>
			<!-- 待付款 -->
			<!-- <view v-if="micTabStatus == 1">
				<view class="com_width bg_fff">
					<view class="com_width shop_list">
						<view class="list_top display_flex space_between">
							<view class="display_flex ">
								<image src="/static/img/kong.png" mode=""></image>
								<view class="color_gray">音乐棒棒糖</view>
							</view>
							<view class="color_all">等待买家付款</view>
						</view>
						<view class="list_content space_between display_flex">
							<view class="list_img"></view>
							<view class="list_msg">
								<view class="list_msg_top display_flex">
									<view class="list_name_box">
										<view>烟火里的尘埃</view>
										<view class="margin_tops">华晨宇</view>
									</view>
									<view class="list_num_box">
										<view>¥11.88</view>
										<view class="margin_tops color_gray">x1</view>
									</view>
								</view>
								<view class="list_msg_bot">
									共计1件商品 合计：¥ <text>11.88</text>
								</view>
							</view>
						</view>

						<view class="list_bot display_flex">
							<view>修改地址</view>
							<view>取消订单</view>
							<view class="color_all">付款</view>
						</view>
					</view>
				</view>
			</view> -->
			<!-- 待发货 -->
			<view @click="go_order" v-if="micTabStatus == 1">
				<block v-if="tboxList.length<=0">
					<view class="none_status display_column">
						<image src="/static/img/no.png" mode=""></image>
						<view>您还没有相关的订单哦</view>
					</view>
				</block>
				<block v-else>
					<view class="com_width bg_fff" v-for="(item,index) in tboxList" :key="index">
						<view class="com_width shop_list">
							<view class="list_top display_flex space_between">
								<view class="display_flex ">
									<!-- <image src="/static/img/kong.png" mode=""></image> -->
									<view class="color_gray">音乐棒棒糖</view>
								</view>
								<view class="color_all">待发货</view>
							</view>
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
											<view class="margin_tops color_gray">x1</view>
										</view>
									</view>
									<view class="list_msg_bot">
										共计1件商品 合计：¥ <text>{{item.commodity_price}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			<!-- 待收货 -->
			<view v-if="micTabStatus == 2">
				<view class="none_status display_column">
					<image src="/static/img/no.png" mode=""></image>
					<view>您还没有相关的订单哦</view>
				</view>
			</view>
		</view>
		<!-- <view v-if="micTabStatus == 1" class="footer bg_fff display_flex">
			<view class="bg_all">合并付款</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				micTabStatus: 0,
				scrollLeft: 0,
				micTab: [{
						name: "全部订单"
					},
					{
						name: "待发货"
					},
					{
						name: "待收货"
					},

				],
				shopList: [{
						"name": "周杰伦",
						"pic": 20,
						"micName": "黑色毛衣",
						"num": 1,
						"id": "1",
						isChecked: false,
					},
					{
						"name": "华晨宇",
						"pic": 10,
						"micName": "烟火里的尘埃",
						"num": 2,
						"id": "2",
						isChecked: false,
					}
				],
				tboxList: []
			}
		},
		onLoad(options) {
			this.micTabStatus = options.micTabStatus
			// 获取购物车数据
			this.tboxList = uni.getStorageSync("tbox_audio");
		},
		methods: {
			// 音乐tab
			micTabClick(idx) {
				this.micTabStatus = idx;
				this.scrollLeft = (idx - 2) * 90
			},
			go_order() {
				uni.navigateTo({
					url: "/pages/orderDetails/orderDetails?orderType=" + 1
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F4F4F4;

		.box {
			.none_status {
				image {
					width: 270upx;
					height: 243upx;
					margin: 154upx 0 56upx 0;
				}

				view {
					color: #666666;
				}
			}

			.mic_tab {
				margin-top: 0;
			}

			.content {
				.bg_fff {
					padding: 40upx 0;
					border-radius: 20upx;
					margin-top: 30upx;

					.shop_list {
						image {
							width: 42upx;
							height: 42upx;
							margin-right: 21upx;
						}

						.list_content {
							margin-top: 30upx;

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

						.list_bot {
							justify-content: flex-end;
							margin-top: 30upx;

							view {
								font-size: 28upx;
								font-weight: 400;
								height: 56upx;
								line-height: 56upx;
								border-radius: 28upx;
								border: 1px solid rgba(205, 205, 205, 1);
								//margin-right: 30upx;
								padding: 0 24upx;
							}

							.color_all {
								margin-right: 0;
								border: 1px solid rgba(255, 102, 102, 1);
							}

						}
					}
				}

			}

			.footer {
				justify-content: flex-end;
				height: 112upx;
				position: fixed;
				left: 0;
				bottom: 0;
				width: 100%;

				view {
					height: 84upx;
					line-height: 84upx;
					text-align: center;
					color: #fff;
					padding: 0 36upx;
					border-radius: 42upx;
					margin-right: 30upx;
				}
			}
		}
	}
</style>
