import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import SearchResult from '../components/SearchResult.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/search', component: SearchResult },
    { path: '/', redirect: 'http://localhost:8080/'}
  ]
})