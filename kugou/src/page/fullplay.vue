<template>
	<div v-show="detailPlayerFlag" class="full-player">
	 	<div class="detail_player" :style="{'background-image':'url('+audio.imgUrl+')'}"></div>
	 	 <div class="detail_player"
         :style="{'background-image':'url('+audio.imgUrl+')','filter':'blur(5px)','-webkit-filter':'blur(5px)'}"></div>
		<div class="title container">
			<mt-cell :title="audio.title"><span class="hide-fullplay" @click="hideDetailPlayer()"></span></mt-cell>
		</div>
		<div class="imgarea">
			 <img :src="imgUrl">
		</div>
		<div class="lyrics"> 
			<div class="lrc-content">
				<p v-for="(item,index) in songLrc" :class="{'isCurrentLrc':item.seconds>=audio.currentLength,'disCurrentLrc':item.seconds<audio.currentLength}">{{item.lrcContent}}</p>
			</div>
			</div>
		<div class="time container">
			<span>{{audio.currentLength | time }}</span>
			<mt-range :min="0" :max="audio.songLength" v-model="audio.currentLength" :bar-height="3" @click.native="rangeChange($event)" disabled style="width: 80%"></mt-range>
			<span>{{audio.songLength | time }}</span>
		</div>
		<div class="playarea">
	        <i class="play-prev player_btn-sm" @click="prev()"></i>
	        <i class="play-play player_btn-lg" :class="{'play-pause':isPlay}" @click="toggleStatus()"></i>
	        <i class="play-next player_btn-sm" @click="next()"></i>
      </div>
	</div>	
</template>
<script>
	import { mapGetters } from 'vuex'	
	import {Cell,Range} from 'mint-ui'	
	export default{
		name: 'fullplayer',
		data(){
	      return {
	        rangeValue: 0
	      }
	    },
		filters:{
			time(val){				
				var length = Math.floor(parseInt(val));
				var minute = Math.floor(parseInt(length/60));
				var second = length % 60;
				if(minute<10){
					minute='0'+minute;
				}
				if(second<10){
					second='0'+second;
				}				
				return minute + ':' + second;
			}
		},
		computed:{
			...mapGetters(['detailPlayerFlag','audio', 'isPlay']),
			imgUrl(){
		        var temp = this.audio.imgUrl.split('/100');
		        return temp[0] + '/240' + temp[1]
		    },
			songLrc(){
		        if (this.audio.lrc) {
		          var temp = this.audio.lrc.split('\r\n'); //string becomes object  			          		          
		          temp = temp.splice(0, temp.length - 1);
		          temp = temp.map((value)=> {
		            var time = value.substr(1, 5);
		            var seconds = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
		            var lrcContent = value.substr(10);//alert(seconds+":"+lrcContent);
		            return {
		              seconds,
		              lrcContent
		            }
		          })		         
		          return temp;
		      	}
		    },
		    lrcOffset(){
		        if (this.songLrc) {
		          var offset = (this.songLrc.length - document.querySelectorAll('.isCurrentLrc').length - 2) * (-20);
		          return this.audio.currentLength + offset - this.audio.currentLength;
		        }
		     }
		},		
		methods:{	
			hideDetailPlayer(){
				this.$store.commit('showDetailPlayer',false);	
			},
			rangeChange(event){
		        var offset = event.offsetX;
		        var rangeWidth = (document.documentElement.clientWidth - 20) * 0.8 - 20;
		        var clickLength = Math.floor(offset * this.audio.songLength / rangeWidth);
		        if (offset < rangeWidth) {
		          this.$store.commit('setAudioTime', clickLength);
		          this.$store.commit('setCurrent', true);
		        }
		    },
		    toggleStatus(){
		        if (this.isPlay) {
		          document.getElementById('audioPlay').pause();
		        } else {
		          document.getElementById('audioPlay').play();
		        }
		        this.$store.commit('isPlay', !this.isPlay);
		    },
		    prev(){
		        this.$store.dispatch('prev');
		    },
		    next(){
		        this.$store.dispatch('next');
		    }	
		}
	}
</script>