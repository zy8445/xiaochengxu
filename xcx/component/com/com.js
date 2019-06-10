// component/com/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
name:{
  type:String,
  value:"1"
}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   click: function () {
      this.setData({
        name: "1"
      })
      this.triggerEvent("comclick", { day: 20 })
    }
  },
  observers:{
    'name':function(name){
      this.setData({
       
      })
    }
  }
})
