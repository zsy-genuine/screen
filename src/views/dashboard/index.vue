<template>

  <!-- <div :class="classObj" class="app-wrapper"> -->
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <!-- <sidebar class="sidebar-container" /> -->
    <!-- <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div> -->
  <!-- </div> -->
  <div class="home-view">
    <div class="home-center">
       <div class="topview">
        <div class="logo">
          <img src="../../assets/img/圆心惠保logo@2x.png" alt="">
        </div>
        <div class="center">
          <div class="title">惠民保数据中心</div>
          <img src="../../assets/img/Group 1191@2x.png" alt="">
        </div>
        <div class="toptime">
          数据更新时间： 10:30 3.10.2021
        </div>
        </div>
        <div class="typeview">
              <div class="insured">
            <div style="margin-right:1rem">
              <p style="color:#fff;font-size:16px;font-weight: 600;">总参保人数</p>
              <p style="color: #878D9C;font-weight: 400; font-size: 0.1rem;
    white-space: nowrap; margin:0.3rem 0">NUMBER OF INSURED</p>
              <!-- <Progressbar/> -->
              <el-progress :percentage="35" color="#3DF132"   :stroke-width="2" :show-text=false ></el-progress>
               <p style="color:#fff;font-size:1.5rem;">28,340</p>
            </div>
            <div>
              <!-- <Annular/> -->
                <el-progress type="circle" :percentage="35" :width=70 color="#3DF132"></el-progress>
            </div>
          </div>
          <div class="insured insured1">
            <div  style="margin-right:1rem">
                <p style="color:#fff;font-size:16px;font-weight: 600;">总保费</p>
              <p style="color: #878D9C;font-weight: 400; font-size: 0.1rem;
    white-space: nowrap;  margin:0.3rem 0">INSURANCE AMOUNT</p>
              <!-- <Progressbar/> -->
              <el-progress :percentage="88" color="#FF5500"   :stroke-width="2" :show-text=false></el-progress>
               <p style="color:#fff;font-size:1.5rem;">19,554,600</p>
            </div>
            <div>
              <!-- <Annular/> -->
              <el-progress type="circle" :percentage="88" :width=70 color="#FF5500"></el-progress>
            </div>
          </div>
          <div class="insured insured2">
            <div  style="margin-right:1rem">
              <p style="color:#fff;font-size:16px;font-weight: 600;">个账支付金额</p>
              <p style="color: #878D9C;font-weight: 400; font-size: 0.1rem;
    white-space: nowrap; margin:0.3rem 0">ACCOUNTS PAYMENT AMOUNT</p>
              <!-- <Progressbar/> -->
              <el-progress :percentage="12" color="#0065DB"   :stroke-width="2" :show-text=false></el-progress>
               <p style="color:#fff;font-size:1.5rem;">233,022</p>
            </div>
            <div>
              <!-- <Annular/> -->
               <el-progress type="circle" :percentage="12" :width=70 color="#0065DB"></el-progress>
            </div>
          </div>
         
        
          <div class="countdown">
            <div class="cd-time">
              <p class="cd-type">倒计时</p>
              <p class="cd-num">16</p>
              <p class="cd-type">天</p>
            </div>
             <div class="cd-time ">
              <p class="cd-num" style="margin-top:1.2rem;">20</p>
              <p class="cd-type">时</p>
            </div>
             <div class="cd-time">
              <p class="cd-num" style="margin-top:1.2rem;">40</p>
              <p class="cd-type">分</p>
            </div>
             <div class="cd-time">
              <p class="cd-num" style="margin-top:1.2rem;">15</p>
              <p class="cd-type">秒</p>
            </div>
          </div>
        </div>
        <div class="mainview" >
          <div class="leftbox">
            <div class="pc-box">
              <div class="payment">
                <div class="paytitle">
                  <p class="paytitle-en">METHOD OF PAYMENT</p>
                  <p class="paytitle-ch">支付方式（参保人）</p>
                </div>
                <div class="paycenter">
                  <div class="paycenter1">
                    <img src="../../assets/img/Ellipse 70@2x.png" alt="">
                    <div class="payname">云闪付</div>
                    <div class="paynum">3</div>
                  </div>
                   <div class="paycenter1">
                    <img src="../../assets/img/Ellipse 70@2x.png" alt="">
                    <div class="payname">医保个账</div>
                    <div class="paynum">15</div>
                  </div>
                  <div class="paycenter1">
                    <img src="../../assets/img/编组@2x.png" alt="">
                    <div class="payname">微信支付</div>
                    <div class="paynum">1146</div>
                  </div>
                </div>
              </div>
            <div class="coveragerate">
               <div class="paytitle">
                  <p class="paytitle-en">RATE OF THE INSURED</p>
                  <p class="paytitle-ch">参保率</p>
                </div>
                <div class="coveragetype">
                  <div style="text-align:center;color:#878D9C;font-size: 0.2rem;">
                                  <div style="width:0.2rem; height:100px; border-radius:5px; background-color:#000; position:relative;margin-left: 0.5rem;margin-bottom: 1rem;">
    <div style="width:0.2rem; height:43%; border-radius:5px; background-color:#FF5500; position:absolute; left:0; bottom:0;"></div>
    <div style="background: #495269;
 width: 2rem;height: 1rem;line-height: 1rem;position: absolute;left: -1rem">43%</div>
