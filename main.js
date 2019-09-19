import Vue from 'vue'
import App from './App'
// 网络请求
import WXrequest from './utils/wx_request.js'
import store from './store/index.js'  

// 音乐123
import pageMic from './components/mic/mic.vue'
Vue.component('page-mic',pageMic)

// 首页弹框
import homeAlert from './components/homeAlert/homeAlert.vue'
Vue.component('home-alert',homeAlert)

// 首页弹框
import alertBox from './components/alertBox/alertBox.vue'
Vue.component('alert-box',alertBox)

// 加密
import md5 from 'js-md5'
Vue.prototype._md5 = md5

// vuex
Vue.prototype.$store = store 

Vue.config.productionTip = false

App.mpType = 'app'

// http请求
Vue.prototype.$wxhttp = WXrequest
const app = new Vue({
    ...App
})
app.$mount()
