<template>
    <div id="age" style="width: 100%;height:100%"></div>
</template>
<script>
export default{
    data(){
        return{}
    },
    mounted(){
        // import  echarts from 'echarts';
         var echarts = require('echarts')
var chartDom = document.getElementById('age');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69','70-79','80-89','90-99','100+']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130,12,43,34,21],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};
option && myChart.setOption(option);

    }
}


</script>