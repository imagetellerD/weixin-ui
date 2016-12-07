//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //点击函数函数
  bindGeneratePoem: function(){
    var that = this
    console.log("go to generate poem")
    wx.navigateTo({
      url: '../image_content/image',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
   bindGenerateAd: function(){
    var that = this
    console.log("go to generate Ad")
    wx.navigateTo({
      url: '../image_content/image',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
