<template>
	<navigation>
		<h2 title="choose an alogirthm type">
			<div class="radio-group">
				<input type="radio" id="sort" name="algo-type" v-model="algType" value="sort" checked><label class="sort-label" for="sort">sort</label>
				<input type="radio" id="search" name="algo-type" v-model="algType" value="search"><label class="search-label" for="search">search</label>
			</div>
		</h2>
		<action-bar 
			:preSort=preSort 
			:algorithm=algName
			:algorithmType=algType
			:run=run
			v-on:request-presort="handlePreSortRequest" 
			v-on:request-algorithm="handleAlgorithmRequest"
			v-on:run-algorithm="handleRunAlgorithm"
			v-on:reset="handleReset"/>
		<display :step="step" :run="run" :toDisplay="preSort ? sortedArray : unsortedArray" />
	</navigation>
</template>

<script>
import Navigation from "../components/Navigation";
import Display from "../components/Display";
import ActionBar from "../components/ActionBar";

import { algorithmMap, testingData } from "../algorithm_utils";
import { Queue } from "../algorithm_utils/data_structures";

export default {
  name: "Home",
  data() {
    return {
      step: {
        action: "none",
        _i: null,
        val_i: null,
        _j: null,
        val_j: null,
        num: null
      },
      steps: null,
      algType: "sort",
      algName: "",
      run: false,
      preSort: false,
      interval: 2000,
      intId: null
    };
  },
  methods: {
    handlePreSortRequest() {
      this.preSort = !this.preSort;
    },
    handleAlgorithmRequest(requestedAlgorithm) {
      this.algName = requestedAlgorithm;
    },
    handleRunAlgorithm() {
      this.run = true;
      let { algType, algName } = this;
      if (algName) {
        const algorithm = algorithmMap[algType][algName];
        this.process(algorithm, q => {
          this.steps = q;
          this.steps.enqueue({
            action: "done",
            _i: null,
            val_i: null,
            _j: null,
            val_j: null,
            num: null
          });
          this.intId = setInterval(() => {
            this.$nextTick(() => this.processAction(this.steps));
            if (this.steps.isEmpty()) {
              clearInterval(this.intId);
              this.intId = null;
              this.steps = null;
            }
          }, this.interval);
        });
      }
    },
    process(algorithm, callback) {
      const stepQ = new Queue();
      if (typeof callback === "function") {
        let throwAway = this.preSort ? this.sortedArray : this.unsortedArray;
        algorithm(throwAway, stepQ);
        return callback(stepQ);
      }
      return stepQ;
    },
    processAction(steps) {
      this.step = steps.dequeue();
    },
    handleReset() {
      this.step = {
        action: "none",
        _i: null,
        val_i: null,
        _j: null,
        val_j: null,
        num: null
      };
      this.algType = "sort";
      this.algName = "";
      this.run = false;
      this.preSort = false;
      this.interval = 2000;

      clearInterval(this.intId);
      this.intId = null;
      this.steps = null;
    }
  },
  watch: {
    algorithmType: function() {
      this.handleReset();
    }
  },
  computed: {
    sortedArray: function() {
      return testingData.t_array
        .map(el => {
          return { action: "none", val: el };
        })
        .sort((a, b) => a.val - b.val);
    },
    unsortedArray: function() {
      return testingData.t_array.map(el => {
        return { action: "none", val: el };
      });
    }
  },
  components: {
    Navigation,
    Display,
    ActionBar
  }
};
</script>


<style>
h2 {
  margin: 1em auto;
  text-align: center;
  font-size: inherit;
  margin: 0;
  padding: 0;
}

input[type="radio"] {
  visibility: hidden;
  display: none;
}

input[type="radio"]:checked + label {
  color: rgb(0, 245, 205);
  border-color: rgb(0, 245, 205);
}

label {
  color: rgb(0, 245, 205);
  font-size: 2em;
  display: inline-block;
  border: 3px solid rgb(0, 44, 66);
  background-color: rgb(0, 44, 66);
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  padding: 0.2em 0.5em;
  transition: 800ms ease all;
}

.sort-label,
.search-label {
  width: 5em;
  margin: 0.25em;
}

.sort-label:hover,
.search-label:hover {
  border: 3px solid rgba(173, 216, 230);
}

.search-label {
  margin-left: 0.1em;
}

.sort-label {
  margin-right: 0.1em;
}

.radio-group {
  display: inline-block;
}
</style>
