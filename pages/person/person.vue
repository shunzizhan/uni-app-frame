<template>
	<view class="content">
		<view class="person-header">
			<cover-image class="person-img" src="../../static/logo.png"></cover-image>
			<view class="person-info">
				<view class="person-name">{{userInfo.name}}</view>
				<view class="">成长值 20</view>
			</view>
		</view>
		<view>
			<button type="warn" @click="loginOut">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onShow() {
			const loginInfo = this.$untils.getUserInfo();
			this.userInfo = loginInfo;
		},
		methods: {
			loginOut(){
				uni.removeStorage({
					key: 'token',
					success: function (res) {
						uni.navigateTo({
							url: '../login/login'
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.person-header{
	display: flex;
	background-color: #efefef;
	border-radius: 10rpx;
	padding: 40rpx;
	margin-bottom: 30rpx;
	.person-img{
		width: 120rpx;
		border-radius: 60rpx;
	}
	.person-info{
		margin-left: 30rpx;
		font-size: 30rpx;
		color: #999999;
		.person-name{
			padding-bottom: 10rpx;
			color: #333333;
			font-size: 48rpx;
		}
	}
}
</style>
