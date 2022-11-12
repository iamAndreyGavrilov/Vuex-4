<template>
  <div class="container">
    <h3>History</h3>
    <div class="container__flex">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(valueHist)?.includes(index) ? 'bold' : ''"
      >
        {{ number }}
      </p>
    </div>
    <input type="number" placeholder="Search number" v-model="valueHist" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HistoryNumbers",
  data() {
    return {
      valueHist: 0,
    };
  },

  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<style scoped>
.container {
  margin: 5rem auto;
  width: 50%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.container__flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.container__flex p {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.bold {
  font-weight: 900;
}
</style>
