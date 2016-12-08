//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    src: "../resources/camera.png",
    user_input_tags: [],
    generate_button_disabled: true,
    search_button_disabled: true
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
    var tag_url = "tags=" + JSON.stringify(this.data.user_input_tags)
    var delimiter2 = "&"
    var type_url = "type=ad"
    wx.redirectTo({
      url: '../image_content/image' + 
        delimiter1 + tag_url + delimiter2 + type_url,
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

              // 根据服务端传入设置标签
              var input_tags = [
                {value: '山川'},
                {value: '峡谷'},
                {value: '人物'},
                {value: '日落'}
              ]

              this.setData({
                "src": res.tempFilePaths[0],
                "user_input_tags": input_tags,
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
