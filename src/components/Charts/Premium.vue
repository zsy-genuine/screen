<template>
  <div id='chartPie' class='pie-wrap'></div>
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // 引入主题

export default {
  data() {
    return {
      chartPie: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart()
    })
  },
  methods: {
    drawPieChart() {
      var data = [
        { value: 335, name: '平安养老' },
        { value: 135, name: '圆心' },
        { value: 310, name: '国寿险' },
        { value: 234, name: '太保财' },
        { value: 135, name: '人保财' }
      ]
      // 求data中value的总和
      function arrCount(arr) {
        let count = 0
        arr.forEach(item => {
          count = count + item.value
        })
        return count
      }
      this.chartPie = echarts.init(
        document.getElementById('chartPie'),
        'macarons'
      )
      this.chartPie.setOption({
        backgroundColor: '#0F1C39',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            color: '#A8ACB7'
          },
          data: ['平安养老', '圆心', '国寿险', '太保财', '人保财'],
          left: 'right',
          top: 'middle',
          orient: 'vertical',
          // 重写legend显示样式
          formatter: function(name) {
            const count = arrCount(data)
            // 找到data中name和文本name值相同的对象
            const val = data.filter(item => {
              return item.name === name
            })
            return name + '  ' + Math.round(((val[0].value / count).toFixed(4)) * 100) + '%'
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            color: ['#329C3C', '#9F4416', '#235DAF', '#560FA2', '#9FA4AF'],
            data: data,
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#0F1C39'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style scope>
.pie-wrap {
  width: 200px;
  height: 400px;
}
</style>
