// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Accueil from './components/Accueil.vue'
import Navigate from './components/Nav.vue';
import Films from './components/Films.vue';
import AddForm from './components/AddForm.vue';
import UpdateForm from './components/UpdateForm.vue';
import VueRouter from 'vue-router'


Vue.config.productionTip = false

window.Event = new class{
  constructor() {
    this.vue = new Vue()
  }

  fire(event,data = null){
    this.vue.$emit(event,data);
  }

  listen(event,callback)
  {
    this.vue.$on(event,callback);
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: Accueil
  },
  {
    path:'/ajouter',
    component: AddForm
  },
  {
    name:'modifier',
    path:'/modifier/:id',
    component: UpdateForm
  },
  {
    path:'/films',
    component: Films
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{

  },
  router,
  components: {Navigate}
})
