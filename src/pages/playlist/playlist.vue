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
      <div class="song-group-list">
        <div class="song-group create-songsheet-group">
          <div class="small-title">
            <i class="mus xiangxia2"></i>
            <span class="small-title-name">创建的歌单<span class="songsheet-num">({{createSongList.length}})</span></span>
          </div>
          <div class="create-songsheet-list songsheet-list">
            <ul class="songsheet-ul">
              <li class="songsheet-li-item" v-for="item in createSongList" :key="item.id">
                <div class="item-left">
                  <img v-lazy="item.coverImgUrl" alt="">
                </div>
                <div class="item-right">
                  <span class="songsheet-name">{{item.name}}</span>
                  <div class="songsheet-msg">
                    <span class="song-num">{{item.trackCount}}首</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="song-group coll-songsheet-group">
          <div class="small-title">
            <i class="mus xiangxia2"></i>
            <span class="small-title-name">收藏的歌单<span class="songsheet-num">({{collSongList.length}})</span></span>
          </div>
          <div class="coll-songsheet-list songsheet-list">
            <ul class="songsheet-ul">
              <li class="songsheet-li-item" v-for="item in collSongList" :key="item.id">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/header/header'
import Toast from '@/components/toast'
import BScroll from 'better-scroll'

import API from "@/api/playlist/msg_songsheet_coll"

import {mapGetters} from 'vuex'
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
    }
  },
  created() {
    this.uid = this.user.account.id
  },
  mounted() {
    // 设置滚动条
    let wrapper = document.querySelector(".wrapper")
    let scroll = new BScroll(wrapper,{
      click:true,//默认为false，为false的时候better-scroll将会禁止click时间
      bounce:{//当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
        top:true,
        left:true,
        bottom:true,
        right:true
      },
      momentum:true,//当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。设置为 true 则开启动画。
    })
    // 获取用户信息，歌单，收藏，mv，dj数量
    // this.songSheetASColl()
    this.getPlayList()
  },
  methods: {
    songSheetASColl(){
      //301 错误 需要登录
      API.SongSheetASColl({}).then(res=>{
        console.log(res)
      })
    },
    getPlayList(){
      API.PlayList({uid:this.uid}).then(res=>{
        console.log(res)
        res.playlist.map((val,i)=>{
          if(val.userId === this.uid){
            this.createSongList.push(val)
          }else{
            this.collSongList.push(val)
          }
        })
      })
    }
  },
  components: {
    Header,
    Toast
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
              transform:rotateX(@borderDeg)
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
        .song-group{
          .songsheet-list{
            .songsheet-ul{
              padding:4px;
              .songsheet-li-item{
                height:40px;
                display: flex;
                margin:6px 0;
                .item-left{
                  flex:0 0 40px;
                  height:100%;
                  border-radius:4px;
                  overflow:hidden;
                  img{
                    width: 100%;
                    height:100%;
                  }
                }
                .item-right{
                  flex:1;
                  display: flex;
                  flex-direction: column;
                  padding:4px 10px;
                  position:relative;
                  &::after{
                    content:"";
                    display:block;
                    position:absolute;
                    height:1px;
                    width:100%;
                    background-color:rgba(0,0,0,.1);
                    bottom:0;
                    transform:rotateX(@borderDeg)
                  }
                  .songsheet-name{
                    flex:1;
                    color:#000;
                    font-size:12px;
                    display: flex;
                    align-items: center;
                  }
                  .songsheet-msg{
                    flex:1;
                    color:#666;
                    display: flex;
                    align-items: center;
                    .song-num{
                      transform:scale(.9)
                    }
                  }
                }
              }
            }
          }
        }
      }
      

  }
</style>