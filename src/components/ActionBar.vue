<template>
	<div class="action-bar">
			<div class="top">
				<button :class="preSortButtonClass" v-on:click="requestPreSort" :disabled="!canSort">pre-sort</button>
				<button :class="runButtonClass" v-on:click="runAlgorithm" :disabled="!canRun">run</button>
				<button class="control-btn reset" v-on:click="requestReset">reset</button>
			</div>
			<div class="bottom">
				<div class="algo-select">
					<select class="select" v-model="selected">
						<option disabled value="">algorithms</option>
						<option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
					</select>
				</div>
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
  margin: 0.5em auto;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.top,
.bottom {
  margin: 0.5em auto;
}

.algo-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.algo-select::before,
.algo-select::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.algo-select::after {
  content: "\25BC";
  color: rgb(22, 22, 22);
  line-height: 1;
  height: 1em;
  right: 0.45em;
  top: 50%;
  margin-top: -0.45em;
  transition: 0.5s all ease;
}

.algo-select:hover::after {
  color: rgb(173, 216, 230);
}

.algo-select:focus::after {
  color: rgb(173, 216, 230);
}

.select {
  background: rgb(52, 73, 94);
  color: rgb(173, 216, 230);
  font-size: inherit;
  padding: 0.5em;
  padding-right: 2.5em;
  width: 10em;
  height: 2.2em;
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: "";
  -webkit-appearance: button;
}

/* .algo-select::after {
  content: "\25BC";
  position: absolute;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  font-size: 1em;
  height: 1.6em;
  top: -0.23em;
  padding: 0.3em 0.3em 0.1em 0.1em;
  color: rgb(22, 22, 22);
  background: rgb(52, 73, 94);
  pointer-events: none;
  -webkit-transition: 0.5s all ease;
  -o-transition: 0.5s all ease;
  transition: 0.5s all ease;
}

.algo-select::after:hover {
  color: rgb(173, 216, 230);
}

.algo-select:hover::after {
  color: rgb(173, 216, 230);
} */

/* STYLES FOR CONTROLLER */

.control-btn {
  background-color: rgb(52, 73, 94);
  border-radius: 3px;
  border: 1px solid rgb(44, 62, 80);
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
  height: 2em;
  margin: 0.5em;
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
