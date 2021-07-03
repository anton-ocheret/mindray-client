import Vue from 'vue';
import PortalVue from 'portal-vue';

import router from '@core/router';
import store from '@core/store';

import App from '@core/app';

import '@/registerServiceWorker';
import '@scss/index.scss';

Vue.config.productionTip = false;
Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
