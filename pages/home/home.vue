<template>
	<view class="content">
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			const loginInfo = this.$untils.getUserInfo();
			console.log(loginInfo)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
