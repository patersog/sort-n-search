<template>
	<div class="action-bar">
		<button v-bind:class="buttonClasses" v-on:click="requestSort">pre-sort</button>
		<div class="algo-select">
			<select v-model="requestAlgorithm">
				<option disabled value="">Select a Sorting Algorithm</option>
				<option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    preSorted: Boolean,
    algorithmType: String
  },
  methods: {
    requestSort() {
      this.$emit("requestSort");
    },
    requestAlgorithm() {
      this.$emit("requestAlgorithm");
    }
  },
  computed: {
    buttonClasses() {
      return !this.preSorted ? "btn not-clicked" : "btn clicked";
    },
    options() {
      switch (this.algorithmType) {
        case "sort":
          return ["quick", "merge"];
        case "search":
          return ["linear", "binary"];
        default:
          return [];
      }
    }
  }
};
</script>

<style scoped>
.action-bar {
  margin: 0.5em 0;
  padding: 0.5em 0;
}

.btn {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #2c3e50;
  cursor: pointer;
  font-weight: 400;
  height: 2.5vh;
  margin: 0.5em 0.3em 0.5em 0;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  transition: 800ms ease all;
}

.clicked {
  border-bottom: 1px solid lightblue;
  color: lightblue;
}

.not-clicked {
  color: rgb(22, 22, 22);
}

.btn:hover {
  border-bottom: 1px solid lightblue;
  transition: 800ms ease all;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  background: #34495e;
  background-image: none;
}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: lightblue;
  cursor: pointer;
}

select::-ms-expand {
  display: none;
}

.algo-select::hover {
  border: 1px solid #34495e;
}

.algo-select {
  display: inline-block;
  width: 8.6em;
  height: 2.5vh;
  margin: 0.5em 0 0.5em 0.3em;
  border: #2c3e50;
  border-radius: 0.25em;
  border-top-right-radius: 0;
  background: #34495e;
}

.algo-select::after {
  content: "\25BC";
  position: absolute;
  font-size: 1.2ch;
  border: 0;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  padding: 0 0.5em 0 0;
  color: rgb(22, 22, 22);
  background: #34495e;
  pointer-events: none;
}

.algo-select:hover::after {
  color: lightblue;
}
.algo-select::after {
  -webkit-transition: 0.8s all ease;
  -o-transition: 0.8s all ease;
  transition: 0.8s all ease;
}
</style>