</div>
<div>职工</div>
                  </div>
      <div  style="text-align:center;color:#878D9C; font-size: 0.2rem;">  <div style="width:0.2rem; height:100px; border-radius:5px; background-color:#000; position:relative; margin-left: 0.5rem;margin-bottom: 1rem;">
    <div style="width:0.2rem; height:21%; border-radius:5px; background-color:#009306; position:absolute; left:0; bottom:0;"></div>
    <div style="background: #495269;
width: 2rem;height: 1rem;line-height: 1rem;position: absolute;left: -1rem">21%</div>
</div>
<div>居民</div>
      </div>
          
                    <!-- <el-progress :percentage="88" color="#FF5500"   :stroke-width="50"></el-progress> -->
                </div>
            </div>
            </div>
            <div class="pcbottom-box">
              <div class="payment">        
                <div class="paytitle">
                  <p class="paytitle-en">GENDER OF THE INSURED</p>
                  <p class="paytitle-ch">参保人性别</p>
                </div>
                <div class="paycenter">
                  <div class="paycenter1">
                    <img src="../../assets/img/Vector@2x.png" alt="">
                    <div class="payname">
                      <p>MALE</p>
                      <p>男性</p>
                    </div>
                    <div class="paynum">87%</div>
                  </div>
                  <div class="paycenter1">
                    <img src="../../assets/img/Vector@2x (1).png" alt="">
                    <div class="payname " style="color:#FF7A00;">
                      <p>FEMALE</p>
                      <p>女性</p>
                    </div>
                    <div class="paynum">67%</div>
                  </div>
                 
                </div>
                 <div class="paytitle" style="margin-top:1rem;">
                  <p class="paytitle-en">MEDICAL TYPE</p>
                  <p class="paytitle-ch">参保人医保类型</p>
                </div>
                <div class="paycenter-type">
                  <div class="paycenter1">
                    <div  class="payname">职工</div>
                    <div style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="38" color="#009306" :stroke-width="2"></el-progress>
                      
                    </div>
                       
                    <!-- <div class="paynum">38%</div> -->
                  </div>
                   <div class="paycenter1">
                     <div class="payname">居民</div>
                     <div style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="87" color="#FF7A00"   :stroke-width="2"></el-progress>
                     </div>
                       
                    <!-- <div class="paynum">87%</div> -->
                  </div>
                 
                </div>
              </div>
            <div class="coveragerate">
               <div class="paytitle">
                  <p class="paytitle-en">DISTRIBUTION RELATION</p>
                  <p class="paytitle-ch">投被保人关系分布</p>
                </div>
                <div class="coveragetype">
                   <!-- <Annular/> -->
                     <Circles :pies="pies4" style="margin-bottom: 20px" v-if="pies4AsyncFinish" />
                </div>
            </div>
            </div>
          </div>
          <div class="centerbox">
            <div class="cb-top">
              <div class="person-num">
                <div class="paytitle">
                  <p class="paytitle-en">TREND CHART</p>
                  <p class="paytitle-ch">参保人数日趋势图</p>
                </div>
                <div class="numchart">
                  <Insurep/>
                </div>
              </div>
              <div class="achievement">
                <div class="paytitle">
                  <p class="paytitle-en">GENDER OF THE INSURED</p>
                  <p class="paytitle-ch">参保人性别</p>
                </div>
                <div class="achievementtype">
                  <div class="ac-one">
                    <div style="color:#878D9C;">全部</div>
                    <div style="color:#fff;">126</div>
                  </div>
                  <div class="ac-one">
                    <div style="color:#878D9C;">国寿财</div>
                    <div style="color:#fff;">31</div>
                  </div>
                  <div class="ac-one">
                     <div style="color:#878D9C;">平安养老</div>
                    <div style="color:#fff;">27</div>
                  </div>
                  <div class="ac-one">
                    <div style="color:#878D9C;">太平财</div>
                    <div style="color:#fff;">18</div>
                  </div>
                  <div class="ac-one">
                    <div style="color:#878D9C;">圆心</div>
                    <div style="color:#fff;">21</div>
                  </div>
                  <div class="ac-one">
                    <div style="color:#878D9C;">人保财</div>
                    <div style="color:#fff;">22</div>
                  </div>
                </div>
              </div>
            </div>
             <div class="cb-bottom">
               <div class="personage">
                 <div class="paytitle">
                  <p class="paytitle-en">AGE SEGMENT</p>
                  <p class="paytitle-ch">参保人的年龄分布</p>
                </div>
                <div class="personagechart">
                  <Age/>
                </div>
               </div>
            </div>
          </div>
          <div class="rightbox">
            <div class="premium">
                <div class="paytitle">
                  <p class="paytitle-en">PREMIUM OF CHANNEL</p>
                  <p class="paytitle-ch">渠道保费分布</p>
                </div>
                <div class="premiumchart">
                  <Premium/>
                </div>
            </div>
            <div class="reach">
              <div class="paytitle">
                  <p class="paytitle-en">ACHIEVEMENT</p>
                  <p class="paytitle-ch">渠道达成率(参保人数)</p>
                </div>
                <div class="reachchart">
                  <div class="ranking">
                    <div>排名</div>
                    <div class="rankbox">1</div>
                    <div class="rankbox">2</div>
                    <div class="rankbox">3</div>
                    <div class="rankbox">4</div>
                    <div class="rankbox">5</div>
                  </div>
                  <div class="success">
                    <div>达成率</div>
                    <div class="successbox">
                      <div>平安养老</div>
                      <div  style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="87" color="#C206CF"   :stroke-width="2"></el-progress>
                      </div>
                     
                    </div>
                    <div class="successbox">
                      <div>圆心</div>
                      <div  style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="79" color="#C206CF"   :stroke-width="2"></el-progress>
                      </div>
                    </div>
                     <div class="successbox">
                      <div>国寿财</div>
                     <div  style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="66" color="#C206CF"   :stroke-width="2"></el-progress>
                      </div>
                    </div>
                     <div class="successbox">
                      <div>太保财</div>
                      <div  style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="42" color="#C206CF"   :stroke-width="2"></el-progress>
                      </div>
                    </div>
                     <div class="successbox">
                      <div>人保财</div>
                     <div  style="width:7.5rem; text-align:right;">
                        <el-progress :percentage="22" color="#C206CF"   :stroke-width="2"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="pnum">
                    <div>参保人数</div>
                    <div class="pnumbox">
                      <div>56,721</div>
                      <div>人</div>
                    </div>
                     <div class="pnumbox">
                      <div>56,721</div>
                      <div>人</div>
                    </div>
                     <div class="pnumbox">
                      <div>56,721</div>
                      <div>人</div>
                    </div>
                     <div class="pnumbox">
                      <div>56,721</div>
                      <div>人</div>
                    </div>
                     <div class="pnumbox">
                      <div>56,721</div>
                      <div>人</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
   
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
// import { AppMain, Navbar, Settings, Sidebar, TagsView ,Progressbar} from './components'
// import Progressbar from './components/Progressbar/index'
import Annular from '@/components/Charts/Annular'
import Insurep from '@/components/Charts/Insurep'
import Age from '@/components/Charts/Age'
// import Age from '../views/charts/age'
// import Annular from '../views/charts/annular'
// import Insurep from '../views/charts/insurep'
import Premium from '@/components/Charts/Premium'
// import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
// import Keyboard from '@/components/Charts/Keyboard.vue'
import Circles from "@/components/Charts/circle";
import  {insureUqe} from "@/api/user";

