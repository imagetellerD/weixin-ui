// pages/image/image.js
var app = getApp()
Page({
    data:{
        // 图片地址
        image_src: '../resources/banner1.jpg',

        // 候选词牌名
        titles: ['浣溪沙', '水调歌头', '采桑子', '水龙吟'],
        title_index: 0,

        // 候选标签
        tags: [
            {value: '山川'},
            {value: '峡谷'},
            {value: '人物'},
            {value: '日落'}
        ],

        // 是否禁用添加标签按钮
        tag_button_disabled: true,

        tag_button_opacity: 0.3
        
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
        console.log("跳转到了选择tag页面")
        console.log(options.tags)
        console.log(options.image_src)
        this.setData({
            "tags": JSON.parse(options.tags),
            "image_src": options.image_src
        })
    },
    onReady:function(){
        // 页面渲染完成
        var tags = this.data.tags
        console.log(tags)
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

    // 词牌选择
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            title_index: e.detail.value
        })
    },

    // 标签选择
    checkboxChange: function(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },

    // 标签包含输入
    bindTagInput: function(e) {
        if (e.detail.value){
            this.setData({
                tag_button_disabled: false,
                tag_button_opacity: 1.0
            })
        }
        else{
            this.setData({
                tag_button_disabled: true,
                tag_button_opacity: 0.3
            })
        }
    },

    // 添加标签
    bindAddTag: function(e){
        console.log(e)
        this.data.tags.push({
            "value":e.detail.value.input
        })
        this.setData({
            tags: this.data.tags,
        })
        console.log(this.data.tags)
    },

    // 提交设置
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        var delimiter1 = "?"
        var image_url = "image_src=" + this.data.image_src
        var delimiter2 = "&"


        wx.navigateTo({
          url: '../result/result' + 
            delimiter1 + image_url,
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
/*
        wx.uploadFile({
          url: 'https://omg.moxz.cn/js/analyze_image/poem.js',
          filePath: this.data.image_src,
          name: "",
          success: function(res){
            console.log(res.data)
            // success
            wx.navigateTo({
              url: '../result/result' + delimiter1 + image_url,

              success: function(res){
                
              },
              fail: function(err) {
                
              },
              complete: function() {
                // complete
              }
            })
          },
          fail: function(err) {
            console.log(err)
          },
          complete: function() {
            // complete
          }
        })
*/
    },
})