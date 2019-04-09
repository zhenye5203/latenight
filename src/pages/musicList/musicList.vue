<template>
    <div class="music-list">
        <Back ref="back" :title="title"/>
        <!-- :style="{backgroundImage:'url('+this.imgUrl+')'}" -->
        <div class="song-sheet-msg" ref="msg" >
            <div class="song-sheet-mask">
                <div class="song-sheet-introduce">
                    <!-- <img :src="songSheet.coverImgUrl" alt=""> --> 
                </div>
                <div class="song-sheet-"></div>
            </div>
            
        </div>
        <div class="play-all" ref="playall">
            <div class="play-all-msg"></div>
        </div>
        <div class="wrapper music-list-wrapper">
            <Scroll :data="songList" :listen-scroll="listenScroll" :probeType="probeType" @scroll="scroll" :params="params" :flex="isFlex">
                <ul class="song-list-content">
                    <li class="song-item"  v-for="(item,index) in songList" :key="item.id">
                        <div class="song-index">{{index+1}}</div>
                        <div class="song-msg">
                            <div class="song-name">{{item.name}}
                                <span  v-if="item.alia.length>0" >
                                    <span v-for="val in item.alia" :key="val">({{val}})</span>
                                </span>
                            </div>
                            <div class="song-singer">{{item.al.name}}</div>
                        </div>
                        <div class="song-setting">
                            <i class="mus androidgengduo"></i>
                        </div>
                    </li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back';
import API from '@/api/playlist';

import Scroll from '@/components/scroll/scroll';

import {mapGetters} from 'vuex';

/*  向上滑动
    1、判断back的高度，监听scroll的滚动数值
    2、当playAll里头部差back的高度的时候top停止，scroll继续
    
    向下滑动时复原

*/

export default {
    computed:{
        ...mapGetters([
            'songSheet'
        ]),
    },
    data () {
        return {
            songSheetData:{},
            songList:[],
            scrollY:0,
            imgUrl:""
        }
    },
    created(){
        this.listenScroll = true;
        this.probeType = 3;
        this.isFlex = true;
        this.title = "歌单"
        this.params = {
            bounce: {
                top: false,
                bottom: false,
                left: false,
                right: false
            }
        }
        this.getPlayListDetail()
        this.imgUrl = this.songSheet.coverImgUrl
        // this.$refs.msg.style.backgroundImage = `url('${this.imgUrl}')`
    },
    mounted() {
        this.getPlayListDetail()

        //获取元素的值，来进行列表的滚动
        this.backHeight = this.$refs.back.backHeight();//back 组件的高度
        this.msgHeight = this.$refs.msg.offsetHeight;//歌单信息的高度
        this.playAllHeight = this.$refs.playall.offsetHeight;//播放全部的高度
        console.log(this.backHeight,this.msgHeight,this.playAllHeight)
    },
    methods: {
        getPlayListDetail(){
            if(!this.songSheet.id){
                this.$router.push("/playlist")
                return
            }
            let id = this.songSheet.id
            API.PlayListDetail({id}).then(res =>{
                console.log(res)
                this.songList = res.playlist.tracks
                this.songSheetData = res
            })
        },
        listenScroll(){
            console.log()
        },
        scroll(pos){
            this.scrollY = pos.y
        },
        
    },
    watch:{
        scrollY(newY){
            if(- newY > this.msgHeight-this.backHeight){
                this.$refs.playall.style.top = `-${this.msgHeight-this.backHeight}px`
                this.$refs.msg.style.top = `-${this.msgHeight-this.playAllHeight-this.backHeight}px`
            }else{
                this.$refs.playall.style.top = `${newY}px`
                this.$refs.msg.style.top = `${newY}px`
            }
        }
    },
    components: {
        Back,
        Scroll
    }
}
</script>

<style scoped lang='less'>
    .music-list{
        position:fixed;
        background:#FFF;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 100;
        display: flex;
        flex-direction:column;
        
        .song-sheet-msg{
            flex: 0 0 250px;
            width:100%;
            position:relative;
            // filter: blur(5px);   
            padding-top:36px;
            z-index:101;
            background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
            .song-sheet-mask{
                // filter: blur(10px);   
                width: 100%;
                height: 100%;
            }
            img{
                width: 100%;
            }
        }
        .play-all{
            height:30px;
            position:relative;
            z-index:101;
            top:0;
            // background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
            .play-all-msg{
                height:100%;
                background:#FFF;
                border-top-left-radius:15px;
                border-top-right-radius:15px;
            }
        }
        .music-list-wrapper{
            z-index:100;
            width:100%;
            // height:100%;
            flex:1;
            height:0;
            position:relative;
            .song-list-content{
                .song-item{
                    display:flex;
                    height:56px;
                    font-size:12px;
                    padding:8px 0;
                    .song-index{
                        flex:0 0 40px;
                        display: flex;
                        align-items:center;
                        justify-content:center;
                    }
                    .song-msg{
                        flex:1 0 auto;
                        display: flex;
                        flex-direction:column;
                        width:0;
                        .song-name{
                            flex:1;
                            font-size:12px;
                            color:#000;
                            text-overflow:ellipsis;
                            overflow:hidden;
                            white-space:nowrap;
                        }
                        .song-singer{
                            flex:1;
                            font-size:12px;
                            color:#999;
                            transform:scale(.8);
                            margin:0 -12.6%;
                            text-overflow:ellipsis;
                            overflow:hidden;
                            white-space:nowrap;
                        }
                    }
                    .song-setting{
                        flex:0 0 30px;
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        i{
                            transform:scale(.8);
                            color:#999;
                        }
                    }
                }
            }
        }
    }

    // https://www.cnblogs.com/xiaohuochai/p/7511823.html
</style>

