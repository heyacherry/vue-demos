<template>
  <div id="app">
    <app-header></app-header>
    <wikipedia-viewer></wikipedia-viewer>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "components/AppHeader.vue";
import WikipediaViewer from "components/WikipediaViewer.vue";
import AppFooter from "components/AppFooter.vue";

export default {
  name: 'app',
  
  components:{
    AppHeader,
    WikipediaViewer,
    AppFooter
  }

}
</script>

<style>

html{
   font-size:62.5%;  /* =10px */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 50px;*/
}

</style>
