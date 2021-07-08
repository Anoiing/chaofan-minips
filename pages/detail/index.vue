<template>
  <view>
    这是详情页
    <u-button @click="handleBack">返回主页</u-button>
  </view>
</template>

<script>
export default {
  onShow() {
    console.log('详情页 onShow');
  },
  onShareAppMessage() {
    console.log('发起了分享');
    return {
      title: '分享标题',
      path: '/pages/detail/index'
    };
  },
  methods: {
    handleBack() {
      uni.navigateBack({ url: '../home/index' });
    }
  }
};
</script>

<style scoped></style>
