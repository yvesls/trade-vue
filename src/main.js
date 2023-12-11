/* eslint-disable */ 
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
  render: h => h(App),
  store,router
  
}).$mount('#app')
