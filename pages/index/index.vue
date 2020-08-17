<template>
	<view class="content">
		 <view style="margin-bottom: 150px;">
			<view class="iconfont icon-weizhi" style="font-size:20px;color:yellow;padding-bottom:50px"><span style="font-size:15px;color:white">四川省-德阳市</span></view>	
			<view style=" width:50%; float:left">
			<view style="font-size:60px;color:white">{{ tem }}<div style="display:inline-block;font-size: 50rpx;color:white;width:25px">{{wea}}</div></view>		 
			<view style="font-size:13px;color:white;padding-left:5px">空气质量<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:white">{{aiq}}</div></view>
			<view style="font-size:13px;color:white;padding-left:5px">{{wind_dir}}<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:white">{{wind_scale}}</div></view>
			</view>
			<!-- 左侧部分 -->
			<view style=" width:50%; float:left;padding:10px">
				<p style="color:white;font-size:28px; font-family:SimSun;letter-spacing:3px">生命在于运动</p>
				</view>
				<!-- 右侧部分 -->
		 </view>
		 <!-- 具体天气情况以及位置信息 -->
		 <view class="prompt">
		 <p style="color:white;font-size:11px;">主人你好你所在的北京市今日温度为30°C，多云晴天，适合外出活动，同时注意防晒噢。</p>
		 </view>
		 <!-- 提示语 -->
		<view class="weekday">
		  <ul id = "list" >
		    <li v-for="(weekdayData,index) in weekdayDatas">
		  	    <view>{{ weekdayDatas[index][0] }}<div>{{ weekdayDatas[index][1] }}～{{ weekdayDatas[index][2] }}°</div><br/><p :class="weekdayIcon[index]" style="font-size:30px;display: inline-block;color:#f4ea2a"></p><div>{{ weekdayDatas[index][3] }}</div></view>
		    </li>
		  </ul>
		  </view>
		  <!-- 未来七天的天气情况 -->
		  <view class="oneDay">
		  <view class="title">未来24小时的温度情况</view>
		  <view class="twentyFour">
		  <ul id = "list" >
		    <li v-for="(twentyFourData,index) in twentyFourDatas">
		  	    <view>{{ twentyFourDatas[index][0] }}</br>{{ twentyFourDatas[index][1]}}°<p :class="twentyFourIcon[index]" style="font-size:50px;color:#f4ea2a"></p>{{ twentyFourDatas[index][2] }}</view>
		    </li>
		  </ul>
		  </view>
		  </view>
		  <!-- 24小时天气监控 -->
		  <view class="oneDay">
		  <view class="title">未来7天的天气具体情况</view>
		  <view class="seven">
		  <ul  id = "list">		  
             <li v-for="(sevenData,index) in sevenDatas">
			  <view>{{sevenDatas[index][0]}}</br>{{sevenDatas[index][1]}}</br><span style="font-size:12px">{{sevenDatas[index][2]}}/{{sevenDatas[index][3]}}°</span><p :class="weekdayIcon[index]" style="font-size:50px;color:#f4ea2a"></p></br>{{sevenDatas[index][4]}}</br>{{sevenDatas[index][5]}}</br>{{sevenDatas[index][6]}}</view>
		     </li>
		  </ul>
		  </view>
		  </view>
		  <!-- 未来15天的天气具体情况 -->
		<view class="mycharts">
		  <u-subsection :list="list" :current="current" mode="subsection" @change="sectionChange" active-color="#96c2f1" style="margin-top:10rpx"></u-subsection>
		              <view v-if="current === 0" class="charts">
		                  <myCharts1/>
						  <!-- 温度折线图 -->
		              </view>
		              <view v-if="current === 1" class="charts">
						  <myCharts2/>
		                  <!-- 紫外线图 -->
		              </view>
		              <view v-if="current === 2" class="charts">
						  <myCharts3/>
		                  <!-- 降水量柱状图 -->
		              </view>
					  <view v-if="current === 3" class="charts">
						  <myCharts4/>
					      <!-- 风力风向折线图 -->
					  </view>
		  </view>
		  <!-- 4大数据的图表展示 -->
		  <!-- <view style="background-color: red;">{{jqr}}</view> -->
	</view>
</template>

