<template>
  <div class="container song">
    <mt-cell v-for="(item,index) in songList" :title="item.title" is-link :label="item.countPlay" :to="item.location">
      <img slot="icon" :src="item.imgUrl"  width="60" height="60" />
    </mt-cell>
  </div>
</template>
<script type="es6">
  import {cell,Indicator} from 'mint-ui'
  import songsheet from '../../jsons/songs'
  import {INIT} from '../../mixins'
  export default {
    mixins:[INIT],
    methods: {
      getList(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });            
        this.parseSong(songsheet);
      },
      parseSong(data){
        setTimeout(()=>{        
          Indicator.close();
          this.songList=data;
        },1000);
      }
    }
  }
</script>

<style scoped>
  .mint-cell-title img {
    margin-right: 5px !important;
  }
</style>

