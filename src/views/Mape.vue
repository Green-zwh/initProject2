<template>
  <div ref="mape">
    <button @click="send">点击发送请求</button>
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

<style></style>
