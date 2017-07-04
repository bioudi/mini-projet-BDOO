<template lang="html">
  <div class="columns is-multiline" style="margin-top:-70px;">
    <div class="column is-full">
        <div>
            <input id="ss" class="input is-small" type="text" placeholder="Mot-clé" v-model="word" >
        </div>
    </div>
    <div class="column">
      <center>
        <a class="button is-medium is-danger" style="background-color:#BD3D41" @click="sendKey()">Rechercher</a>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name:'search',
  data(){
    return{
      word:null
    }
  },
  methods:{
    sendKey(){
      Event.fire('Key',this.word);
    }
  }
}
</script>

<style lang="css">
</style>
