<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <div class="jumbotron">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './containers/Header';

export default {
  components: { Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
