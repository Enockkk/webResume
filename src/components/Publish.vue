<template>
<div class="page">
  <el-container>
  <el-header>发布岗位信息</el-header>
  <el-main>

    <el-form :model="form" label-width="100px">
              
      <el-form-item label="职位名称">
        <el-input  class="name-input" v-model="form.cwork"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-select v-model="form.ceducation" placeholder="请选择学历">
          <el-option label="本科" value="本科"></el-option>
          <el-option label="硕士" value="硕士"></el-option>
          <el-option label="博士" value="博士"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item label="专业">
        <el-select v-model="form.cmajor" placeholder="请选择专业">
          <el-option label="软件工程" value="软件工程"></el-option>
          <el-option label="网络工程" value="网络工程"></el-option>
          <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="薪资">
        <el-input class="name-input" v-model="form.cwage"></el-input>
      </el-form-item>
        <el-form-item label="工作经验">
                <el-select v-model="form.cexp" placeholder="选择工作经验">
                <el-option label="不需要" value="不需要"></el-option>
                <el-option label="两年及以上" value="两年及以上"></el-option>
                </el-select>
            </el-form-item>
      <el-form-item label="工作地点">
        <el-select v-model="form.ccity" placeholder="选择工作地点">
          <el-option label="北京市" value="北京市"></el-option>
          <el-option label="重庆市" value="重庆市"></el-option>
          <el-option label="河南省" value="河南省"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="截止时间">
    
      <el-date-picker class="name-input" type="date" placeholder="选择日期" 
      v-model="form.ctime" style="width: 50%;"></el-date-picker>

        </el-form-item>
       <el-form-item label="工作性质">
        <el-select v-model="form.ctype" placeholder="请选择工作性质">
          <el-option label="校招" value="校招"></el-option>
          <el-option label="社招" value="社招"></el-option>
          <el-option label="实习" value="实习"></el-option>
          <el-option label="兼职" value="兼职"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位详情">
        <el-input class="name-input" type="textarea" v-model="form.cintro"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">完 成</el-button>
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
                   wid:"",
                   cname:"",
                   cwork:"",
                   ceducation:"",
                   cmajor:"",
                   cwage:"",
                   cexp:"",
                   ccity:"",
                   ctype:"",
                   ctime:"",
                   cintro:"",
                  //  company:""
                }
            }
        },
        methods:{
          getKey(){
           
          },
            onSubmit(){     
                this.form.cname = this.$store.state.company
                console.log(this.form.cname)
                console.log(this.form) 
        axios({
          method:'post',
          url:"http://localhost:8888/api/addPublish",
          data:qs.stringify(this.form)
          
        }).then(response =>{
        //   console.log(this.$route.query.key)
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
f