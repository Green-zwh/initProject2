<template>
  <div ref="mape">
    <!-- 中国地图 -->
    <button @click="send">点击发送请求</button>
    <div class="map">
      <span>123123</span>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div ref="myEchart" class="chart">

    </div>
  </div>
</template>

<script>
import 'echarts/map/js/china'
export default {
  name: "mape",
  data() {
    return {};
  },
  mounted() {
    this.chinaConfigure()
  },
  methods: {
    send() {
      this.$server.getdata().then((res) => {
        console.log(res.data);
      });
    },
    chinaConfigure() {
      let myChart = this.$echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        backgroundColor: "#02AFDB",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "启动次数", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 599,
              },
              {
                name: "上海",
                value: 142,
              },
              {
                name: "黑龙江",
                value: 44,
              },
              {
                name: "深圳",
                value: 92,
              },
              {
                name: "湖北",
                value: 810,
              },
              {
                name: "四川",
                value: 453,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less">
.map {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  span {
    color: aquamarine;
  }
}
.chart{
  width: 600px;
  height: 600px;
  border: 1px solid red;
}
</style>
