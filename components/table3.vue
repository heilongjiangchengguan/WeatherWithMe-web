<template>
            <canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts"  @touchstart="touchColumn"></canvas>
</template>
<script>
    import uCharts from '@/u-charts/u-charts.js';
    var _self;
    var canvaColumn=null;
    export default {
        data() {
            return {
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                serverData:'',
            }
        },
        mounted() {
            _self = this;
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(500);
            this.getServerData();
        },
        methods: {
            getServerData(){
                        let ColumnMeter={categories:[],series:[]};
                        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                        ColumnMeter.categories=["2013", "2014", "2015", "2016", "2017", "2018"],
                        //这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
                        ColumnMeter.series=[{
										"name": "目标值",
										"data": [35, 36, 31, 33, 13, 34],
										"color": "#2fc25b"
									  }, {
										"name": "完成量",
										"data": [18, {"value": 27,"color": "#f04864"}, 21, 24, 6, 28],
										"color": "#1890ff"
									  }]
                        _self.showColumnMeter("canvasColumnMeter",ColumnMeter);
                    },
            showColumnMeter(canvasId,chartData){
                canvaColumn=new uCharts({
                    $this:_self,
                    canvasId: canvasId,
                    type: 'column',
                    legend:true,
                    fontSize:11,
                    background:'#FFFFFF',
                    pixelRatio:_self.pixelRatio,
                    animation: true,
                    categories: chartData.categories,
                    series: chartData.series,
                    xAxis: {
                        disableGrid:true,
                    },
                    yAxis: {
                    },
                    dataLabel: true,
                    width: _self.cWidth*_self.pixelRatio,
                    height: _self.cHeight*_self.pixelRatio,
                    extra: {
                        column: {
                            type:'meter',
                            width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length,
                            meter:{
                                //这个是外层边框的宽度
                                border:4,
                                //这个是内部填充颜色
                                fillColor:'#E5FDC3'
                            }
                        }
                      }
                });
            },
            touchColumn(e){
                canvaColumn.showToolTip(e, {
                    format: function (item, category) {
                        if(typeof item.data === 'object'){
                            return category + ' ' + item.name + ':' + item.data.value 
                        }else{
                            return category + ' ' + item.name + ':' + item.data 
                        }
                    }
                });
            },
        }
    }
</script>
<style>
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>