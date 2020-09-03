<template>
	 <view class="content" >
       <view>
       	<u-navbar back-text="退出" title="伴我天气":background="background">
       		<!-- <view style="display:inline-block;font-size:25px;color:red;padding-top:5px;text-align:left" >{{city}}</view> -->
       		<view class="slot-wrap">
       		</view>
       		<view class="iconfont icon-weizhi" style="display:inline-block;font-size:40px;color:black;padding-top:5px;text-align:right" @tap="changeCity"></view>
       	</u-navbar>	 
       </view>
	   <view>    
		 <ul class="ban">
        <li v-for="(ban,num) in menus" :class="{active:currentNumber==num}" :data-current="num" >
        </li>
      </ul>
	  </view>
    <swiper class="swiper" :duration="600" :disable-touch="false" :current="currentNumber" @change="getChange" touch-action: none>
    <swiper-item v-for="(item, number) in menus" :key="item.id" >	
	   <view> 
	    <view style="text-align: center;font-size: 20px;">{{menus[number].city}}</view>
		 <view style="padding-bottom:50px;padding-top:50px;text-align: center;">
			<view style="font-size:90px;color:white">{{ tem }}<div style="display:inline-block;font-size: 40rpx;color:white;width:25px;">{{wea}}</div></view>		 
			<view style="font-size:15px;color:white;padding-left:5px">空气质量<div style="display:inline-block;padding-left:53px;font-size: 13px;color:white">{{aiq}}</div></view>
			<view style="font-size:15px;color:white;padding-left:5px">{{wind_dir}}<div style="display:inline-block;padding-left:53px;font-size: 13px;font-size: 13px;color:white">{{wind_scale}}</div></view>
		</view>
		 <!-- 具体天气情况以及位置信息 -->
		 <view class="prompt">
		 <p style="color:white;font-size:30px;text-align: center;">{{slogan}}</p>
		 </view>
		 <!-- 提示语 -->
          <view class="tomorrow">
			  <view style="float: left;width:50%;height:69px;border-right: 1px  solid white;">{{ weekdayDatas[0][0] }}<div>{{ weekdayDatas[0][1] }}～{{ weekdayDatas[0][2] }}°</div><br/><p :class="weekdayIcon[0]" style="font-size:40px;display: inline-block;color:#f4ea2a"></p><div>{{ weekdayDatas[0][3] }}</div></view>
			  <view style="float: left;width:50%;height:69px;border-left: 1px  solid white;">{{ weekdayDatas[1][0] }}<div>{{ weekdayDatas[1][1] }}～{{ weekdayDatas[0][2] }}°</div><br/><p :class="weekdayIcon[1]" style="font-size:40px;display: inline-block;color:#f4ea2a"></p><div>{{ weekdayDatas[1][3] }}</div></view>
	      </view>
		  <!-- 今天和明天的天气情况 -->
		  <view class="oneDay">
		  <view class="title">未来24小时的温度情况</view>
		  <view class="twentyFour" @touchmove.stop>
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
		  <view class="seven"@touchmove.stop>
		  <ul  id = "list">		  
             <li v-for="(sevenData,index) in sevenDatas">
			  <view>{{sevenDatas[index][0]}}</br>{{sevenDatas[index][1]}}</br><span style="font-size:12px">{{sevenDatas[index][2]}}/{{sevenDatas[index][3]}}°</span><p :class="weekdayIcon[index]" style="font-size:50px;color:#f4ea2a"></p></br>{{sevenDatas[index][4]}}</br>{{sevenDatas[index][5]}}</br>{{sevenDatas[index][6]}}</view>
		     </li>
		  </ul>
		  </view>
		  </view>
		  <!-- 未来15天的天气具体情况 -->
		<view class="mycharts">
		  <u-subsection :list="list" :current="current"  mode="subsection" @change="sectionChange" active-color="#ff9900" style="margin-top:10rpx"></u-subsection>
		              <view v-if="current === 0" class="charts">
		                  <myCharts1/>
						  <!-- 温度折线图 -->
		              </view>
		              <view v-if="current === 1" class="charts">
						 <myCharts2/>
		                  <!-- 空气质量图 -->
		              </view>
		              <view v-if="current === 2" class="charts">
						  <myCharts3/>
		                  <!-- 降水量柱状图 -->
		              </view>
					  <view v-if="current === 3" class="charts">
						  <myCharts4/>
					      <!-- 风力风向雷达图 -->
					  </view>
		  </view>
		  <!-- 4大数据的图表展示 -->
		  </view>
    </swiper-item>  
