let method = '';
let musicAPIurl = 'http://tingapi.ting.baidu.com/v1/restserver/ting';

// method = baidu.ting.billboard.billList & type=1 & size=10 & offset=0
// 参数：	type = 1 - 新歌榜, 2 - 热歌榜, 11 - 摇滚榜, 12 - 爵士, 16 - 流行, 21 - 欧美金曲榜, 22 - 经典老歌榜, 23 - 情歌对唱榜, 24 - 影视金曲榜, 25 - 网络歌曲榜
// size = 10 //返回条目数量

//获取新歌榜

(function(module) {
  method = 'baidu.ting.billboard.billList & type=1 & size=20 & offset=0';
  let musicList;
  wx.request({
    url: musicAPIurl + '?method=' + method,
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      
    },
    fail: function(res) {},
    complete: function(res) {},
  })

  module.exports = {
    musicList: res.data
  }
}) (module)
