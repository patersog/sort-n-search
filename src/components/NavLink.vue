<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
import routes from "../routes";

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    }
  }
};
</script>

<style scoped>
a {
  margin: 0.5em 1em;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(106, 155, 147);
  border-radius: 3px;
  padding: 0.25em;
  background-color: rgb(0, 44, 66);
  transition: 0.5s all ease;
}

a:hover {
  color: rgb(0, 245, 205);
}

.active {
  color: rgb(0, 245, 205);
  transition: 0.5s all ease;
}
</style>
