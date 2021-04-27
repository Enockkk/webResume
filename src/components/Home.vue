<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">分类</el-menu-item>
      <el-menu-item index="3">推荐</el-menu-item>
      <el-menu-item index="4">所有岗位</el-menu-item>
      <el-menu-item index="5">数据库表</el-menu-item>
      <el-menu-item index="6" disabled>消息中心</el-menu-item>
      <el-submenu index="7">
        <template slot="title">求职者功能</template>
        <el-menu-item index="7-1" @click="doInfomation()"
          >填写简历信息</el-menu-item
        >
        <!--judgelogin()-->
        <el-menu-item index="7-2" @click="weishixian()" disabled
          >已投岗位界面</el-menu-item
        >
        <el-menu-item index="7-3" disabled>上传附件</el-menu-item> 
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">招聘者功能</template>
        <el-menu-item index="8-1" @click="doHrInfo()"
          >验证招聘单位</el-menu-item
        >
        <el-menu-item index="8-2" @click="doPublish()"
          >发布岗位</el-menu-item
        >
        <el-menu-item index="8-3" @click="doManagement()"
          >查看已收简历</el-menu-item
        >
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">登录注册</template>
        <!-- <el-menu-item index="8-1">登录</el-menu-item> -->
        <el-menu-item index="9-1" @click="dialogVisible = true"
          >用户登录</el-menu-item
        >
        <el-menu-item index="9-2" @click="doRegister()">注册</el-menu-item>
        <el-menu-item index="9-3" @click="doLogout()">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
    <el-dialog class="home" title="登录" :visible.sync="dialogVisible">
      <el-form :model="loginForm">
        <el-form-item prop="name" label="用户名" :label-width="'80px'">
          <el-input
            v-model="loginForm.name"
            placeholder="请输入用户名"
            prefix-icon
          ></el-input>
        </el-form-item>
        <el-form-item
          id="password"
          prop="password"
          label="密码"
          :label-width="'80px'"
        >
          <el-input
            v-model="loginForm.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- <router-link to="/">找回密码</router-link> -->
        <!-- <router-link to="/register">注册账号</router-link> -->
        <el-form-item>
          <el-button type="primary" @click="doLogin()">登 录</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
      <!-- <span slot="footer" class="dialog-footer"> -->
      <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
      <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      <!-- </span> -->
    </el-dialog>

    <router-view />
  </div>
</template>


<script>
import axios from "axios";
import qs from "qs";
  export default {
    name: "login",
    data() {
    return {
      dialogVisible: false,
      activeIndex: '1',
      id:"",
      major:"",
      company:"",

      loginForm: { 
        name: "",
        password: "",

      },
      dialogInfo: false,
      // form: {
      //   name: "",
      //   password: "",
      //   email: "",
      //   id: "",
      //   rname: "",
      //   school: "",
      //   sex: "",
      //   political: "",
      //   address: "",
      //   exp: "",
      // }
    };
  },
    methods: {
      handleCli(){
        console.log("1231231")
        this.dialogVisible = true
      },
      handleSelect(key, keyPath) {
        switch(key){
            case '1':
            this.$router.push({
              path:'/'
            })
            break;
            case '2':
            this.$router.push({
              path:'/SecondPage'
            })
            break;
            case '3':
            this.$router.push({
              path:'/ThirdPage'
            })
            break;
            case '4':
            this.$router.push({
              path:'/FourthPage'
            })
            break;
            case '5':
            this.$router.push({
              path:'/FifthPage'
            })
            break;
        }
         console.log(key, keyPath);
      },
      doRegister(){
        this.$router.push({ path: "/register"});
      },
      doPublish(){
        if(this.judgelogin())
        this.$router.push({ path: "/publish"});
      },
      judgelogin(){
        if(this.$store.state.id != -1){
          this.id = this.$store.state.id
            return true
          }
          else{
            alert("请先登录")
            return false
          }
      },
      // onSubmit(){        
      //   axios({
      //     method:'post',
      //     url:"http://localhost:8888/api/submitUser",
      //     data:qs.stringify(this.form)
      //   }).then(response =>{
      //       if (response.data === false) {
      //         alert("完善失败")
      //       } else {
      //         alert("完善成功")
      //         this.$router.push({ path: "/" });
      //         this.dialogInfo = false;

      //       }})
      // },
      doInfomation(){
        if(this.judgelogin()){
          console.log(this.$store.state.id)
       // console.log("1234567")
        this.$router.push({ path: "/infomation", query: {key: this.$store.state.id}});
        }
        // this.judgelogin()
        
      },
      doLogout(){
        this.$store.commit('increment',-1)
        // this.$store.commit('getMajor','')
      },
      doManagement(){
          //4.22
          if(this.judgelogin()){
          console.log(this.$store.state.id)
          this.$router.push({ path: "/management", query: {key: this.$store.state.id}});
        }
      },
      doHrInfo(){
        // this.$router.push({ path: "/HrInfo"});
        if(this.judgelogin()){
          console.log(this.$store.state.id)
       // console.log("1234567")
        this.$router.push({ path: "/hrInfo", query: {key: this.$store.state.id}});
        }
        // this.judgelogin()
      
      },
      // doManagement(){
      //   if(this.judgelogin()){
      //   this.$router.push({ path: "/management"});
      //   }
      // },
      doLogin() {
      if (!this.loginForm.name) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.loginForm.password) {
        this.$message.error("请输入密码！");
        return;
      } else {

          //const that = this
        axios({
          method:'post',
          url:"http://localhost:8888/api/checkpwd",
          //responseType:'stream'
          data:qs.stringify(this.loginForm)
        })
          .then(response =>{
            console.log(response);
            if (!response.data) {
              alert("您输入的用户名或密码错误！");
              // alert(response.data.msg);
            } else {
              // console.log(response.data)
              alert("登录成功")
              this.$router.push({ path: "/" });
              this.dialogVisible = false;
              console.log(response.data.id)
              // console.log(this.id)
              this.$store.commit('increment',response.data.id)

              this.id = response.data.id

              // console.log("id是否传入"+this.id)
              this.getInfo()
              this.getInfoCom()

              // this.major = this.$store.state.major;
              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              // this.$store.commit('getMajor',response.data.major)
              // this.$store.commit('setuser',response.data)
              // console.log(this.loginForm.userid)
              // console.log(response.data.major)
              }
              });
              

        // axios.post({
        //   url: "http://localhost:8888/api/checkpwd",
        //   data: qs.stringify(this.loginForm)
        //   })
        //   .then(res => {
        //     // console.log(res.data);
        //     if (res.data === false) {
        //       alert("您输入的用户名或密码错误！");
        //     } else {
        //       this.$router.push({ path: "/home" });
        //     }
        //   });
        // }
      }
    },
    getInfo(){
        axios({
          method:'get',
          url:"http://localhost:8888/api/getMajor",
          params:{
            id: this.id
          }
        })
          .then(response =>{
          // console.log(response.data)
          this.$store.commit('getMajor',response.data)
          console.log(this.$store.state.major)
          //this.tableData = response.data
        });
    },
    getInfoCom(){
        axios({
          method:'get',
          url:"http://localhost:8888/api/getCompany",
          params:{
            id:this.id
          }
        })
          .then(response =>{
          // console.log(response.data)
          this.$store.commit('getCompany',response.data)
          console.log(this.$store.state.company)
          //this.tableData = response.data
        });
              }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width:1000px;
  margin: 0 auto;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
