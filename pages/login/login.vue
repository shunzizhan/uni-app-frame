<template>
	<view class="content login">
		<cover-image class="logo" src="../../static/logo.png"></cover-image>
		<form class="login-form">
			<view class="login-form-item" prop="userName">
				<input class="uni-input" v-model="formData.userName" placeholder="请输入用户名" />
			</view>
			<view class="login-form-item">
				<input class="uni-input" type="password" v-model="formData.userPwd" placeholder="请输入密码" />
			</view>
			<view class="login-form-item">
				<button type="primary" @click="login" formType="submit">立即登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	var  graceChecker = require("../../js_sdk/graceui-dataChecker/graceChecker.js");
	export default {
		data() {
			return {
				formData:{
					userName:"",
					userPwd:""
				},
				backpage:'pages/person/person',
				backtype:'2',// 1表示非tabBar，2表示tabBar
			}
		},
		onLoad() {
			const {query} = this.$route;
			if(query){
				const {backpage,backtype} = query;
				if(backpage){
					this.backpage = backpage;
				}
				if(backtype){
					this.backtype = backtype;
				}
			}
		},
		methods: {
			login(){
				var rule=[
					{name:"userName",checkType:"notnull",checkRule:"",errorMsg:"请输入用户名"},
					{name:"userPwd", checkType : "notnull", checkRule:"",  errorMsg:"请输入密码"}];
				var checkRes = graceChecker.check(this.formData,rule);
				if(checkRes){
					//显示消息提示框
					const {userName,userPwd} = this.formData;
					if(userName === 'admin' && userPwd === '123456'){
						uni.setStorage({
							key: 'token',
							data: 1
						});
						uni.setStorage({
							key: 'name',
							data: userName
						});
						const redictType = this.backtype==1?'navigateTo':'switchTab'
						uni[redictType]({
							url: `/${this.backpage}`
						})
					}else{
						// icon 仅又succes loading none
						uni.showToast({title:"用户名或密码不对",icon:"none"});
					}
				}else{
					uni.showToast({title:graceChecker.error,icon:"none"});
				}	
				
			}
		}
	}
</script>

<style lang="scss">
	.login{
		// padding-top: 45%; /*偏移*/
	}
	.logo{
		width: 200rpx;
		margin: 100rpx auto 60rpx;
	}
	.login-form{
		.login-form-item{
			margin-bottom: 50rpx;
			border-bottom: 1rpx solid $uni-border-color;
			.uni-input{
				line-height: 3em;
				height: 3em;
			}
		}
	}
</style>
