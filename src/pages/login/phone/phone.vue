<template>
    <div class="phone login-inp">
        <div class="loading-mask modal-mask">
            <div class="loading-content content">
                <i class="mus jiazai"></i>
            </div>
        </div>
        <div class="phone-header login-inp-header bg">
            <i class="mus xiangxia3 back" v-on:click="back"></i>
            <span>手机登陆</span>
        </div>
        <div class="inp-box">
            <div class="inp-item phone-inp">
                <div class="inp-icon">
                    <i class="mus icon-phone"></i>
                    <span>+86</span>
                </div>
                <input type="text" name='phone' class="inp" @input="phone = $event.target.value" :value="phone" placeholder="请输入手机号">
                <i class="mus guanbi1" v-show="phone!=''" @click="clearPhoneVal"></i>
            </div>
            <div class="inp-item">
                <div class="inp-icon">
                    <i class="mus icon-pw"></i>
                </div>
                <input type="password" nam='password' class="inp" @input="password = $event.target.value"  placeholder="请输入密码">
            </div>
            <div class="inp-btn bg" @click="login">{{loginBtnText}}</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import API from '@/api/login/phone'
export default {
  data(){
    return {
        phone:"",//手机号
        password:"",//密码
        loginBtnText:"登录",
        showLoading:true
    }
  },
  beforeCreate() {
      console.log(API,this)
  },
  methods: {
      // 回退
      back(){
          this.$router.push({ path: '/login' })
      },
      login(){
            console.log(this.phone,this.password)
            this.loginBtnText = "登录中..."

            setTimeout(() => {
                this.loginBtnText = "登录"
            }, 1000);
        //   API.phone({phone:this.phone,password:this.password}).then((res)=>{
        //       console.log(res)
        //   }).catch((err)=>{
        //       console.log(err)
        //   })
      },
      clearPhoneVal(){
        //   清除phone输入框的值
        this.phone = ''
      }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
    @themeColor:#C20C0C;
    .login-inp{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background:#FFFFFF;
        .login-inp-header{
            color:#FFFFFF;
            height:36px;
            display: flex;
            align-items: center;
            padding:12px;
            .back{
                transform: rotateZ(90deg);
            }
            i{
                color:#FFFFFF;
                font-size:20px;
                margin-right:4px;
            }
        }
        .inp-box{
            padding:0 12px;
            margin-top:20px;
            .inp-item{
                height:30px;
                padding:6px 0;
                display: flex;
                margin-bottom:12px;
                border-bottom:1px solid rgba(0,0,0,.1);
                align-items:center;
                .inp-icon{
                    display: flex;
                    align-items:center;
                    .icon-pw.mus{
                        font-size:14px;
                    }
                }
                .inp{
                    padding-left:6px;
                    caret-color:@themeColor;
                    ::-webkit-input-placeholder{
                        color:#CCC
                    }
                }
            }
            .phone-inp{
                position: relative;
                .mus.guanbi1{
                    position:absolute;
                    top:6px;
                    right:6px;
                }
            }
            .inp-btn{
                height:30px;
                text-align:center;
                line-height:30px;
                color:#FFFFFF;
                border-radius:15px;
            }
        }
    }

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
        
        .loading-content i{
            font-size:32px;
        }
    }

</style>