<template>
	<div class="container ranking">
		<mt-cell v-for="(item,index) in songList" :title="item.txt"	:to="item.songUrl"  is-link>		
			<img slot="icon" :src="item.imgUrl" width="60" height="60">
		</mt-cell>
	</div>
</template>
<script>	
	import {Cell,Indicator} from 'mint-ui'
	import {INIT} from '../../mixins'
	export default {
		name:'ranking',	
		mixins:[INIT],					
		methods: {	
			getList(){
				Indicator.open({
		          text: '加载中...',
		          spinnerType: 'snake'
		        });
		        this.$http.get('http://cs003.m2828.com/apis/getPage.php?path=/rank/list').then(res=>{
		          Indicator.close();		         
		          this.parseRank(res.data);
		        });		        
			},
			parseRank(data){
				var box = document.createElement('div');
				box.innerHTML = data;
				var list = box.querySelectorAll(".panel-img-list li");				
				for (var i = 0; i < list.length; i++) {
					var rank = {}
					rank.txt = list[i].innerText;
					rank.songUrl = "/rank/info/"+list[i].querySelector('a').href.substr(29);
					rank.imgUrl = list[i].querySelector('img').getAttribute('_src');	  				
					this.songList.push(rank);
				}
			}			
		}
		
	}
</script>


