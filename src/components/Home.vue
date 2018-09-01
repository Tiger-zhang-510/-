<template>
  <div class="home">
    <div class="side-bar">
      <Tree-View></Tree-View>
    </div>
    <div class="continer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TreeView from './TreeView/TreeView'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
    TreeView,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.side-bar 
  width: 300px 
  height:100% 
  overflow-y:auto 
  overflow-x:hidden 
  position:absolute 
  top:0 
  left:0
.continer 
  padding-left:320px  
</style>
