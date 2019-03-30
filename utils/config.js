(function(module) {
  let musicAPIurl = 'http://tingapi.ting.baidu.com/v1/restserver/ting';

  // 新歌榜单访问接口
  let newList = musicAPIurl + '?method=baidu.ting.billboard.billList & type=1 & size=20 & offset=0';
  // 热门榜单访问接口
  let hotList = musicAPIurl + '?method=baidu.ting.billboard.billList & type=2 & size=20 & offset=0';
  // 摇滚榜单
  let yaogun = musicAPIurl + '?method=baidu.ting.billboard.billList & type=11 & size=20 & offset=0';
  // 爵士榜单
  let jueshi = musicAPIurl + '?method=baidu.ting.billboard.billList & type=11 & size=20 & offset=0';
  // 流行榜单
  let liuxing = musicAPIurl + '?method=baidu.ting.billboard.billList & type=11 & size=20 & offset=0';
  // 经典老歌榜单
  let jingdianlaoge = musicAPIurl + '?method=baidu.ting.billboard.billList & type=11 & size=20 & offset=0';
  // 情歌对唱榜单
  let qinggeduichang = musicAPIurl + '?method=baidu.ting.billboard.billList & type=11 & size=20 & offset=0';

  module.exports = {
    config: {
      newList: newList,
      hotList: hotList,
      yaogun: yaogun,
      jueshi: jueshi,
      liuxing: liuxing,
      jingdianlaoge: jingdianlaoge,
      qinggeduichang: qinggeduichang
    }
  };
  
})(module)

