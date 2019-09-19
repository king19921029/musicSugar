// components/screen_course/screen_course.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    AgeGroupList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        this.setData({
          AgeGroupList: newVal
        })
      }
    },
    Isscreen_cou: {
      type: Number,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    Isscreen_cou: false,
    AgeGroupList: [],
    storebox: '',//选择的组
    allstore: true,//全部按钮
    stroenum: 0,//选择数量
    toView: 'green'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    canclebtn: function() {
      this.setData({
        Isscreen_cou: false
      })
    },
    brandcheck(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)

      var AgeGroupList = this.data.AgeGroupList,
        values = e.detail.value;
      for (var i = 0, lenI = AgeGroupList.length; i < lenI; ++i) {
        AgeGroupList[i].Checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (AgeGroupList[i].Id == values[j]) {
            AgeGroupList[i].Checked = true;
            break
          }
        }
      }
      var storebox = "";
      for (var index in e.detail.value) {
        storebox += e.detail.value[index] + (',');
      }
      var allstore = true
      if (storebox != "") {
        this.setData({
          allstore: false,
        })
      }
      this.setData({
        AgeGroupList: AgeGroupList,
        storebox: storebox,
        stroenum: e.detail.value.length
      })

    },
    canleallstore: function () {
      var AgeGroupList = this.data.AgeGroupList;
      for (var i = 0, lenI = AgeGroupList.length; i < lenI; ++i) {
        AgeGroupList[i].Checked = false;
      }
      this.setData({
        AgeGroupList: AgeGroupList,
        allstore: true,
        stroenum: 0,
        storebox:''
      })
    },
    formSubmit: function (e) {
      var that = this;
      console.log('form发生了submit事件');
      var storebox = that.data.storebox;
      var stroenum = that.data.stroenum;

      that.triggerEvent("AgeGroupSelect", { storebox, stroenum });
      that.setData({
        Isscreen_cou: true,
      })
    },
  }
})