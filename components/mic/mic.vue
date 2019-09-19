<template name="page-mic">
	<view class="mic_components">
		<view class="com_width">
			<view>歌曲名字</view>
			<view>播放状态</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "page-mic",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
	.mic_components>.com_width{
		display: flex;
		justify-content: space-between;
		font-size: 30upx;
		padding: 20upx 0;
	}
</style>
