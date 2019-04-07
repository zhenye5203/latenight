<template>
    <div class="songSheet">
        <ul class="songsheet-ul">
            <li class="songsheet-li-item" v-for="(item,index) in data" :key="item.id"  @click="songSheetDetail(item,index)">
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
</template>

<script type="text/ecmascript-6">
import {mapMutations} from 'vuex'

export default {
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    created(){
        console.log(this)
    },
    data () {
        return {

        }
    },
    methods: {
        songSheetDetail(item,index){
            console.log(item,index)
            this.setSongSheet(item)
            this.$router.push({path: `/playlist/${item.id}`})
        },
        ...mapMutations({
            setSongSheet:'SET_SONGSHEET'
        })
    },
    components: {

    }
}
</script>

<style scoped lang='less'>
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
            transform:rotateX(@borderSolideDeg)
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
</style>