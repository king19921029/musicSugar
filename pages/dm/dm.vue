<template>
	<view class="content">
	
		<image src="https://images.unsplash.com/photo-1551446591-142875a901a1?w=640" class="slide-image"/>
		
		<view class='box'>
		  <view class='list'>
			<view v-for="(item,idx) in list"
				:key='idx' class="dm"
				:class='[aNum == idx ? "start" : ""]' >
			 {{item.name}}
			</view>
		  </view>
		  
		  <view class='list'>
			<view class="dm" :class='[aNum == idx ? "start2" : ""]' v-for="(item,idx) in list2"
				:key='idx'>
			  {{item.name}}
			</view>
		  </view>
		  <view class='list'>
			<view class="dm" :class='[aNum == idx ? "start3" : ""]' v-for="(item,idx) in list3"
				:key='idx'>
			  {{item.name}}
			</view>
		  </view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
				  { name:"上面弹幕11111"},
				  { name: "上面弹幕2222"},
				  { name: "上面弹幕333"},
				  { name: "上面弹幕444"},
				  { name: "上面弹幕5555"},
				  { name: "上面弹幕6666"},
				  { name: "上面弹幕77777"},
				  { name: "上面弹幕8888"},
				  { name: "上面弹幕999"},
				  { name: "上面弹幕444" },
				  { name: "上面弹幕5555" },
				  { name: "上面弹幕6666" },
				  { name: "上面弹幕77777" },
				  { name: "上面弹幕8888" },
				  { name: "上面弹幕999" },
				],
				list2:[
				  { name:"中间弹幕11111"},
				  { name: "中间弹幕2222"},
				  { name: "中间弹幕333"},
				  { name: "中间弹幕444"},
				  { name: "中间弹幕5555"},
				  { name: "中间弹幕666"},
				  { name: "中间弹幕77777"},
				  { name: "中间弹幕8888"},
				  { name: "中间弹幕999"},
				  { name: "中间弹幕444" },
				  { name: "中间弹幕5555" },
				  { name: "中间弹幕6666" },
				  { name: "中间弹幕77777" },
				  { name: "中间弹幕8888" },
				  { name: "中间弹幕999" },
				],
				list3:[
				  { name:"下面弹幕11111"},
				  { name: "下面弹幕2222"},
				  { name: "下面弹幕333"},
				  { name: "下面弹幕444"},
				  { name: "下面弹幕5555"},
				  { name: "下面弹幕6666"},
				  { name: "下面弹幕77777"},
				  { name: "下面弹幕8888"},
				  { name: "下面弹幕999"},
				  { name: "下面弹幕444" },
				  { name: "下面弹幕5555" },
				  { name: "下面弹幕6666" },
				  { name: "下面弹幕77777" },
				  { name: "下面弹幕8888" },
				  { name: "下面弹幕999" },
				],
				aNum:0,
				colors:"",
			}
		},
		onLoad() {
			this.listB(this.list,3000)
			this.listB(this.list2,3500)
			this.listB(this.list3,4000)
		},
		methods: {
			// listA(){
			// 	var sets = setInterval(function(){
			// 	  if (that.list.length > 0 ){
			// 		let list = that.list;
			// 		list.shift()
			// 		this.list = list
			// 	  }else{
			// 		console.log("清除")
			// 		clearInterval(sets);   
			// 	  }
			// 	},3000)
			// },
			listB(list,times){
				var sets = setInterval(function(){
				  if ( list.length > 0 ){
					list.shift()
					this.list = list
				  }else{
					console.log("清除")
					clearInterval(sets);   
				  }
				},times)
			}
		}
	}
</script>

<style>
image{
  width: 100%;
}
/* 弹幕 */
.box{
  width: 100%;
  height: 20vh;
  background: rgba(0, 0, 0,.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.list{
  height: 100rpx;
  position: relative;
}
.dm{
  width: 210rpx;
  height: 50rpx;
  background:#fff;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  right: -30%;
  top: 0;
  overflow:hidden;
}

@-webkit-keyframes lanimation{
  from {
    right: 0
  }
  to {
    right: 100%
  }
}

.start{
  animation-name: lanimation; /*动画的名称 */
  animation-duration: 3000ms; /*动画从开始到结束的时间*/
  animation-timing-function: linear; /*动画执行快慢的参数*/
  animation-iteration-count: infinite;
}
.start2{
  animation-name: lanimation; /*动画的名称 */
  animation-duration: 3500ms; /*动画从开始到结束的时间*/
  animation-timing-function: linear; /*动画执行快慢的参数*/
  animation-iteration-count: infinite;
}
.start3{
  animation-name: lanimation; /*动画的名称 */
  animation-duration: 4000ms; /*动画从开始到结束的时间*/
  animation-timing-function: linear; /*动画执行快慢的参数*/
  animation-iteration-count: infinite;
}
	

	
	
</style>
