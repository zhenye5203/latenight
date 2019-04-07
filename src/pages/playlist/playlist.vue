<template>
<div class="playlist">
  <Header />
  <Scroll class="wrapper" :data="list" :probeType="probeType" :listen-scroll="listenScroll" >
    <div class="content">
      <div class="song-status">
        <ul class="song-status-ul">
          <li class="song-li"><i class="mus icon-resong"></i><span class="li-name">本地音乐</span> <span class="li-num">(0)</span></li>
          <li class="song-li"><i class="mus icon-record"></i><span class="li-name">最近播放</span> <span class="li-num">(0)</span></li>
          <!-- <li class="song-li"><i class="mus icon-resong"></i><span class="li-name">本地音乐</span> <span class="li-num">(0)</span></li> -->
          <li class="song-li"><i class="mus icon-coll"></i><span class="li-name">我的收藏</span> <span class="li-num">(0)</span></li>
        </ul>
      </div>
      <div class="song-group-list">
        <div class="song-group create-songsheet-group">
          <div class="small-title">
            <i class="mus xiangxia2"></i>
            <span class="small-title-name">创建的歌单<span class="songsheet-num">({{createSongList.length}})</span></span>
          </div>
          <div class="create-songsheet-list songsheet-list">
            <SongSheet :data="createSongList"></SongSheet>
          </div>
        </div>
        <div class="song-group coll-songsheet-group">
          <div class="small-title">
            <i class="mus xiangxia2"></i>
            <span class="small-title-name">收藏的歌单<span class="songsheet-num">({{collSongList.length}})</span></span>
          </div>
          <div class="coll-songsheet-list songsheet-list">
            <SongSheet :data="collSongList"></SongSheet>
            <!-- <ul class="songsheet-ul">
              <li class="songsheet-li-item" v-for="(item,index) in collSongList" :key="item.id" @click="songSheetDetail(item,index)">
                <div class="item-left">
                  <img v-lazy="item.coverImgUrl" alt="">
                </div>
                <div class="item-right">
                  <span class="songsheet-name">{{item.name}}</span>
                  <div class="songsheet-msg">
                    <span class="song-num">{{item.trackCount}}首 <span class="author">by {{item.creator.nickname}},已下载？首</span></span>
                  </div>
                </div>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </Scroll>
  <router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/header/header'
import Toast from '@/components/toast'
import Scroll from '@/components/scroll/scroll'

import SongSheet from '@/pages/songSheet/songSheet'

import API from "@/api/playlist/msg_songsheet_coll"

import {mapGetters, mapActions} from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'toast',
      'user',
    ])
  },
  data () {
    return {
      uid:"",//用户ID
      createSongList:[],//自己创建的歌单
      collSongList:[],//收藏的歌单
      list:[]
    }
  },
  created() {
    this.uid = this.user.account.id
    this.probeType = 3
    this.listenScroll = true
  },
  mounted() {
    // 获取用户信息，歌单，收藏，mv，dj数量
    // this.songSheetASColl()
    this.getPlayList()
  },
  methods: {
    // 获取用户信息 , 歌单，收藏，mv, dj 数量
    songSheetASColl(){
      //301 错误 需要登录
      API.SongSheetASColl({}).then(res=>{
        console.log(res)
      })
    },
    getPlayList(){//获取用户歌单
      API.PlayList({uid:this.uid}).then(res=>{
        console.log(res)
        this.list = res.playlist
        res.playlist.map((val,i)=>{
          if(val.userId === this.uid){
            this.createSongList.push(val)
          }else{
            this.collSongList.push(val)
          }
        })
      })
    },
  },
  components: {
    Header,
    Toast,
    Scroll,
    SongSheet
  }
}
</script>

<style scoped lang="less" >
  .wrapper{
    overflow:hidden;
    position:fixed;
    top:46px;
    bottom:0;
    width:100%;
    background:#f5f5f5;
  }
  .content{
      width:100%;
      .song-status{
        width:100%;
        background:#FFFFFF;
        .song-status-ul{
          width: 100%;
          .song-li{
            display: flex;
            align-items:center;
            height:40px;
            padding:0 12px;
            position:relative;
            width:100%;
            color:#333;
            &::after{
              content:"";
              display:block;
              position:absolute;
              height:1px;
              width:100%;
              background-color:rgba(0,0,0,.1);
              left:0;
              bottom:0px;
              transform:rotateX(@borderSolideDeg)
            }
            i{
              color:#333;
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
      .small-title{
        height:20px;
        color:#000;
        display: flex;
        align-items:center;
        padding:0 12px;
        i{
          font-size:14px;
          padding-right:8px;
        }
        span.small-title-name{
          font-size:14px;
          font-weight: bold;
          // transform:scale(.8);
          .songsheet-num{
            font-size:12px;
            color:#999;
            margin-left:4px;
            font-weight:400;
          }
        }
      }
      .song-group-list{
        margin-top:6px;
        background:#FFFFFF;
        padding:8px 0;
      }
  }

/*
  playlist => songSheet => musicList =>songList
*/
</style>