<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import navigation from 'components/Nav'
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style>
html,body{
  margin:0;
  padding: 0;
  font-size: 62.5%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

</style>
