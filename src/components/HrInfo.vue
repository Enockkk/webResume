<template>
<div class="page">
  <el-container>
  <el-header>填写招聘信息</el-header>
  <el-main>

    <el-form :model="form" label-width="100px">
              
      <el-form-item label="姓名">
        <el-input class="name-input" v-model="form.rname"></el-input>
      </el-form-item>
    
      <el-form-item label="公司名称">
        <el-input class="name-input" v-model="form.company"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSub()">完 成</el-button>
        <el-button @click="dialogInfo = false">取 消</el-button>
      </el-form-item>
    </el-form>
  

  </el-main>
</el-container>
</div>
</template>

<script>
import axios from "axios"
import qs from "qs"
    export default{
        data(){
            return{

                form: {
                    name: "",
                    password: "",
                    email: "",
                    id: "",

                    rname: "",
                    company: "",
                }
            }
        },
        methods:{
          getKey(){
           
          },
            onSub(){      
            this.form.id = this.$route.query.key

            this.$store.state.cname = this.form.company
                console.log(this.form)
        axios({
          method:'post',
          url:"http://localhost:8888/api/addHrInfo",
          data:qs.stringify(this.form),
          
        }).then(response =>{
            if (response.data === false) {
              alert("完善失败")
            } else {
              alert("完善成功")
              this.$router.push({ path: "/" });
              this.dialogInfo = false;

            }})
      },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  width:600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name-input {
  width: 221px;
}

</style>
