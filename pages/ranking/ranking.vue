<template>
	<view class="box border_top">
		<!-- 音乐tabbox -->
		<view class="mic_box" >
			<view class="com_width display_flex">
				
				<view class="mic_box_list" @click="go_shopDetails(item.audio_id)" v-for="(item,index) in statMusic" :key="index">
					<view class="mic_box_img">
						<image :src="item.productImg" mode=""></image>
					</view>
					<view class="mic_box_info">
						<view class="display_flex mic_box_info_box com_width">
							<view class="overflow mic_box_info_name">{{item.audio_name}}</view>
							<view class="mic_box_info_pic">¥{{item.commodity_price}}</view>
						</view>
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
				statMusic:[]
			}
		},
		onLoad() {
			// 获取购物车数据
			 this.statMusic= uni.getStorageSync("micList")
		},
		methods: {
			// 商品详情
			go_shopDetails(idx){
				uni.navigateTo({
					url:"/pages/shopDetails/shopDetails?id="+idx
				})
			},
		}
	}
</script>

<style lang="scss">
.box{
	background:rgba(244,244,244,1);
	height:100vh;
}
</style>
