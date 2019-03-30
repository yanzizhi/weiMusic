//index.js
//获取应用实例
const app = getApp();
let getMusicUrl = require('../../utils/config.js');

Page({
  data: {
    songList: {},
  },
  
  onLoad: function () {
    let self = this;
    // 获取新歌榜
    wx.request({
      url: getMusicUrl.config.newList,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
        self.setData({
          songList: res.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  play: function() {
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=877578',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})
