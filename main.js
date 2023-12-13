import "./main.css";
import "./js/api.js";
import "./js/movie-card.js";
import "./js/trailer-modal.js";
import { fetchTrendingMovies } from "./js/api.js";
import { renderMovieCard } from "./js/movie-card.js";
import { renderPlayer } from "./js/trailer-modal.js";
import { toggleBackdrop } from "./js/backdrop.js";
import { renderModal } from "./js/details-modal.js";

export const refs = {
  body: document.querySelector("body"),
  searchForm: document.querySelector(".header-form"),
  card: document.querySelector(".card-holder"),
  backdrop: document.querySelector(".backdrop"),
};

fetchTrendingMovies().then((data) => {
  renderMovieCard(data);
});

const onCardClick = function (e) {
  console.log();

  if (
    e.target.classList.contains("film-trailer-btn") &&
    e.target.closest("li").id === e.target.id
  ) {
    return renderPlayer(e.target.id);
  }

  if (e.target.closest("li").id) {
    return renderModal(e.target.closest("li").id);
  }
};

refs.card.addEventListener("click", onCardClick);
refs.backdrop.addEventListener("click", (e) => {
  e.target.hasAttribute("data-backdrop") ? toggleBackdrop() : null;
});
