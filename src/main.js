// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import router from "@/router";
import store from "./store";

import routes from "virtual:generated-pages";



export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(store);


    /* if (import.meta.env.SSR) {
      initialState.store = store.state;
    } else {
      store.replaceState(initialState.store);
    } */
  }
);

// createApp(App).use(store).use(router).mount("#app");
