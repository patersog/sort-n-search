
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
    selected: {
      type: String
    }
  },
  watch: {
    value(newValue, oldValue) {}
  }
};
</script>

<style scoped>
.data-point {
  background-color: #415972;
  border: 2px solid rgb(90, 90, 90);
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
</style>
