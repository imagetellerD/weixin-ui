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
        tags: [],

        // 是否禁用添加标签按钮
        tag_button_disabled: true,

        tag_to_confidence: [],

        tag_button_opacity: 0.3
        
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
        console.log("跳转到了选择tag页面")
        console.log(options.tags)
        console.log(options.image_src)
		console.log(options.confidence)
        this.setData({
            "tags": JSON.parse(options.tags),
            "image_src": options.image_src,
            "tag_to_confidence": JSON.parse(options.confidence),
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
        console.log(this.data.tags.length)
        console.log(this.data.tag_to_confidence.length)
        console.log("==========================")

        var request_data = new Array()
        for (var i=0; i<this.data.tags.length; i++)
        {
            console.log(this.data.tags[i]['value'])

            var confidence = 100

            for (var j=0; j<this.data.tag_to_confidence.length; j++)
            {
                if (this.data.tag_to_confidence[j]['key'] == this.data.tags[i]['value'])
                {
                    confidence = this.data.tag_to_confidence[j]['value']
                    break
                }
            }

            request_data.push({
                'text': this.data.tags[i]['value'],
                'confidence': confidence,
            })





        }

        console.log(JSON.stringify(request_data))
/*
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
*/

        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        var delimiter1 = "?"
        var image_url = "image_src=" + this.data.image_src
        var delimiter2 = "&"

        wx.request({


          url: 'https://omg.moxz.cn/imageteller/get-poem',
          filePath: this.data.image_src,
          data: {
            tags: JSON.stringify(request_data),
            descriptions: [],
            poemTitle: this.data.titles[this.data.title_index],
          },

          success: function(res){
            console.log(typeof(res.data))
            console.log(res.data.length)
            console.log(res.data)
      //      var jsonObj = JSON.parse(res.data)
            console.log(res.data['data']['poem'])

            var poem_url = "poem=" + res.data['data']['poem']
            // success
            wx.navigateTo({
              url: '../result/result' + delimiter1 + image_url + delimiter2 + poem_url,

              success: function(res){
                console.log(res)

              },
              fail: function(err) {
                console.log(err)

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
    },
})