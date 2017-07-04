<template lang="html">
  <div class="">
    <br>
    <movies></movies>
  </div>
</template>

<script>
import Movies from './Movies.vue';
export default {
  name:'films',
  data(){
    return{

    }
  },
  components:{Movies},
  mounted(){
    Event.fire('Liste');
  }
}
</script>

<style lang="css">
</style>
