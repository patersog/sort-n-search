<template>
	<div class="display">
		<div class="list-display">
			<ul class="data-list">
				<data-point v-for="(p, index) in displayData" :key="index" :value="p.val" :state="step._i === index || step._j === index ? p.action : p.action"></data-point>
			</ul>
		</div>
		<div class="step-display">
			<div class="step">
				<div>Action: <span> {{step.action}}</span></div>
				<div>Comparing: <span>{{!step._i && !step._j? "none" : step._i + " with " + step._j}}</span></div>
				<div>Step: <span> {{!step.num ? "none" : step.num}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
import DataPoint from "./DataPoint";

export default {
  name: "display",
  props: {
    step: {
      type: Object,
      required: true
    },
    run: {
      type: Boolean,
      required: true
    },
    toDisplay: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      displayData: this.toDisplay
    };
  },
  watch: {
    step: function(newStep, oldStep) {
      if (newStep.action !== "none") {
        this.displayData[oldStep._i].action = "none";
        this.displayData[oldStep._j].action = "none";
        this.displayData[newStep._i].action = newStep.action;
        this.displayData[newStep._j].action = newStep.action;
        if (newStep.action === "swap") {
          let temp = this.display[newStep._i];
          this.displayData[newStep._i] = this.displayData[newStep._j];
          this.displayData[newStep._j] = temp;
        }
      }
    },
    toDisplay: function(newDisplay) {
      this.displayData = newDisplay;
    }
  },
  computed: {
    stepDisplayClass: function() {
      if (this.run) {
        return "step-display run";
      }
      return "step-display";
    }
  },
  components: {
    DataPoint
  }
};
</script>

<style scoped>
.display {
  background-color: rgb(0, 44, 66);
  display: flex;
  border-radius: 3px;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin: 1em auto;
}
.data-list {
  list-style-type: none;
  margin: 1em auto;
  padding: 0.5em;
  max-width: 650px;
}

.step-display {
  font-weight: bold;
  display: block;
  margin: 0 auto;
  width: 33%;
}

.step-display .run {
  color: rgb(0, 255, 162);
}

.step {
  padding: 0.25em;
  color: rgb(106, 155, 147);
  border-radius: 3px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.step > div {
  display: flex;
  justify-content: space-between;
}
</style>
