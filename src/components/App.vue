<template>
  <div id="app">
	  	<header>
			<div class="radio-group">
				<input type="radio" id="sort" name="algo-type" v-model="algType" value="sort" checked><label class="sort-label" for="sort">sort</label>
				<input type="radio" id="search" name="algo-type" v-model="algType" value="search"><label class="search-label" for="search">search</label>
			</div>
		</header>
		<action-bar 
			:preSort=preSort 
			:algorithm=algName
			:algorithmType=algType
			v-on:request-presort="handlePreSortRequest" 
			v-on:request-algorithm="handleAlgorithmRequest"
			v-on:run-algorithm="handleRunAlgorithm"
			v-on:reset="handleReset"/>
		<display :run="run" :preSort="preSort" :step="step" />
		<foot/>
  </div>
</template>

<script>
import Display from "./Display";
import ActionBar from "./ActionBar";
import Foot from "./Foot";

import { algorithmMap, testingData } from "../algorithm_utils";
import { Queue } from "../algorithm_utils/data_structures";

export default {
  name: "App",
  data() {
    return {
      step: { action: "none", _i: null, _j: null, num: null },
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
      this.running = true;
      let { algType, algName } = this;
      if (algName) {
        const algorithm = algorithmMap[algType][algName];
        this.process(algorithm, q => {
          this.steps = q;
          this.steps.enqueue({ action: "done", _i: null, _j: null, num: null });
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
      this.step = { action: "none", _i: null, _j: null, num: null };
      this.algType = "sort";
      this.algName = "";
      this.running = false;
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
      return testingData.t_array.map(el => el).sort((a, b) => a - b);
    },
    unsortedArray: function() {
      return testingData.t_array.map(el => el);
    }
  },
  components: {
    Display,
    ActionBar,
    Foot
  }
};
</script>


<style>
#app {
  margin: 0 auto;
  max-width: 50em;
  text-align: center;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5em;
  padding: 0.5em 0.33em;
}

header {
  margin: 1em auto;
  text-align: center;
}

h1 {
  color: rgb(245, 245, 245);
}

input[type="radio"] {
  visibility: hidden;
  display: none;
}

input[type="radio"]:checked + label {
  color: rgb(173, 216, 230);
  border-bottom: 1px solid rgba(173, 216, 230);
}

label + input[type="radio"] + label {
  border-left: 1px solid rgba(173, 216, 230);
}

label {
  color: rgb(22, 22, 22);
  font-size: 2em;
  display: inline-block;
  border: 1px solid rgb(44, 62, 80);
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  padding: 0.2em 0.5em;
  transition: 800ms ease all;
}

.sort-label,
.search-label {
  width: 3em;
}

.sort-label:hover,
.search-label:hover {
  border-bottom: 1px solid rgba(173, 216, 230);
}

.search-label {
  margin-left: 0.1em;
  border-left: 1px solid rgba(173, 216, 230);
}

.sort-label {
  margin-right: 0.1em;
  border-right: 1px solid rgba(173, 216, 230);
}

.radio-group {
  display: inline-block;
}
</style>
