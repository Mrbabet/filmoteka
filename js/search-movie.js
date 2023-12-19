import { fetchOnSearch } from "./api";
import { getPagination } from "./pagination";

let searchQuery = "";

export const onSubmit = async function (e) {
  e.preventDefault();
  setQuery(e.target.elements[0].value);

  const data = await fetchOnSearch(getQuery());
  getPagination(data.page, getQuery());

  e.target.reset();
};
const getQuery = function () {
  return searchQuery;
};

const setQuery = function (newQuery) {
  return (searchQuery = newQuery);
};
