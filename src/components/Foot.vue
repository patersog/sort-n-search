<template>
	<footer>
      <p>© 2018 Gianluca N. Paterson</p>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #2c3e50;
  padding: 0.5em 0.25em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

div p {
  font-size: 1.2ch;
  color: lightblue;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
a {
  text-decoration: none;
  margin: auto 0.5em;
  color: whitesmoke;
  text-transform: capitalize;
}
</style>
