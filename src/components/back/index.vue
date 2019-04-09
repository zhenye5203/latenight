<template>
    <div class="back" ref="back">
        <i class="mus xiangzuo1" @click="goBack"></i>
        <span class="back-title">{{title}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        title:{
            type:String,
            default:""
        }
    },
    data () {
        return {

        }
    },
    methods: {
        // 返回上一层
        goBack(){
            this.$router.go(-1)
        },
        backHeight(){
            let height = this.$refs.back.offsetHeight
            return height
        }
    },
    components: {

    }
}
</script>

<style scoped lang='less'>
    .back{
        width:100%;
        height:36px;
        display: flex;
        align-items:center;
        padding:0 @pagePadding;
        // justify-content: center;
        position:fixed;
        top:0;
        left:0;
        // background:rgba(0, 0, 0, .7);
        // -webkit-transform: translateZ(0);
        z-index:1001;
        color:#FFF;
        font-weight:400;
        .mus.xiangzuo1{
            position: absolute;
            left:@pagePadding;
            // top:8px;
            font-size:20px;
        }
        .back-title{
            padding-left:@pagePadding+20px;
            font-size:14px;
        }
    }
</style>