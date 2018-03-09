<template>
      <li>
        <h1>{{name}}</h1>
        <h3 v-if="status" class="green" >Statut OK</h3>
        <h3 v-else class="red">Statut KO</h3>
        <h5>{{checkedAt.toLocaleString()}}</h5>
      </li>
</template>

<script>



export default {
  name:'machine',
  props:['name','status','checkedAt'],
}
</script>

<style>
.green {

  color : green;
}

.red {
  color : red;
}

li {

 list-style-type:none;
 border-style: solid;
}

</style>