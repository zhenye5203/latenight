<template>
    <div class="back" ref="back">
        <i class="mus xiangzuo1" @click="goBack"></i>
        <span>title</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
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
        justify-content: center;
        position:fixed;
        top:0;
        left:0;
        background:rgba(0, 0, 0, .7);
        z-index:101;
        .mus.xiangzuo1{
            position: absolute;
            left:@pagePadding;
            top:8px;
            font-size:20px;
        }
    }
</style>