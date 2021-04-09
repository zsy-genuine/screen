<template>
  <!-- <div class="index-client"> -->
    <!-- <div class="index-client-box"> -->
      <!-- <span class="index-client-box-name">{{pies.title}}</span> -->
      <div class="index-client-box-charts" :style="{height:heights,top:tops}">
           <ve-ring  :height="heights" :data="chartData" :settings="chartSettings" :extend="chartExtend"  :colors="colors" :style="{width:'100%',height: '100px'}"></ve-ring>
 
 
      </div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  props:['pies'],
  data() {
    this.chartSettings = {
      roseType: this.pies.roseType,
      label: {
        normal: {
          show: false,
          // formatter: function(params) {
          //   return params.name + ": " + params.value;
          //   // if (params.value) {
          //   //     return params.name + " " + params.value; // 地图上展示文字 + 数值
          //   // } else {
          //   //     return "";
          //   // }
          // },
        },
      },
       radius:this.pies.radius || ['50%', '60%'],
    };
    
    return {
      chartExtend : {
        series: {
          center: this.pies.center1 ||[ "50%", '50%']
        },
              legend: this.pies.legend
    },
      chartData: {
        columns: this.pies.columns,
        rows:this.pies.rows
      },
       colors: ["#FEAA57", "#4AA8FF", "#50E1A3","#1BE9E7", "#50E1A3", "#ffd140"],
        heights: this.pies.height || "440px",
              tops:this.pies.tops || "20px"
    };
  },

};
</script>
<style scoped>
.index-client {
  width: 100%;
  height: auto;
  /* background: #ffffff; */
  border-radius: 5px;
  /* padding: 15px; */
  box-sizing: border-box;
}
.index-client-box {
  width: 100%;
  /* height: 200px; */

  position: relative;
  /* padding: 20px 15px; */
  box-sizing: border-box;
}
.index-client-box-name {
 position: absolute;
  width: fit-content;
  height: 30px;
  background: #ffffff;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  font-size: 13px;

  left: -15px;
  top: 0px;
  padding-left: 20px;
  padding-right: 20px;
   color: #40526d;
  font-size: 18px;
  
  font-weight: 600;
}
@media screen and (max-width:1366px) { 
.index-client-box-name  {font-size: 16px;} 
}
.index-client-box-select {
  width: 100%;
  height: 40px;
  /* background: burlywood; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
}
.index-client-box-charts {
  /* width: 100%;
   height: 440px; */
      /* position: relative;
   top:13px; */
  /* padding-top:60px; */
  /* background: chocolate; */
}
</style>