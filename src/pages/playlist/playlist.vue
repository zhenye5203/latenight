<template>
<div class="playlist">
  <Header />
  <div class="wrapper">
    <div class="content">
      <div class="song-status">
        <ul class="song-status-ul">
          <li class="song-li"><i class="mus icon-resong"></i><span class="li-name">本地音乐</span> <span class="li-num">(0)</span></li>
          <li class="song-li"><i class="mus icon-record"></i><span class="li-name">最近播放</span> <span class="li-num">(0)</span></li>
          <!-- <li class="song-li"><i class="mus icon-resong"></i><span class="li-name">本地音乐</span> <span class="li-num">(0)</span></li> -->
          <li class="song-li"><i class="mus icon-coll"></i><span class="li-name">我的收藏</span> <span class="li-num">(0)</span></li>
        </ul>
      </div>
      <div class="create-songsheet-list"></div>
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

<style scoped lang="less" >
  @themeColor:#C20C0C;
  .wrapper{
    /* height:500px; */
    /* background:#ccc; */
    overflow:hidden;
    position:fixed;
    top:46px;
    bottom:0;
    width:100%;
  }
  .content{
      width:100%;
      .song-status{
        width:100%;
        .song-status-ul{
          width: 100%;
          .song-li{
            display: flex;
            align-items:center;
            height:32px;
            padding:0 12px;
            position:relative;
            width:100%;
            &::after{
              content:"";
              display:block;
              position:absolute;
              height:1px;
              width:100%;
              background-color:rgba(0,0,0,.1);
              left:0;
              bottom:0px;
              transform:rotateX(-70deg)
            }
            i{
              color:@themeColor;
              font-size:18px;
              margin-right:12px;
            }
            span.li-name{
              font-size:12px;
              color:#000;
              margin-right:8px;
            }
            span.li-num{
              font-size:12px;
              color:#666;
            }
          }
        }
      }
  }
</style>