import "./main.css";
import "./js/api.js";
import "./js/movie-card.js";
import "./js/trailer-modal.js";
import { fetchTrendingMovies } from "./js/api.js";
import { renderMovieCard } from "./js/movie-card.js";

export const refs = {
  body: document.querySelector("body"),
  searchForm: document.querySelector(".header-form"),
  card: document.querySelector(".card-holder"),
};

fetchTrendingMovies().then((data) => {
  renderMovieCard(data);
});
