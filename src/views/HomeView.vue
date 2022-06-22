<template>
	<div class="home">
		<div class="feature-card">
			<router-link to="/movie/tt4154796">
				<img
					src="https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg"
					alt="Avengers Endgame"
					class="featured-img"
				/>
				<div class="detail">
					<h3>Avengers: Endgame</h3>
					<p>
						After the devastating events of Avengers: Infinity War (2018), the
						universe is in ruins due to the efforts of the Mad Titan, Thanos.
						With the help of remaining allies, the Avengers must assemble once
						more in order to undo Thanos's actions and undo the chaos to the
						universe, no matter what consequences may be in store, and no matter
						who they face...
					</p>
				</div>
			</router-link>
		</div>

		<form @submit.prevent="SearchMovies()" class="search-box">
			<input
				type="text"
				placeholder="what are you looking for?"
				v-model="search"
			/>
			<input type="submit" value="search" />
		</form>

		<div class="movies-list">
			<div class="movie" v-for="movie in movies" :key="movie.imdbID">
				<router-link :to="'/movie/' + movie.imdbID" class="movie-link">
					<div class="product-img">
						<img :src="movie.Poster" :alt="movie.Title" />
						<div class="type">
							{{ movie.Type }}
						</div>
					</div>
					<div class="product-detail">
						<p class="year">{{ movie.Year }}</p>
						<h3>{{ movie.Title }}</h3>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const search = ref("");
		const movies = ref([]);

		const SearchMovies = () => {
			if (search.value !== "") {
				// console.log(search.value);
				fetch(`http://www.omdbapi.com/?apikey=13374657&s=${search.value}`)
					.then((res) => res.json())
					.then((data) => {
						// console.log(data);
						if (data.Response == "True") {
							movies.value = data.Search;
							search.value = "";
						} else {
							console.log("no data found");
						}
					});
			}
		};

		return {
			search,
			movies,
			SearchMovies,
		};
	},
};
</script>

<style>
.feature-card {
	position: relative;
}
.feature-card .featured-img {
	display: block;
	width: 100%;
	height: max(300px, 50vh);
	object-fit: cover;
}
.detail {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 16px;
	z-index: 1;
}
.detail h3 {
	color: #fff;
	margin-bottom: 16px;
}
.detail p {
	color: #fff;
}

.search-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px;
}
.search-box input {
	display: block;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.search-box input[type="text"] {
	width: 100%;
	color: white;
	background-color: #496583;
	font-size: 20px;
	padding: 10px 16px;
	border-radius: 8px;
	margin-bottom: 15px;
	transition: 0.4s;
}
.search-box input[type="text"]::placeholder {
	color: #f3f3f3;
}
.search-box input[type="text"]:focus {
	box-shadow: 0px 3px 6px rgba(0, 0, 0.2);
}
.search-box input[type="submit"] {
	color: #fff;
	width: 100%;
	max-width: 300px;
	background-color: #3d0b80;
	padding: 16px;
	border-radius: 8px;
	font-size: 20px;
	text-transform: uppercase;
	transition: 0.4s;
}
.search-box input[type="submit"]:active {
	background-color: #2c0f53;
}

.movies-list {
	display: flex;
	flex-wrap: wrap;
	margin: 0 8px;
}
.movies-list .movie {
	max-width: 50%;
	flex: 1 1 50%;
	padding: 16px 8px;
}
.movies-list .movie-link {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.movies-list .product-img {
	display: block;
	position: relative;
}
.movies-list .product-img img {
	display: block;
	width: 100%;
	height: 275px;
	object-fit: cover;
}
.movies-list .product-img .type {
	position: absolute;
	padding: 8px 16px;
	background-color: #3d0b80;
	color: #fff;
	left: 0;
	bottom: 16px;
	text-transform: capitalize;
}
.movies-list .product-detail {
	background-color: #496583;
	padding: 16px 8px;
	flex: 1 1 100%;
	border-radius: 0px 0px 8px 8px;
}
.movies-list .product-detail .year {
	color: #aaa;
	font-size: 14px;
}
.movies-list .product-detail h3 {
	color: #fff;
	font-weight: 600;
	font-size: 18px;
}
</style>
