<template>
	<navigation>
		<div class="about-container">
			<h2>About</h2>
			<p>
				This welcome to Sort-n-Search. It is my hope that this application will help you work through and understand sorting and searching algorithms.
			</p>
			<p>
				To use the app, select and algorithm from the drop down and then click the button with the words "run" on it. This will take you
				step by step through the algorithm.
			</p>
			<p>
				The <span class="reminder">Sort | Search</span> header on the main page is clickable, and allows you to switch between either sorting or searching algorithms.
				At the moment, only <strong>bubble</strong> sort has been implemented, and a naive version at that."
			</p>
			<p>
				In the future, I hope to add more of them!
			</p>
			<p>
				Thanks for visiting, and checking out the application
			</p>
		</div>
	</navigation>
</template>

<script>
import Navigation from "../components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style scoped>
.about-container {
  color: rgb(0, 245, 205);
}

.reminder {
  border-radius: 3px;
  padding: 0.25em;
  background-color: rgb(0, 44, 66);
}
</style>
