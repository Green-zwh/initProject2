<template>
  <div ref="mape" >

  </div>
</template>

<script>
export default {
    name:'mape',
    data() {
        return {
            
        }
    },
    mounted() {
        this.$server.getdata().then(res=>{
            console.log(res)
        })
    },
    methods:{

    }
}
</script>

<style>

</style>