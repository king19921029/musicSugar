import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		micList: [{
				url: 'www.baidu.com'
			},
			{
				url: 'www.taobao.com'
			},
		], //播放列表
		micInfo: {
			name: "音乐测试",
			all: "03:01",
			info: "qweasdweqweqweasdqw"
		}, //歌曲信息
		micStatus: false, //播放状态
	},
	mutations: {
		//播放列表
		SET_MICLIST(state, micList) {
			state.micList = micList;
		},
		//设置歌曲详细信息
		SET_MICINFO(state, micInfo) {
			state.micInfo = micInfo;
		},
		//音乐状态
		SET_MICSTATUS(state, micStatus) {
			state.micStatus = micStatus;
		},
	},
	getters: {
		//获取播放列表
		getMicList: (state) => {
			return state.micList;
		},
		//获取歌曲信息
		getMicInfo: (state) => {
			return state.micInfo;
		},
		//获取播放状态
		getMicStatus: (state) => {
			return state.micStatus;
		},
	}
})
export default store;
