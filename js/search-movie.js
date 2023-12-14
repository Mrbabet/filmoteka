import { fetchOnSearch } from "./api";
import { renderMovieCard } from "./movie-card";

let searchQuery = null;
export const onSubmit = function (e) {
  e.preventDefault();

  searchQuery = e.target.elements[0].value;

  fetchOnSearch(searchQuery).then((data) => {
    renderMovieCard(data);
  });
  e.target.reset();
};
