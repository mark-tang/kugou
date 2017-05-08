<template> 
    <!--整页切换：<transition name="router-fade" mode="out-in"><router-view></router-view></transition>-->
    <!-- 菜单切换 -->
    <div id="app">
      <div class="header">
        <mhd></mhd> 
        <rank-head v-if="head.toggle" :title="head.title" :style="head.style"></rank-head>
        <mmenu v-else></mmenu>
      </div>  
      <div class="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </div>
      <play></play>
      <full-play></full-play>
  </div>
</template>

<script>
  import mhd from './page/header'
  import rankHead from './page/rankHead'
  import mmenu from'./page/menu' 
  import play from'./page/play'
  import fullPlay from './page/fullplay'
  import { mapGetters } from 'vuex'
  export default {
      computed: {
      ...mapGetters(['head'])
      },
      name: 'app',      
      components: {
        mhd,rankHead,mmenu,play,fullPlay
      }
    }
</script>

<style lang="scss">
  @import "./assets/css/style"; 
  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>