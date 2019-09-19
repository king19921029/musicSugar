<script>
	const backgroundAudioManager = wx.getBackgroundAudioManager()
	export default {
		globalData: {
			playIndex: 0, //当前播放列表的index
			currentTime: 0, //当前播放时间
			duration: 0, //总时长
		},
		onLaunch: function() {

			// backgroundAudioManager.onTimeUpdate(function () {
			// 	console.log(backgroundAudioManager.currentTime)
			// });
			//#ifdef APP-PLUS  
			
			void plus.payment.getChannels(function(channels){
				alert(channels)
			});
			/* 5+  push 消息推送 ps:使用:H5+的方式监听，实现推送*/
			// void plus.nativeUI.alert("提示对话框上显示的内容", "提示对话框上显示的标题", "按钮显示的内容");

			plus.push.addEventListener("click", function(msg) {
				plus.ui.alert("click:" + JSON.stringify(msg));
				plus.ui.alert(msg.payload);
				// plus.ui.alert(JSON.stringify(msg));  
			}, false);
			// 监听在线消息事件    
			plus.push.addEventListener("receive", function(msg) {
				// plus.ui.alert(2);  
				plus.ui.alert("recevice:" + JSON.stringify(msg))
			}, false);
			// #endif

		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style lang="scss">
	.box {
		color: #333333;
	}

	.bg_top {
		width: 100%;
		height: 230upx;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: -1;
	}

	view {
		line-height: 1;
	}

	.right_icon {
		width: 14upx;
		height: 22upx;
	}

	/*每个页面公共css */
	.box {
		font-size: 30upx;
	}

	.bg_fff {
		background: #fff;
	}

	/* 蓝色 */
	.bg_all {
		background: #FF6666;
	}

	.color_fff {
		color: #fff;
	}

	.color_all {
		color: #FF6666;
	}

	.pic_color {
		color: #FF6666;
	}

	.color_gray {
		color: #999999;
	}

	.border_top {
		border-top: 1px solid #E0E0E0;
	}

	.border_bottom {
		border-bottom: 1upx solid #E0E0E0;
	}

	.com_width {
		width: 90%;
		margin-left: 5%;
	}

	.display_flex {
		display: flex;
		align-items: center;
	}

	.display_column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.space_between {
		justify-content: space-between;
	}

	.overflow {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.overflow_tow {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	/* 音乐tab */
	.mic_tab {
		overflow-x: auto;
		white-space: nowrap;
		margin-top: 50upx;
		height: 88upx;
		width: 100%;
		::-webkit-scrollbar {
		  width: 0;
		  height: 0;
		  color: transparent;
		}
		.mic_tab_name {
			width: 128upx;
			text-align: center;
			height: 32upx;
			margin-left: 40upx;
			font-size: 32upx;
			display: inline-block;
			font-weight: 500;
			line-height: 88upx;
		}

		.add_color {
			color: #FF6666;
			position: relative;
			font-weight: 500;
		}

		.add_color text {
			display: block;
			width: 80upx;
			border-radius: 20px;
			height: 6upx;
			top: 85upx;
			left: 20upx;
			background: #FF6666;
			position: absolute;
		}

	}

	// 首页两个音乐box
	.mic_box {
		background: rgba(244, 244, 244, 1);
		padding-bottom: 30upx;

		.com_width {
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.mic_box_list {
			margin-top: 30upx;
			overflow: hidden;
			width: 325upx;
			height: 437upx;
			border-radius: 20upx;

			.mic_box_img {
				width: 325upx;
				height: 347upx;
				background: #D6B6B6;

				image {
					width: 325upx;
					height: 347upx;
				}
			}

			.mic_box_info {
				height: 90upx;
				justify-content: space-between;
				background: #FFFFFF;

				.mic_box_info_box {
					height: 90upx;
					line-height: 90upx;
					justify-content: space-between;
				}
				.mic_box_info_name{
					width: 77%;
				}
				.mic_box_info_pic {
					color: #FF6666;
				}
			}
		}
	}

	// 歌曲列表（大板块）
	.star_mic {
		margin-top: 50upx;
		background: #F4F4F4;
		padding: 20upx 0;

		.star_mic_box {
			border-radius: 20upx;
			overflow: hidden;
			margin-bottom: 30upx;

			.star_mic_box_img {
				width: 100%;
				height: 320upx;
				background: rgba(129, 144, 177, 1);
			}

			.star_mic_box_info {
				background: #fff;
				height: 90upx;

				.display_flex {
					height: 90upx;
					justify-content: space-between;
					letter-spacing: 2upx;

					.mic_name {
						font-weight: bold;
					}
				}
			}
		}

	}

	// 购物车加减
	.shop_list_count {
		width: 178upx;
		height: 43upx;
		border-radius: 6upx;
		border: 1upx solid rgba(224, 224, 224, 1);

		.count_btn {
			width: 50upx;
			height: 43upx;
			display: flex;
			justify-content: center;
			align-items: center;

			.re_icon {
				width: 14upx;
				height: 2upx;
			}

			.add_icon {
				width: 14upx;
				height: 15upx;
			}
		}

		.count_num {
			width: 78upx;
			height: 43upx;
			line-height: 43upx;
			text-align: center;
			border-right: 1upx solid rgba(224, 224, 224, 1);
			border-left: 1upx solid rgba(224, 224, 224, 1);
		}
	}
</style>
