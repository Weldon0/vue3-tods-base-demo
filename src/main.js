import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./styles/base.css";
import "./styles/index.css";

const app = createApp(App);
const pina = createPinia();
app.use(pina);
app.mount("#app");
