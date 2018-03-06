import Vue from 'vue'
import App from './App.vue'
import Liste from './MachineList.vue'
import Carte from './MachineMap.vue'
import Machine from './Machine.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.component('liste',Liste);
Vue.component('carte', Carte);
Vue.component('machine', Machine);

const routes = [
  {
    path:'/liste_machines', component:Liste  },
  {
    path:'/carte', component:Carte  },
  {
    path:'/machine', component:Machine  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),

  router
})


