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
  background-color: rgb(44, 62, 80);
  padding: 0.5em 0.25em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

div p {
  font-size: 1.2ch;
  color: rgb(173, 216, 230);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
a {
  text-decoration: none;
  margin: auto 0.5em;
  color: rgb(245, 245, 245);
  text-transform: capitalize;
}
</style>
