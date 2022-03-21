<template>
  <div id="app" ref="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/map">About</router-link>
    </div>
    <router-view/>
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
      this.$refs.app.style.setProperty('--scale', this.scale)
    }
  }
}
</script>
<style>
#app {
  --scale: 1;
  width: 1920PX;
  height: 1080PX;
  background-size: 100% 100%;
  position: absolute;
  transform: scale(var(--scale)) translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  transform-origin: 0 0;
  left: 50%;
  top: 50%;
  margin: 0;
  padding: 0;

}

</style>
