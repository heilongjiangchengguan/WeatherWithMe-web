<template>
            <canvas canvas-id="canvasLineB" id="canvasLineB" class="charts" @touchstart="touchLineB"></canvas>
</template>
<script>
    import uCharts from '@/u-charts/u-charts.js';
    var _self;
    var canvaLineB=null;
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
            this.cHeight=uni.upx2px(500);
            this.getServerData();
        },
        methods: {
            getServerData(){
                        let LineB={categories:[],series:[]};
                        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                        LineB.categories=['2012', '2013', '2014', '2015', '2016', '2017'],
                        LineB.series=[{
											name: '成交量A',
											data: [35, 20, 25, 37, 4, 20],
											color: '#000000'
										}, {
											name: '成交量B',
											data: [70, 40, 65, 100, 44, 68]
										}, {
											name: '成交量C',
											data: [100, 80, 95, 150, 112, 132]
										}]
                        _self.showLineB("canvasLineB",LineB);
            },
            showLineB(canvasId,chartData){
                canvaLineB=new uCharts({
                    $this:_self,
                    canvasId: canvasId,
                    type: 'line',
                    fontSize:11,
                    legend:true,
                    dataLabel:false,
                    dataPointShape:true,
                    background:'#2979ff',
                    pixelRatio:_self.pixelRatio,
                    categories: chartData.categories,
                    series: chartData.series,
                    animation: true,
                    xAxis: {
                        type:'grid',
                        gridColor:'#CCCCCC',
                        gridType:'dash',
                        dashLength:8
                    },
                    yAxis: {
                        gridType:'dash',
                        gridColor:'#CCCCCC',
                        dashLength:8,
                        splitNumber:5,
                        min:10,
                        max:180,
                        format:(val)=>{return val.toFixed(0)+'元'}
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
            touchLineB(e) {
                canvaLineB.showToolTip(e, {
                    format: function (item, category) {
                        return category + ' ' + item.name + ':' + item.data 
                    }
                });
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
