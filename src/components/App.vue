<template>
  <div id="app">
	  	<header>
			<div class="radio-group">
				<input type="radio" id="sort" name="algo-type" checked><label class="sort-label" for="sort">sort</label>
				<input type="radio" id="search" name="algo-type"><label class="search-label" for="search">search</label>
			</div>
		</header>
		<action-bar 
			:preSorted=preSorted 
			:algorithmType=algorithmType
			v-on:requestSort="handleSortRequest" 
			v-on:requestAlgorithm="handleAlgorithmRequest" />
		<display v-if="!preSorted" :list="list" />
		<display v-else :list="sortedList" />
		<nav-bar />
  </div>
</template>

<script>
import Display from "./Display";
import ActionBar from "./ActionBar";
import NavBar from "./NavBar";

import dataArray from "../algorithms/array-data";

export default {
  name: "App",
  data() {
    return {
      list: [...dataArray],
      stats: {},
      preSorted: false,
      algorithmType: "sort"
    };
  },
  methods: {
    handleSortRequest() {
      this.preSorted = !this.preSorted;
    },
    handleAlgorithmRequest(selected) {
      this.algorithmType = selected;
    }
  },
  computed: {
    sortedList: function() {
      return this.list.map(el => el).sort((a, b) => a - b);
    }
  },
  watch: {
    selected(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  components: {
    Display,
    ActionBar,
    NavBar
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
  font-size: 4vh;
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
