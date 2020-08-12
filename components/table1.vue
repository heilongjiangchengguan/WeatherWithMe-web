<template>
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
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
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			// 获取数据，发请求
			getServerData(){
					// 请求成功的回调函数

						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// 自己可以定义数据
						
						let LineA={categories:[],series:[]};
						LineA.categories=["今天", "7号", "8号", "9号", "10号", "11号", "12号"];
						LineA.series=[{
							name:"最高",
							data:[32,25,30,28,36,33,34],
							color:'#409eff'
						},{
							name:"最低",
							data:[25,16,23,18,18,24,24],
							color:'#e6a23c'
						}];
						// 找到id为canvasLineA的块
						_self.showLineA("canvasLineA",LineA);
												console.log(LineA)
					},
					// 请求失败的回调函数
			// 展示图标的函数 接收参数，一个块的id,一个数据
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					// 图标类型
					type: 'line',
					fontSize:11,
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
						// dashLength:8,
						disabled:true,
						// gridColor:'#2979ff',
						gridType:'dash',
						fontColor:'#c0c4cc',
					},
					// y轴显示的内容
					yAxis: {
						fontColor:'red',
						    disabled:true,
						    disableGrid:true,
						    gridColor:'#c0c4cc',
						// dashLength:8,
						// splitNumber:5,
						// format:(val)=>{return val.toFixed(0)+'元'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			// 点击图表显示的内容
			touchLineA(e) {
				// 使用声明的变量canvaLineA
				// canvaLineA.showToolTip(e, {
				// 	format: function (item, category) {
				// 		return category + ' ' + item.name + ':' + item.data 
				// 	}
				// });
			}
		}
	}
</script>

<style>
	.charts {
		width: 100%;
		height: 500upx;
	}
</style>