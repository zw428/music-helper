import Vue from "vue"
import Router from "vue-router"
import Main from "@/components/Main"
import SingleNoteTest from "@/components/SingleNoteTest"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Main
    },

    {
      path: "/single-note-test",
      component: SingleNoteTest
    }
  ]
})
