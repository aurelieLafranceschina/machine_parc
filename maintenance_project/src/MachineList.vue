<template>

<div>
    <ul id="machines">
      <li v-for="machine in machines" :key="machine.id">
        <h1>{{machine.name}}</h1>
        <h3 v-if="machine.status" class="green" >Statut OK</h3>
        <h3 v-else class="red">Statut KO</h3>
        <h5>{{machine.checkedAt.toLocaleString()}}</h5>
      </li>
    </ul>
  </div>
  
</template>


<script>

import Machine from './Machine.vue'

export default {
  name:'listeMachines',
  props:['name','status','checkedAt'],

   data () {
    return {
        machines: [{
        id: 1,
        name: 'What else ?',
        status: true,
        checkedAt: new Date(),
    }, {
        id: 2,
        name: 'Broken',
        status: false,
        checkedAt: new Date(),
        }]
    }
    
  }
}




</script>
