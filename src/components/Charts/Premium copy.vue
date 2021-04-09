<template>
    <div id="premium" style="width: 100%;height:100%"></div>
</template>
<script>
export default{
    data(){
        return{}
    },
    mounted(){
        // import  echarts from 'echarts';
         var echarts = require('echarts')
var chartDom = document.getElementById('premium');
var myChart = echarts.init(chartDom);
var option;

option = {
    // tooltip: {
    //     trigger: 'item'
    // },
    // legend: {
    //     top: '50%',
    //     right: '0',
    //     display:'iine-block'
    // },
    series: [
        {
            // name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            // avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            // label: {
            //     show: false,
            //     position: 'center'
            // },
            // emphasis: {
                // label: {
                //     // show: true,
                //     fontSize: '40',
                //     fontWeight: 'bold'
                // }
            // },
            labelLine: {
                show: false
            },
            data: [
                {value: 36, name: '平安养老'},
                {value: 32, name: '圆心'},
                {value: 33, name: '国寿险'},
                {value: 28, name: '太保财'},
                {value: 22, name: '人保财'}
            ]
        }
    ]
};

option && myChart.setOption(option);

    }
}


</script>