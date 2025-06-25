import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import router from ",/router";
import App from "./App.vue";

createApp(App).mount("#app").use(createPinia()).use(router).mount("#app");
