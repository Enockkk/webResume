import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    id: -1,
    wid:-1,
    major:"",
    company:"",
    user:{
        username:'',
        password:'',
        email:''
    },
    form:{
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

    }
  },
  mutations: {
    increment (state,id) {
        // console.log(state.userid);
        state.id = id
        // console.log(state.userid);
    },
    getMajor (state,major){
        state.major = major
    },
    getCompany (state,company){
        state.company = company
    },
    setuser (state,user){
        console.log(user);
        this.state.user.username = user.name;
        this.state.user.password = user.password;
        this.state.user.email = user.email;
        console.log(state.user);

    },
    // getform (state,form){
    //   this.state.form.rname = form.rname;
    //   this.state.form.sex = form.sex;

    // }

  }
})
