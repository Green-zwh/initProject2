<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/map">地图</router-link>
      <router-link to="/zj">浙江</router-link>
    </div>
    <div ref="newCatalog" class="newCatalog">
      <router-view/>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      scale: ''
    }
  },
  mounted() {
    this.setScale()
    window.addEventListener('resize', this.setScale)
  },
  methods: {
    getScale() {
      let ww = window.innerWidth / 1920
      let wh = window.innerHeight / 1080
      return ww < wh ? ww : wh
    },
    setScale() {
      this.scale = this.getScale()
      this.$refs.newCatalog.style.setProperty('--scale', this.scale)
    }
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  border: none;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Alibaba-PuHuiTi-R, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: url('~assets/images/bg.png'); */
  background-size: cover;
  background: tomato;
  /* border: 1px solid red; */
}
.newCatalog {
  --scale: 1;
  width: 1920px;
  height: 1080px;
  background-size: 100% 100%;
  position: absolute;
  transform: scale(var(--scale)) translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  transform-origin: 0 0;
  left: 50%;
  top: 50%;
}

</style>
