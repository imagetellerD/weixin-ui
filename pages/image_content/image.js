// pages/image/image.js
var app = getApp()
Page({
    data:{
        // 图片地址
        image_src: '../resources/image.jpg',

        // 候选词牌名
        titles: ['浣溪沙', '水调歌头', '采桑子', '水龙吟'],
        title_index: 0,

        // 候选标签
        tags: [],

        // 是否禁用添加标签按钮
        tag_button_disabled: true
        
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
        console.log(options.tags)
        this.setData({
            "tags": JSON.parse(options.tags)
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
                tag_button_disabled: false
            })
        }
        else{
            this.setData({
                tag_button_disabled: true
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
            tags: this.data.tags
        })
        console.log(this.data.tags)
    },

    // 提交设置
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)

        wx.navigateTo({
          url: '../result/result',
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
        // wx.request({
        //   url: 'https://URL',
        //   data: {},
        //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //   // header: {}, // 设置请求的 header
        //   success: function(res){
        //     // success
        //     wx.navigateTo({
        //       url: '../result/result',
        //       success: function(res){
        //         // success
        //       },
        //       fail: function() {
        //         // fail
        //       },
        //       complete: function() {
        //         // complete
        //       }
        //     })
        //   },
        //   fail: function() {
        //     // fail
        //   },
        //   complete: function() {
        //     // complete
        //   }
        // })
    },
})