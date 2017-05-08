import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default[  
	  {path:'/',component:require('../page/menu/index')},
	  {path: '/rank', component: require('../page/menu/ranking')},
	  {path: '/plist', component: require('../page/menu/plist')},
	  {path: '/singer', component:require('../page/menu/singer')},        
	  {path: '/ring', component:require('../page/menu/ring')},
	  {path: '/search', component:require('../page/search')},
	  {path: '/rank/info/:id', component:require('../page/menu/rankInfo')},
	  {path: '/plist/info/:id', component:require('../page/menu/songInfo')},
	  {path: '/singer/list/:id', component:require('../page/menu/singerList')},
	  {path: '/singer/info/:id', component:require('../page/menu/singerInfo')},
]


