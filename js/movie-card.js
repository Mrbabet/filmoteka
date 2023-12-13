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
  return data.genres.map((genre) => genre.name);
};

const getYear = function (relesaseDate) {
  return relesaseDate ? relesaseDate.split("-")[0] : relesaseDate;
};

function getMovieImgPath(path) {
  return `https://www.themoviedb.org/t/p/w500${path}`;
}
export function getMarkupImgPoster(poster_path, name, title) {
  return `
<img src=" ${getMovieImgPath(poster_path)}" alt="${
    name || title
  }" loading="lazy" />`;
}
