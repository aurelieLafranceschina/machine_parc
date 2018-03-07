<template>
  <div>
    <h1>{{cetteMachine.name}}</h1>
    <h3 v-if="cetteMachine.status" class="green" >Statut OK</h3>
    <h3 v-else class="red">Statut KO</h3>
    <h5>{{cetteMachine.checkedAt.toLocaleString()}}</h5>
  </div>
</template>

<script>
export default {
  name:'machine',
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




</script>

<style>
.green {

  color : green;
}

.red {
  color : red;
}

</style>