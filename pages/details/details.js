// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bigImg: "../../image/show03.jpg",
    cardList: ["../../image/show01.jpg",
      "../../image/show02.jpg",
      "../../image/show03.jpg", "../../image/show04.jpg",
      "../../image/show05.jpg", "../../image/show06.jpg"
    ],
    moneyList: ["50", "80", "100", "200", "300", "500"],
    defaultIndex : 0,
    moneyIndex:0
  },

  cardTap : function(e){
    this.setData({
      defaultIndex: e.currentTarget.dataset.index,
      bigImg: this.data.cardList[e.currentTarget.dataset.index]
    })
  },

  moneyTap : function(e){
    this.setData({
      moneyIndex:e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})