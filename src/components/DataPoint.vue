
<template>
	<li class='data-point'>
		<div class="data-value">{{value}}</div>
	</li>
</template>

<script>
export default {
  name: "data-point",
  props: {
    value: {
      type: Number
    },
    state: {
      type: String
    }
  },
  computed: {
    dataPointClass() {
      switch (this.state) {
        case "swap":
          return "data-value swap";
        case "compare":
          return "data-value compare";
        default:
          return "data-value";
      }
    }
  }
};
</script>

<style scoped>
.data-point {
  background-color: #415972;
  border: 1px solid #415972;
  border-radius: 3px;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;
  margin: 0.2em;
}

.data-value {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 600;
  font-family: "Roboto Mono", monospace;
  color: rgb(22, 22, 22);
}

.compare {
  color: rgb(118, 209, 57);
  border-color: rgb(118, 209, 57);
}

.swap {
  color: rgb(224, 115, 43);
  border-color: rgb(224, 115, 43);
}
</style>
