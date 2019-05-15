import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import BaiduMap from 'vue-baidu-map';

Vue.config.productionTip = false;
Vue.use(BaiduMap, {
    /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
    ak: 'vAtU2iOAVVl8i2GySRLSiEOO8ts3u7ds'
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
