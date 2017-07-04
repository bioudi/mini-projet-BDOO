<template lang="html">
  <div>
    <logo></logo>
    <search></search>
    <br>
    <movies></movies>
  </div>
</template>

<script>
import axios from 'axios';
import Movies from './Movies.vue';
import Logo from './Logo.vue';
import Search from './Search.vue';
export default {
  name:'accueil',
  data(){
    return{

    }
  },
  components:{Movies,Logo,Search}
}
</script>

<style lang="css">
</style>
