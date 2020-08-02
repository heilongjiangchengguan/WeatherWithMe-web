<template>
	<view class="content">
		 <view style="margin-bottom: 120px;">
			<view><u-icon label="四川省-德阳市" name="map" color="orange" size="80rpx" label-size="50rpx"></u-icon></view>	
		    <view style="font-size:40rpx;color:#366092">2020年-7月20日-19-24</view>
			<view style=" width:50%; float:left">
			<view style="font-size:55px;color:orange">50°<div style="display:inline-block;font-size: 50rpx;color:yellow;width:25px">晴天</div></view>		 
			<view style="font-size:13px;color:orange;padding-left:5px">空气质量<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:yellow">优</div></view>
			<view style="font-size:13px;color:orange;padding-left:5px">东北风<div style="display:inline-block;float:right;padding-right:53px;font-size: 13px;color:yellow">2级</div></view>
			</view>
			<!-- 左侧部分 -->
			<view style=" width:50%; float:left;padding:10px">
				<p style="color:#2979ff;font-size:25px; font-family:SimSun;letter-spacing:3px">生命在于运动</p>
				</view>
				<!-- 右侧部分 -->
		 </view>
		 <!-- 具体天气情况以及位置信息 -->
		 <view class="oneDay">
		 <p style="color:#000000;font-size:18px;letter-spacing:2px">主人你好你所在的北京市今日温度为30°C，多云晴天，适合外出活动，同时注意防晒噢。</p>
		 </view>
		 <!-- 提示语 -->
		<view style="font-size:50rpx;color:#007AFF;margin-top: 50rpx;">未来七天的天气情况</view>
		  <ul  id = "list">		  
		  <li><view>今天<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周一<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周二<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周三<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周四<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周五<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		  
		  <li><view>周六<div>26～30°</div><br/><icon type="success" size="50"/></view></li>		    
		  </ul>
		  <!-- 未来七天的天气情况 -->
		  <view class="oneDay">
		  <view style="font-size:40rpx;color:orange;border-bottom: 2px solid orange;margin:0px 5px 10px 5px;">未来24小时的温度情况</view>
		  <tem/>
		  </view>
		  <!-- 24小时天气监控 -->
		  <view class="oneDay">
		  <view style="font-size:40rpx;color:orange;border-bottom: 2px solid orange;margin:0px 5px 10px 5px;">未来15天的天气具体情况</view>
		  <view>
		  			  <u-table>
		  			  		<u-tr>
		  			  			<u-th>学校</u-th>
		  			  			<u-th>班级</u-th>
		  			  			<u-th>年龄</u-th>
		  			  		</u-tr>
		  			  		<u-tr>
		  			  			<u-td>浙江大学</u-td>
		  			  			<u-td>二年级</u-td>
		  			  			<u-td>22</u-td>
		  			  		</u-tr>
		  			  		<u-tr>
		  			  			<u-td>清华大学</u-td>
		  			  			<u-td>05班</u-td>
		  			  			<u-td>20</u-td>
		  			  		</u-tr>
		  			  	</u-table>
		  </view>
		  </view>
		  <!-- 未来15天的天气具体情况 -->
		<view class="oneDay">
		  <u-subsection :list="list2" :current="current" @change="sectionChange" active-color="#ff9900" style="margin-top:10rpx"></u-subsection>
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
					      风力风向折线图
					  </view>
		  </view>
		  <!-- 4大数据的图表展示 -->
	</view>
</template>

<script>
	import tem from '../../components/tem.vue';
	import myCharts1 from '../../components/table1.vue';
	import myCharts2 from '../../components/table2.vue';
	import myCharts3 from '../../components/table3.vue';
	export default {
		    components: {
		        tem,myCharts1,myCharts2,myCharts3
		    },
		data() {
			return {
				list1: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				list2: [
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
				src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596272865161&di=b4e16c4a9fbc1e5e0b510f40270fe895&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2Fa406d5fe4abbd2dbf3aa581fb296cdb6.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue'
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
		ul li{ margin: 1px; display: inline-block;   border:2px solid #96c2f1;background:#eff7ff;border-radius:3px;}
		ul li view{font-size: 50rpx;color:green;} 
		ul li view div{display:inline-block;padding-left:40rpx;font-size: 60rpx;color:blue}
		.oneDay{margin-top: 50rpx; border:2px solid #96c2f1;background:#eff7ff;border-radius:3px;}
		.shdaw{		
			margin:50rpx 25rpx 50rpx 25rpx;
            border:1px solid #96c2f1;background:#eff7ff;
			border-radius:3px;
			}
		.charts{text-align: center;font-size: 50rpx;margin-top: 10px;margin-bottom: 10px;
		}
		.content {
			// background-image: url('~@/static/晴天图片.jpg');
			background-size: 100% 100%;
			height: 100%;
		}
</style>