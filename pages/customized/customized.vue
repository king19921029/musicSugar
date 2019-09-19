<template>
	<view class="box border_top">
		<!-- 音乐tab -->
		<scroll-view scroll-x :scroll-left="scrollLeft" class="mic_tab" :class="[isTop?'is_g_top':'']">
			<view class="mic_tab_name" :class="[micTabStatus == idx ? 'add_color':'']" v-for="(item,idx) in micTab" :key="idx"
			 @click="micTabClick(idx,item.id)">
				{{item.name}}
				<text></text>
			</view>
		</scroll-view>
		<!-- content -->
		<view class="star_mic">
			<view class="star_mic_box com_width" @click="goMic(item.audio_id)" v-for="(item,index) in micTabList" :key="index">
				<image class="star_mic_box_img" :src="item.starBagImg" mode=""></image>
				<view class="star_mic_box_info">
					<view class="com_width display_flex">
						<view class="display_flex"><text class="mic_name">{{item.audio_name}}</text><text class="name">/{{item.starName}}</text></view>
						<view class="pic pic_color">¥{{item.commodity_price}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				micTabStatus: 0,
				scrollLeft: 0,
				micTabList:[],
				micList:[],
				micTab: [{
						name: "全部推荐",
						"id": "0"
					},
					{
						name: "独家音乐",
						"id": "21"
					},
					{
						name: "儿童故事",
						"id": "9"
					},

				],
			}
		},
		methods: {
			// 音乐tab
			micTabClick(idx, id) {
				var that = this;
				that.micTabStatus = idx;
				let micList = that.micList;
				let micTabList = [];
				
				micList.map((currentValue, index, arr) => {
					if (currentValue.version == id) {
						micTabList.push(currentValue)
					}
				})
				that.micTabList = micTabList
				if (id == 0) {
					that.micTabList = micList
				}
			
			},
			onLoad() {
				
			},
			onShow(){
				// 获取购物车数据
				this.micList = uni.getStorageSync("micList")
				this.micTabList = uni.getStorageSync("micList")

			},
			// 音乐
			goMic(audio_id) {
				uni.navigateTo({
					url: "/pages/micPlayPage/micPlayPage?id=" + audio_id
				})
			},
			// 商品详情
			go_shopDetails(idx) {
				uni.navigateTo({
					url: "/pages/shopDetails/shopDetails?id=" + idx
				})
			},
		}
	}
</script>

<style lang="scss">
	.box {

		// 音乐tab
		.mic_tab {
			margin-top: 0;
		}

		.star_mic {
			margin-top: 0;
			padding: 30upx 0;
			background: rgba(244, 244, 244, 1);
		}
	}
</style>