<script>
	import myCharts1 from '../../components/table1.vue';
	import myCharts2 from '../../components/table2.vue';
	import myCharts3 from '../../components/table3.vue';
	import myCharts4 from '../../components/table4.vue';
	export default {
		    components: {
		        myCharts1,myCharts2,myCharts3,myCharts4
		    },
		data() {
			return {
				tem:"",
				wea:"",
				aiq:"",
				jqr:"",
				wind_dir:"",
				wind_scale:"",
				todayIcon:'iconfont icon-tianqi_qingtian',
				weekdayIcon:[],
				twentyFourIcon:[],	
				weekdayDatas:[
				['周三','26','34°','5'],				['周三','26','34°','5'],				['周三','26','34°','5'],				['周三','26','34°','5'],				['周三','26','34°','5'],				['周三','26','34°','5'],				['周三','26','34°','5']],
			    twentyFourDatas:[
				  ['00:00','34°','晴天'],                  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],
				  ['00:00','34°','晴天'],],
				sevenDatas:[						['今日','07/31','20','34','晴天','西南风','优'],						['明日','08/01','20','34','多云','西南风','优'],                        ['周三','08/02','20','34','晴天','西南风','优'],						['周三','08/03','20','34','晴天','西南风','优'],						['周三','08/01','20','34','多云','西南风','优'],						['周三','08/01','20','34','多云','西南风','优'],						['周三','08/01','20','34','多云','西南风','优'],						],
				list: [
					{
						name: '温度'
					}, 
					{
						name: '紫外线'
					}, 
					{
						name: '降水量'
					},
					{
						name: '风力风向'
					}
				],
				current:0,
				 }
		},
		mounted(){
			this.getWeaNowData();//当天的温度信息
			this.getWeekdayData();//未来七天的温度信息
			this.getTwentyFourData();//未来24小时的温度信息
		},
		methods: {
			getWeaNowData(){	
				this.jqr=51;		
				uni.request({
					url: this.websiteUrl+'/weather/weaNow',
					data:{
					},
					success: (res)=> {
					   this.tem=res.data.data.tem;//当天的温度
					   this.wea=res.data.data.wea;//当天的天气
					   this.wind_dir=res.data.data.wind_dir;//当天的风力方向
					   this.wind_scale=res.data.data.wind_scale;//当天的风力大小
					   this.aiq=res.data.data.aiq;//当天的空气质量指数
					},
				});
			},//获取当天的天气情况
			getWeekdayData(){
				uni.request({
					url: this.websiteUrl+'/weather/wea7d',
					data:{
					},
					success: (res)=> {
						for(var i=0;i<7;i++)
						{
						 this.weekdayDatas[i][0]=res.data.data[i].week_day;
						 this.weekdayDatas[i][1]=res.data.data[i].tem_min;
						 this.weekdayDatas[i][2]=res.data.data[i].tem_max;
						 this.weekdayDatas[i][3]=res.data.data[i].wea;
						 this.sevenDatas[i][0]=res.data.data[i].week_day
						 this.sevenDatas[i][1]=res.data.data[i].day.substring(5);
						 this.sevenDatas[i][2]=res.data.data[i].tem_min;
						 this.sevenDatas[i][3]=res.data.data[i].tem_max;
						 this.sevenDatas[i][4]=res.data.data[i].wea;
						 this.sevenDatas[i][5]=res.data.data[i].wind_dir;
						 this.sevenDatas[i][6]=res.data.data[i].wind_scale;
						 for(var j=0;j<7;j++)
						 {
						 if(res.data.data[i].wea===this.weatherArray[j]){this.weekdayIcon[i]=this.iconArray[j]; break;}
						 } 
						}		
					},
				});
			},//获取未来七天的天气情况
			getTwentyFourData(){
				uni.request({
					url: this.websiteUrl+'/weather/weather24h',
					data:{
					},
					success: (res)=> {
						for(var i=0;i<24;i++)
						{
						 this.twentyFourDatas[i][0]=res.data.data[i].time;
						 this.twentyFourDatas[i][1]=res.data.data[i].tem;
						 this.twentyFourDatas[i][2]=res.data.data[i].wea;
						 for(var j=0;j<7;j++)
						 {
						 if(res.data.data[i].wea===this.weatherArray[j]){this.twentyFourIcon[i]=this.iconArray[j]; break;}
						 }
						}		
					},
				});
			},//获取未来24小时的天气情况
			sectionChange(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
		.wrap { padding: 40rpx;}
		#list { overflow-x: auto; list-style: none; white-space:nowrap; width: auto;padding:0rpx}
		.weekday ul li{ margin: 1px; display: inline-block;   border:2px solid #96c2f1;border-radius:3px;}
		.weekday ul li view{font-size: 35rpx;color:white;} 
		.weekday ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.twentyFour ul li{ margin: 1px; display: inline-block;text-align:center;}
		.twentyFour ul li view{font-size: 35rpx;color:white;} 
		.twentyFour ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.seven ul li{ margin: 1px; display: inline-block;   border-right:2px solid #96c2f1;border-radius:3px;text-align:center;}
		.seven ul li view{font-size: 35rpx;color:white;} 
		.seven ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.prompt{margin: 40rpx; border:2px solid #96c2f1;border-radius:11px;padding:10px }
		.oneDay{margin: 40rpx; border:2px solid #96c2f1;border-radius:11px;padding:0px 0px 10px 0px}
		.title{font-size:35rpx;color:white;border-top-right-radius:11px;border-top-left-radius:11px;border:2px solid #96c2f1;background:#96c2f1;margin:-2px -2px 10px -2px;padding:5px 0px 5px 10px;}
		.shdaw{		
			margin:50rpx 25rpx 50rpx 25rpx;
            border:1px solid #96c2f1;background:#eff7ff;
			border-radius:3px;
			}
		// .mycharts{margin: 40rpx; border:2px solid #96c2f1;background:#2979ff;border-radius:15px;}
		.charts{margin-top: 10px;margin-bottom: 10px;text-align: center;}
		.content {
			background-image: url('~@/static/1.jpg');
			// background-color:#2979ff;
			background-size: 100% 100%;
			height: 100%;
		}
</style>