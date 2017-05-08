<template>
	<div class="container">
	    <mt-swipe :auto="5000">
	      <mt-swipe-item>
	        <img src="../../assets/img/banner1.jpg">
	      </mt-swipe-item>
	      <mt-swipe-item>
	        <img src="../../assets/img/banner2.jpg">
	      </mt-swipe-item>
	      <mt-swipe-item>
	        <img src="../../assets/img/banner3.jpg">
	      </mt-swipe-item>
	      <mt-swipe-item>
	        <img src="../../assets/img/banner4.jpg">
	      </mt-swipe-item>
	    </mt-swipe>
	    <div>
	      <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)">
	        <img src="../../assets/img/download_icon.png" width="20" height="20">
	      </mt-cell>
	    </div>
    </div>
</template>
<script type="es6">
  import { Swipe, SwipeItem,Indicator,Cell } from 'mint-ui'
  import newSong from '../../jsons/newSong'
  import {INIT,PLAY_AUDIO} from '../../mixins'
  export default{
    mixins:[INIT,PLAY_AUDIO],         
    methods: {
      getList(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.parseData(newSong);
      },
      parseData(data){
        setTimeout(()=> {
          Indicator.close();
          this.songList = data;   
        }, 1000);
      },
      
    }
  }
</script>
<style>
  .mint-swipe {
    height: 39vw !important;
  }

  .mint-swipe-indicator {
    width: 12px !important;
    height: 12px !important;
  }

  .mint-swipe-indicators {
    bottom: 5px !important;
  }
</style>