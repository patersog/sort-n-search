<template>
	<div class="display">
		<div class="list-display">
			<ul class="data-list">
				<data-point v-for="(p, index) in display" :key="index" :value="p.val" :state="step._i === index || step._j === index ? p.action : p.action"></data-point>
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

import { testingData } from "../algorithm_utils";

export default {
  name: "display",
  props: {
    run: {
      type: Boolean,
      required: true
    },
    preSort: {
      type: Boolean,
      required: true
    },
    step: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      display: testingData.t_array.map(value => {
        const el = { action: "none", val: value };
        return el;
      })
    };
  },
  watch: {
    step: function(newStep, oldStep) {
      if (newStep.action !== "none") {
        this.display[oldStep._i].action = "none";
        this.display[oldStep._j].action = "none";
        this.display[newStep._i].action = newStep.action;
        this.display[newStep._j].action = newStep.action;
        if (newStep.action === "swap") {
          let temp = this.display[newStep._i];
          this.display[newStep._i] = this.display[newStep._j];
          this.display[newStep._j] = temp;
        }
      }
    },
    display: function(newArr) {
      if (this.run) {
        this.display = newArr;
      } else {
        console.log("run");
        this.display = testingData.t_array.map(value => {
          const el = { action: "none", val: value };
          return el;
        });
      }
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
