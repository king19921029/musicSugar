<template>
	<view class="box border_top">
		<view class="com_input_box com_width display_flex">
			<view class="user_phone_box display_flex com_width">
				<input @input="isLoginFun" v-model="login_photo" placeholder-style="color:#aaaaaa;" type="number" placeholder="请输入手机号"
				 maxlength="11">
				<image @click="initInput(0)" v-if="login_photo!=''" src="/static/img/login_close.png" mode=""></image>
			</view>
		</view>
		<view class="code_box com_width display_flex">
			<view class="user_phone_box display_flex com_width">
				<input @input="isLoginFun" v-model="login_code" type="number" placeholder-style="color:#aaaaaa;" placeholder="输入验证码"
				 maxlength="6">
				<button :class="[isphonetital?'phonevalue':'btnvalue']" @click="getCode">{{btnValue}}</button>
			</view>
		</view>
		<button @getuserinfo="goLogin" :disabled="!isLogin" open-type="getUserInfo" class="com_width login_btn" :class="[isLogin?'login_btn_y':'login_btn_n']">
			微信登录并绑定手机
		</button>
		<view class="com_width xy_font">若手机号未注册，将会进入注册流程。注册即<text class="color_all">《音芙用户注 册协议》、《隐私协议》</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false, //是否可以登录
				login_code: "", //验证码
				login_photo: "", //手机号
				btnValue: '发送验证码', //验证码文案
				second: 60, //时间s
				btnDisabled: false, //点击状态
				isphonetital: false, //是否满11位
			}
		},
		onShow() {
			// console.log(this._md5("11"))
			// this.getCode();
		},
		methods: {
			initInput(e) {
				if (e == 0) {
					this.login_photo = "";
				}
			},
			isLoginFun() {

				if (this.login_code != "" && this.login_photo != "") {
					this.isLogin = true
				} else {
					this.isLogin = false
				}
				if (this.login_photo.length == 11) {
					this.isphonetital = true;
				} else {
					this.isphonetital = false;
				}
			},

			async getCode() {
				//验证手机号
				if (this.blurPhone(this.login_photo)) {
					//防止二次点击
					if (!this.btnDisabled) {
						try {
							let phone = this.login_photo;
							let utc = Date.parse(new Date()) / 1000;
							let secret = "saqqweqw";
							let str = `${phone}${utc}${secret}`
							let sign = this._md5(str)

							let code = await this.$wxhttp.post({
								url: '/lollipop/api/v1/get_vcode',
								data: {
									phone: phone,
									utc: utc,
									sign: sign
								},
							})
							//console.log(code)
							this.timer();
							return;

						} catch (error) {
							console.log(error);
						}
					}
				}
			},
			async goLogin(e) {
				const that = this;
				console.log(e.detail.userInfo);
				if (e.detail.userInfo) {
					uni.setStorageSync("userInfo", e.detail.userInfo)
					try {
						let data = await that.$wxhttp.post({
							url: '/lollipop/api/v1/login_bind',
							data: {
								phone: that.login_photo,
								tmp_vcode: that.login_code,
								wx_icon_path: e.detail.userInfo.avatarUrl,
								wx_nick_name: e.detail.userInfo.nickName
							},
						})
						if (data.data.access_token) {
							uni.setStorageSync("access_token", data.data);
							console.log(data.data);
							uni.navigateBack()
						}

					} catch (error) {
						console.log(error);
					}
				} else {
					uni.showToast({
						title: "允许授权才能进行登录",
						icon: "none",
						duration: 1000
					})
				}
			},
			timer: function() {
				let promise = new Promise((resolve, reject) => {
					let setTimer = setInterval(
						() => {
							var second = this.second - 1;
							this.second = second;
							this.btnValue = second + '秒';
							this.btnDisabled = true;
							if (this.second <= 0) {
								this.second = 60;
								this.btnValue = '获取验证码';
								this.btnDisabled = false;
								resolve(setTimer)
							}
						}, 1000)
				})
				promise.then((setTimer) => {
					clearInterval(setTimer)
				})
			},
			// 手机号验证
			blurPhone: function(phone) {
				let that = this
				var ajxtrue = false;
				if (!(/^1[34578]\d{9}$/.test(phone))) {
					ajxtrue = false;
					uni.showToast({
						title: '手机号有误',
						icon: '/static/img/login_close.png',
						duration: 2000
					})

				} else {
					ajxtrue = true;
				}
				return ajxtrue;
			},

		},

	}
</script>

<style lang="scss">
	.box {
		.com_input_box {
			height: 99upx;
			background: rgba(245, 245, 245, 1);
			border-radius: 8upx;
			margin-top: 100upx;

			.user_phone_box {
				justify-content: space-between;

				image {
					height: 32upx;
					width: 32upx;
				}
			}
		}

		.code_box {
			height: 99upx;
			background: rgba(245, 245, 245, 1);
			border-radius: 8upx;
			margin-top: 20upx;

			.user_phone_box {
				justify-content: space-between;

				image {
					height: 40upx;
					width: 40upx;
				}
			}

			.btnvalue {
				min-width: 170upx;

			}

			.phonevalue {
				min-width: 170upx;
				color: #ff6666;
			}

			button::after {
				border: none;

			}

			button {
				background: rgba(245, 245, 245, 1);
				padding: 0 0 0 20upx;
				color: rgba(255, 102, 102, 0.5);
				font-size: 28upx;
				margin: 0;
				border-left: 1upx solid #E0E0E0;
				border-radius: 0;
				height: 48upx;
				line-height: 48upx;
			}

		}

		button::after {
			border: none;
		}

		.login_btn {
			height: 88upx;
			border-radius: 50upx;
			color: #fff;
			line-height: 88upx;
			text-align: center;
			margin-top: 40upx;
		}

		button[disabled] {
			color: #fff !important;
			background: rgba(255, 102, 102, 0.5) !important;
		}

		.login_btn_y {
			background: rgba(255, 102, 102, 1);
		}

		.login_btn_n {
			background: rgba(255, 102, 102, 0.5);
		}

		.xy_font {
			font-size: 22upx;
			color: rgba(153, 153, 153, 1);
			line-height: 32upx;
			margin-top: 22upx;
		}
	}
</style>
