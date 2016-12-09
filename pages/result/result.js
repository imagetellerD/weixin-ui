// pages/result/result.js
Page({
  data:{
      // 图片地址
      image_src: '../resources/image.jpg',
      text_content: "明月几时有？把酒问青天。\
    　　不知天上宫阙，今夕是何年。\
    　　我欲乘风归去，又恐琼楼玉宇，高处不胜寒。\
    　　起舞弄清影，何似在人间。\
    　　转朱阁，低绮户，照无眠。\
    　　不应有恨，何事长向别时圆？\
    　　人有悲欢离合，月有阴晴圆缺，此事古难全。\
    　　但愿人长久，千里共婵娟。",

    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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

  // 复制文案
  copyText:function(){

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