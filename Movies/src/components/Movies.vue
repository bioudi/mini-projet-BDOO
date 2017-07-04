<template lang="html">
  <div v-show="show" class="columns">
    <div class="column is-full">
      <table class="table is-bordered is-striped is-narrow">
        <tr>
          <th style="color:#7A7A7A;">Titre</th>
          <th style="color:#7A7A7A;">Durée</th>
          <th style="color:#7A7A7A;">Genre</th>
          <th style="color:#7A7A7A;">Année</th>
          <th style="color:#7A7A7A;">Note</th>
          <th style="color:#7A7A7A;">Studio</th>
          <th style="color:#7A7A7A;">Action</th>
        </tr>
        <movie v-for="(movie,index) in movies" :data="movie" :key="movie.id" :index="index"></movie>
      </table>
    </div>
  </div>
</template>

<script>
import Movie from './Movie.vue';
import axios from 'axios';
export default {
  name: 'movies',
  data(){
    return{
      movies: null,
      show: false
    }
  },
  created:function(){

    Event.listen('Liste',function(){
      axios.get('http://0.0.0.0:4567/movies/list')
        .then((response=>{
          this.movies = response.data;
        }));
      this.show = true;
    }.bind(this));

    Event.listen('Key',function(Key){
      axios.get('http://0.0.0.0:4567/movies/search/key/'+Key)
        .then((response=>{
          this.movies = response.data;
        }));
      this.show = true;
    }.bind(this));

    Event.listen('removeMovie',(index=>this.movies.splice(index,1)));
  },
  components:{Movie}
}
</script>

<style lang="css">

</style>
