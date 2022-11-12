<template>
  <div>
    <ComponentFour />
    <HistoryNumbers />
  </div>
</template>

<script>
import ComponentFour from "./ComponentFour.vue";
import HistoryNumbers from "./HistoryNumbers.vue";
export default {
  name: "ComponentThree",
  components: { ComponentFour, HistoryNumbers },
};
</script>

<style></style>