export default {
  // name: 'layout',/
  components: {
    // AppMain,
    // Navbar,
    // RightPanel,
    // Settings,
    // Sidebar,
    // TagsView,
    // Progressbar,
    Annular,
    Insurep,
    Age,
    Premium,
    Circles
  },
  data(){
    return{
      // resp:[
      //   {
      //     'age_band':'11',
      //     'insure_uqe':'300'
      //   },
      //    {
      //     'age_band':'132',
      //     'insure_uqe':'700'
      //   }
      // ],
      
      // resp:{
      //   age_band:[1,2],
      //   insure_uqe:['30%','70%'],
      // },
       
        
    // },
       pies4AsyncFinish: true,
      pies4: {
        title: "被保人年龄占比",
        columns: ["用户", "占比"],
        rows: [],
        height: "180px",
        
        radius: ['50%', '60%'],
        center1: ['35%', '50%'],
        tops: "10px",
        legend: {
          // orient: "vertical",
          // top: 100,
          // bottom:'0%',
          // left: '0%',
          // top:auto,
          // right:auto,

          // left:90
           left: "14%",
    bottom: "0%",
    top: "50%",
    width: "40%",
    height: "54%",
    orient: "horizontal",
    itemWidth: 30,
    textStyle: {
      color: "#eee"
    }
        },
      },
    }
  },
  created(){
    this.getData();
    // console.log(this.resp)
    // this.resp.map((item) => {
    //       console.log(item)
    //       });
      // this.pies4.rows = this.resp.map((item) => {
      //       return {
      //         用户: item.age_band,
      //         占比: item.insure_uqe,
      //       };
      //     });
          // this.pies4AsyncFinish = true;
  },
  methods:{
       initFlag(){
      // this.pies2AsyncFinish = false;
      // this.pies3AsyncFinish = false;
      this.pies4AsyncFinish = false;
      // this.pies7AsyncFinish = false;
      // this.pies8AsyncFinish = false;
      // this.pies9AsyncFinish = false;
      // this.pies10AsyncFinish = false;
    },
    getData(){
       this.initFlag()
       //被保人年龄占比
     insureUqe({ city_code: 'lanzhou', insuredRelation: 1 }).then((resp) => {
        console.log(resp)
          // this.pies4.rows = resp.data.map((item) => {
          //   return {
          //     用户: item.relation,
          //     占比: item.insure_uqe,
          //   };
          // });
          // this.pies4AsyncFinish = true;
        });
    },
     
          handleClick(e, i) {
      // this.optionActives = i;
      // this.activeName = e.name;
      // this.radio4 = '保 费';
      // this.$router.replace({name: e.name})
      // this.getData();
      // $(".el-menu-item").addClass("nn")
    },
  }
  // mixins: [ResizeMixin],
  // computed: {
  //   ...mapState({
  //     sidebar: state => state.app.sidebar,
  //     device: state => state.app.device,
  //     showSettings: state => state.settings.showSettings,
  //     needTagsView: state => state.settings.tagsView,
  //     fixedHeader: state => state.settings.fixedHeader
  //   }),
  //   classObj() {
  //     return {
  //       hideSidebar: !this.sidebar.opened,
  //       openSidebar: this.sidebar.opened,
  //       withoutAnimation: this.sidebar.withoutAnimation,
  //       mobile: this.device === 'mobile'
  //     }
  //   }
  // },
  // methods: {
  //   handleClickOutside() {
  //     this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
}
.home-view{
  width: 100vw;
  // height: 100vh;
  background: #091638;
  .home-center{
     width: 95%;
    margin: 0 auto;
    .topview{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo{
        width: 10%;
        height: 5vh;
        margin-top: 1rem;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .center{
       position: relative;
       width: 50%;
       height: 5vh;
       margin-top: 1.5rem;
        .title{
          position: absolute;
          width: 11rem;
          height: 20px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #0064DA;
          line-height: 20px;
          left: 14.5rem;
        }
         img{
          width: 100%;
          height: 100%;
        }
    }
    .toptime{
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      border-left: 4px solid #2E42F4;
      margin-top: 1rem;
      height: 14px;
    }
    }
    .typeview{
        width: 100%;
        display: flex;
        justify-content: space-between;
            margin-top: 1rem;
        .insured{
            display: flex;
            padding: 1rem ;
            // width: 18.35%;
            height: 20vh;
            border: 1px solid #2C7EF2;
            // background-image: url('../assets/img/Rectangle 299@2x.png');
            background: url('../../assets/img/Rectangle 304@2x.png') no-repeat bottom;
            background-size: 100% 40%;
            background-color: #0F1C39;
                align-items: center;

        }
        .insured1{
           background: url('../../assets/img/Rectangle 304@2x (1).png') no-repeat bottom;
             background-size: 100% 40%;
        }
        .insured2{
           background: url('../../assets/img/Rectangle 304@2x (2).png') no-repeat bottom;
             background-size: 100% 40%;
        }
        .countdown{
          width: 30%;
          height: 20vh;
          display: flex;
           justify-content: space-between;
          .cd-time{
            text-align: center;
            // width: 20%;
            //  height: 20vh;
            // background-image: url('../assets/img/Rectangle 299@2x.png');
            //  background: url('../assets/img/Rectangle 304@2x.png') ;
              border: 1px solid #2C7EF2;
              background: #0F1C39;
            .cd-type{
              font-size: 14px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #878D9C;
              line-height: 20px;

            }
            .cd-num{
              font-size: 4.5rem;
              font-weight: 100;
              color:#fff;
            }
          }
        }
    }
    .mainview{
          margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      .leftbox{
        width: 30%;
        .pc-box{
          width: 100%;
          border:1px solid #0064DA;
          display: flex;
          padding: 1rem;
          justify-content: space-between;
          .payment{
            width:45%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .paycenter{
              width: 100%;
              margin: 0 auto;
              .paycenter1{
                background: #0F1C39;
                width: 100%;
                height: 3rem;
                display: flex;
                margin-top: 1rem;
                padding: 0.5rem;
                justify-content: space-between;
                img{
                    width: 2rem;
                    height: 2rem;
                }
                .payname{
                    font-weight: 600;
                    color: #878D9C;
                    font-size: 0.3rem;
                    line-height: 2rem;
                    // margin-left: -1.5rem;
                }
                .paynum{
                    color: #fff;
                    line-height: 2rem;
                    text-align: right;
                }
              }
            }
          }
          .coveragerate{
             width:45%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .coveragetype{
                background: #0F1C39;
                width: 100%;
                height: 11rem;
                margin-top: 1rem;
                display: flex;
                justify-content: space-around;
    align-items: center;
            }
          }
        }
         .pcbottom-box{
          width: 100%;
          border:1px solid #0064DA;
          display: flex;
          padding: 1rem;
          justify-content: space-between;
          margin-top: 1rem;
          .payment{
            width:45%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .paycenter{
              width: 100%;
              margin: 0 auto;
              .paycenter1{
                background: #0F1C39;
                width: 100%;
                height: 2rem;
                display: flex;
                margin-top: 0.5rem;
                padding: 0.3rem;
                justify-content: space-between;
                align-items: center;
                img{
                    width: 1rem;
                    height: 1rem;
                }
                .payname{
                    font-size: 0.1rem;
                    margin-left: -3rem;
                    color: #3DF132;
                }
                .paynum{
                    color: #fff;
                    text-align: right;
                    font-size: 0.5rem;
                }
              }
            }
             .paycenter-type{
              width: 100%;
              margin: 0 auto;
              .paycenter1{
                background: #0F1C39;
                width: 100%;
                height: 2rem;
                display: flex;
                margin-top: 0.5rem;
                padding: 0.3rem;
                justify-content: space-between;
                align-items: center;
              
                .payname{
                    font-size: 0.1rem;
                    color: #878D9C;
                }
                .paynum{
                    color: #fff;
                    text-align: right;
                    font-size: 0.5rem;
                }
              }
            }
          }
          .coveragerate{
             width:45%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .coveragetype{
                background: #0F1C39;
                width: 100%;
                height: 12.5rem;
                margin-top: 1rem;
            }
          }
        }
      }
       .centerbox{
        width: 30%;
        .cb-top{
          width: 100%;
          border:1px solid #0064DA;
          // display: flex;
          padding: 1rem;
          // justify-content: space-between;
          .person-num{
            width:100%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .numchart{
              width: 100%;
              height: 10rem;
            } 
          }
          .achievement{
            width:100%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .achievementtype{
              width: 100%;
              // height: 3rem;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              .ac-one{
                width: 45%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.5rem;
                background: #0F1C39;
                padding: 0.5rem;
                margin-top: 0.5rem;
              }
            } 
          }
          .coveragerate{
             width:45%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .coveragetype{
                background: #0F1C39;
                width: 100%;
                height: 11rem;
                margin-top: 1rem;
            }
          }
        }
         .cb-bottom{
          width: 100%;
          border:1px solid #0064DA;
         
          padding: 1rem;
          .personage{
            width:100%;
            .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .personagechart{
              width: 100%;
              height: 7rem;
            }
          }
        
        }
      }
      .rightbox{
        width: 30%;
        border:1px solid #0064DA;
        padding: 1rem;
        .premium{
          width: 100%;
             .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .premiumchart{
              width: 100%;
              height: 12rem;
            }
        }
          .reach{
          width: 100%;
             .paytitle{
              border-left: 0.5rem solid #0064DA;
              height: 2.5rem;
              .paytitle-en{
                font-size: 0.2rem;
                color: #878D9C;
                font-weight: 400;
                white-space: nowrap;
              }
              .paytitle-ch{
                font-size: 0.4rem;
                font-weight: 600;
                color: #fff;
              } 
            }
            .reachchart{
              width: 100%;
              height: 8rem;
              display: flex;
              justify-content: space-between;
              color: #878D9C;
              font-size: 0.4rem;
              margin-top: 1rem;
              .ranking{
                .rankbox{
                  // width: 1rem;
                  // height: 1rem;
                  background: #0F1C39;
                  color: #fff;
                  margin-top: 1rem;
                  padding: 0.5rem;
                }
              }
              .success{
                .successbox{
                  display: flex;
                  padding: 0.5rem;
                  background: #0F1C39;
                  color: #fff;
                  margin-top: 1rem;
                  justify-content: space-between;
                }
              }
              .pnum{
                .pnumbox{
                   display: flex;
                  padding: 0.5rem;
                  background: #0F1C39;
                  color: #fff;
                  margin-top: 1rem;
                  justify-content: space-between;
                }
              }
            }
        }
      }
    }
  }
  
}


  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
