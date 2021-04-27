<template>
  <div class="secondPage">
<br>
<el-form :model="chek">
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
  <el-select v-model="chek.ceducation" placeholder="选择学历">
   <el-option label="(不选择)" value=""></el-option>
   <el-option label="本科" value="本科"></el-option>
   <el-option label="硕士" value="硕士"></el-option>
   <el-option label="博士" value="博士"></el-option>
  </el-select>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>
  <el-select v-model="chek.cmajor" placeholder="选择专业">
   <el-option label="(不选择)" value=""></el-option>
   <el-option label="软件工程" value="软件工程"></el-option>
   <el-option label="网络工程" value="网络工程"></el-option>
   <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
  </el-select>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><el-form-item>
  <el-select v-model="chek.cexp" placeholder="选择工作经验">
   <el-option label="(不选择)" value=""></el-option>
    <el-option label="不需要" value="不需要"></el-option>
    <el-option label="两年及以上" value="两年及以上"></el-option>
  </el-select>
  </el-form-item>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <el-button type="primary" plain @click="Submit()">主要按钮</el-button>
  </div></el-col>
</el-row>
</el-form>

<el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
       <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          
          <el-form-item label="专业：">
            <span>{{ props.row.cmajor }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="学历：">
            <span>{{ props.row.ceducation }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="工作经验：">
            <span>{{ props.row.cexp }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="职位详情：">
            <span>{{ props.row.cintro }}</span>
          </el-form-item>
          <br/>
            <el-form-item label="截止时间：">
          <span>{{ props.row.ctime }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="公司"
      prop="cname">
    </el-table-column>
    <el-table-column
      label="岗位"
      prop="cwork">
    </el-table-column>
     <el-table-column
      label="地址"
      prop="ccity">
    </el-table-column>
    <el-table-column
      label="薪资"
      prop="cwage">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleSubmit(scope.$index, scope.row)">投递</el-button>
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>


<script>
// import qs from "qs";
import axios from "axios";
  export default {
    name: "secondPage",
    data() {
    return {
  
      chek:{
        cmajor:"",
        ceducation:"",
        cexp:"",
      },

      wid:"",
      id:"",

      rname:'',
      sex: "",
      nation: "",
      nativeplace: "",
      birthday: "",
      education: "",
      major: "",
      english: "",
      politic: "",
      graduation: "",
      phone: "",
      worktarget: "",
      interest: "",
      experience: "",

      company:"",

      tableData:[],
      infoTableData:[],
      originTableData:[]
    };
  },
    methods: {
      Submit(){
       this.tableData = []
       this.tableData = this.handleExp(this.handleEducationr(this.handleMajor(this.originTableData)));
            
      },
      handleExp(arrData){
        let datasss=[]
          if(this.chek.cexp!==""){
            for(let i=0;i < arrData.length;i++){
              if( arrData[i].cexp===this.chek.cexp)
              datasss.push(arrData[i])
            }
          }else{
            datasss = arrData
          }
          return datasss;
      },handleEducationr(arrData){
        let datasss=[]
          if(this.chek.ceducation!==""){
            for(let i=0;i < arrData.length;i++){
              if( arrData[i].ceducation===this.chek.ceducation)
              datasss.push(arrData[i])
            }
          }else{
            datasss = arrData
          }
          return datasss;
      },
      handleMajor(arrData){
        let datasss=[]
          if(this.chek.cmajor!==""){
            for(let i=0;i < arrData.length;i++){
              if( arrData[i].cmajor===this.chek.cmajor)
              datasss.push(arrData[i])
            }
          }else{
            datasss = arrData
          }
          return datasss;
      }
      ,
      handleSubmit(index,row){
          if(this.$store.state.id != -1){
          this.id = this.$store.state.id

          console.log(this.id)
          this.wid = row.wid
          console.log(this.wid)
          this.company = row.cname
          console.log(this.company)

          axios({
          method:'get',
          url:"http://localhost:8888/api/listOneInfo",
          params:{
            id : this.id
          }
        })
          .then(response =>{
          //  console.log(response.data)
           this.infoTableData = response.data
           console.log(this.infoTableData)
           this.doSubWi()
        })
        }
          else
          alert("请先登录");
      },
      doSubWi(){
        console.log(this.id)
          axios({
          method:'get',
          url:"http://localhost:8888/api/addWi",
          params:{
            id:this.id,
            wid:this.wid,
            company:this.company,

            rname:this.infoTableData.rname,
            sex: this.infoTableData.sex,
            nation: this.infoTableData.nation,
            nativeplace: this.infoTableData.nativeplace,
            birthday: this.infoTableData.birthday,
            education: this.infoTableData.education,
            major: this.infoTableData.major,
            english: this.infoTableData.english,
            politic: this.infoTableData.politic,
            graduation: this.infoTableData.graduation,
            phone: this.infoTableData.phone,
            worktarget: this.infoTableData.worktarget,
            interest: this.infoTableData.interest,
            experience: this.infoTableData.experience,
          }
        })
          .then(response =>{
           console.log(response.data)
              if(response.data)
              alert("投递成功")     
              else
              alert("您已投递，不可重复提交")

      })
      },
     
      aa(){
        // console.log(191991)
        axios({
          method:'get',
          url:"http://localhost:8888/api/listPublish",
          //responseType:'stream'

        })
          .then(response =>{
            console.log(response.data)
            this.tableData = response.data
            this.originTableData = response.data

        });
      },
     
  },
 mounted(){
 //  console.log(123)
    this.aa()
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
