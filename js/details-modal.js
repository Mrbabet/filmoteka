import { refs } from "../main";
import { toggleBackdrop } from "./backdrop";
import { fetchMovieDetails } from "./api";

export async function renderModal(data) {
  toggleBackdrop();
  const genre = await getGenreFromApi(data.id);
  console.log(data);

  refs.backdrop.innerHTML = `
  <div class='modal'>
      <div class="js-movie-modal-content">
          <button class = "js-movie-modal-close-btn">X</button>
          <div class="js-movie-modal-poster">
        ${getPoster(data.poster_path, data.title)}
            
          </div>
          <div class="movie-modal-info-about">
              <h1 class="js-movie-modal-title">${data.title}</h1>
      <div class="movie-modal-info">
          <div class="movie-modal-info-name">
              <p class="info-name">Vote / Votes</p>
              <p class="info-name">Popularity</p>
              <p class="info-name">Original Title</p>
              <p class="info-name">Genre</p>
          </div>
          <div class="movie-modal-info-value">
              <p class="js-info-value">
                  <span class="js-info-value-vote">${data.vote_average.toFixed(
                    1
                  )}</span>&ensp;/&ensp; 
                  <span class="js-info-value-votes">${data.vote_count}</span>
              </p>
              <p class="js-info-value">${data.popularity}</p>
              <p class="js-info-value">${data.original_title}</p>
              <p class="js-info-value">${genre}</p>
          </div>
      </div>
      <h2 class="movie-modal-about">About </h2>
      <p class="js-movie-modal-about-text">${data.overview}</p>
      <ul class = "movie-modal-btn-list">
          <li class = "movie-modal-btn-list-item">
              <button class="js-movie-modal-btn add-watched" type = "button">add to Watched</button>
          </li>
          <li class = "movie-modal-btn-list-item">
              <button class="js-movie-modal-btn add-queue" type = "button">add to queue</button>
          </li>
      </ul>
          </div>
      </div>
      </div>`;
}

function getPoster(path, title) {
  if (path === null) {
    return ` <img class="image-placeholder" src="../pubilc/assets/image-placeholder.svg"  alt="" loading="lazy" />`;
  }

  if (path !== undefined) {
    return `
      <img  src="https://www.themoviedb.org/t/p/w500${path}" alt="${title}" loading="lazy" />`;
  }
}
const getGenreFromApi = async function (id) {
  const data = await fetchMovieDetails(id);
  const genres = data.genres.map((genre) => genre.name);
  return Promise.resolve(genres);
};
