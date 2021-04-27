<template>
  <div class="login">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" status-icon label-width="80px">
          <h3>注册</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="admin.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="admin.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input
              v-model="admin.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon @click="doRegister()"
              >完成</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      admin: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    // console.log($);
    // console.log("1111");
  },
  methods: {
    doRegister() {
      if (!this.admin.name) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.admin.email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.admin.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.admin.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!this.admin.password) {
          this.$message.error("请输入密码！");
          return;
        } else {
          //console.log(this.user);
          // this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试
          axios({
            method: "post",
            url: "http://localhost:8888/api/addAdmin",
            data: qs.stringify(this.admin),
          }).then((res) => {
            //console.log("输出response.data", res.data);
            //console.log("输出response.data.status", res.data.status);
            if (res.data === true) {
              this.$router.push({ path: "/" });
            } else {
              alert("您输入的用户名已存在！");
            }
          });
        }
      }
    },
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 670px;
  background: url() no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url() no-repeat;
  background-size: cover;
  width: 400px;
  height: 2000px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 20px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>