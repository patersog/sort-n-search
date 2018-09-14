<template>
	<div class="root-container">
		<div class="app">
				<header>
					<div class="header-container">
					<h1>Sort-n-Search</h1>
					<nav>
						<ul>
							<li><nav-link href="/"> home </nav-link></li>
							<li><nav-link href="/about"> about </nav-link></li>
						</ul>
					</nav>
					</div>
				</header>
				<main class="main">
					<slot></slot>
				</main>
			</div>
		</div>
</template>

<script>
import NavLink from "../components/NavLink";

export default {
  components: {
    NavLink
  }
};
</script>
<style>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
}

.root-container {
  display: flex;
  flex-direction: column;
  width: 50em;
  font-family: "Orbitron", sans-serif;
  line-height: 1.5;
  padding: 0.5em 0.33em;
  max-height: 100%;
}

.main {
  height: 100%;
}

header {
  padding: 0.483em;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-family: "Orbitron", sans-serif;
}

.header-container {
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
}

.container {
  margin: 0 auto;
  max-width: 50em;
  text-align: center;
  line-height: 1.5em;
  padding: 0.5em 0.33em;
  height: 100%;
}

nav {
  display: inline-block;
}

h1 {
  padding: 0.5em 0.25em;
  margin: 0 auto;
  color: rgb(0, 245, 205);
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
