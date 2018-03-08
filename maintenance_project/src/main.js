import Vue from 'vue'
import App from './App.vue'
import Liste from './MachineList.vue'
import Carte from './MachineMap.vue'
import Machine from './Machine.vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDYAx9Aqq0uCIoNouFWvI_S4p-ZOfr2rqU',}})

Vue.use(VueRouter);
Vue.component('liste',Liste);
Vue.component('carte',Carte);
Vue.component('machine',Machine);

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


