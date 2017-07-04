<template lang="html">
  <div>
    <br>
    <div class="field">
      <label class="label">Titre</label>
      <p class="control">
        <input class="input" type="text" placeholder="ex: The Wolf of Wall Street" v-model="movie.title">
      </p>
    </div>
    <div class="field">
      <label class="label">Année</label>
      <p class="control">
        <input class="input" type="text" placeholder="ex: 2017" v-model="movie.year">
      </p>
    </div>
    <div class="field">
      <label class="label">Studio</label>
      <p class="control">
        <input class="input" type="text" placeholder="ex: Pixar" v-model="movie.studio">
      </p>
    </div>
    <div class="field">
      <label class="label">Durée</label>
      <p class="control">
        <input class="input" type="text" placeholder="ex: 120" v-model="movie.duration">
      </p>
    </div>
    <div class="field">
      <label class="label">Gender</label>
      <p class="control">
        <span class="select">
          <select v-model="movie.gender">
            <option disabled value="">Veuillez choisir</option>
            <option>Action</option>
            <option>Horreur</option>
            <option>Romance</option>
            <option>Comédie</option>
            <option>Drama</option>
            <option>Animation</option>
            <option>Adventure</option>
          </select>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Note</label>
      <p class="control">
        <input class="input" type="text" placeholder="ex: 92.1" v-model="movie.rating">
      </p>
    </div>

    <div class="field is-grouped">
  <p class="control">
    <button class="button is-primary" style="background-color:#BD3D41" @click="Validate()">Valider</button>
  </p>
  <p class="control">
    <router-link to="/ " class="button is-link">Annuler</router-link>
  </p>
</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'UpdateForm',
  data(){
    return{
      movie:{}
    }
  },
  methods:{
    Validate(){
      axios.get('http://0.0.0.0:4567/movies/update/'+this.movie.id+'/'+this.movie.title+'/'+this.movie.duration+'/'+this.movie.year+'/'+this.movie.gender+'/'+this.movie.studio+'/'+this.movie.rating)
        .then((response=>{
          console.log(response.data[0]);
          this.$router.push('/films');
        }));
    }
  },
  created(){
    axios.get('http://0.0.0.0:4567/movies/search/id/'+this.$route.params.id)
      .then((response=>{
        this.movie = response.data[0];
      }));
  }
}
</script>

<style lang="css">
.select:after {
    border: 1px solid #BD3D41;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: .5em;
    pointer-events: none;
    position: absolute;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: .5em;
    margin-top: -.375em;
    right: 1.125em;
    top: 50%;
    z-index: 4;
  }
</style>
