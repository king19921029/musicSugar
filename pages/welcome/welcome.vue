<template>
	<view class="page">
		<!-- 启动页 -->
		<view class="begin_box">
			<view @click="close" class="begin_btn">跳过</view>
			<swiper class="init_home" @change="swiper_change"  :autoplay="initSwiper" interval="2000" duration="500">
				<swiper-item>
					<image src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" class="slide-image"/>
				</swiper-item>
				<swiper-item>
					<image src="https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" class="slide-image"/>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				initStatus:false,//启动页是否存在
				// 轮播相关
				initSwiper:false,
				indicatorDots:true,
				autoplay:true,
				interval: 2000,
				duration: 500
			}
		},
		computed: {
			...mapGetters([
				'getMicList', //歌曲列表
				'getMicInfo', //歌曲详细信息
				'getMicStatus' //是否在播放
			]),

		},

		onShow() {
			const that = this;
			var obj = {
				all: "修改了",
				info: "我被修改了",
				name: "我被修改了"
			}
		
			this.SET_MICINFO(obj)
			
		},
		methods: {
			...mapMutations([
				"SET_MICLIST",
				"SET_MICINFO",
				"SET_MICSTATUS"
			]),
			// 关闭启动页
			close(){
				
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			// 启动页轮播
			swiper_change(e){
				let that = this;
				console.log(e.detail)
				if(e.detail.current == 2){
					setTimeout(function() {
						that.close()
					}, 1000);
				}
			},
			go_details() {
				uni.navigateTo({
					url: "/pages/micPlayPage/micPlayPage"
				})
			},
			getScancode: function() {
				var _this = this;
				// 允许从相机和相册扫码aa
				wx.scanCode({
					success: (res) => {
						_this.result = res.result
					}
				})

			},
			go_jd() {
				wx.navigateToMiniProgram({
					appId: 'wx91d27dbf599dff74',
					path: 'pages/item_wqvue/detail/detail?__pid=Pxc83sui8udq',
					extraData: {
						foo: 'bar'
					},
					envVersion: 'develop',
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	
	.page {
		font-size: 30upx;
	}
	.begin_btn{
		position: fixed;
		top:5%;
		right: 5%;
		z-index: 999;
		background: #f9f9f9;
		color: #333;
		padding:6upx 30upx;
		text-align: center;
		border-radius:6upx;
	}
	.init_home,.init_home image{
		width: 100%;
		height: 100vh;
	}
	.footer {
		background: gray;
		color: #fff;
		width: 100%;
		text-align: center;
		padding: 20upx 0;
	}
</style>
