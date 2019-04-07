<template>
    <div class="music-list">
        <Back ref="back" />
        <div class="song-sheet-msg">
           <div class="song-sheet-introduce">
               <!-- <img :src="songSheet.coverImgUrl" alt=""> --> 
           </div>
           <div class="song-sheet-"></div>
        </div>
        <div class="wrapper music-list-wrapper">
            <div class="song-list-wrapper">
            <Scroll :data="songList" :listen-scroll="listenScroll" :probeType="probeType" @scroll="scroll">
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
    </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back';
import API from '@/api/playlist';

import Scroll from '@/components/scroll/scroll';

import {mapGetters} from 'vuex';

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
        this.getPlayListDetail()
        this.imgUrl = this.songSheet.coverImgUrl
    },
    mounted() {
        this.getPlayListDetail()
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
        // scrollY(newY){
        //     console.log(newY,this.listY)
        //     if(newY+this.bgHeight>0){
        //         // console.log(this.bgHeight-newY+this.listY)
        //         this.bgLayer.style.height = `${-newY}px`
        //     }
        // }
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
            flex: 0 0 300px;
            width:100%;
            img{
                width: 100%;
            }
        }
        .music-list-wrapper{
            z-index:100;
            flex:0 0 500px;
            width:100%;
            // height:100%;
            .song-list-wrapper{
                width:100%;
                // height:100%;
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
    }
</style>

// 29  缺报头