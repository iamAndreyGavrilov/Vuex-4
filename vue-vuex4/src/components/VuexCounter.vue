<template>
  <div>
    <h1>Vuex Counter</h1>
    <h2 class="counter">{{ counter }}</h2>
    <button>-</button>
    <input type="number" v-model="value" />
    <button>+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
</style>
