<template lang="html">
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link v-for="route in routes" :to="route.path" :key="route.path" :class="[{'is-active':route.isactive},route.myclass]">{{route.name}}</router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name:'navigate',
  data(){
    return{
      routes:[
        {path:'/',name:'Accueil',myclass:'nav-item is-tab is-hidden-mobile ',isactive:true},
        {path:'/films',name:'Films',myclass:'nav-item is-tab is-hidden-mobile ',isactive:false},
        {path:'/ajouter',name:'Ajouter Film',myclass:'nav-item is-tab is-hidden-mobile ',isactive:false}
      ]
    }
  },
  watch:{
    $route(){
      this.routes.forEach((element=>{
        if(this.$route.fullPath === element.path)
          element.isactive=true;
        else
          element.isactive=false;
      }))
    }
  }
}
</script>

<style lang="css">
</style>
