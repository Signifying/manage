<template>
  <div class="main" style="width: 100%; height: 100%">
    <div class="submain">
    <fieldset class="left">
      <legend class="lg1">光伏并网逆变器功率曲线图（kW）</legend>
      <div id="main1" style="width: 1600px;height:300px;"></div>
    </fieldset>

    <fieldset class="right">
      <div class="subright">
      <legend class="lg1">光伏并网逆变器发电量柱状图（kW-h）</legend>
      <div id="main2" style="width: 1600px;height:300px;"></div>
      
      </div>
    </fieldset>
  </div>
  </div>
</template>

<script>
import SvgPanZoom from "vue-svg-pan-zoom";
import { getGriddata, Grids } from "../../network/gridConnection";
export default {
  name: "GridConnection",
  components: { SvgPanZoom },
  data() {
    return {
      paramInfo: {},
      id: [],
      value: [],
      timer: ""
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //定时请求
    this.timer = setInterval(this.getHomeMultidata, 2500);
  },
  mounted() {
    // console.log(this.list);
  },
  updated() {
    // console.log(this.list);
  },
  methods: {
    // 设置数据函数---------------------------------------------
    // 动态修改光伏逆变器数据
    setPccsDate() {
      // console.log(this.paramInfo.pvs);
      this.value = [];
      this.id = [];
      for (let i = 0; i < this.paramInfo.pccs.length; i++) {
        this.id.push(this.paramInfo.pccs[i].id);
        this.value.push(this.paramInfo.pccs[i].value);
      }
      // console.log(this.id);
      // console.log(this.value[0]);
      // 光伏模拟器 pvs all
      let pcc1 = document.getElementById("pcc1");
      let pcc2 = document.getElementById("pcc2");
      let pcc3 = document.getElementById("pcc3");
      let pcc4 = document.getElementById("pcc4");
      let pcc5 = document.getElementById("pcc5");
      let pcc6 = document.getElementById("pcc6");
      let pcc7 = document.getElementById("pcc7");
      let pcc8 = document.getElementById("pcc8");
      let pcc9 = document.getElementById("pcc9");
      let pcc10 = document.getElementById("pcc10");
      let pcc11 = document.getElementById("pcc11");
      let pcc12 = document.getElementById("pcc12");
      let pcc13 = document.getElementById("pcc13");
      let pcc14 = document.getElementById("pcc14");
      let pcc15 = document.getElementById("pcc15");
      let pcc16 = document.getElementById("pcc16");
      let pcc17 = document.getElementById("pcc17");
      let pcc18 = document.getElementById("pcc18");
      let pcc19 = document.getElementById("pcc19");
      let pcc20 = document.getElementById("pcc20");
      let pcc21 = document.getElementById("pcc21");
      let pcc22 = document.getElementById("pcc22");
      let pcc23 = document.getElementById("pcc23");
      let pcc24 = document.getElementById("pcc24");

      pcc1.textContent = this.value[0];
      pcc2.textContent = this.value[1];
      pcc3.textContent = this.value[2];
      pcc4.textContent = this.value[3];
      pcc5.textContent = this.value[4];
      pcc6.textContent = this.value[5];
      pcc7.textContent = this.value[6];
      pcc8.textContent = this.value[7];
      pcc9.textContent = this.value[8];
      pcc10.textContent = this.value[9];
      pcc11.textContent = this.value[10];
      pcc12.textContent = this.value[11];
      pcc13.textContent = this.value[12];
      pcc14.textContent = this.value[13];
      pcc15.textContent = this.value[14];
      pcc16.textContent = this.value[15];
      pcc17.textContent = this.value[16];
      pcc18.textContent = this.value[17];
      pcc19.textContent = this.value[18];
      pcc20.textContent = this.value[19];
      pcc21.textContent = this.value[20];
      pcc22.textContent = this.value[21];
      pcc23.textContent = this.value[22];
      pcc24.textContent = this.value[23];
    },

    // 业务函数---------------------------------------
    setColor(idData, valueData) {
      // console.log(valueData);
      if (valueData === 0) {
        // idData.className = 'opened'
        idData.style.fill = "#00b54f";
        idData.style.stroke = "#00b54f";
      } else {
        idData.style.fill = "#ff2a42";
        idData.style.stroke = "#ff2a42";
      }
    },
    // 网络请求---------------------------------------
    getHomeMultidata() {
      getGriddata().then(res => {
        // console.log(res);
        // this.list = res.energy.list;
        // console.log(this.list);
        // 获取数据
        this.paramInfo = new Grids(res.grids.pccs);
        // console.log(this.paramInfo);
        // 调用函数更新数据
        this.setPccsDate();
      });
    },
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("main1"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: " ",
          textStyle: {
            color: "#a4b4c4"
          }
        },
        tooltip: {},
        legend: {
          data: ["光伏并网逆变器"],
          textStyle: {
            color: "#a4b4c4"
          }
        },
        xAxis: {
          data: [
            "14:29:20",
            "14:31:20",
            "14:33:20",
            "14:35:20",
            "14:37:20",
            "14:39:20",
            "14:41:20",
            "14:43:30",
            "14:45:20",
            "14:47:20"
          ],
          axisLine: {
            lineStyle: {
              color: "#a4b4c4"
            }
          }
        },
        yAxis: [
          {
            max: 10,
            min: -10,
            // min:0,
            type: "value",
            minInterval: 5,
            interval: 5, //每次增加几个
            axisLine: {
              lineStyle: {
                color: "#a4b4c4"
              }
            }
          }
        ],
        series: [
          {
            name: "光伏并网逆变器",
            type: "line",
            smooth: true,
            data: [-5, -3, 8, -6, 10, 5, 0, 2, 3, 9]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option);
    },



    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("main2"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "",
          textStyle: {
            color: "#a4b4c4"
          }
        },
        tooltip: {},
        legend: {
          data: ["发电量"],
          textStyle: {
            color: "#a4b4c4"
          }
        },
        xAxis: {
          data: [
            "14:29:20",
            "14:31:20",
            "14:33:20",
            "14:35:20",
            "14:37:20",
            "14:39:20",
            "14:41:20",
            "14:43:30",
            "14:45:20",
            "14:47:20"
          ],
          axisLine: {
            lineStyle: {
              color: "#a4b4c4"
            }
          }
        },
        yAxis: [
          {
            max: 240,
            min: 200,
            // min:0,
            type: "value",
            minInterval: 10,
            interval: 10, //每次增加几个
            axisLine: {
              lineStyle: {
                color: "#a4b4c4"
              }
            }
          }
        ],
        series: [
          {
            name: "发电量",
            type: "bar",
            smooth: true,
            data: [221.45, 223.95, 220, 224.11, 219.88, 218.96, 217.16, 223.34, 226.57, 227.8],
            color: 'green',  
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart2.setOption(option);
    }
  },

  mounted() {
    this.drawChart1();
    this.drawChart2();
  },
  

  beforeDestory() {
    // 关闭窗口清除定时器
    clearInterval(this.timer);
  }
};
</script>
<style type="text/css" scoped>
.main {
  display: flex;
}
.submain{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.left {
  flex: 1;
  
  height: 100%;
  border:#a4b4c4  solid 1px ;
  /* border-right:#a4b4c4  solid 2px ;
  border-top:#a4b4c4  solid 2px; */

}

.right {
  flex: 1;
  border:#a4b4c4  solid 1px ;
  /* border-right:#a4b4c4  solid 2px ;
  border-bottom:#a4b4c4  solid 2px; */
}
.gridSvg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
legend {
  color: #a4b4c4;
  text-align: center;
}
.lg1{
  color: #a4b4c4;
  text-align: left;
  font-size: 20px;
  font-weight:bold;
}
.lg2{
  color: #a4b4c4;
  text-align: right;
}
.rightmain {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 100%;
}
.rightleft {
  flex: 1;
}
.rightcenter {
  flex: 1;
  border-bottom: #a4b4c4 solid 1px;
  border-top: #a4b4c4 solid 1px;
}
.rightright {
  flex: 1;
}
.table1{
  height:400px;
  width:100%;
  border:#a4b4c4  solid 0px ;
  border-collapse: collapse;
}
td{
  color: #a4b4c4;
  border:#a4b4c4  solid 1px ;
  text-align:center;
}
.td2{
  color: green;
}
</style>
