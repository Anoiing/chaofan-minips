import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
  ...App
});
app.$mount();
