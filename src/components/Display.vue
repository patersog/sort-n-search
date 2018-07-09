<template>
	<div class="display">
		<div class="list-display">
			<ul class="data-list">
				<data-point v-for="(value, index) in displayArray" :key="index" :value="value" :state="step._i === index || step._j === index ? step.action : step.action"></data-point>
			</ul>
		</div>
		<div class="action">
			<span>Action: {{step.action}}</span>
			<span>Comparing: {{!step._i && !step._j? "nothing" : step._i + " with " + step._j}}</span>
			<span>Step: {{!step.num ? "none" : step.num}}</span>
		</div>
	</div>
</template>

<script>
import DataPoint from "./DataPoint";
const validate = { compare: true, swap: true, done: true, none: true };
export default {
  name: "display",
  props: {
    displayArr: {
      type: Array,
      required: true
    },
    step: {
      type: Object,
      default: function() {
        return { action: "none", _i: null, _j: null, num: null };
      },
      validator: function(step) {
        return validate[step.action];
      }
    }
  },
  data() {
    return {
	  displayArray: [...this.displayArr],
	  step: {}
    };
  },
  watch: {
	  step() {

	  },
  components: {
    DataPoint
  }
};
</script>

<style scoped>
.display {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
}
.data-list {
  list-style-type: none;
  margin: 1em auto;
  padding: 0.5em;
  max-width: 650px;
}

.action {
  display: flex;
  flex-direction: column;
}
</style>
