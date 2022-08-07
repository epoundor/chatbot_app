import { EventBus } from "./utils";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const e = new EventBus();
e.register("changeChat");
const app = createApp(App);
app.provide("$eventbus", e);
app.mount("#app");
