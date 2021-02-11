// pages/bookinfo/bookinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:'',
    spinShow:true
  },
  cardClick(event){
    wx.navigateTo({
      url: '../bookcontent/bookcontent?id='+event.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      let id = options.id;
      wx.request({
        url: 'http://api.zhuishushenqi.com/atoc/'+id+'?view=chapters',
        method:'GET',
        success: function (res) {
          console.log(res);
          let datalist = res.data.chapters
          let spinShow = false;
          that.setData({datalist,spinShow});
        }
      })
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