<template>
	<view class="box border_top">
		<!-- 标签 -->
		<view class="label_box">
			<view class="label" @click="labeloneClick(oneIdx,item.region)" :class="[labeloneStatus == oneIdx ? 'add_bg' : '']"
			 v-for="(item,oneIdx) in labelList1" :key="oneIdx">
				{{item.name}}
			</view>
		</view>

		<view class="label_box">
			<view class="label" @click="labeltwoClick(twoIdx,item.gender)" :class="[labeltwoStatus == twoIdx ? 'add_bg' : '']"
			 v-for="(item,twoIdx) in labelList2" :key="twoIdx">
				{{item.name}}
			</view>
		</view>

		<view class="label_box">
			<view class="label" @click="labelthrClick(thrIdx,item.musicType)" :class="[labelthrStatus == thrIdx ? 'add_bg' : '']"
			 v-for="(item,thrIdx) in labelList3" :key="thrIdx">
				{{item.name}}
			</view>
		</view>


		<view class="none_block"></view>
		<view class="star_mic">

			<view class="star_mic_box com_width" @click="go_shopDetails(item.audio_id)" v-for="(item,stainx) in statMusic" :key="stainx">
				<image class="star_mic_box_img" :src="item.starBagImg" mode=""></image>
				<view class="star_mic_box_info">
					<view class="com_width display_flex">
						<view class="display_flex"><text class="mic_name">{{item.audio_name}}</text><text class="name">/{{item.starName}}</text></view>
						<view class="pic pic_color">¥{{item.commodity_price}}</view>
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
				labeloneStatus: 0,
				labeltwoStatus: 0,
				labelthrStatus: 0,
				region: '0', //地区
				gender: '0', //性别
				musicType: '0', //音乐类型
				labelList1: [{
						region: '0',
						name: "全部"
					},
					{
						region: '1',
						name: "港台"
					},
					{
						region: '2',
						name: "日韩"
					},
					{
						region: '3',
						name: "其他"
					}
				],
				labelList2: [{
						gender: '0',
						name: "全部"
					},
					{
						gender: '1',
						name: "男"
					},
					{
						gender: '2',
						name: "女"
					},
					{
						gender: '3',
						name: "组合"
					}
				],
				labelList3: [{
						musicType: '0',
						name: "全部"
					},
					{
						musicType: '1',
						name: "流行"
					},
					{
						musicType: '2',
						name: "嘻哈"
					},
					{
						musicType: '3',
						name: "电子"
					},
					{
						musicType: '4',
						name: "摇滚"
					},
				],
				statMusic: [],
				micList:[],



			}
		},
		onLoad() {
			// 获取购物车数据
			this.statMusic = uni.getStorageSync("micList");
			this.micList=this.statMusic;
		},
		methods: {
			labeloneClick(idx, region) {
				this.labeloneStatus = idx;
				var gender = this.gender;
				var musicType = this.musicType;
				this.setStarList(region, gender, musicType, this.micList)
			},
			labeltwoClick(idx, gender) {
				this.labeltwoStatus = idx
				var region = this.region;
				var musicType = this.musicType;
				this.setStarList(region, gender, musicType, this.micList)
			},
			labelthrClick(idx, musicType) {
				this.labelthrStatus = idx
				var region = this.region;
				var gender = this.gender;
				this.setStarList(region, gender, musicType, this.micList)
			},
			setStarList: function(region, gender, musicType, list) {
				var statMusic = [];
				for (var i = 0; i < list.length; i++) {
					if (gender == 0||gender==3) {
						statMusic.push(list[i]);
					} else {
						if (list[i].gender == gender) {
							statMusic.push(list[i]);
						}
					}

				}
				this.statMusic = statMusic;
			},
			// 商品详情
			go_shopDetails(idx) {
				uni.navigateTo({
					url: "/pages/shopDetails/shopDetails?id=" + idx
				})
			},
		}
	}
</script>

<style lang="scss">
	.box {
		font-size: 28upx;
		color: #333333;

		// 标签
		.label_box {
			width: 95%;
			margin-left: 5%;
			margin-top: 44upx;
			overflow-x: auto;
			white-space: nowrap;

			.label {
				width: 112upx;
				height: 56upx;
				line-height: 56upx;
				text-align: center;
				background: rgba(242, 242, 242, 1);
				border-radius: 28px;
				display: inline-block;
				margin-right: 22upx;
			}

			.add_bg {
				background: #FF6666;
				color: #fff;
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

	}
</style>
