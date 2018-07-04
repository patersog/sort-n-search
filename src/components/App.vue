<template>
  <div id="app">
	  	<header>
			  <h1>Sort-n-Search</h1>
		</header>
		<action-bar :preSorted=preSorted v-on:requestSort="handleSortRequest"/>
		<display v-if="!preSorted" v-bind:list="list"/>
		<display v-else :list="sortedList"/>
		<nav-bar/>
  </div>

</template>

<script>
import Display from "./Display";
import ActionBar from "./ActionBar";
import NavBar from "./NavBar";

// import algorithms from "../algorithms";
import dataArray from "../algorithms/array-data";

export default {
  name: "App",
  data() {
    return {
      list: [...dataArray],
      stats: {},
      preSorted: false,
      selected: "linear"
    };
  },
  methods: {
    applyAlgorithm() {},
    handleSortRequest() {
      this.preSorted = !this.preSorted;
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
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 90vh;
} */
#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 50em;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5em;
  padding: 0.5em 0.33em;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
