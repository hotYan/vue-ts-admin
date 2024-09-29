import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
// vue Router
// import router from "@/router";
// app.use(router);
import { setupRouter } from "./router";
const app = createApp(App);

setupRouter(app);
app.use(Antd).mount("#app");
