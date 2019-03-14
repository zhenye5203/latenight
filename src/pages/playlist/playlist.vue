<template>
<div class="playlist">
  <Header />
  <div class="wrapper">
    <div class="content">
      playlist
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/header/header'

import BScroll from 'better-scroll'

export default {
  data () {
    return {

    }
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper")
    let scroll = new BScroll(wrapper,{
      bounce:{
        top:false,
        left:true,
        bottom:false,
        right:true
      }
    })
  },
  methods: {
    
  },
  components: {
    Header
  }
}
</script>

<style scoped>
  .wrapper{
    /* height:500px; */
    background:#ccc;
    overflow:hidden;
    position:fixed;
    top:46px;
    bottom:0;
    width:100%;
  }
</style>