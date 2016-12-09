// pages/result/result.js
Page({
  data:{
      // 图片地址
      image_src: '../resources/banner1.jpg',
      poem: '',
      request_tags: '',
      request_title: '',
   },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
            // 页面初始化 options为页面跳转所带来的参数
        console.log("===================== 最终页")
        console.log(options.image_src)
        console.log(options.tags)
        console.log(options.title)

        this.setData({
            "image_src": options.image_src,
            "poem": options.poem,
            "request_tags": options.tags,
            "request_title": options.title,
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
      var request_image = this.data.image_src
      var request_title = this.data.request_title
      var request_tags = this.data.request_tags
      var image_url = "image_src=" + this.data.image_src
      wx.request({
          url: 'https://omg.moxz.cn/imageteller/get-poem',
          filePath: request_image,
          data: {
            tags: request_tags,
            descriptions: [],
            poemTitle: request_title,
          },

          success: function(res){
            console.log(typeof(res.data))
            console.log(res.data.length)
            console.log(res.data)
      //      var jsonObj = JSON.parse(res.data)
            console.log(res.data['data']['poem'])

            var delimiter1 = "?"
            var delimiter2 = "&"
            var poem_url = "poem=" + res.data['data']['poem']
            var title_url = "title=" + request_title
            var tags_url = "tags=" + request_tags
            console.log("tag tag tag tag tag")
            console.log(tags_url)
            // success
            wx.redirectTo({
              url: '../result/result' + delimiter1 + image_url + delimiter2 + 
                  poem_url + delimiter2 + tags_url + delimiter2 + title_url,

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

  // 返回首页
  bindReturnHomeTap: function() {
      wx.redirectTo({
          url: '../index/index'
      })
  },

})