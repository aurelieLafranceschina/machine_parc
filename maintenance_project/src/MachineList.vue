<template>

<div>
    <ul id="machines">
     <machine v-for="machine in machines" :key="machine.id"
     v-bind:name="machine.name"
     v-bind:status="machine.status"
     v-bind:checkedAt="machine.checkedAt"

     >
       
      </machine> 
    </ul>

    
  </div>
  
</template>


<script>
import axios from 'axios';
import Machine from './Machine.vue'

export default {
  name:'listeMachines',
  props:['name','status','checkedAt'],
    
  created() {
    console.log('requete en cours');
    axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
    .then(response => {
      // JSON responses are automatically parsed.

      // this.loading = !this.loading
      this.machines = response.data
      console.log('requete terminée');
    })
    .catch(e => {
      console.log('ERROR');
      this.errors.push(e)
    })
  },

   data () {
     return{
      machines: [], // au début la liste des machines est vide
      loading: false,
      errors: null,
      

    //   machines: [{
    //     id: 1,
    //     name: 'What else ?',
    //     status: true,
    //     checkedAt: new Date(),
    // }, {
    //     id: 2,
    //     name: 'Broken',
    //     status: false,
    //     checkedAt: new Date(),
    //     }]
     } 
  }
}
    





  
  
  





</script>
