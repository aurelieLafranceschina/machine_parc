<template>
  <h1>Une machine</h1>
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
}

</style>