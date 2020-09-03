<template>
	<view>
		<view >
		<u-input v-model="value" :type="type" :border="border"  placeholder="请输入需要查询的城市名" class="input"/>
		<u-button  class="button"  type="primary" @tap="cancel">添加</u-button>
		</view>
		<view style="visibility:hidden">伴我天气</view>
	    <view style="border-bottom:3px solid #c8c9cc;margin: 0px 20px 0px 20px"></view>
		<view style="margin: 20px 20px 10px 20px;font-size: 15px;color:#82848a">国内热门城市</view>
	<view class="wrap">
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout">北京</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">上海</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">深圳</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">广州</view>
			</u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout">武汉</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">长沙</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">南京</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">苏州</view>
			</u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout">西安</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">济南</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">青岛</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">沈阳</view>
			</u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout">重庆</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">郑州</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">成都</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">杭州</view>
			</u-col>
		</u-row>
		<u-row gutter="16">
			<u-col span="3">
				<view class="demo-layout">厦门</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">香港</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">澳门</view>
			</u-col>
			<u-col span="3">
				<view class="demo-layout">台北</view>
			</u-col>
		</u-row>
	</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true,
				cityName:'',
			}
		},
		methods:{
			cancel(){
				uni.redirectTo({
					url:'/pages/city/city?cityName='+this.value,
				})
			}
		}
	}
</script>
<style scoped lang="scss" >
	.input{
		margin: 50px 20px 15px 20px;width: 70%;float: left;height:37px;
	}
	.button{
		float:left;width: 13%;margin: 50px 5px  5px  5px;
	}
	.wrap {
		padding: 0px 20px 0px 20px;
	}
	.u-row {
		margin: 40rpx 0;
	}
	.demo-layout {
		height: 30px;
		border-radius: 8rpx;
		background: #99a9bf;
		font-size: 15px;
		text-align: center;padding-top: 3px;padding-bottom: 3px;
	}
</style>