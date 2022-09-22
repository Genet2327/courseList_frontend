import Vue from "vue";

import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/Courses",
      name: "courses",
      component: () => import("./components/CoursesList")
    },
    {
      path: "/courses/:id",
      name: "course-details",
      component: () => import("./components/Course")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCourse")
    },
    {
      path: "/update/:id",
      name: "update",
      component: () => import("./components/courseUpdate")
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: () => import("./components/courseDelete")
    }
  ]
});