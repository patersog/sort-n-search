<template>
	<div class="display">
		<div class="list-display">
			<ul class="data-list">
				<data-point v-for="(p, index) in displayArray" :key="index" :value="p.val" :state="step._i === index || step._j === index ? p.action : p.action"></data-point>
			</ul>
		</div>
		<div class="step-display">
			<div class="step">
				<span>Action: {{step.action}}</span>
				<span>Comparing: {{!step._i && !step._j? "nothing" : step._i + " with " + step._j}}</span>
				<span>Step: {{!step.num ? "none" : step.num}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import DataPoint from "./DataPoint";

export default {
  name: "display",
  props: {
    displayArr: {
      type: Array,
      required: true
    },
    step: {
      type: Object,
      default() {
        return { action: "none", _i: null, _j: null, num: null };
      }
    }
  },
  data() {
    return {
      displayArray: this.displayArr.map(value => {
        const el = { action: "none", val: value };
        return el;
      })
    };
  },
  watch: {
    step: function(newStep) {
      const { _i, _j, action } = newStep;
      if (this.displayArray[_i].action !== action) {
        this.displayArray[_i].action = action;
      }
      if (this.displayArray[_j].action !== action) {
        this.displayArray[_j].action = action;
      }
    },
    displayArray: function(newArr) {
      console.log(newArr);
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

.step-display {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.step {
  text-align: left;
  display: flex;
  flex-direction: column;
}
</style>
