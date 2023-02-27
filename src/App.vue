<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <AppHeader ></AppHeader>

    <AppDashbaord  />
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <AppLoader v-if="loader"  /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppDashbaord from "./components/dashboard/dashboard.vue";
import AppHeader from "./components/header.vue";
// import AppLoader from "./components/loader.vue";

export default {
  name: 'App',
  components: {
    AppDashbaord,AppHeader
  },
  data(){
    return { 
      loader:false
    }
  },
  mounted(){
    this.loader = this.$loader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #060707; */
  color: #2c3e50;
  
}
</style>
