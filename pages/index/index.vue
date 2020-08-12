<template>
	<view class="content">
		 <view style="margin-bottom: 150px;">
			<view class="iconfont icon-weizhi" style="font-size:20px;color:yellow;padding-bottom:50px"><span style="font-size:15px;color:white">四川省-德阳市</span></view>	
			<view style=" width:50%; float:left">
			<view style="font-size:57px;color:white">50°<div style="display:inline-block;font-size: 50rpx;color:white;width:25px">晴天</div></view>		 
			<view style="font-size:13px;color:white;padding-left:5px">空气质量<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:white">优</div></view>
			<view style="font-size:13px;color:white;padding-left:5px">东北风<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:white">2级</div></view>
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
		<view style="font-size:35rpx;color:white;margin-top: 50rpx;">未来七天的天气情况</view>
		<view class="weekday">
		  <ul id = "list" >
		    <li v-for="(weekdayData,index) in weekdayDatas">
		  	    <view>{{ weekdayDatas[index][0] }}<div>{{ weekdayDatas[index][1] }}～{{ weekdayDatas[index][2] }}°</div><br/><p class="iconfont icon-qing" style="font-size:30px;color:yellow;display: inline-block;"></p><div>{{ weekdayDatas[index][3] }}</div></view>
		    </li>
		  </ul>
		  </view>
		  <!-- 未来七天的天气情况 -->
		  <view class="oneDay">
		  <view class="title">未来24小时的温度情况</view>
		  <view class="twentyFour">
		  <ul id = "list" >
		    <li v-for="(twentyFourData,index) in twentyFourDatas">
		  	    <view>{{ twentyFourDatas[index][0] }}</br>{{ twentyFourDatas[index][1]}}°<p v-bind:class="todayIcon" style="font-size:40px;color:yellow"></p>{{ twentyFourDatas[index][2] }}</view>
		    </li>
		  </ul>
		  </view>
		  </view>
		  <!-- 24小时天气监控 -->
		  <view class="oneDay">
		  <view class="title">未来15天的天气具体情况</view>
		  <view class="fifteen">
		  <ul  id = "list">		  
             <li v-for="(fifteenData,index) in fifteenDatas">
			  <view>{{fifteenDatas[index][0]}}</br>{{fifteenDatas[index][1]}}</br>{{fifteenDatas[index][2]}}<p class="iconfont icon-qing" style="font-size:40px;color:yellow"></p></br>{{fifteenDatas[index][3]}}</br>{{fifteenDatas[index][4]}}</br>{{fifteenDatas[index][5]}}</view>
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
		                  <!-- 空气质量折线图 -->
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
				todayIcon:'iconfont icon-qing',
				    weekdayDatas:[
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						['今天','26','30','65%'],
						],
					twentyFourDatas: [
						['00:00',24,'晴天'],
						['01:00',34,'阴天'],
						['02:00',25,'雨天'],
						['03:00',24,'晴天'],
						['04:00',36,'晴天'],
						['05:00',27,'晴天'],
						['06:00',31,'晴天'],
						['07:00',24,'晴天'],
						['08:00',34,'阴天'],
						['09:00',25,'雨天'],
						['10:00',24,'晴天'],
						['11:00',36,'晴天'],
						['12:00',27,'晴天'],
						['13:00',31,'晴天'],
						['14:00',24,'晴天'],
						['15:00',34,'阴天'],
						['16:00',25,'雨天'],
						['17:00',24,'晴天'],
						['18:00',36,'晴天'],
						['19:00',27,'晴天'],
						['20:00',31,'晴天'],
						['21:00',24,'晴天'],
						['22:00',34,'阴天'],
						['23:00',25,'雨天'],
						],
						fifteenDatas:[
						['今日','07/31','34°','晴天','西南风','优'],
						['明日','08/01','34°','多云','西南风','优'],
                        ['周三','08/02','34°','晴天','西南风','优'],
						['周三','08/03','34°','晴天','西南风','优'],
						['周三','08/01','34°','多云','西南风','优'],
						['周三','08/01','34°','多云','西南风','优'],
						['周三','08/01','34°','多云','西南风','优'],
						['周三','08/01','34°','晴天','西南风','优'],
						['周三','08/01','34°','晴天','西南风','优'],
						['周三','08/01','34°','雨天','西南风','优'],
						['周三','08/01','34°','晴天','西南风','优'],
						['周三','08/01','34°','多云','西南风','优'],
						['周三','08/01','34°','多云','西南风','优'],
						['周三','08/01','34°','晴天','西南风','优'],
						['周三','08/01','34°','晴天','西南风','优'],
						],
				list: [
					{
						name: '温度'
					}, 
					{
						name: '空气质量'
					}, 
					{
						name: '降水量'
					},
					{
						name: '风力风向'
					}
				],
				current: 0,
				 }
		},
		methods: {
			sectionChange(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
		.wrap { padding: 40rpx;}
		#list { overflow-x: auto; list-style: none; white-space:nowrap; width: auto;padding:0rpx}
		.twentyFour1 ul li{ margin: 1px; display: inline-block;text-align:center;}
		.weekday ul li{ margin: 1px; display: inline-block;   border:2px solid #96c2f1;border-radius:3px;}
		.weekday ul li view{font-size: 35rpx;color:white;} 
		.weekday ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.twentyFour ul li{ margin: 1px; display: inline-block;text-align:center;}
		.twentyFour ul li view{font-size: 35rpx;color:white;} 
		.twentyFour ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.fifteen ul li{ margin: 1px; display: inline-block;   border-right:2px solid #96c2f1;border-radius:3px;text-align:center;}
		.fifteen ul li view{font-size: 35rpx;color:white;} 
		.fifteen ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
		.prompt{margin: 40rpx; border:2px solid #96c2f1;border-radius:11px;padding:10px }
		.oneDay{margin: 40rpx; border:2px solid #96c2f1;border-radius:11px;padding:0px 0px 10px 0px}
		.title{font-size:35rpx;color:white;border-top-right-radius:11px;border-top-left-radius:11px;border:2px solid #96c2f1;background:#96c2f1;margin:-2px -2px 10px -2px;padding:5px 0px 5px 10px;}
		.shdaw{		
			margin:50rpx 25rpx 50rpx 25rpx;
            border:1px solid #96c2f1;background:#eff7ff;
			border-radius:3px;
			}
		// .mycharts{margin: 40rpx; border:2px solid #96c2f1;background:#2979ff;border-radius:15px;}
		.charts{text-align: center;font-size: 50rpx;margin-top: 10px;margin-bottom: 10px;
		}
		.content {
			background-image: url('~@/static/3.jpg');
			// background-color:#2979ff;
			background-size: 100% 100%;
			height: 100%;
		}
</style>