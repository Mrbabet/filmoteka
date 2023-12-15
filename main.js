import "./main.css";
import "./js/api.js";
import "./js/movie-card.js";
import "./js/trailer-modal.js";
import "./js/search-movie.js";
import { fetchMovieDetails, fetchTrendingMovies } from "./js/api.js";
import { renderMovieCard } from "./js/movie-card.js";
import { renderPlayer } from "./js/trailer-modal.js";
import { toggleBackdrop } from "./js/backdrop.js";
import { renderModal } from "./js/details-modal.js";
import { onSubmit } from "./js/search-movie.js";

export const refs = {
  body: document.querySelector("body"),
  searchForm: document.querySelector(".header-form"),
  card: document.querySelector(".card-holder"),
  backdrop: document.querySelector(".backdrop"),
  trendingTypeBtn: document.getElementById("trendingTypeBtn"),
};

const renderTrendingMovies = function (type = "week") {
  if (type === "week") {
    fetchTrendingMovies(type).then((data) => {
      renderMovieCard(data);
    });
  }
  if (type === "day") {
    fetchTrendingMovies(type).then((data) => {
      renderMovieCard(data);
    });
  }
};
renderTrendingMovies();

let currentType = "week";
refs.trendingTypeBtn.innerHTML = currentType;

refs.trendingTypeBtn.addEventListener("click", () => {
  currentType = currentType === "week" ? "day" : "week";
  refs.trendingTypeBtn.innerHTML = currentType;
  renderTrendingMovies(currentType);
});

const onCardClick = function (e) {
  let movieId = e.target.closest("li").id;
  if (
    e.target.classList.contains("film-trailer-btn") &&
    movieId === e.target.id
  ) {
    return renderPlayer(e.target.id);
  }

  if (movieId) {
    return fetchMovieDetails(movieId).then((data) => {
      renderModal(data);
    });
  }
};

refs.card.addEventListener("click", onCardClick);

refs.searchForm.addEventListener("submit", onSubmit);
refs.backdrop.addEventListener("click", (e) => {
  e.target.hasAttribute("data-backdrop") ? toggleBackdrop() : null;
});
