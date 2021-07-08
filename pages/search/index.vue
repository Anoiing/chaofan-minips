<template>
  <view>
    <NavBar />
    <view> 搜索页 </view>
    <u-button @click="handleBack">返回主页</u-button>
  </view>
</template>

<script>
import NavBar from 'components/NavBar';

export default {
  components: {
    NavBar
  },
  methods: {
    handleBack() {
      uni.navigateBack({ url: '../home/index' });
    }
  }
};
</script>

<style scoped></style>
