export default {
	tabBarList:[
		'pages/home/home',
		'pages/person/person'
	],
	checkLogin(backpage, backtype){
		var STOKEN  = uni.getStorageSync('token');
		var SNAME = uni.getStorageSync('name');
		if(STOKEN == ''){
			uni.navigateTo({url:'../login/login?backpage='+backpage+'&backtype='+backtype});
			return false;
		}
		return {
			token:STOKEN,
			name:SNAME
		};
	},
	// 获取登录用户的基本信息
	getUserInfo(){
		const path = window.location.hash.split('#/')[1];
		return this.checkLogin(path, this.tabBarList.indexOf(path)>-1?2:1);
	}
}