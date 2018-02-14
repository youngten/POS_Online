<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <left-navi></left-navi>
    <div class="main">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import leftNavi from '@/components/common/leftNavi'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      leftNavi
    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .main {
      height: 100%;
      width: 95%;
      float: right;
      background-color: #EFF2F7;
      overflow: auto;
    }
  }
</style>
