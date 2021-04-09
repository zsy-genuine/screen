<template>
    <div id="annular" style="width: 100px;height:100px"></div>
</template>
<script>
export default{
    data(){
        return{}
    },
    mounted(){
        // import  echarts from 'echarts';
         var echarts = require('echarts')
var chartDom = document.getElementById('annular');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: '0',
        left: '0'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 38, name: '本人'},
                {value: 34, name: '父母'},
                {value: 24, name: '配偶'},
                {value: 22, name: '子女'},
            ]
        }
    ]
};

option && myChart.setOption(option);

    }
}


</script>