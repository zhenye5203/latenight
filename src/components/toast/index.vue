<template>
    <transition name="toast">
        <p class="toast" v-if="isShow">{{message}}</p>  
    </transition>
</template>

<script type="text/ecmascript-6">
export default {
    props:["data"],
    data () {
        return {
            isShow:false,
            message:""
        }
    },
    methods: {

    },
    components: {

    },
    computed:{
        toastUpdate(){
            return this.data
        }
    },
    watch:{
        // show(newVal,oldVal){
        //     this.isShow = this.data.flag
        //     this.message = this.data.msg
        //     console.log(newVal,oldVal)
        // }
        toastUpdate:{
            handler(newVal,oldVal){
                this.isShow = this.data.flag
                this.message = this.data.msg
            },
            deep:true
        }
    }
}
</script>

<style scoped lang='less'>
    .toast{
        position:fixed;
        display: flex;
        align-items:center;
        justify-content: center;
        bottom:-100px;
        left:50%;
        transform:translateX(-50%);
        padding:6px 10px;
        border-radius:4px;
        color:#FFFFFF;
        background:rgba(0,0,0,.8);
        // animation:Toast 1.5s; 
        z-index:99999;
    }

    .toast-enter-active {
        animation: Toast 2s;
    }
    .toast-leave-active {
        animation: Toast 2s;
    }
    @keyframes Toast{
        0%{
        bottom:30px;
        opacity: 0
        }
        20%{
        bottom:80px;
        opacity: 1
        }
        80%{
        bottom:80px;
        opacity: 1
        }
        100%{
        bottom:30px;
        opacity: 0
        }
    }
</style>