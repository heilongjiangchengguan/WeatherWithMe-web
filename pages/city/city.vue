<template>
	<view>
		<u-navbar  title="城市列表">
			<view  style="display:inline-block;font-size:15px;color:black;position:left" @tap="back">返回</view>
			<view class="slot-wrap">
			</view>
			<view class="iconfont icon-jiahao" style="display:inline-block;font-size:30px;color:orange;padding-top:5px;position:right" @tap="searchCity"></view>
		</u-navbar>
		<u-swipe-action :index="index" v-for="(cityData,index) in cityDatas" :key="cityData.id" :options="options" @click="click" >
		  	    <view class="list"><p style="font-size:25px;display:inline-block;">{{cityDatas[index].city }}</P><div>{{cityDatas[index].tem }}C</div></br>空气 {{ cityDatas[index].aiq}}<div style="font-size: 15px;">{{ cityDatas[index].wea }}</div></view>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				city:"",
				tem:"",
				wea:"",
				aiq:"",
				disabled: false,
				btnWidth: 180,
				show: false,
				cityDatas: [
					// {
					// 	city: "",
					// 	tem: '',
					// 	aiq:'',
					// 	wea:'',
					// 	show:false,
					// 	id:0,
					// }
				],
				nextTodoId:0,
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			};
		},
		mounted(){
			this.getWeaNowData();
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option.cityName); //打印出上个页面传递的参数。
			this.city=option.cityName;
		},
		methods: {
			back(){
				uni.navigateTo({
					url:"/pages/index/index",
				})
			},
			searchCity(){
					uni.navigateTo({
						url:"/pages/search/search",
					})
			},
			getWeaNowData(){	
				var FPX=new Array()
				FPX= uni.getStorageSync('list')
				this.cityDatas=FPX
				uni.request({
					url: this.websiteUrl+'/weather/weaNow',
					data:{
						city:this.city,
					},
					success: (res)=> {
					  this.cityDatas.push({
					   city:res.data.data.city,//所选城市
					   tem:res.data.data.tem,//当天的温度
					   aiq:res.data.data.aiq,//当天的空气质量
					   wea:res.data.data.wea,//当天的天气
					   show:false,
					   id:this.nextTodoId++,
					   })
					   this.city='';
					    uni.setStorageSync('list',this.cityDatas);
					},
					fail: (res) => {
				      console.log('没有该城市信息')
						this.show=true
				      }
				});
			},//获取当天的天气情况
			click(index) {
					this.cityDatas.splice(index, 1);
					uni.setStorageSync('list',this.cityDatas);
			},
		}
	};
</script>

<style lang="scss" scoped>
			.list { white-space:nowrap; width: auto;margin: 30rpx 30rpx 5rpx 30rpx;border-radius:11px;background-color: #ff9900;font-size: 15px;color:white;padding:20px 25px 20px 25px} 
			.list div{display:inline-block;padding-left:150px;font-size: 25px;color:white;float:right;}
			.slot-wrap {
				// display: flex;
				align-items: center;
				text-align:center;
				/* 如果您想让slot内容占满整个导航栏的宽度 */
				flex: 1;
				/* 如果您想让slot内容与导航栏左右�width��空隙 */
				// padding: 0 30rpx;
			}
</style>