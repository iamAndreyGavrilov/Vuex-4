import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0],
    };
  },

  // mutations никогда не должен иметь асинхронный код внутри себя
  mutations: {
    // payload - любое значение, которое мы передаем в мутацию
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    decreaseCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
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
  getters: {
    // getters - это средство, которое позволяет получить данные из state основынные на другой логике
    // например, мы можем получить данные из state и отфильтровать их
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
