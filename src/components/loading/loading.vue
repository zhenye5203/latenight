<template>
   <div class="loading-mask modal-mask" v-show="isShow">
        <div class="loading-content content">
            <i class="mus jiazai"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:["show"],
    data () {
        return {
            isShow:this.show
        }
    },
    created() {
        // console.log(this)
    },
    methods: {

    },
    components: {

    },
    watch:{
        show(newVal,oldVal){
            this.isShow = this.show
        }
    }
}
</script>

<style scoped lang='less'>
    @themeColor:#C20C0C;
   .modal-mask{
        position: fixed;
        z-index:10000;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display: flex;
        justify-content: center;
        align-items: center;
        // background:rgba(0,0,0,.1);
        .loading-content i{
            font-size:32px;
            animation:loading 1s infinite;
            color:@themeColor
        }
        @keyframes loading {
            0%{
                transform: rotateZ(0deg)
            }
            100%{
                transform: rotateZ(360deg)
            }
        }
    }
</style>