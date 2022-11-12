import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    //payload - любое значение, которое мы передаем в мутацию
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    decreaseCounter(state, payload) {
      state.counter = state.counter - payload;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
