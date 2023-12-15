import "../main.js";
import { refs } from "../main.js";
import { fetchMovieDetails } from "./api.js";

export const renderMovieCard = async function (data) {
  const movieCard = await Promise.all(
    data.results.map(async ({ id, poster_path, name, title, release_date }) => {
      const genres = await getGenreFromApi(id);
      return `
        <li class="film-item" id=${id}>
          <a class="film-item-link">
            ${getMarkupImgPoster(poster_path, name, title)}
            <h2 class="title">${title}</h2>
            <p class="description-short">${genres.join(", ")} | ${getYear(
        release_date
      )}</p>
            <button id=${id} class="film-trailer-btn" type="button">Trailer<span> > </span></button>
          </a>
        </li>`;
    })
  );

  refs.card.innerHTML = movieCard.join("");
};
const getGenreFromApi = async function (id) {
  const data = await fetchMovieDetails(id);
  const genres = data.genres.map((genre) => genre.name);
  return Promise.resolve(genres);
};

const getYear = function (relesaseDate) {
  return relesaseDate ? relesaseDate.split("-")[0] : relesaseDate;
};

function getMarkupImgPoster(path, title) {
  if (path === null) {
    return ` <img class="image-placeholder" src="../pubilc/assets/image-placeholder.svg"  alt="" loading="lazy" />`;
  }

  if (path !== undefined) {
    return `
    <img  src="https://www.themoviedb.org/t/p/w500${path}" alt="${title}" loading="lazy" />`;
  }
}
