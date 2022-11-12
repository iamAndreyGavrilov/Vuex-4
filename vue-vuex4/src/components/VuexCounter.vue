<template>
  <div>
    <h1>Vuex Counter</h1>
    <h2 class="counter">0</h2>
    <button>-</button>
    <input type="number" v-model="value" />
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: "VuexCounter",
  data() {
    return {
      value: 1,
    };
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
