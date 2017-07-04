<template lang="html">
  <tr>
    <td><strong class="highlited">{{data.title}}</strong></td>
    <td>{{data.duration}}</td>
    <td>{{data.gender}}</td>
    <td>{{data.year}}</td>
    <td>{{data.rating}}</td>
    <td>{{data.studio}}</td>
    <td>
      <div class="columns">
        <div class="column">
          <center>
            <router-link :to="{ name: 'modifier', params: {id:data.id} }" class="button">
              <span class="icon">
                <i class="fa fa-pencil"></i>
              </span>
              <span>Modifier</span>
            </router-link>
            <a class="button" @click="removeMovie()">
              <span class="icon">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>Supprimer</span>
            </a>
          </center>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import axios from 'axios';
export default {
  name:'movie',
  props:['data','index'],
  data(){
    return{

    }
  },
  methods:{
    removeMovie(){
      Event.fire('removeMovie',this.index);
      axios.get('http://0.0.0.0:4567/movies/delete/'+this.data.id)
        .then((response=>{
          console.log(response.data[0].result);
        }));
    }
  }
}
</script>

<style lang="css">
  .highlited{
    color:#BD3D41;
  }
</style>
