<template>
  <div class="home">

<el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          
          <el-form-item label="工资范围：">
            <span>{{ props.row.wages }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="学历要求：">
            <span>{{ props.row.qualifications }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="工作经验：">
            <span>{{ props.row.exp }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="岗位描述：">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <br/>
          <el-form-item label="公司地址：">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <br/>
            <el-form-item label="截止时间：">
          <span>{{ props.row.time }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="公司"
      prop="Cname">
    </el-table-column>
    <el-table-column
      label="岗位"
      prop="Jname">
    </el-table-column>
    <el-table-column
      label="专业"
      prop="category">
    </el-table-column>
  </el-table>

  </div>
</template>


<script>

  export default {
    name: "homePage",
    data() {
    return {
     
      tableData: [{
          Cname: '网易有道信息技术（北京）有限公司',
          Jname: 'Java开发工程师',
          category: '计算机类，电子信息类，信息工程类，网络工程，通信工程',
          desc: '',
          exp: '不要求经验',
          wages: '',
          address: '北京',
          qualifications: '大学本科',
          time: '2021-06-30'
        }, {
          Cname: '洛阳纵横电子科技有限公司',
          Jname: '初级FPGA应用工程师',
          category: '电子/半导体/集成电路',
          desc: '本科及以上学历，熟悉FPGA应用，掌握硬件描述语言编程，能够使用EDA软件进行FPGA相关程序设计、仿真、调试，能应用MATLAB仿真软件，掌握通信信号处理基本算法。吃苦耐劳，具有良好的沟通协作能力，有较好的职业素养。',
          exp: '不要求经验',
          wages: '面议',
          address: '洛阳',
          qualifications: '硕士',
          time: '2021-04-30'
        }]  
    };
  },
    methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
