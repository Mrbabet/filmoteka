import "./main.css";
import "./js/api.js";
import "./js/movieCard.js";
import { fetchTrendingMovies } from "./js/api.js";
import { renderMovieCard } from "./js/movieCard.js";

export const refs = {
  body: document.querySelector("body"),
  searchForm: document.querySelector(".header-form"),
  card: document.querySelector(".card-holder"),
};

fetchTrendingMovies().then((data) => {
  renderMovieCard(data);
});
