// pages/image/image.js
Page({
    data:{
        // 图片地址
        image_src: '../resources/image.jpg',

        // 候选词牌名
        titles: ['浣溪沙', '水调歌头', '采桑子', '水龙吟'],
        title_index: 0,

        tags: [
            {value: '山川'},
            {value: '峡谷', checked: 'true'},
            {value: '人物'},
            {value: '日落'},
        ],
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

    // 添加标签
    bindAddTag: function(e){
        wx.navigateTo({
            url: "../tag/tag",
        })
    },

    // 提交设置
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
})