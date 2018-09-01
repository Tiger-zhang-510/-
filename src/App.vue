<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'App',
  data(){
    return{}
  },
  components:{
    Home
  }
}
</script>

<style lang="stylus">
*{
  padding:0;
  margin:0;
}
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
html,body,#app,.home {
  height: 100%;
}
html,body {
 overflow: hidden;
}  
</style>
