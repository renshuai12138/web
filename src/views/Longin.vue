<template>
    <div class="box">
         <div id="login_box">
            <h2>LOGIN</h2>
            <div class="input_box">
                <el-input type="text" v-model="account" placeholder="请输入账号" />
            </div>
            <div class="input_box">
                <el-input type="password" v-model="password" placeholder="请输入密码" />
            </div>
            <el-button type="primary" @click="to">登录</el-button>
        </div>
        <!-- <div class="longin">
            登录页面
            <el-input
                class="box"
                v-model="account"
                placeholder="用户名"
            />
            <el-input
                class="box"
                v-model="password"
                type="password"
                placeholder="密码"
            />
            <el-button type="primary" @click="to">登录</el-button>
        </div> -->
        
    </div>
</template>

<script>
// import {LonginApi} from '../api/common'
export default {
    data() {
        return {
            account:'',
            password:'',
        }
    },
    methods: {
        to(){
          // LonginApi(this.account,this.password).then((res) => {
          //   console.log(res)
          //   if(res.ret == 0) {
          //       sessionStorage.setItem('token',res.token);
          //       sessionStorage.setItem('permission',res.permission);
          //       this.$router.push('/home')
          //   }else if (res.ret == 3){
          //       this.$alert('账号不存在',  {
          //           confirmButtonText: '确定',
          //       });
          //   }else if (res.ret == 4){
          //       this.$alert('密码错误',  {
          //           confirmButtonText: '确定',
          //       });
          //   }
          // })
          sessionStorage.setItem('token','fdfjkdfjksdfdkf');
          this.$router.push('/home')
        } 
    }
}
</script>

<style scoped>
    .box {
        width: 100%;
    }
    .input_box {
        margin: 20px;
    }
    #login_box {
      width: 60%;
      height: 400px;
      background-color: #00000060;
      margin:0 auto;
      margin-top: 10%;
      text-align: center;
      border-radius: 10px;
      padding: 50px 50px;
    }

    h2 {
      color: #ffffff90;
      margin-top: 5%;
    }

    #input-box {
      margin-top: 5%;
    }

    span {
      color: #fff;
    }

    input {
      border: 0;
      width: 60%;
      font-size: 15px;
      color: #fff;
      background: transparent;
      border-bottom: 2px solid #fff;
      padding: 5px 10px;
      outline: none;
      margin-top: 10px;
    }

    button {
      margin-top: 50px;
      width: 60%;
      height: 30px;
      border-radius: 10px;
      border: 0;
      color: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
      background-image: linear-gradient(to right, #30cfd0, #330867);
    }

    #sign_up {
      margin-top: 45%;
      margin-left: 60%;
    }

    a {
      color: #b94648;
    }
</style>