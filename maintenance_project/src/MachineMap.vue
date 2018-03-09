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
          :position={lat:Number(machine.latitude),lng:Number(machine.longitude)}
          :clickable="true"
          :draggable="false"
          @click="center=machine.position">
        </gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: "carteMachines",
  props: ["Carte"],

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

    return {
      machines : [],
      loading : false,
      error : null,
    // center: {lat:45.767329, lng:  4.857019},
    //     machines: [{
    //       position: {lat: 45.767329, lng: 4.857019}
    //     }, {
    //       position: {lat: 45.189584, lng: 5.739522}
    //     }]
    }
  }
};
</script>

<style>


</style>

