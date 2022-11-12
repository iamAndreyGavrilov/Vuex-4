<template>
  <div>
    <h1>Vuex Counter</h1>
    <h2 class="counter">{{ counter }}</h2>
    <button @click="decreaseCounter(value)">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(value)">+</button>
    <div>
      <button class="btn" @click="addRandomNumber">random number</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "VuexCounter",
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "decreaseCounter"]),
    ...mapActions(["addRandomNumber"]),
  },
};
</script>

<style>
.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: bold;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  cursor: pointer;
  color: #fff;
}
</style>
