import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import i18n from "@/plugins/i18n";

const app = createApp(App);

app.use(store)
	.use(router)
	.mount("#app");
