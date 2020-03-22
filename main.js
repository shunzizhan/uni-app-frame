import Vue from 'vue'
import App from './App'
import untils from 'static/untils/common'

Vue.prototype.$untils = untils;
Vue.config.productionTip = false
// Vue.prototype.checkLogin = function(backpage, backtype){
// 	var STOKEN  = uni.getStorageSync('token');
// 	var SNAME = uni.getStorageSync('name');
// 	if(STOKEN == ''){
// 		uni.redirectTo({url:'../login/login?backpage='+backpage+'&backtype='+backtype});
// 		return false;
// 	}
// 	return [STOKEN, SNAME];
// }
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
