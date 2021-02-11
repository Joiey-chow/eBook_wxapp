// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'homepage',
    datalist:[],
    bookname:''
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
},
search(event){
  this.setData({
    bookname: event.detail.detail.value
  })
  var that = this;
  wx.request({
    url: 'http://novel.kele8.cn/search?keyword=?'+event.detail.detail.value,
    method:'GET',
    success: function (res) {
      console.log(res.data.books);
      let datalist = res.data.books;
        let i = 0 ;
        let re =  /((http|ftp|https|file):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?@\%\!\&=\+\~\:\#\;\,]*)?)g/g;
        for(; i < datalist.length;i++){
          datalist[i].cover = (decodeURIComponent(datalist[i].cover)).match(re)[0];
        }
        that.setData({datalist});
    }
  })
  
},

cardClick(event){
  var that = this;
  console.log(event.currentTarget.dataset.id);
  wx.request({//获取书源id
    url: 'http://api.zhuishushenqi.com/btoc?view=summary&book='+event.currentTarget.dataset.id,
    method:'GET',
    success: function (res) {
        wx.navigateTo({
          url: '../bookinfo/bookinfo?id='+res.data[0]._id,
        })
    }
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      //url: 'http://localhost:8080/ebook-book/test',
      url:'http://api.zhuishushenqi.com/ranking/54d42d92321052167dfb75e3',
      method:'GET',
      success: function (res) {
        console.log(res);
        let datalist = res.data.ranking.books;
        let i = 0 ;
        let re =  /((http|ftp|https|file):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?@\%\!\&=\+\~\:\#\;\,]*)?)g/g;
        for(; i < datalist.length;i++){
          datalist[i].cover = (decodeURIComponent(datalist[i].cover)).match(re)[0];
        }
        that.setData({datalist});
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