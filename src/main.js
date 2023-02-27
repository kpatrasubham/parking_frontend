import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import moment from 'moment';
Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});
Vue.prototype.$http = axios
Vue.prototype.$loader = false;
Vue.config.productionTip = false
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
new Vue({
  render: h => h(App),
}).$mount('#app')
