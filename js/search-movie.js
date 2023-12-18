import { fetchOnSearch } from "./api";
import { renderMovieCard } from "./movie-card";
import { getPagination } from "./pagination";

let searchQuery = null;
export const onSubmit = function (e) {
  e.preventDefault();

  searchQuery = e.target.elements[0].value;

  fetchOnSearch(searchQuery).then((data) => {
    renderMovieCard(data);
    getPagination(1, searchQuery);
  });
  e.target.reset();
};
