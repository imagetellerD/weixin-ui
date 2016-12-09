//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    image_src: "../resources/camera.png",
    user_input_tags: [],
    generate_button_disabled: true,
    search_button_disabled: true,
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
  },

  //诗歌生成函数
  bindGeneratePoem: function(){
    
    console.log("Go to generate poem")
    var delimiter1 = "?"
    var delimiter2 = "&"
    var type_url = "type=ad"
    var image_url = "image_src=" + this.data.image_src
/*
    wx.navigateTo({
      url: '../image_content/image' + 
        delimiter1 + tag_url + delimiter2 + type_url + delimiter2 + image_url,
      success: function(res){
        // success
        console.log("redirect to generate page success")
      },
      fail: function() {
        // fail
        console.log("redirect to generate page fail")
      },
      complete: function() {
        // complete
      }
    })
*/
    wx.uploadFile({
      url: 'https://omg.moxz.cn/imageteller/image-analyst?language=zh',
      filePath: this.data.image_src,
      name: "image",
      formData: {
        'image': this.data.image_src
      },
      success: function(res){
        console.log(res.data)
        var jsonObj = JSON.parse(res.data)
        console.log(jsonObj.data.tags.length)
        console.log(jsonObj.data.tags[0]['text'])

        var image_tags = new Array()
        for (var i=0; i<jsonObj.data.tags.length; i++)
        {
          image_tags.push(jsonObj.data.tags[i]['text'])
        }

        var tag_url = "tags=" + JSON.stringify(image_tags)
        var redirect_url = '../image_content/image' + 
              delimiter1 + tag_url + delimiter2 + type_url + delimiter2 + image_url

        console.log(redirect_url)
        // success
        wx.navigateTo({
          url: redirect_url,

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

  },

  // 广告生成函数
  bindSearchAd: function(){

    console.log("Go to search ad")
    var delimiter1 = "?"
    var tag_url = "tags=" + JSON.stringify(this.data.user_input_tags)
    var delimiter2 = "&"
    var type_url = "type=ad"
    wx.redirectTo({
      url: '../image_content/image' + 
        delimiter1 + tag_url + delimiter2 + type_url,
      success: function(res){
        // success
        console.log("redirect to search page success")
      },
      fail: function() {
        // fail
        console.log("redirect to search page fail")
      },
      complete: function() {
        // complete
      }
    })
  },

  // 从相册选择照片或拍摄照片
  chooseImage() {
      wx.chooseImage({
          count: 9,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],

          success: (res) => {

              console.log(res)

              this.setData({
                "image_src": res.tempFilePaths[0],
                "generate_button_disabled":false,
                "search_button_disabled":false
              })

              // console.log(api.getUrl('/upload'));
              // wx.uploadFile({
              //     url: api.getUrl('/upload'),
              //     filePath: res.tempFilePaths[0],
              //     name: 'image',

              //     success: (res) => {
              //         let response = JSON.parse(res.data);

              //         if (response.code === 0) {
              //             console.log(response);
              //         } else {
              //             console.log(response);
              //         }
              //     },

              //     fail: (res) => {
              //         console.log('fail', res);
              //     },

              //     complete: () => {
              //         this.hideLoading();
              //     },
              // });

          },
      });
  },

})
