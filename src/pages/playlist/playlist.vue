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
      <div class="song-group create-songsheet-group">
        <div class="small-title">
          <i class="mus xiangxia2"></i>
          <span class="small-title-name">创建的歌单</span>
        </div>
        <div class="create-songsheet-list songsheet-list">
          <ul class="songsheet-ul">
            <li class="songsheet-li-item">
              <div class="item-left">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1852855172,190902392&fm=27&gp=0.jpg" alt="">
              </div>
              <div class="item-right">
                <span class="songsheet-name">我喜欢的音乐</span>
                <div class="songsheet-msg">
                  <span class="song-num">0首</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="song-group coll-songsheet-group">
        <div class="small-title">
          <i class="mus xiangxia2"></i>
          <span class="small-title-name">收藏的歌单</span>
        </div>
        <div class="coll-songsheet-list songsheet-list">
          <ul class="songsheet-ul">
            <li class="songsheet-li-item">
              <div class="item-left">
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1852855172,190902392&fm=27&gp=0.jpg" alt="">
              </div>
              <div class="item-right">
                <span class="songsheet-name">超时空要塞△</span>
                <div class="songsheet-msg">
                  <span class="song-num">0首</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/header/header'
import BScroll from 'better-scroll'

import API from "@/api/playlist/msg_songsheet_coll"
export default {
  data () {
    return {

    }
  },
  mounted() {

    // 设置滚动条
    let wrapper = document.querySelector(".wrapper")
    let scroll = new BScroll(wrapper,{
      bounce:{
        top:false,
        left:true,
        bottom:false,
        right:true
      }
    })
    // 获取用户信息，歌单，收藏，mv，dj数量
    this.songSheetASColl()
    // this.userDetail()
  },
  methods: {
    songSheetASColl(){
      //301 错误 需要登录
      API.SongSheetASColl({}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
        this.$router.push("/login")
        // if(err.indexOf("301") != -1){
        //   this.$router.push("/login")
        // }
      })
    },

    userDetail(){
      API.userDetail({uid:1787854984}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  components: {
    Header
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
              transform:rotateX(@borderDeg)
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
      .small-title{
        height:20px;
        background:#e4e0e0;
        color:#666;
        display: flex;
        align-items:center;
        padding:0 12px;
        i{
          font-size:12px;
          padding-right:8px;
        }
        span.small-title-name{
          font-size:12px;
          transform:scale(.8);
          margin-top:-2px;
        }
      }
      .song-group{
        .songsheet-list{
          .songsheet-ul{
            padding:4px;
            .songsheet-li-item{
              height:40px;
              display: flex;
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
</style>