<template>
  <div id="app">
	  	<header>
			<div class="radio-group">
				<input type="radio" id="sort" name="algo-type" v-model="algorithmType" value="sort" checked><label class="sort-label" for="sort">sort</label>
				<input type="radio" id="search" name="algo-type" v-model="algorithmType" value="search"><label class="search-label" for="search">search</label>
			</div>
		</header>
		<action-bar 
			:preSorted=preSorted 
			:run=run
			:algorithm=algorithm
			:algorithmType=algorithmType
			v-on:request-pre-sort="handlePreSortRequest" 
			v-on:request-algorithm="handleAlgorithmRequest"
			v-on:run-algorithm="handleRunAlgorithm"
			v-on:reset="handleReset"/>
		<display v-if="!preSorted" :arr="arr" />
		<display v-else :arr="sortedArray" />
		<foot />
  </div>
</template>

<script>
import Display from "./Display";
import ActionBar from "./ActionBar";
import Foot from "./Foot";

import { algorithms, test } from "../algorithm_utils";

export default {
  name: "App",
  data() {
    return {
      arr: [...test.arrayData],
      display_arr: [],
      actions: [],
      algorithmType: "sort",
      algorithm: "",
      preSorted: false,
      run: false
    };
  },
  methods: {
    handlePreSortRequest() {
      this.preSorted = !this.preSorted;
    },
    handleAlgorithmRequest(requestedAlgorithm) {
      this.algorithm = requestedAlgorithm;
    },
    handleRunAlgorithm() {
      if (this.algorithm) {
        console.log("running!");
        this.run = true;
      }
    },
    handleReset() {
      console.log("resetting application...");
      this.arr = [...test.arrayData];
      this.display_arr = [];
      this.algorithmType = "sort";
      this.algorithm = "";
      this.action = {};
      this.preSorted = false;
      this.run = false;
    },
    getAlgorithm() {
      console.log(this.algorithm);
    }
  },
  computed: {
    sortedArray: function() {
      return this.arr.map(el => el).sort((a, b) => a - b);
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
  color: whitesmoke;
}

input[type="radio"] {
  visibility: hidden;
  display: none;
}

input[type="radio"]:checked + label {
  color: lightblue;
  border-bottom: 1px solid lightblue;
}

label + input[type="radio"] + label {
  border-left: 1px solid lightblue;
}

label {
  color: rgb(22, 22, 22);
  font-size: 2em;
  display: inline-block;
  border: 1px solid #2c3e50;
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
  border-bottom: 1px solid lightblue;
}

.search-label {
  margin-left: 0.1em;
  border-left: 1px solid lightblue;
}

.sort-label {
  margin-right: 0.1em;
  border-right: 1px solid lightblue;
}

.radio-group {
  display: inline-block;
}
</style>
