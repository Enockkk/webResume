<template>
  <div class="fifthPage">

<el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          
          <el-form-item label="工资范围：">
            <span>{{ props.row.salary }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="岗位职责：">
            <span>{{ props.row.descString }}</span>
          </el-form-item>
          <br/>
            <el-form-item label="发布时间：">
          <span>{{ props.row.pushDate }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="公司名称"
      prop="companyName">
    </el-table-column>
    <el-table-column
      label="职能类别"
      prop="jobName">
    </el-table-column>
    <el-table-column
      label="岗位信息"
      prop="industry">
    </el-table-column>
  </el-table>

  </div>
</template>


<script>
import axios from "axios";
  export default {
    name: "fifthPage",
    data() {
    return {
     
      tableData: [
          
      ]  
    };
  },
    methods: {
      isContains(str, substr) {
    return str.indexOf(substr) >= 0;
    },
      alterString(){
      //  console.log(12312)
        if(this.tableData.length > 0){
          for(let i=0;i < this.tableData.length;i++){
           // console.log(this.tableData[i].descString)
            if(this.isContains(this.tableData[i].descString,'岗位职责：') > 0)
            this.tableData[i].descString  = this.tableData[i].descString.split('岗位职责：')[1]
            if(this.isContains(this.tableData[i].descString,'职能类别') > 0)
             this.tableData[i].descString  = this.tableData[i].descString.split('职能类别')[0]
            if(this.isContains(this.tableData[i].descString,'职能类别：') > 0)
              this.tableData[i].descString  = this.tableData[i].descString.split('职能类别：')[0]
           // console.log(this.tableData[i].descString)
          }
        }
    },
    
      aa(){
        axios({
          method:'get',
          url:"http://localhost:8888/api/listJobs",
          //responseType:'stream'

        })
          .then(response =>{
           console.log(response.data)
           this.tableData = response.data
            this.alterString()
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
