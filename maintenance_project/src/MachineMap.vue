<template>
 <div>
    <h1>
      Carte des machines
    </h1>
    <div id='map'>
      <gmap-map 
        :center="{lat:10, lng:10}"
        :zoom="5"
        style="width: 100%; height: 800px"    >
        <gmap-marker
          :key="machine.id"
          v-for="machine in machines"
          :position="machine.position"
          :clickable="true"
          :draggable="false"
          @click="center=machine.position">
        </gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "carteMachines",
  props: ["Carte"],

  data () {

    return {
    center: {lat:45.767329, lng:  4.857019},
        machines: [{
          position: {lat: 45.767329, lng: 4.857019}
        }, {
          position: {lat: 45.189584, lng: 5.739522}
        }]
    }
  }
};
</script>

<style>


</style>

