//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "/image/banner01.png",
      "/image/banner02.png",
      "/image/banner03.png",
      "/image/banner04.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    cardBeanOne: [{
        "cardName": "给特别的你",
        "imgUrl": "/image/treat01.png"
      },
      {
        "cardName": "我想对你说",
        "imgUrl": "/image/treat02.png"
      }
    ],
    cardBeanTwo: [{
        "cardName": "来星巴克约会吧",
        "imgUrl": "/image/card01.jpg"
      },
      {
        "cardName": "爱要大声说出来",
        "imgUrl": "/image/card02.jpg"
      },
      {
        "cardName": "勇敢爱",
        "imgUrl": "/image/card03.jpg"
      }, {
        "cardName": "一个人的精彩",
        "imgUrl": "/image/card04.jpg"
      }, {
        "cardName": "萌萌哒",
        "imgUrl": "/image/card05.jpg"
      }, {
        "cardName": "友谊万岁",
        "imgUrl": "/image/card06.jpg"
      }, {
        "cardName": "恋人未满",
        "imgUrl": "/image/card07.jpg"
      }, {
        "cardName": "生日快乐",
        "imgUrl": "/image/card08.jpg"
      },
    ]
  },

  ToDetails: function() {
    wx:wx.navigateTo({
      url: '/pages/details/details'
    })
  }

})