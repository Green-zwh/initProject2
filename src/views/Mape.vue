<template>
  <div ref="mape">
    <button @click="send">点击发送请求</button>
    <div class="map">
      <span>123123</span>
        <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mape",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    send() {
      this.$server.getdata().then(res=>{
          console.log(res.data)
      })
    },
  },
};
</script>

<style lang="less">
.map{
width: 100px;
height: 100px;
border: 1px solid red;
span{
  color: aquamarine;
}
}
</style>
