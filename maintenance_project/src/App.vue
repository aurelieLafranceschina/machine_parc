<template>
  <div id="app">
    <img src="src/img/coffee_logo.png">
    <h1>{{ msg }}</h1>
    
      <div id="buttons">
        <a href="#" class="button1" v-on:click="onMachinesListClick
        ">Consulter la liste des machines</a>
        <a href="#" class="button1" v-on:click="onMapClick
        ">Consulter la carte</a>
        
      </div>
      <div>
        <router-link to="/liste_machines">Liste des machines</router-link>
        <router-link to="/carte">Carte des machines</router-link>
        <router-link to="/machine">Une machine</router-link>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Que voulez-vous faire ?',

      

  methods: {

    onMachinesListClick: function() {
      alert('Vous allez consulter les machines')

    },

    onMapClick: function (){
      alert('Vous allez consulter la carte')
    }
  }
  }

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.green {

  color : green;
}

.red {
  color : red;
}

.button1 {
    background-color: #b33c00; 
    border-radius: 12px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

.button1:hover {

  background-color: #cc4400; 
    color: white;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#buttons{

  margin-bottom: 2%;
}
</style>
