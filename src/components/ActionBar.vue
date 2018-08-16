<template>
	<div class="action-bar">
			<button :class="preSortButtonClass" v-on:click="requestPreSort" :disabled="!canSort">pre-sort</button>
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
    preSort: Boolean,
    run: Boolean,
    algorithmType: String,
    algorithmName: String
  },
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    requestPreSort() {
      this.$emit("request-presort");
    },
    requestReset() {
      this.selected = "";
      this.$emit("reset");
    },
    requestAlgorithm(selected) {
      this.$emit("request-algorithm", selected);
    },
    runAlgorithm() {
      this.$emit("run-algorithm");
    }
  },
  watch: {
    selected() {
      this.requestAlgorithm(this.selected);
    },
    algorithmType() {
      this.selected = "";
    }
  },
  computed: {
    preSortButtonClass() {
      return !this.preSort ? "control-btn not-clicked" : "control-btn clicked";
    },
    runButtonClass() {
      return !this.run ? "control-btn not-clicked" : "control-btn clicked";
    },
    options() {
      switch (this.algorithmType) {
        case "sort":
          return ["quick", "merge", "bubble"];
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
    },
    canSort() {
      if (this.run) {
        return false;
      }
      return true;
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
  border: 1px solid rgb(52, 73, 94);
  border-radius: 0.25em;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: rgb(52, 73, 94);
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
  background: rgb(52, 73, 94);
  pointer-events: none;
}

.algo-select:hover::after {
  color: rgb(173, 216, 230);
}
.algo-select::after {
  -webkit-transition: 0.5s all ease;
  -o-transition: 0.5s all ease;
  transition: 0.5s all ease;
}

/* STYLES FOR CONTROLLER */

.control-btn {
  background-color: rgb(52, 73, 94);
  border-radius: 3px;
  border: 1px solid rgb(44, 62, 80);
  cursor: pointer;
  font-weight: 400;
  height: 2em;
  margin-right: 0.4em;
  width: 10em;
  text-align: center;
  transition: 0.5s ease all;
}

.control-btn:hover {
  color: rgb(173, 216, 230);
  transition: 0.5s ease all;
}

.control-btn:disabled {
  background-color: transparent;
  color: rgb(22, 22, 22);
}

.clicked {
  border-color: rgb(173, 216, 230);
  border-style: double;
  color: rgb(173, 216, 230);
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
  background: rgb(52, 73, 94);
  background-image: none;
  text-align: center;
}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: rgb(173, 216, 230);
  cursor: pointer;
}

select::-ms-expand {
  display: none;
}
</style>
