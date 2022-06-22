<template>
	<header>
		<router-link to="/">
			<h1>
				<span>Search</span>
				Movies
			</h1>
		</router-link>
	</header>
	<main>
		<router-view />
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Fira Sans", sans-serif;
}
::selection {
	color: rgb(65, 10, 117);
	background: yellow;
}
body {
	background-color: #35495e;
}
#app {
	width: min(1024px, 100%);
	margin: auto;
}
a {
	text-decoration: none;
}
header {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 20px;
	background-color: #2c3d4e;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
h1 {
	color: white;
	font-size: 28px;
}
header h1 span {
	color: #834cca;
}
</style>
