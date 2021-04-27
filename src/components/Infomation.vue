<template>
  <div class="page">
    <el-container>
      <el-header>填写简历信息</el-header>
      <el-main>
        <el-form :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input class="name-input" v-model="form.rname"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" value="男"></el-radio>
              <el-radio label="女" value="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族">
            <el-select v-model="form.nation" placeholder="选择民族">
              <el-option label="汉族" value="汉族"></el-option>
              <el-option label="满族" value="满族"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="户口所在地">
            <el-select v-model="form.nativeplace" placeholder="选择户口所在地">
              <el-option label="上海市" value="上海市"></el-option>
              <el-option label="北京市" value="北京市"></el-option>
              <el-option label="重庆市" value="重庆市"></el-option>
              <el-option label="河南省" value="河南省"></el-option>
              <el-option label="陕西省" value="陕西省"></el-option>
              <el-option label="江苏省" value="江苏省"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="生日">
            
              <el-date-picker
                type="date" class="name-input"
                placeholder="选择日期"
                v-model="form.birthday"
                style="width: 50%"
              ></el-date-picker>
           
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="form.education" placeholder="请选择学历">
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select v-model="form.politic" placeholder="请选择政治面貌">
              <el-option label="群众" value="群众"></el-option>
              <el-option label="共青团员" value="共青团员"></el-option>
              <el-option label="党员" value="党员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业">
            <el-select v-model="form.major" placeholder="请选择专业">
              <el-option label="软件工程" value="软件工程"></el-option>
              <el-option label="网络工程" value="网络工程"></el-option>
              <el-option label="人工智能" value="人工智能"></el-option>
              <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="毕业院校">
            <el-select v-model="form.graduation" placeholder="请选择毕业院校">
              <el-option label="北京信息科技大学" value="北京信息科技大学"></el-option>
              <el-option label="清华大学" value="清华大学"></el-option>
              <el-option label="北京大学" value="北京大学"></el-option>
              <el-option label="西安石油大学" value="西安石油大学"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="英语水平">
            <el-select v-model="form.english" placeholder="请选择英语水平">
              <el-option label="无" value="无"></el-option>
              <el-option label="CET4" value="CET4"></el-option>
              <el-option label="CET6" value="CET6"></el-option>
              <el-option label="专业四级" value="专业四级"></el-option>
              <el-option label="专业八级" value="专业八级"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input class="name-input" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="目标岗位">
            <el-select v-model="form.worktarget" placeholder="请选择目标岗位">
              <el-option label="算法工程师" value="算法工程师"></el-option>
              <el-option label="测试工程师" value="测试工程师"></el-option>
              <el-option label="架构师" value="架构师"></el-option>
              <el-option label="算法工程师" value="算法工程师"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="兴趣爱好">
            <el-input
              type="textarea"
              class="name-input"
              v-model="form.interest"
            ></el-input>
          </el-form-item>
          <el-form-item label="工作经历">
            <el-input
              type="textarea"
              class="name-input"
              v-model="form.experience"
            ></el-input>
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
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      form: {
        id: "",

        wid: "-1",

        rname: "",
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
      },
    };
  },
  methods: {
    getKey() {},
    onSubmit() {
      this.form.id = this.$route.query.key;

      console.log(this.form.id);
      console.log(this.$route.query.key);
      console.log(this.form);
      axios({
        method: "post",
        url: "http://localhost:8888/api/addResume",
        data: qs.stringify(this.form),
      }).then((response) => {
        //   console.log(this.$route.query.key)
        if (response.data === false) {
          alert("完善失败");
        } else {
          alert("完善成功");
          console.log("major:" + this.form.major);
          this.$router.push({ path: "/" });
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

          // console.log(this.$store.state.major)
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name-input {
  width: 221px;
}

.dispaly-ul {
  list-style: none;
  width: 100%;
}

.dispaly-ul li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
