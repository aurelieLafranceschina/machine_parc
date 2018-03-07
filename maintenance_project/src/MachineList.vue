<template>
  <h1>
      Liste des machines
  </h1>
</template>


<script>
export default {
  name:'listeMachines',
  props:['name','status','checkedAt'],

   data () {
    return {
        cetteMachine: {   
                    name: 'What else ?',
                    etat : 'KO',
                    status: true,
                    checkedAt: new Date()
                }
        }
    }
}

import Machine from './Machine.vue'


</script>
