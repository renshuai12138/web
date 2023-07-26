<template>
  <Header v-if="$route.meta.alive" />
  <div class="app" height="100%">
    <Menu msg="Welcome to Your Vue.js App" v-if="$route.meta.alive" />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Menu,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.app {
  display: flex;
}

</style>
