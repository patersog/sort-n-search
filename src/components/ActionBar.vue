<template>
	<div class="action-bar">
		<button v-bind:class="buttonClasses" v-on:click="requestSort">sort</button>
	</div>
</template>

<script>
export default {
  props: {
    preSorted: Boolean
  },
  methods: {
    requestSort() {
      this.$emit("requestSort");
    }
  },
  computed: {
    buttonClasses() {
      return !this.preSorted ? "btn not-clicked" : "btn clicked";
    }
  }
};
</script>

<style scoped>
.action-bar {
  margin: 0.5em 0;
}

.btn {
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  background-color: transparent;
  border-radius: 3px;
  width: 7.8vw;
  max-width: 80px;
  min-width: 80px;
  height: 2.5vh;
  transition-property: color, background-color;
  transition-duration: 0.8s;
  transition-timing-function: ease-out;
}

.clicked {
  border: 2px solid lightblue;
  color: lightblue;
}

.not-clicked {
  border: 1px solid #555;
  color: #555;
}

.btn:focus {
  border-color: lightblue;
}
</style>
