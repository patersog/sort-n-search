
<template>
	<li :class="dataPointClass">
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
          return "data-point swap";
        case "compare":
          return "data-point compare";
        default:
          return "data-point";
      }
    }
  }
};
</script>

<style scoped>
.data-point {
  background-color: rgb(65, 89, 114);
  border: 3px solid rgb(65, 89, 114);
  border-radius: 3px;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;
  margin: 0.2em;
  transition: 0.5s ease all;
}

.data-point:hover {
  border-color: rgb(173, 216, 230);
  border-style: double;
  transition: 0.5s ease all;
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
  color: rgb(255, 0, 0);
  border-color: rgb(255, 0, 0);
}

.swap {
  color: rgb(251, 255, 0);
  border-color: rgb(251, 255, 0);
}
</style>
