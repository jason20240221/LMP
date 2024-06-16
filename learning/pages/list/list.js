// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentSwiperIndex: 0,
  },
  // swiper-item 的位置发生改变时触发
  handleTransition: function(event) {
    const detail = event.detail;
    // console.log('Transition details:', detail);
    // Access dx and dy
    const dx = detail.dx;
    const dy = detail.dy;
    // Perform any action based on the transition details
    // if (Math.abs(dx) > 50) {
    //   console.log('Significant horizontal movement detected');
    //   // Do something when there is significant horizontal movement
    // }
    // if (Math.abs(dy) > 149) {
    //   console.log('Significant vertical movement detected');
    //   // Do something when there is significant vertical movement
    // }
  },
  // 当swiper的当前页发生改变时触发
  handleSwiperChange: function(e) {
    // e.detail 包含了当前轮播页的信息
    const currentSwiperIndex = e.detail.current;
    console.log('当前轮播页索引：', currentSwiperIndex);
    
    // 更新数据模型，以便在其他地方使用这个值
    this.setData({
      currentSwiperIndex: e.detail.current
    });
  },
  /* 点击触发轮播图片跳转 */
  changeToPage: function(e) {
    var pageIndex = e.currentTarget.dataset.pageIndex;
    this.setData({
      currentSwiperIndex: pageIndex
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})