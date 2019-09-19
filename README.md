#lollipop_client_xiaochengxu

## Build Setup  

> 初始化项目  
> 1)下载HBuilderX  

# 初始化项目  
>1,下载HBuilderX  
[链接] (http://www.dcloud.io/hbuilderx.html)  
>2,创建uni-app  
点击工具栏里的文件 -> 新建 -> 项目  
选择uni-app，输入工程名，如：hello-uniapp，点击创建，即可成功创建 uni-app。  
点击模板里的 Hello uni-app 即可体验官方示例。  
# 运行uni-app  
>1,真机运行  
连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。     
>2,浏览器运行  
进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。  
>3,在微信开发者工具里运行  
进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app。   
>4,在支付宝小程序开发者工具里运行  
进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 支付宝小程序开发者工具，即可在支付宝小程序开发者工具里面体验uni-app。  
>5,在百度开发者工具里运行  
进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 百度开发者工具，即可在百度开发者工具里面体验uni-app。   
>5,提示  
1)如果是第一次使用，需要配置开发工具的相关路径。点击工具栏的运行 -> 运行到小程序模拟器 -> 运行设置，配置相应小程序开发者工具的路径。  
2)支付宝/百度小程序工具，不支持直接指定项目启动并运行。因此开发工具启动后，请将 HBuilderX 控制台中提示的项目路径，在相应小程序开发者工具中打开。  
3)如果自动启动小程序开发工具失败，请手动启动小程序开发工具并将 HBuilderX 控制台提示的项目路径，打开项目。  

# 引入vuex 
>1,简介  
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。  
Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。[官网](https://vuex.vuejs.org/zh/)         
>2,在 根目录下创建 stroe/index.js  
>3,在main.js中挂在Vuex 
import store from './store'  
Vue.prototype.$store = store;  
>4,调用   
# 发布 uni-app    
>[详细见官网](https://uniapp.dcloud.io/quickstart?id=%E6%89%93%E5%8C%85%E4%B8%BA%E5%8E%9F%E7%94%9Fapp%EF%BC%88%E7%A6%BB%E7%BA%BF%EF%BC%89)  



