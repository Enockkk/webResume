<template>
  <div class="thirdPage">

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
          @click="handleEdit(scope.$index, scope.row)">投递</el-button>
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>


<script>
import qs from "qs";
import axios from "axios";
  export default {
    name: "thirdPage",
    data() {
    return {
      wid:"",
      id:"",

      cmajor:"",
      tableData:[],
      originTableData:[],
      infoTableData:[],

      rname:"",
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

      cname:"",
    };
  },
    methods: {
      handleEdit(index,row){
        this.cname = this.tableData[index].cname
        console.log(this.cname)
        // console.log("diyibu")
        if(this.$store.state.id != -1){
          this.id = this.$store.state.id
          // console.log(this.id)
          
          
          this.wid = row.wid
          // console.log(row.wid)//wid
          // console.log(this.wid)
          let widReq = {
            id:this.id,
            wid:this.wid
          }

          //this.chek()//点击登录后检查wi表有无wid和id重复

          axios({
          method:'post',
          url:"http://localhost:8888/api/rewid",
          data:qs.stringify(widReq)
        }).then(response =>{
                  // console.log("dierbu")

              console.log(response)
              this.GetlistOneInfo()
           })
        }
          else
          alert("请先登录")
      },
      GetlistOneInfo(){
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
          //  console.log("disanbu")

           console.log(this.infoTableData)
           this.doSubWi()
        });
      },
      doSubWi(){
        // console.log(this.id)
        // console.log(this.wid)
        console.log(this.cname)
          axios({
          method:'get',
          url:"http://localhost:8888/api/addWi",
          params:{
            id:this.id,
            wid:this.wid,
            company:this.cname,

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
      // chek(){
      //   axios({
      //     method:'get',
      //     url:"http://localhost:8888/api/listWi"
      //   }).then(response =>{
      //     // console.log(response)
      //     for(let i=0;i < this.originTableData.length;i++){
      //     if(this.originTableData[i].cmajor===this.cmajor)
      //     this.tableData.push(this.originTableData[i])}
      //   })
      // },
      aa(){
        this.cmajor = this.$store.state.major
        //shang 无数据
        // console.log(this.$store.state.major)
        // console.log(this.cmajor)
        axios({
          method:'get',
          url:"http://localhost:8888/api/listPublish",

        })
          .then(response =>{
           console.log(response.data)
           this.tableData = []
           this.infoTableData = []
           this.originTableData = response.data

          //  console.log(this.cmajor)
          //  console.log(this.major)
        for(let i=0;i < this.originTableData.length;i++){
        if(this.originTableData[i].cmajor===this.cmajor){
        this.tableData.push(this.originTableData[i])
        }
        }
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
