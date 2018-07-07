<template>
	<div class="action-bar">
		<div class="top">
			<button :class="preSortButtonClass" v-on:click="requestPreSort">pre-sort</button>
			<div class="algo-select">
				<select v-model="selected">
					<option disabled value="">choose an algorithm</option>
					<option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
				</select>
			</div>
		</div>
		<div class="bottom">
			<div v-if="!run">
				<button  class="control-btn play" :click="runAlgorithm"></button>
			</div>
			<div>
				<button class="control-btn reset" :click="requestReset"></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    preSorted: Boolean,
    run: Boolean,
    algorithmType: String,
    algorithm: String
  },
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    requestPreSort() {
      this.$emit("request-pre-sort");
    },
    requestReset() {
      this.$emit("resest-algorithm");
    },
    requestAlgorithm() {
      this.$emit("request-algorithm", this.selected);
    },
    runAlgorithm() {
      this.$emit("run-algorithm");
    }
  },
  watch: {
    selected() {
      this.requestAlgorithm();
    }
  },
  computed: {
    preSortButtonClass() {
      return !this.preSorted
        ? "pre-sort-btn not-clicked"
        : "pre-sort-btn clicked";
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

.top {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pre-sort-btn {
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #2c3e50;
  cursor: pointer;
  font-weight: 400;
  height: 2em;
  margin-right: 0.4em;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  transition: 800ms ease all;
}

.pre-sort-btn:hover {
  color: lightblue;
  transition: 800ms ease all;
}

.clicked {
  border-color: lightblue;
  color: lightblue;
}

.clicked:hover {
  border: #2c3e50;
  transition: 800ms ease all;
}

.not-clicked {
  color: rgb(22, 22, 22);
}

.bottom {
  display: inline-block;
  background-color: #2c3e50;
}

.bottom > div {
  display: inline-block;
  width: 1.8em;
  height: 1.8em;
  padding: 0.1em;
  text-align: center;
}

.control-btn {
  border: 0;
  background: transparent;
  box-sizing: border-box;
  border-color: #2c3e50;
  cursor: pointer;
  margin: 0;
  padding: 0;
  transition: 800ms all ease;
}

.control-btn:hover {
  border-left-color: lightblue;
  color: lightblue;
}

.step-forward {
}

.step-back {
}

.play {
  border-left-color: rgb(22, 22, 22);
  border-style: solid;
  border-width: 0.9em 0 0.9em 1.8em;
}

.pause {
}

.reset {
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
  text-align: center;
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

.algo-select {
  border: 1px solid #34495e;
  border-radius: 0.25em;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: #34495e;
  display: block;
  height: 1.6em;
  margin-left: 0.1em;
  width: 8em;
}

.algo-select::after {
  content: "\25BC";
  position: absolute;
  top: 5.43em;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  font-size: 1em;
  padding: 0.1em 0.3em 0.1em 0.1em;
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
