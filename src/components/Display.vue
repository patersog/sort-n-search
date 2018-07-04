<template>
	<div class="display">
		<ul class="data-list">
			<data-point v-for="(value, index) in list" v-bind:key="index" v-bind:value="value"/>
		</ul>
	</div>
</template>

<script>
import DataPoint from "./DataPoint";

export default {
  name: "Display",
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
  height: 80vh;
  display: flex;
  justify-content: space-around;
}
.data-list {
  list-style-type: none;
  margin: 0;
  padding: 0.5em;
  max-width: 400px;
  text-align: initial;
}
</style>
