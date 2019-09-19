<template>
	<view class="homeAlert display_flex">
		
		<view class="star_box">
			<view class="big_block display_flex">
				<image class="star_img" src="/static/img/dj1.png" mode=""></image>
				<view class="center_block display_flex">
					<view class="bg_fff"></view>
				</view>
			</view>
			<view class="go_login_box display_column">
				<view class="color_fff">您购买的是华晨宇《火星情报局》</view>
				<view class="color_fff">注册后才能在线听这首歌哦～</view>
				<view @click="goRegister()" class="color_all fontsize32">立即注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "page-alent",
		props: {
			title: {
				name: String,
			}
		},
		methods: {
			goRegister(){
				this.$emit('homeGoRegister')
			}
		}
	}
</script>

<style lang="scss">
	
.homeAlert{
	width: 100%;
	position: fixed;
	top: 0;
	right:0;
	background:rgba(0,0,0,0.7);
	height: 100vh;
	justify-content: center;
	z-index:999;
	/* 播放头像 */
	.star_box {
		width: 520upx;
		height: 340upx;
		background:rgba(212,64,64,1);
		border-radius:20upx;
		position:relative;
		.go_login_box{
			width: 560upx;
			height:300upx;
			padding: 50upx 0 30upx 0;
			background:rgba(255,102,102,1);
			border-radius:20upx;
			position:absolute;
			left:-20upx;
			top:48upx;
			.color_fff{
				font-size:32upx;
				padding: 15upx 0;
			}
			.fontsize32{
				font-size: 32upx;
			}
			.color_all{
				width:296upx;
				height:100upx;
				background:rgba(255,255,255,1);
				border-radius:50upx;
				line-height: 100upx;
				text-align: center;
				margin-top:60upx; 
			}
		}
		.big_block {
			height: 231upx;
			justify-content: center;
			position: relative;
			.star_img {
				width: 231upx;
				height: 231upx;
				background: rgba(216, 216, 216, 1);
				border-radius: 50%;
				border: 60upx solid rgba(0, 0, 0, 1);
				margin-top: -170upx;
			}
			.center_block {
				width: 65upx;
				height: 65upx;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 50%;
				position: absolute;
				top:463upx;
				justify-content: center;
				top:0;
				.bg_fff {
					width: 30upx;
					height: 30upx;
					border-radius: 50%;
				}
			}
		}
	}
	
	
}
		
</style>
