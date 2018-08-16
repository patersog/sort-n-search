
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
  position: relative;
  background-color: rgb(0, 44, 66);
  border: 3px solid rgb(0, 44, 66);
  border-radius: 3px;
  display: inline-block;
  margin: 0.25em;
  width: 3em;
  height: 3em;
  transition: 0.5s ease all;
}

.data-point:hover {
  color: rgb(0, 255, 162);
  border-color: rgb(0, 255, 162);
  border-style: solid;
  transition: 0.5s ease all;
}

.data-point:hover > .data-value {
  color: rgb(0, 255, 162);
}

.data-value {
  position: absolute;
  margin: auto;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  font-weight: 600;
  font-family: "Roboto Mono", monospace;
  color: rgb(106, 155, 147);
  transition: 0.5s ease all;
}

.compare {
  color: rgb(0, 255, 162);
  border-color: rgb(0, 255, 162);
}

.swap {
  color: rgb(251, 255, 0);
  border-color: rgb(251, 255, 0);
}
</style>
