<script>
export default {
  onLaunch: function () {
    // console.log("App Launch");
  },
  onShow: function () {
    // console.log("App Show");
  },
  onHide: function () {
    // console.log("App Hide");
  }
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import 'static/styles/index.scss';
@import 'static/iconfonts/iconfont.css';

/*每个页面公共css */
.u-tabbar {
  .u-tabbar__content {
    .u-tabbar__content__item:not(:nth-child(3)) {
      .u-tabbar__content__item__text {
        font-size: 12px;
      }
    }
    .u-tabbar__content__item:nth-child(3) {
      .u-tabbar__content__item__text {
        font-size: 15px;
      }
    }
  }
}
</style>
