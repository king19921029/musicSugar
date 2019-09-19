<template>
	<view>
		<navigator-tab :tList="statusType" @changeCurrent="swichNav" :currentTab="currentType">
			<swiper :current="currentType" duration="300" @change="bindChange" :style="{height: windowHeight+'px'}">
				<swiper-item v-for="item in list" :key="item">

				</swiper-item>
			</swiper>
		</navigator-tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusType: [{
						name: "应援",
						page: 0
					},
					{
						name: "艺人",
						page: 0
					},
				],
				currentType: 0,
				list: [
					[],
					[]
				],
				windowHeight: ''
			}
		},
		onLoad(options) {
			var systemInfo = wx.getSystemInfoSync();
			this.windowHeight = systemInfo.windowHeight;
			this.currentType = options.id ? options.id : 0
		},
		methods: {
			// 点击tab切换 
			swichNav: function(res) {
				if (this.currentType == res.detail.currentNum) return;
				this.currentType = res.detail.currentNum;
			},
			bindChange: function(e) {
				this.currentType = e.detail.current;
				if (!this.list[e.detail.current].length) {
					//this.getList();
				}
			},
		}
	}
</script>

<style>

</style>
