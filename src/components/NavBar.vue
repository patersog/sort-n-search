<template>
	<footer>
    <div>
      <p>© 2018 Gianluca N. Paterson</p>
      <nav>
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/github">github</a>
      </nav>
    </div>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border-top: 2px solid rgb(3, 78, 53);
  background-color: rgb(17, 112, 80);
  display: flex;
  justify-content: center;
  padding: 0.5em 0.25em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

div {
  width: 650px;
  max-width: 650px;
  display: flex;
  justify-content: space-around;
}

div p {
  margin-left: 0.5em;
  color: whitesmoke;
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
