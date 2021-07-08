<template>
  <u-navbar :is-back="false" :is-fixed="false">
    <view class="flex items-center pl-3">
      <view class="iconfont icon-home mr-2" @click="handleHome" />
      <NavSearch :disabled="disabled" :show-action="showAction" />
    </view>
  </u-navbar>
</template>

<script>
import NavSearch from 'components/NavSearch';
import head from 'lodash.head';

export default {
  name: 'NavBar',
  components: {
    NavSearch
  },
  props: {
    onHomeHandle: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      disabled: true,
      showAction: false
    };
  },
  onShow() {
    const page = head(getCurrentPages());
    const isSearchPage = page.route === 'pages/search/index';
    if (isSearchPage) {
      setData({ disabled: false, showAction: true });
    }
  },
  methods: {
    handleHome() {
      const page = head(getCurrentPages());
      // 首页点击刷新列表，其他页面点击回到首页
      if (page.route === 'pages/home/index') {
        this.onHomeHandle();
      } else {
        uni.redirectTo('pages/home/index');
      }
    }
  }
};
</script>

<style lang="scss">
.icon-home {
  font-size: 28px;
}
</style>
