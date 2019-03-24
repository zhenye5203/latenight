<template>
  <div id="app">
    <router-view/>
    <Toast :data="toast"/>
  </div>
</template>

<script>
import Toast from '@/components/toast'

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed:{
    ...mapGetters([
      'toast'
    ])
  },
  data(){
    return {
      
    }
  },
  components:{
    Toast
  }
}
</script>

<style>
  #app{
    width: 100%;
    height:100%;
  }
</style>
