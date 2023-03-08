import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import App from "./App.vue";
import "./styles/main.css";
import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  state(){
    return {
      count: 0
    }
  },
  mutations: {
    increment(state){
      state.count++;
    }
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(store);
app.use(router);
app.mount("#app");
