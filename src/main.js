import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: '/',
      component: HelloWorld,
      name: 'helloworld'
    },
    {
      path:'/bitcoin',
      component: Bitcoin,
      name: 'bitcoin'
    },
    {
      path:'/etherium',
      component: Eth,
      name: 'eth'
    },
    {
      path:'/bitcoincash',
      component: Bch,
      name: 'bch'
    },
    {
      path:'/litecoin',
      component: Ltc,
      name: 'ltc'
    },
    {
      path:'/favorites',
      component: Favorites,
      name: 'favorites'
    },

]

import HelloWorld from './components/HelloWorld.vue';
import Bitcoin from './components/Bitcoin.vue';
import Eth from './components/Eth.vue';
import Bch from './components/Bch.vue';
import Ltc from './components/Ltc.vue';
import Favorites from './components/Favorites.vue';

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

import store from './store/mainstore.js'

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
