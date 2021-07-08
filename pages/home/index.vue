<template>
  <view>
    <NavBar :on-home-handle="getDisplayList" />
    <view class="layout">
      <!-- 分类菜单 -->
      <u-tabs
        :list="menuList"
        name="title"
        is-scroll
        bar-width="80"
        :current="currentMenu"
        @change="handleTabChange"
      />
      <!-- 内容 -->
      <view class="content">
        <u-button @click="handleDetail">进入详情页</u-button>
      </view>
    </view>
  </view>
</template>

<script>
import NavBar from 'components/NavBar';
import { getProfile, getTabMenus } from 'utils/services.js';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      menuList: [],
      currentMenu: 0
    };
  },
  onLoad() {
    // 获取配置信息
    getProfile().then((res) => {
      // console.log(res);
    });

    // 初始化首页Tab菜单
    getTabMenus().then(({ data }) => {
      let menuList = [];
      data.forEach((o) => {
        menuList = menuList.concat(o.menues);
      });
      this.menuList = menuList;
    });
  },
  methods: {
    // 菜单变更
    handleTabChange(index) {
      this.currentMenu = index;
      console.log(menuList[index]);
    },

    // 获取展示列表
    getDisplayList() {},

    // 跳转详情页
    handleDetail() {
      console.log('detail click');
      uni.navigateTo({ url: '../detail/index' });
    }
  }
};
</script>

<style lang="scss" scoped></style>
