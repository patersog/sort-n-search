<template>
	<div class="action-bar">
			<div class="top">
				<button :class="preSortButtonClass" v-on:click="requestPreSort" :disabled="!canSort">pre-sort</button>
				<button :class="runButtonClass" v-on:click="runAlgorithm" :disabled="!canRun">run</button>
				<button class="control-btn reset" v-on:click="requestReset">reset</button>
			</div>
			<div class="bottom">
				<div class="algo-select">
					<select aria-label="algorithm select" class="select" v-model="selected">
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

.algo-select:hover {
  color: rgb(0, 245, 205);
}

.algo-select::before,
.algo-select::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.algo-select::after {
  content: "\25BC";
  color: rgb(0, 245, 205);
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
  cursor: pointer;
  background: rgb(0, 44, 66);
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
  -webkit-appearance: button;
}

/* STYLES FOR CONTROLLER */

.control-btn {
  color: rgb(0, 245, 205);
  background-color: rgb(0, 44, 66);
  border-radius: 3px;
  border: 3px solid rgb(0, 44, 66);
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
  border-color: rgb(0, 245, 205);
  transition: 0.5s ease all;
}

.control-btn:disabled {
  color: rgb(106, 155, 147);
  cursor: default;
}

.control-btn:disabled:hover {
  border-color: rgb(0, 44, 66);
}

.clicked {
  border-color: rgb(0, 245, 205);
  border-style: solid;
  color: rgb(0, 245, 205);
}

.not-clicked {
  color: rgb(0, 245, 205);
}

/* select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
  background: rgb(0, 44, 66);
  background-image: none;
  text-align: center;
}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: rgb(106, 155, 147);
  cursor: pointer;
}

select::-ms-expand {
  display: none;
} */
</style>
