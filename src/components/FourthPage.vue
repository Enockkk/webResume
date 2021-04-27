<template>
  <div class="forthPage">

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
    name: "forthPage",
    data() {
    return {
      wid:"",
      id:"",
      // props:{
          
      //       cname:"",
      //       cwork:"",
      //       ceducation:"",
      //       cmajor:"",
      //       cwage:"",
      //       cexp:"",
      //       ccity:"",
      //       ctype:"",
      //       ctime:"",
      //       cintro:"",
      //       company:""
      // },
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
      infoTableData:[]
    };
  },
    methods: {
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
              if(response.data==true)
              alert("投递成功")     
              else
              alert("您已投递，不可重复提交")
                   
         
          //  console.log(this.infoTableData)
      })
      },
      // handleEdit(index,row){
      //   // console.log(index)
      //   if(this.$store.state.id != -1){
      //     this.id = this.$store.state.id
      //     // this.row = 
      //     // console.log(this.tableData.length)//tableData[i]????    console.log(this.tableData[i].wid)
      //     // console.log(this.tableData[0].wid)
      //     // console.log(this.tableData)
      //     // for(let i=0;i < this.tableData.length;i++){
      //     //   console.log(this.tableData[1].wid)
      //     // }
      //     // console.log(index)//获取scope
      //     //获得admin id √
      //     //获得publish wid √
      //     //通过id将admin wid更新

      //     // this.props.wid = this.$store.state.wid 
      //     console.log(this.id)
      //     // console.log(this.props.wid)
      //     // console.log(this.tableData.wid)
         
      //     // this.$router.push({ path: "/management"});//?????
      //     this.wid = row.wid
      //     console.log(row.wid)//wid
      //     console.log(this.wid)
      //     let widReq = {
      //       id:this.id,
      //       wid:this.wid
      //     }

      //     axios({
      //     method:'post',
      //     url:"http://localhost:8888/api/rewid",//infomation改写wid
      //     data:qs.stringify(widReq)
      //   }).then(response =>{
      //         console.log(response)
      //         // alert("投递成功")     
      //      })
      //       return true
      //     }
      //     else{
      //       // alert("请先登录")
      //       return false
      //     }
      // },
      aa(){
        axios({
          method:'get',
          url:"http://localhost:8888/api/listPublish",
          //responseType:'stream'

        })
          .then(response =>{
           console.log(response.data)
           this.tableData = response.data
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
