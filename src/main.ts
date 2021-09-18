// a bug
// https://github.com/peers/peerjs/issues/859
(window as any).parcelRequire = {};

import { createApp } from "vue";
import App from "./App.vue";
import "@/sass/index.sass";
import { store } from "@/store";
import { router } from "@/router";

createApp(App).use(router).use(store).mount("#app");
