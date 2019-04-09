<template>
  <div id="app">
    <!-- <Header /> -->
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" >
      <router-view/>
    </v-touch>
    <Toast :data="toast"/>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import API from '@/api/login/login_status'
import Header from '@/components/header/header'
import store from './store'
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
  methods:{
    onSwipeLeft(){
      console.log("left")
    },
    onSwipeRight(){
      console.log("right")
    }
  },

  components:{
    Toast,
    Header
  }
}
</script>

<style>
  #app{
    width: 100%;
    height:100%;
  }
</style>
