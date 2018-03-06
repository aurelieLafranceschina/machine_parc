import Vue from 'vue'
import App from './App.vue'
import Liste from './MachineList.vue'
import Carte from './MachineMap.vue'

Vue.component('liste',Liste);
Vue.component('carte', Carte);

new Vue({
  el: '#app',
  render: h => h(App)
})
