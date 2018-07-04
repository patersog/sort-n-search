
<template>
	<li class='data-point'>
		<div class="data-value">{{value}}</div>
	</li>
</template>

<script>
export default {
  name: "DataPoint",
  props: ["value"]
};
</script>

<style scoped>
.data-point {
  background-color: lightblue;
  border: 2px solid lightblue;
  border-radius: 3px;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding: 0.5em;
  margin: 0.2em;
}

.data-value {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
