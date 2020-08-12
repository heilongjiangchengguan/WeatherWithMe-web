<template>
			<canvas canvas-id="canvasLine" id="canvasLine" class="charts" @touchstart="touchLine" @touchmove="moveLine" @touchend="touchEndLine"></canvas>
</template>
<script>
    import uCharts from '@/u-charts/u-charts.js';
    var _self;
    var canvaLine=null;
    export default {
        data() {
            return {
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
            }
        },
        mounted() {
            _self = this;
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(200);
            this.getServerData();
        },
        methods: {
            getServerData(){
                        let Line={categories:[],series:[]};
                        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                        Line.categories=['0:00', '1:00', '2:00', '3:00', '4:00', '5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
                        Line.series=[{
											name: '温度',
											data: [35,20,25,37,25,22,35,20,25,37,25,22,35,20,25,37,25,22,35,20,25,37,25,22],
											color: 'white',
											textColor:'red',
										}]
                        _self.showLine("canvasLine",Line);
            },
            showLine(canvasId,chartData){
                canvaLine=new uCharts({
                    $this:_self,
                    canvasId: canvasId,
                    type: 'line',
                    fontSize:11,
					legend:{show:false},
                    // dataLabel:false,//是否显示
                    dataPointShape:true,
                    background:'#2979ff',
                    pixelRatio:_self.pixelRatio,
                    categories: chartData.categories,
                    series: chartData.series,
                    animation: true,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
					    type:'grid',
						gridColor:'#2979ff',
					    gridType:'dash',
						fontColor:'#c0c4cc',
					    itemCount:6,//x轴单屏显示数据的数量，默认为5个
					    // scrollShow:true,//新增是否显示滚动条，默认false
					    scrollAlign:'left',//滚动条初始位置
					    scrollBackgroundColor:'#F7F7FF',//默认为 #EFEBEF
					    scrollColor:'#DEE7F7',//默认为 #A6A6A6
					},
                    yAxis: {
						    disabled:true,
						    disableGrid:true,
						    gridColor:'#c0c4cc',
						// type:'grid',
						// gridType:'dash',
						// fontColor:'yellow',
						// dashLength:8,
						// splitNumber:5,
						// min:0,
						// max:50,
						// format:(val)=>{return val.toFixed(0)+'℃'}
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
            touchLine(e){
                canvaLine.scrollStart(e);
            },
            moveLine(e) {
                canvaLine.scroll(e);
            },
            touchEndLine(e) {
                canvaLine.scrollEnd(e);
                //下面是toolTip事件，如果滚动后不需要显示，可不填写
                // canvaLine.showToolTip(e, {
                //     format: function (item, category) {
                //         return category + ' ' + item.name + ':' + item.data 
                //     }
                // });
            },
        }
    }
</script>
<style>
    .charts {
        width: 100%;
        height: 200upx;
		margin-bottom: 10px;
		margin-top: 10px;
    }
</style>
