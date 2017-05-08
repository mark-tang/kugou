<template>
	<div class="container ring">
		<mt-cell v-for="(item,index) in songList" :title="item.title" :label="item.desp">
			<a :href="item.orderUrl" class="subscribe">
	        	<img src="../../assets/img/order-ring.png">
	        	<p>订阅</p>
	      	</a>			
		</mt-cell>
	</div>
</template>
<script>
import {Cell,Indicator} from 'mint-ui'
import {INIT} from '../../mixins'
import rings from '../../jsons/rings'
export default{
	mixins:[INIT],
	methods:{
		getList(){
			Indicator.open({
          		text: '加载中...',
          		spinnerType: 'snake'
        	});
        	this.parseList(rings);
		},
		parseList(data){
			setTimeout(()=>{
				Indicator.close();
				this.songList = data;
			},1000);
		}
	}
	
}
</script>