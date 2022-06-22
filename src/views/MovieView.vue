<template>
	<div class="movie-detail">
		<h2>{{ movie.Title }}</h2>
		<p>{{ movie.Year }}</p>
		<img :src="movie.Poster" :alt="movie.Title" class="featured-img" />
		<p>{{ movie.Plot }}</p>
	</div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export default {
	setup() {
		const movie = ref({});
		const route = useRoute();

		onBeforeMount(() => {
			fetch(
				`http://www.omdbapi.com/?i=${route.params.id}&apikey=13374657&plot=full`
			)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					movie.value = data;
				});
		});

		return {
			movie,
		};
	},
};
</script>

<style>
.movie-detail {
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.movie-detail h2 {
	font-size: 28px;
	color: #fff;
	font-weight: 600;
	margin-bottom: 16px;
}
.movie-detail .featured-img {
	display: block;
	max-width: 500px;
	width: 100%;
	margin-bottom: 16px;
}
.movie-detail p {
	color: #fff;
	font-size: 18px;
	line-height: 1.4;
}
</style>
