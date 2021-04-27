<template>
  <div class="management">
<!-- <el-button type="warning" @click="listWid()">定向筛选</el-button> -->

<el-button type="warning" @click="findByCom()">company</el-button>

<el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          
          <el-form-item label="性别：">
            <span>{{ props.row.sex }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="民族：">
            <span>{{ props.row.nation }}</span>npm
          </el-form-item>
          <br/>
            <el-form-item label="生源地：">
          <span>{{ props.row.nativeplace }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="出生日期：">
            <span>{{ props.row.birthday }}</span>
          </el-form-item><br/>
          <el-form-item label="英语等级：">
            <span>{{ props.row.english }}</span>
          </el-form-item><br/>
          <el-form-item label="政治面貌：">
            <span>{{ props.row.politic }}</span>
          </el-form-item><br/>
          <el-form-item label="手机号码：">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
           <br/>
          <el-form-item label="兴趣爱好：">
            <span>{{ props.row.interest }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="期望职位：">
            <span>{{ props.row.worktarget }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="工作经历：">
            <span>{{ props.row.experience }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column 
        label="姓名" prop="rname">
    </el-table-column>
    
    <el-table-column 
        label="毕业院校" prop="graduation">
    </el-table-column>
    <el-table-column
        label="学历" prop="education">
    </el-table-column>
    <el-table-column
      label="专业" prop="major">
    </el-table-column>
     <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>


<script>
// import qs from "qs";
import axios from "axios";
// import qs from 'qs'
  export default {
    name: "management",
    data() {
    return {
      id:"",
      wid:"",
      company:"",
      tableData: [
       ],
      originTableData:[
      ],
      alertTableData:[]
    };
  },
    methods: {
      getKey(){

      },

      aa(){
        if(this.$store.state.id != -1){
          this.id = this.$store.state.id
          this.company = this.$store.state.company
          }

        axios({
          method:'get',
          url:"http://localhost:8888/api/listWi",
          //responseType:'stream'

        })
          .then(response =>{
           console.log(response.data)
          //  this.id = response.data.id
           this.tableData = response.data
           this.originTableData = response.data

        //    console.log(this.tableData[1].wid)//???????????????
        //    if(this.tableData.length > 0){
        //     for(let i=0;i < this.tableData.length;i++){
        //       if()
        //         this.wid = this.tableData[i].wid
        //         this.getWid();
        //     }
        // }
           //分类
        });
      },

      listWid(){//无用
        
        for(let i=0;i < this.originTableData.length;i++){
          if(this.originTableData[i].wid===6)
          this.tableData.push(this.originTableData[i])
        }
      },

        // console.log(this.wid)
        // console.log(this.form.wid)

        // let widReq = {
        //   wid:this.wid
        // }

        // axios({
        // method:'post',
        // url:"http://localhost:8888/api/listWid",
        // data:qs.stringify(widReq)
        // })
        //   .then(response =>{
        //    this.tableData = response.data
        //    console.log(response.data)
        //    this.tableData = this.originTableData
        // });
      
      findByCom(){

          this.tableData = []
          console.log(this.company)

          for(let i=0;i < this.originTableData.length;i++){
            // console.log(this.originTableData[i].company)//测试
            if(this.originTableData[i].company===this.company)
              this.tableData.push(this.originTableData[i])
            }
      },


      handleDelete(index,row){

        // console.log(index)
        // console.log(row)
        console.log(row.id)
      let url = ''
    //    http://localhost:8888/api/deleteResume?id=1
      url = 'http://localhost:8888/api/deleteResume?id='+row.id
        axios({
            method:'get',
            url:url
        }).then(response =>{
           console.log(response.data)
           this.aa()
        });
    },

  },
 mounted(){
  // console.log(123)
    this.aa()
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
