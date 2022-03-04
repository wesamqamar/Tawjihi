import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* use vue bootstrap lib */
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* .........................*/
/* import scss file */
import '../src/assets/scss/index.scss';
/* .........................*/


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
