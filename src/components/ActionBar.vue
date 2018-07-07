<template>
	<div class="action-bar">
			<button :class="preSortButtonClass" v-on:click="requestPreSort">pre-sort</button>
			<button :class="runButtonClass" v-on:click="runAlgorithm" :disabled="!canRun">run</button>
			<button class="control-btn reset" v-on:click="requestReset">reset</button>
			<div class="algo-select">
				<select v-model="selected">
					<option disabled value="">choose an algorithm</option>
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
  data() {
    return {
      selected: "",
      running: false
    };
  },
  methods: {
    requestPreSort() {
      this.$emit("request-pre-sort");
    },
    requestReset() {
      this.$emit("reset");
      this.selected = "";
      this.running = false;
    },
    requestAlgorithm() {
      this.$emit("request-algorithm", this.selected);
    },
    runAlgorithm() {
      console.log("running...");
      this.running = true;
      this.$emit("run-algorithm");
    }
  },
  computed: {
    preSortButtonClass() {
      return !this.preSorted
        ? "control-btn not-clicked"
        : "control-btn clicked";
    },
    runButtonClass() {
      return !this.running ? "control-btn not-clicked" : "control-btn clicked";
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
    },
    canRun() {
      if (this.selected) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.action-bar {
  margin: 0.5em;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

/* STYLES FOR CONTROLLER */

.control-btn {
  background-color: #34495e;
  border-radius: 3px;
  border: 1px solid #2c3e50;
  cursor: pointer;
  font-weight: 400;
  height: 2em;
  margin-right: 0.4em;
  width: 10em;
  text-align: center;
  transition: 800ms ease all;
}

.control-btn:hover {
  color: lightblue;
  transition: 800ms ease all;
}

.control-btn:disabled {
  background-color: transparent;
  color: rgb(22, 22, 22);
}

.clicked {
  border-color: lightblue;
  color: lightblue;
}

.clicked:hover {
  color: rgb(22, 22, 22);
}

.not-clicked {
  color: rgb(22, 22, 22);
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
</style>
