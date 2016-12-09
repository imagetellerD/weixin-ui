// pages/result/result.js
Page({
  data:{
      // 图片地址
      image_src: '../resources/banner1.jpg',
      poem: '',
   },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
            // 页面初始化 options为页面跳转所带来的参数
        console.log(options.image_src)

        this.setData({
            "image_src": options.image_src,
            "poem": options.poem,
        })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  // 重新生成
  formSubmit:function(e){

  },

  // 返回首页
  bindReturnHomeTap: function() {
      wx.navigateTo({
          url: '../index/index'
      })
  },

})