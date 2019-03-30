//index.js
//获取应用实例
const app = getApp();
let getMusic = require('../../utils/config.js');

Page({
  data: {
    
  },
  
  onLoad: function () {
    // 获取新歌榜
    
    console.log(getMusic.musicList)
  },

})
