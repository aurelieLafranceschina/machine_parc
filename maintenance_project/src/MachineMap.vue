<template>
 <div>
    <h1>
      Carte des machines
    </h1>

    <gmap-map
      :center="center"
      :zoom="7"
      style="width: 500px; height: 300px"    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position">
      </gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
export default {
  name: "carteMachines",
  props: ["Carte"]
};
</script>

