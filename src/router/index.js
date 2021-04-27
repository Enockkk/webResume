// import Vue from "vue";
// import VueRouter from "vue-router";
//  import Register from "@/components/Register";
// import Login from "@/components/Login";
// import Home from "@/components/Home";

// Vue.use(VueRouter);

// const routes = new VueRouter({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       name: "Login",
//       component: Login
//     },
//     {
//       path: "/home",
//       name: "Home",
//       component: Home
//     },
//     {
//       path:"/register",
//       name:"Register",
//       component:Register
//     }
//   ]
// });
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
// export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from "@/components/Register";
import Infomation from "@/components/Infomation";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Success from "@/components/Success";
import HomePage from "@/components/HomePage";
import SecondPage from "@/components/SecondPage";
import ThirdPage from "@/components/ThirdPage";
import FourthPage from "@/components/FourthPage";
import FifthPage from "@/components/FifthPage";
import Modification from "@/components/Modification";
import Management from "@/components/Management";
import HrInfo from "@/components/HrInfo";
import Publish from "@/components/Publish";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      children:[
        {
          path: "/",
          name: "HomePage",
          component: HomePage
        },
        {
          path: "/secondPage",
          name: "SecondPage",
          component: SecondPage
        },
        {
          path: "/thirdPage",
          name: "ThirdPage",
          component: ThirdPage
        },
        {
          path: "/fourthPage",
          name: "FourthPage",
          component: FourthPage
        },
        {
          path: "/fifthPage",
          name: "FifthPage",
          component: FifthPage
        },
      ]
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/infomation",
      name: "Infomation",
      component: Infomation
    },
    {
      path: "/success",
      name: "Success",
      component: Success
    },
    {
      path: "/modification",
      name: "Modification",
      component: Modification
    },
    {
      path: "/management",
      name: "Management",
      component: Management
    },
    {
      path: "/hrInfo",
      name: "HrInfo",
      component: HrInfo
    },
    {
      path: "/publish",
      name: "Publish",
      component: Publish
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

