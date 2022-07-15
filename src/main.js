import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iconSet from "quasar/icon-set/fontawesome-v6";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(Quasar, { iconSet: iconSet }, quasarUserOptions)
  .use(store)
  .use(router)
  .mount("#app");
