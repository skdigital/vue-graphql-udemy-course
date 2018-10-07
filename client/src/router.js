import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
// Auth Component
import Signin from "./components/Auth/Signin.vue";
import Signup from "./components/Auth/Signup.vue";
import Profile from "./components/Auth/Profile.vue";
// Posts Component
import AddPost from "./components/Posts/AddPost.vue";
import Posts from "./components/Posts/AddPost.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/addpost",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    }
  ]
});
