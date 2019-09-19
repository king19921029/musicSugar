<template>
	<view class="alert_box display_flex">
		<view class="bg_fff">
			<view class="border_bottom">确认将这1个宝贝删除吗？</view>
			<view class="display_flex alert_bot">
				<view @click="close">我在想想</view>
				<view @click="deleteFun" class="color_all">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "alert-box",
		props: {
			title: {
				content:String,
				letfFont: String,
				rightFont: String
			}
		},
		methods: {
			close(){
				this.$emit('alertBoxClose')
			},
			deleteFun(){
				this.$emit('alertBoxDelete')
			}
		}
	}
</script>

<style lang="scss">
	.alert_box{
		height: 100vh;
		width: 100%;
		background:rgba(0,0,0,0.5);
		justify-content: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		.bg_fff{
			font-size: 32upx;
			width:521upx;
			height:260upx;
			background:rgba(255,255,255,1);
			border-radius:20upx;
			.border_bottom{
				height: 172upx;
				line-height: 172upx;
				text-align: center;
			}
			.alert_bot{
				height: 87upx;
				view{
					width: 50%;
					height: 87upx;
					line-height: 87upx;
					text-align: center;
				}
				.color_all{
					border-left: 1px solid #D8D8D8;
				}
			}
		}
	}
</style>
