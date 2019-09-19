<template>
	<view class="box border_top">
		<view class="star_mic">
		<block v-if="tboxList.length<=0">
			<view class="none_status display_column">
				<image src="/static/img/tbox_null.png" mode=""></image>
				<view>糖盒现在是空的哦</view>
			</view>
		</block>
		<block v-else>
			<view class="star_mic_box com_width" v-for="(item,index) in tboxList" :key="index"  @click="goMic(item.audio_id)">
				<image class="star_mic_box_img" :src="item.starBagImg" mode=""></image>
				<view class="star_mic_box_info">
					<view class="com_width display_flex">
						<view class="display_flex"><text class="mic_name">{{item.audio_name}}</text><text class="name">/{{item.starName}}</text></view>
					</view>
				</view>
			</view>
		</block>
			
		
		
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tboxList:[]
			}
		},
		onLoad() {
			// 获取购物车数据
			this.tboxList = uni.getStorageSync("tbox_audio");
		},
		methods: {
			// 商品详情
			go_shopDetails(idx){
				uni.navigateTo({
					url:"/pages/shopDetails/shopDetails?id="+idx
				})
			},
			// 音乐
			goMic(idx) {
				uni.navigateTo({
					url: "/pages/micPlayPage/micPlayPage?id=" + idx
				})
			},
		}
	}
</script>

<style lang="scss">
.box{
	background:rgba(244,244,244,1);
	height:100vh;
	.star_mic_box_img{
		position: relative;
		.play_icon{
			position: absolute;
			left: 45%;
			top: 40%;
			width: 96upx;
			height: 96upx;
		}
	}
	.none_status{
		image{
			width:270upx;
			height:261upx;
			margin:154upx 0 56upx 0;
		}
		view{
			color: #666666;
		}
	}
}
</style>
