(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0894":function(n,a,e){},"27ea":function(n,a,e){"use strict";var t=e("0894"),o=e.n(t);o.a},"30e1":function(n,a,e){"use strict";e.r(a);var t=e("7879"),o=e("8273");for(var i in o)"default"!==i&&function(n){e.d(a,n,function(){return o[n]})}(i);e("27ea");var r=e("2877"),s=Object(r["a"])(o["default"],t["a"],t["b"],!1,null,null,null);a["default"]=s.exports},7879:function(n,a,e){"use strict";var t=function(){var n=this,a=n.$createElement;n._self._c},o=[];e.d(a,"a",function(){return t}),e.d(a,"b",function(){return o})},"78b5":function(n,a,e){"use strict";(function(n,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e("2f62");function i(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.forEach(function(a){r(n,a,e[a])})}return n}function r(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}var s={data:function(){return{micList:[],micTabList:[],isFrist:!0,headerTop:Number,isTop:!1,initStatus:!1,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,micTabStatus:0,scrollLeft:0,micTab:[{name:"全部推荐",id:"0"},{name:"独家音乐",id:"21"},{name:"儿童故事",id:"9"},{name:"明星音频",id:"18"},{name:"周杰伦的"},{name:"华晨宇的"},{name:"烟火里的"},{name:"销量最多"}],fullScreen:!1}},computed:i({},(0,o.mapGetters)(["getMicList","getMicInfo","getMicStatus"])),onLoad:function(){var a=this;wx.createSelectorQuery().select(".mic_tab").boundingClientRect(function(n){a.headerTop=n.top}).exec();n.getStorageSync("userInfo");n.getStorageSync("userInfo")&&(this.isFrist=!1);var e=[{num:1,pic:.1,name:"攀登",starName:"潘玮柏",playbackVolume:"1.21",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E5%87%BA%E5%B1%B1-%E8%8A%B1%E7%B2%A5.mp3",img:"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",version:21,id:1,isChecked:!1,lyric:"[00:01.78]编曲：赫连长泓\n[00:02.10]音乐总监：刘洲\n[00:03.20]定位制作人：刘洲\n[00:04.25]中文填词：G.E.M.邓紫棋\n[00:05.30]Rap词：潘玮柏/G.E.M.邓紫棋/艾热\n[00:06.40]混音：时俊峰\n[00:07.50]改编歌曲：《Hymn For The Weekend》\n[00:08.60]原唱：Coldplay\n[00:09.70]原词曲：aaaa Scott Alan\n[00:10.80]改编歌曲词曲版权代理：环球音乐出版有限公司(Universal Music Publishing Ltd.)\n[00:11.90]百代音乐版权代理（北京）有限公司\n[00:12.00]北京盛海传音文化传播有限公司\n[00:14.00]有时候我会问自己\n[00:19.17]到底为了什么努力\n[00:24.86]赢得什么才叫胜利\n[00:30.04]你曾否问自己\n[00:36.13]我们明白很多时候\n[00:37.45]当你醒来渴望自由\n[00:38.86]但现实总变质\n[00:40.17]并不是你想要的样子\n[00:41.53]有人在逆境中蜕变\n[00:42.67]想在机遇中兑现\n[00:44.03]说过的承诺\n[00:44.71]更多的时候\n[00:45.36]都被打磨成碎片\n[00:46.79]是因为生活要继续\n[00:48.12]想振作 获得惊喜\n[00:49.50]要更多 要心意\n[00:50.82]更精细 更尽力\n[00:52.18]让经历跟新意\n[00:53.59]更亲密 更凝聚\n[00:54.84]这就是我想要的\n[00:56.23]我想要我能被铭记\n[00:58.00]想忘记那些\n[00:58.94]华丽的浮夸的装点\n[01:00.45]滑稽的实话里\n[01:01.29]藏着谎话却又很庄严\n[01:03.17]Do what I do (做我想做的)\n[01:04.45]是因为不想停止迈步\n[01:05.66]不是不在乎\n[01:06.93]而是我害怕心思败露\n[01:08.51]世界的面积\n[01:09.36]可能大到让人抵触\n[01:10.77]但时间的延续\n[01:11.92]就是你最大的礼物\n[01:13.52]别畏惧\n[01:14.18]像是暴露你某个意图\n[01:16.21]让阳光彻底照着你\n[01:17.68]每寸皮肤\n[01:18.87]I pray for myself(为我自己祈祷)\n[01:20.14]I pray for my hood(为我的队友们祈祷)\n[01:21.43]真理藏在心里\n[01:22.81]Keep real for my world(在我的世界里保持绝对的真实)\n[01:24.18]我为我自己买单\n[01:25.40]不会逃脱而是负责\n[01:26.90]我自己对抗灾难\n[01:28.09]哪怕超过我的负荷\n[01:29.60]You feel me(感受我的心声)\n[01:29.75]Oh 爱 oh 爱\n[01:33.00]Got me feeling drunk and high(让我如此沉醉)\n[01:36.20]So high so high(兴致高昂)\n[01:40.63]Oh 爱 oh 爱\n[01:44.10]Got me feeling drunk and high(让我如此沉醉)\n[01:46.62]So high so high(兴致高昂)\n[01:50.36]我曾经如此随和\n[01:51.55]跟着世界的规则\n[01:52.88]他们说什么就什么\n[01:54.61]听着话 心却是灰色\n[01:56.17]沉睡着\n[01:56.95]多努力追上\n[01:57.85]社会太看重的荣耀\n[01:59.19]我逐一对抗\n[02:00.49]恶鬼在煽动的控告\n[02:02.02]根本都不重要\n[02:02.88]理想再崇高\n[02:03.92]每当我动摇\n[02:04.84]撑着我是一个拥抱\n[02:06.22]我的忠告 别覆辙重蹈\n[02:08.17]一切的功劳\n[02:09.24]来自我爱的 爱着我的\n[02:10.74]身边每一个珍贵的容貌\n[02:12.94]Yo shout out to 2Pac(用这首歌向说唱歌手致敬)\n[02:15.53]Put your hands up(举起你们的双手)\n[02:16.94]So just bounce(就尽情地释放吧)\n[02:18.45]If you feel me(如果你听懂这首歌的话)\n[02:18.74]不要放肆 学着感激\n[02:20.05]像个壮士 勇往向前去\n[02:21.56]伤势再痛不要放弃\n[02:22.96]拼死拼活地追求\n[02:24.31]到底为了什么意义\n[02:25.73]不就是为了成为你口中的\n[02:27.60]Favorite MC(最佳说唱歌手)\n[02:28.66]他要spit game on fire(火力全开)\n[02:29.88]他要带你们higher(更好的体验)\n[02:31.42]他要证明说唱文化\n[02:32.61]本身就是个爷们儿\n[02:34.27]我觉得现在可以好好入睡\n[02:36.93]因为世界都是\n[02:38.13]Hip-Hop(说唱音乐)词汇\n[02:39.32]Never thought (从未想过)\n[02:40.06]I be in position to do this  (我能够参与其中)\n[02:41.31]It all started (一切都开始来自)\n[02:42.18]When Pac nation chanted(他的歌)\n[02:43.44]《How do you want It》(歌名)\n[02:44.00]I keep it old school(带你感受老学校的音乐)\n[02:45.30]With some Pac imitation(模仿着)\n[02:46.73]West side till I die(西海岸的终点)\n[02:47.94]You love it no hesitation(爱他的人不会有一丝犹豫)\n[02:49.73]Dear mama (亲爱的母亲)\n[02:50.30]不要哭我永远在你身边\n[02:51.73]别在乎世界怎么看我\n[02:53.32]对我多少偏见\n[02:54.54]今天忍气吞声\n[02:55.74]为了要更好的明天\n[02:57.26]我们说的唱的\n[02:58.44]坚持的全都会实现\n[02:59.90]So I pray for my loved ones(为我爱的人祈祷)\n[03:01.43]And I pray for the warriors(也为所有的勇士们祈祷)\n[03:02.76]I pray for the go-getters (为所有的能者志士祈祷)\n[03:04.14]And I pray for the naysayers(也为那些唾弃我的人们祈祷)\n[03:05.48]Lord please let me(请允许我)\n[03:06.86]See another day(坚持下去)\n[03:07.94]浴火凤凰展开双翼\n[03:09.49]We will see that day let go(我们必将看到那终点)\n[03:10.71]Oh 爱 oh 爱\n[03:14.74]Got me feeling drunk and high(让我如此沉醉)\n[03:17.27]So high so high(兴致高昂)\n[03:21.91]Oh 爱 oh 爱\n[03:25.35]Got me feeling drunk and high(让我如此沉醉)\n[03:27.95]So high so high(兴致高昂)\n[03:32.12]Oh 爱 oh 爱\n[03:35.96]Got me feeling drunk and high(让我如此沉醉)\n[03:38.72]So high so high(兴致高昂)\n[03:42.71]Oh 爱\n[03:46.70]Got me feeling drunk and high(让我如此沉醉)\n[03:49.30]So high so high(兴致高昂)\n[03:54.74]你觉得我会在意么\n[03:57.37]你给的质疑\n[03:58.61]你觉得我会猜疑么\n[04:00.06]只相信自己\n[04:01.40]用音乐转换季节\n[04:02.66]所以不会再畏惧冬天\n[04:04.54]中文Hip-Hop(说唱音乐)有版图\n[04:06.62]我会在最中间\n[04:08.18]Yeah you feel me(用心感受我想说的)\n[04:09.00]\n"},{num:1,pic:.1,name:"出山",starName:"花粥",playbackVolume:"3.29",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%94%80%E7%99%BB-%E6%BD%98%E7%8E%AE%E6%9F%8F.mp3",img:"http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg",version:9,id:2,isChecked:!1,lyric:"[by:GoodTM]\n[00:00.000] 作曲 : 花粥\n[00:01.000] 作词 : 花粥\n[00:10.43]\n[00:11.12]在夜半三更过天桥从来不敢回头看\n[00:15.86]白日里是车水马龙此时脚下是忘川\n[00:21.30]我独自走过半山腰山间野狗来作伴\n[00:25.19]层林尽染百舸流秋风吹过鬼门关\n[00:29.81]一瞬三年五载 品粗茶 食淡饭\n[00:34.49]六界八荒四海 无人与我来叫板\n[00:39.19]人间荒唐古怪 竹林外 有书斋\n[00:43.78]匿于此地畅快 偏来者不善善者不来\n[00:50.85]是我装模作样在瞎掰\n[00:55.18]还是他们本就心怀鬼胎\n[00:57.82]有人不知悔改 迷雾中混淆黑白\n[01:02.46]在情怀里市侩 旁人不敢来拆穿\n[01:07.17]看似时来运转 实则在顶风作案\n[01:11.73]待曲终又人散 这一出还有谁在围观\n[01:16.79]在凡尘修炼二十载听闻水能滴石穿\n[01:21.07]帝王豪杰风云变幻敌不过桑田沧海\n[01:25.85]我不关心谁的江山只眷恋两小无猜\n[01:30.36]兴风作浪不稀罕只身固守峨眉山\n[01:35.14]一瞬三年五载 品粗茶 食淡饭\n[01:39.73]六界八荒四海 无人与我来叫板\n[01:44.33]人间荒唐古怪 竹林外 有书斋\n[01:49.11]匿于此地畅快 偏来者不善善者不来\n[01:56.00]是我装模作样在瞎猜\n[02:00.39]还是他们本就心怀鬼胎\n[02:03.15]有人不知悔改 迷雾中混淆黑白\n[02:07.73]在情怀里市侩 旁人不敢来拆穿\n[02:12.39]看似时来运转 实则在顶风作案\n[02:17.06]待曲终又人散 这一出还有谁在围观\n[02:21.82]静悄悄配唠唠叨叨\n[02:24.00]随便瞧瞧我凑凑热闹\n[02:26.34]客串也别太潦草\n[02:28.70]吃的生蚝要蘸个酱料\n[02:31.00]悄悄你唠唠叨叨\n[02:33.30]随便瞧瞧你凑的热闹\n[02:35.68]听到你做个记号\n[02:37.84]请装进书包别四处招摇\n[02:40.29]有人迷途知返\n[02:45.08]便是苦尽甘来\n[02:50.00]一瞬三年五载\n[02:54.15]这曲终又人散\n[03:33.63]\n[03:33.95]合作音乐人：王胜男\n[03:34.13]音乐制作：BachBeats\n[03:34.31]录音师：种旭\n[03:34.48]混音／母带处理：钻石狗音乐工作室（北京）\n[03:34.82]专辑封面设计：姜小海\n[03:35.25]\n"},{num:1,pic:.1,name:"来自天堂的魔鬼",starName:"邓紫棋",playbackVolume:"1.78",url:"https://yinfu-share.oss-cn-hangzhou.aliyuncs.com/%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC-%E9%82%93%E7%B4%AB%E6%A3%8B.mp3",img:"http://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg",version:18,id:3,isChecked:!1,lyric:"[00:00.000] 作曲 : G.E.M.邓紫棋\n[00:00.666] 作词 : G.E.M.邓紫棋\n[00:02.00]编曲：Lupo Groinig\n[00:03.00]监制：Lupo Groinig\n[00:07.45]我见过天使\n[00:09.30]遇过魔鬼\n[00:10.87]亲爱的 你到底\n[00:12.62]你到底是谁\n[00:13.86]夜里做了美丽的恶梦\n[00:17.37]想清醒我却抵不过心动\n[00:21.08]梦里你是无底的黑洞\n[00:24.18]我无力抗拒失重\n[00:27.17]我的意识自控脉搏流动\n[00:31.47]全被你神秘引力操控\n[00:34.81]亲爱的你是危险的迷宫\n[00:38.26]我找不到出口\n[00:42.85]You took my heart away\n[00:45.56]away away away\n[00:49.86]My head is blown away\n[00:52.58]away away away\n[00:57.05]你就是传说来自天堂的魔鬼\n[01:03.95]You took my heart away\n[01:05.56]away away away\n[01:08.43]away away away\n[01:26.45]拜托别对我细心问候\n[01:29.42]这是你也不察觉的阴谋\n[01:33.08]我讨厌你无心的微笑\n[01:36.61]我快无可救药\n[01:39.58]你像一个漩涡慢慢让我\n[01:44.13]无法抽离一直地坠落\n[01:46.98]亲爱的你是优雅的恶魔\n[01:50.81]一点一点把我吞没\n[01:53.56]You took my heart away\n[01:56.05]away away away\n[02:00.56]My head is blown away\n[02:03.07]away away away\n[02:07.64]你就是传说来自天堂的魔鬼\n[02:14.59]You  took my heart away\n[02:16.12]away away away\n[02:18.97]away away away\n[02:37.48]如果你是蛇的诱惑\n[02:40.11]你存心迷惑 我才能软弱\n[02:44.20]但你是牛顿头上那颗\n[02:46.97]若无其事的苹果\n[02:51.83]You took my heart away\n[02:54.32]away away away\n[02:58.72]You took my heart away\n[03:01.36]away away away\n[03:05.75]You took my heart away\n[03:08.49]away away away\n[03:12.71]My head is blown away\n[03:15.49]away away away\n[03:19.79]你就是传说来自天堂的魔鬼\n[03:26.66]You took my heart away\n[03:28.62]away away away\n[03:31.33]away away away\n[03:56.95]你到底是谁 你是谁\n[04:00.43]你到底是谁\n"}];n.setStorageSync("micList",e)},onShow:function(){n.getStorageSync("userInfo")&&(this.isFrist=!1),this.micList=n.getStorageSync("micList"),this.micTabList=n.getStorageSync("micList");var a={all:"修改了",info:"我被修改了",name:"我被修改了"};this.SET_MICINFO(a)},onPageScroll:function(n){n.scrollTop>this.headerTop?this.isTop=!0:this.isTop=!1},methods:i({},(0,o.mapMutations)(["SET_MICLIST","SET_MICINFO","SET_MICSTATUS"]),{appTest:function(){},homeGoRegister:function(){n.navigateTo({url:"/pages/login/login"})},go_shopDetails:function(a){console.log(t(a," at pages/index/index.vue:303")),n.navigateTo({url:"/pages/shopDetails/shopDetails?id="+a})},goStar:function(){n.navigateTo({url:"/pages/starMusic/starMusic"})},goTbox:function(){n.navigateTo({url:"/pages/myTbox/myTbox"})},goRanking:function(){n.navigateTo({url:"/pages/ranking/ranking"})},micTabClick:function(n,a){var e=this;e.micTabStatus=n,e.scrollLeft=90*(n-2);var t=e.micList,o=[];t.map(function(n,e,t){n.version==a&&o.push(n)}),e.micTabList=o,0==a&&(e.micTabList=t)},close:function(){this.initStatus=!0},swiper_change:function(n){var a=this;console.log(t(n.detail," at pages/index/index.vue:353")),2==n.detail.current&&setTimeout(function(){a.close()},1e3)},goMic:function(){n.navigateTo({url:"/pages/micPlayPage/micPlayPage"})},play:function(n){var a=wx.createVideoContext("myvideo",this);a.requestFullScreen(),this.fullScreen=!0},closeVideo:function(){var n=wx.createVideoContext("myvideo",this);n.exitFullScreen(),this.fullScreen=!1},getScancode:function(){n.scanCode({success:function(a){n.showToast({title:"条码类型:"+a.scanType+"，条码内容："+a.result,duration:2e3,icon:"none"}),console.log(t("条码类型："+a.scanType," at pages/index/index.vue:397")),console.log(t("条码内容："+a.result," at pages/index/index.vue:398"))}})}})};a.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},8273:function(n,a,e){"use strict";e.r(a);var t=e("78b5"),o=e.n(t);for(var i in t)"default"!==i&&function(n){e.d(a,n,function(){return t[n]})}(i);a["default"]=o.a}},[["05e1","common/runtime","common/vendor"]]]);