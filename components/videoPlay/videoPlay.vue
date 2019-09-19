<template>
	<view class="video-container">
		<video id='myvideo' :class="[fullScreen?'show':'hide']" src="http://media.xiaocong-media.com/Upload/Contract/d2966247b2534d57ae8a992925f1eb3b.mp4"
		 autoplay="true" show-fullscreen-btn="false" controls></video>
	</view>
</template>

<script>
	export default {
		name: "video-play",
		props: {
			 fullScreen: Boolean,
		},
		methods: {
			videoplay(){
				this.$emit('videoplay')
			},
			
		}
	}
</script>

<style>
</style>
