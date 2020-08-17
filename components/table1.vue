<template>
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" ></canvas>
</template>

<script>
	// 引入uCharts 方法组件。
	import uCharts from '@/u-charts/u-charts.js';
	// 定义全局变量
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
			}
		},
		// 页面加载执行的函数
		mounted() {
			_self = this;
			// uni.upx2px(750) 这是uni-app自带的自适应，以750的尺寸为基准。动态变化
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(450);
			this.getServerData();
		},
		methods: {
			// 获取数据，发请求
			getServerData(){
				uni.request({
					url: this.websiteUrl+'/weather/temp7d',
					data:{
					},
					success: (res)=> {
						let LineA={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						LineA.series=[{
							name:"最高",
							data:[],
							color:'#409eff',
							textColor:'#409eff',
						},{
							name:"最低",
							data:[],
							color:'#e6a23c',
							textColor:'#e6a23c',
						}];
						var maxArray=new Array();
						for(var i=0;i<7;i++)
						{
							LineA.categories[i]=res.data.data[i].day.substring(5);
							maxArray[i]=res.data.data[i].tem_max;
							LineA.series[0].data[i]=res.data.data[i].tem_max;
							LineA.series[1].data[i]=res.data.data[i].tem_min;
						}
						var max=maxArray[0];
						for(var i=0;i<7;i++)
						{
						if(max<maxArray[i]){max=maxArray[i];}
						}//找出最大的那个温度数据
						_self.showLineA("canvasLineA",LineA,max);				
					},					// 请求成功的回调函数
				});					
					},
			showLineA(canvasId,chartData,maxData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					// 图标类型
					type: 'line',
					fontSize:13,
					legend:{show:false},
					dataLabel:true,
					dataPointShape:true,
					// background:'#2979ff',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					// x轴显示的内容
					xAxis: {
						type:'grid',
						gridType:'dash',
						// calibration:true,
						// dashLength:8,
						// disabled:true,
						disableGrid:true,
						// axisLineColor:'transparent',
						// gridColor:'#2979ff',
						gridType:'dash',
						fontColor:'white',
					},
					// y轴显示的内容
					yAxis: {
						    disabled:true,
						    disableGrid:true,
						    max:parseInt(maxData)+1,//为了保证最大的数据能够完成的在图标里面显示出来
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'curve'
						}
					}
				});
				
			},
			// 点击图表显示的内容
		}
	}
</script>

<style>
	.charts {width: 100%;height: 500upx;}
</style>