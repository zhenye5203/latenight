<template>
   <div class="login">
       <div class="logo">
           logo
       </div>
       <div class="login-navigate">
           <div class="login-box">
               <div class="phone-login-btn login-btn" @click='goToPhone'>手机号登陆</div>
               <div class="register-btn login-btn">注册</div>
           </div>
       </div>
       <router-view></router-view>
   </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
        
    }
  },
  methods: {
      goToPhone(){
        //   前往手机号登陆
        this.$router.push({path:"/login/phone"})
      }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
   .login{
       position:fixed;
       top:0;
       bottom:0;
       right:0;
       left:0;
       display: flex;
       flex-direction: column;
       .logo{
            flex:0 0 36%;
            width:100%;
            display: flex;
            justify-content: center;
            align-items:center;
            font-size:20px;
            background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
       }
       .login-navigate{
           flex:1 0 auto;
           width:100%;
           padding:36px;
           .login-box{
               width:100%;
               .login-btn{
                   width:100%;
                   height:36px;
                   border-radius:18px;
                   border:1px solid #C20C0C;
                   text-align:center;
                   line-height:36px;
                   color:#C20C0C;
                   margin:12px 0;
               }
           }
       }
   }
   /* .logo{
       flex:0 0 40%;
       display: flex;
       justify-content: center;
       align-items:center;
       width:100%;
   } */
</style>