</swiper>
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
					// city:"城市",
					slogan:'不经风雨，怎见彩虹',
					scrollTop: 0,
					background: {
					backgroundColor: 'yellow',},
					currentNumber:0,
					tem:"",
					wea:"",
					aiq:"",
					wind_dir:"",
					wind_scale:"",
					todayIcon:'iconfont icon-tianqi_qingtian',
					weekdayIcon:[],
					twentyFourIcon:[],	
					weekdayDatas:[
					['周三','26','34','5'],
					['周三','26','34','5'],
					['周三','26','34','5'],
					['周三','26','34','5'],
					['周三','26','34','5'],
					['周三','26','34','5'],
					['周三','26','34','5']],
				    twentyFourDatas:[
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
					  ['00:00','34°','晴天'],
					  ['00:00','34°','晴天'],
					  ['00:00','34°','晴天'],],
					sevenDatas:[
							['今日','07/31','20','34','晴天','西南风','优'],
							['明日','08/01','20','34','多云','西南风','优'],
	                        ['周三','08/02','20','34','晴天','西南风','优'],
							['周三','08/03','20','34','晴天','西南风','优'],
							['周三','08/01','20','34','多云','西南风','优'],
							['周三','08/01','20','34','多云','西南风','优'],
							['周三','08/01','20','34','多云','西南风','优'],
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
				menus: [
					{
						city: "成都",
						tem: '37℃',
						aiq:'优',
						wea:'晴',
						show: false,
						id: 0,
					}
				],
					current:0,
					 }
			},
			mounted(){
				this.menus= uni.getStorageSync('list')
				this.getWeaNowData();//当天的温度信息
				this.getTwentyFourData();//未来24小时的温度信息
				this.getWeekdayData();//未来七天的温度信息		
			},
			methods: {
				changeCity(){
					// uni.clearStorageSync('list');
					uni.navigateTo({
						url:"/pages/city/city",
					})
				},
				getChange:function(e){	
					// setTimeout(function(){
							var index=e.target.current|| e.detail.current;
							this.currentNumber = index;
							uni.setStorageSync('cityIndex', index)
							this.getWeaNowData();//当天的温度信息
							this.getTwentyFourData();//未来24小时的温度信息
							this.getWeekdayData();//未来七天的温度信息			
							// },200)
							console.log(this.menus[uni.getStorageSync('cityIndex')].city)
				},
				getWeaNowData(){						
					uni.request({
						url: this.websiteUrl+'/weather/weaNow',
						data:{
							city:this.menus[uni.getStorageSync('cityIndex')].city,
						},
						success: (res)=> {
						   this.tem=res.data.data.tem;//当天的温度
						   this.wea=res.data.data.wea;//当天的天气
						   this.wind_dir=res.data.data.wind_dir;//当天的风力方向
						   this.wind_scale=res.data.data.wind_scale;//当天的风力大小
						   this.aiq=res.data.data.aiq;//当天的空气质量指数
						   // var uid = uni.getStorageSync('uid');//读取缓存
						   console.log(res) 
						   if(res.data.data.wea==='小雨'||res.data.data.wea==='中雨'||res.data.data.wea==='大雨'||res.data.data.wea==='阵雨'||res.data.data.wea==='雷阵雨')
						   this.slogan=this.sloganArray[0];
						   if(res.data.data.wea==='多云'||res.data.data.wea==='阴')
						   this.slogan=this.sloganArray[1];
						   if(res.data.data.wea==='晴')
						   this.slogan=this.sloganArray[2];
						   if(res.data.data.wea==='小雪'||res.data.data.wea==='中雪'||res.data.data.wea==='大雪')
						   this.slogan=this.sloganArray[3];			   
						},
					});
				},//获取当天的天气情况
				getWeekdayData(){
					uni.request({
						url: this.websiteUrl+'/weather/wea7d',
						data:{
							city:this.menus[uni.getStorageSync('cityIndex')].city,
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
							 for(var j=0;j<11;j++)
							 {
							 if(res.data.data[i].wea===this.weatherArray[j]){this.weekdayIcon[i]=this.iconArray[j]; break;}
							 } 
							}	
							    console.log(this.iconArray)
								console.log(this.weekdayIcon)
								console.log(res.data)
						},
					});
				},//获取未来七天的天气情况
				getTwentyFourData(){
					uni.request({
						url: this.websiteUrl+'/weather/weather24h',
						data:{
							city:this.menus[uni.getStorageSync('cityIndex')].city,
						},
						success: (res)=> {
							for(var i=0;i<24;i++)
							{
							 this.twentyFourDatas[i][0]=res.data.data[i].time;
							 this.twentyFourDatas[i][1]=res.data.data[i].tem;
							 this.twentyFourDatas[i][2]=res.data.data[i].wea;
							 // this.pbprecpDatas[i][0]=res.data.data[i].time;
							 // this.pbprecpDatas[i][1]=res.data.data[i].pbprecp;
							 for(var j=0;j<11;j++)
							 {
							 if(res.data.data[i].wea===this.weatherArray[j]){this.twentyFourIcon[i]=this.iconArray[j]; break;}
								 }
							}	
								console.log(res.data)
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
			.slot-wrap {
				// display: flex;
				align-items: center;
				text-align:center;
				/* 如果您想让slot内容占满整个导航栏的宽度 */
				flex: 1;
				/* 如果您想让slot内容与导航栏左右�width��空隙 */
				// padding: 0 30rpx;
			}
		.ban {
		  // top: 20px;
		  text-align: center;
		  padding:10px 0px 0px 0px;
		}
		.ban li {
		  display: inline-block;
		  width: 10px;
		  height: 10px;
		  margin-right:3px;
		  border: 0.5px solid white;
		  border-radius: 50%;
		  background-color: transparent;
		}	
		.ban .active{
		  background-color:#c8c9cc;
		}
		    .tomorrow{margin: 40rpx;padding-bottom:20px;height: 70px;background-color: orange;border:1px solid orange;border-radius:3px;}
			.tomorrow view{font-size: 40rpx;color:white;float: left;padding-left:10px;}
			.tomorrow view div{display:inline-block;float: right;padding-right:20px;font-size: 38rpx;color:white}
			.wrap { padding: 40rpx;}
			#lists{ overflow-x: auto; list-style: none; white-space:nowrap; width: auto;padding:0rpx;text-align: center;}
			#list { overflow-x: auto; list-style: none; white-space:nowrap; width: auto;padding:0rpx;}
			// .weekday ul li{ margin: 1px; display: inline-block;   border:2px solid #96c2f1;border-radius:3px;}
			// .weekday ul li view{font-size: 35rpx;color:white;} 
			// .weekday ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
			.twentyFour ul li{ margin: 1px; display: inline-block;text-align:center;}
			.twentyFour ul li view{font-size: 35rpx;color:white;} 
			.twentyFour ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
			.seven ul li{ margin: 1px; display: inline-block;   border-right:2px solid orange;border-radius:3px;text-align:center;}
			.seven ul li view{font-size: 35rpx;color:white;} 
			.seven ul li view div{display:inline-block;padding-left:40rpx;font-size: 35rpx;color:white}
			.prompt{margin: 40rpx; border:2px solid orange;border-radius:11px;padding:10px ;background-color:orange}
			.oneDay{margin: 40rpx; border:2px solid orange;border-radius:11px;padding:0px 0px 10px 0px; background-color:orange}
			.title{font-size:35rpx;color:white;border-top-right-radius:11px;border-top-left-radius:11px;border:2px solid  orange;background: orange;margin:-2px -2px 10px -2px;padding:5px 0px 5px 10px;}
			.shdaw{		
				margin:50rpx 25rpx 50rpx 25rpx;
	            border:1px solid #96c2f1;background:#eff7ff;
				border-radius:3px;
				}
			// .mycharts{margin: 40rpx; border:2px solid #96c2f1;background:#2979ff;border-radius:15px;}
			.charts{margin-top: 2px;text-align: center;background-color:orange}
			.content {
				// background-image: url('~@/static/1.jpg');
				background-color:#82848a;
				background-size: 100% 100%;
				height: 100%;
			}
			swiper {
			  /* 设置高度 */
			 height:1300px;
			  // margin:0px;
			  // padding: 0px;
			  color: #fff;
			}
		    // .u-swiper-title[data-v-a5b2d580] {font-size:50px;left: 10px;}
	</style>