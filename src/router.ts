import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Host from "@/components/Host.vue";
import Room from "@/components/Room.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/h/:id",
      component: Host,
    },
    {
      path: "/r/:id",
      component: Room,
    },
  ],
});

export { router };
