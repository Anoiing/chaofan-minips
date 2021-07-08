<template>
  <u-search
    v-model="keyword"
    shape="round"
    placeholder="请输入搜索内容"
    :focus="true"
    :disabled="disabled"
    :show-action="!!showAction"
    @click="handleSearch"
  />
</template>

<script>
import head from 'lodash.head';

export default {
  name: 'NavSearch',
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    showAction: {
      type: Boolean,
      dafault: false
    }
  },
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    handleSearch() {
      const page = head(getCurrentPages());
      // 非搜索页页面点击跳转至搜索页
      if (page.route !== 'pages/search/index') {
        uni.navigateTo({
          url: '/pages/search/index'
        });
      }
    }
  }
};
</script>

<style lang="scss"></style>
