import Vue from 'vue'
import Router from 'vue-router'
import Main from '.././components/Main'
import About from '.././components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/home', name: 'Home', component: Main },
    { path: '/about', name: 'About', component: About }
  ]
})
