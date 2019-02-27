// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIcon:"https://wx.qlogo.cn/mmopen/vi_32/GCiaODrDB8pNsLwmLibibpibQFTFARpIibuv0mqFomq2dPe5qQVmCQLG8x62iaicGpZpia0Aq14BWFA0L2JebUd3wia4lNQ/132"
  },

  toUserInfo(){
    wx.navigateTo({
      url: 'userinfo/info'
    })
  },
  toCoupon(){
    wx.navigateTo({
      url: 'coupon/coupon'
    })
  },
  toGoodsCard(){
    wx.navigateTo({
      url: 'goodsCard/goodsCard'
    })
  },
  toOrderList(){
    wx.navigateTo({
      url: 'order/orderList/orderList'
    })
  },
  toCollection(){
    wx.navigateTo({
      url: 'collection/collection'
    })
  },
  toWelfare(){
    wx.navigateTo({
      url: 'welfare/welfare'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})