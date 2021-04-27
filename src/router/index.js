import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import EventLayout from "../views/event/Layout"
import EventDetail from "../views/event/Detail"
import EventRegister from "../views/event/Register"
import EventEdit from "../views/event/Edit"
import NotFound from "../views/NotFound"
import Slots from "../views/Slots"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/details/:id",
    name: "EventLayout",
    component: EventLayout,
    props: true,
    children: [
      {
        path: '',
        name: "EventDetail",
        component: EventDetail,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
        props: true
      }

    ]

  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/slots",
    name: "Slots",
    component: Slots
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

