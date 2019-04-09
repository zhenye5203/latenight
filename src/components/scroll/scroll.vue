<template>
    <div ref="wrapper" :class="flex?'scroll-wrapper-height':'scroll-wrapper'">
        <slot></slot>    
    </div> 
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{//better-scroll参数
            type:Number,
            default:1
        },
        listenScroll:{//是否监听
            type:Boolean,
            default:true
        },
        data:{//列表数据传入
            type:Array,
            default(){
                return []
            }
        },
        click:{//better-scroll中是否禁用click时间
            type:Boolean,
            default:true
        },
        flex:{
            type:Boolean,//是否为flex 固定高度
            default:false
        },
        params:{
            type:Object,//参数
            default:{}
        }
    },
    mounted() {
        console.log(this.flex)
        setTimeout(()=>{
            this._inintScroll()
        },20)
    },
    data () {
        return {
            
        }
    },
    methods: {
        _inintScroll(){
            if(!this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:this.probeType,
                click:this.click,
                ...this.params
            })
            if(this.listenScroll){
                this.scroll.on('scroll',(pos)=>{
                    this.$emit('scroll',pos)
                })
            }
        },
        refresh(){
            //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
            this.scroll&&this.scroll.refresh()
        },
        scrollTo(){

            this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments);
        },
        scrollToElement(){
            this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments);
        }
    },
    watch:{
        data(){
            setTimeout(() => {
                this.refresh()
            }, 20);
        }
    },
}
</script>

<style scoped lang='less'>
    .scroll-wrapper{
        width: 100%;
        // height:100%;
    }
    .scroll-wrapper-height{
        width: 100%;
        height:100%;
    }
</style>