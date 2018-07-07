<template>
	<div class="display">
		<ul class="data-list">
			<data-point v-for="(value, index) in list" :key="index" :value="value"/>
		</ul>
	</div>
</template>

<script>
import DataPoint from "./DataPoint";

// import algorithms from "../algorithms";

export default {
  name: "display",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    DataPoint
  }
};
</script>

<style scoped>
.display {
  display: flex;
  justify-content: center;
  height: 80vh;
}
.data-list {
  list-style-type: none;
  margin: 1em auto;
  padding: 0.5em;
  max-width: 650px;
}
</style>
