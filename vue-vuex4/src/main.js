import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },

  // mutations никогда не должен иметь асинхронный код внутри себя
  mutations: {
    // payload - любое значение, которое мы передаем в мутацию
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    decreaseCounter(state, payload) {
      state.counter = state.counter - payload;
    },
  },

  actions: {
    // context - объект, который содержит в себе все методы и свойства, которые есть в store
    async addRandomNumber(context) {
      let res = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      // context.commit - вызов мутации
      context.commit("addToCounter", res.data);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
