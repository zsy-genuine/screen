<template>
  <div>
    <!-- 折线图 -->
    <div id='myChart' :style="{ width: '100%', height: '200px' }"/>

</div>
 
</template>

<script>
var echarts = require('echarts')
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
//         backgroundColor: '#0F1C39',
        textStyle: {
          color: '#404A61'
        },
        // axisLine: {
        //   lineStyle: {
        //     color: '#0F1C39'
        //   }
        // },
        xAxis: {
          type: 'category',
          data: ['3-15', '3-16', '3-17', '3-18', '3-19', '3-20', '3-21']
          // nameTextStyle: {
          //   color: '#0F1C39'
          // }
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 20,
          axisLabel: {
            formatter: '{value}k'
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          data: [10, 15, 10, 10, 5, 13, 15],
          type: 'line',
          itemStyle: {
            color: '#172E6D'
          },
          symbolSize: 8,
          endLabel: {
            show: false
          }
        }]
      })
    }
  }
}
</script>
