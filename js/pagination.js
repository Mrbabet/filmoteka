import { fetchPagination } from "./api";
import { renderMovieCard } from "./movie-card";
const nextBtn = document.querySelector(".pagination-next-btn");
const prevBtn = document.querySelector(".pagination-prev-btn");
const pagination = document.querySelector(".pagination-list-container");
const pagesToShow = 5;
let currentPage;
let totalPages;
let currentQuery = ""; // Keep track of the current search query

export const getPagination = async function (page = 1, query = "") {
  // Remove existing event listeners before setting up new ones
  nextBtn.removeEventListener("click", onNextClick);
  prevBtn.removeEventListener("click", onPrevClick);

  const data = await fetchPagination(page, query);

  currentPage = data.page;
  totalPages = data.total_pages;
  currentQuery = query; // Update the current search query

  renderMovieCard(data);
  renderPaginationContainer();
  renderList(currentPage, totalPages, query);

  // Set up new event listeners
  nextBtn.addEventListener("click", onNextClick);
  prevBtn.addEventListener("click", onPrevClick);

  console.log(currentPage, totalPages);
};

const renderPaginationContainer = function () {
  pagination.innerHTML = `<ul class="pagination__list"></ul>`;
};

const renderList = function (currentPage, totalPages, query) {
  const paginationList = document.querySelector(".pagination__list");
  paginationList.innerHTML = "";

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    const listItem = document.createElement("li");
    listItem.className = `pagination__item ${
      i === currentPage ? "pagination__on" : ""
    }`;
    listItem.id = i;
    listItem.textContent = i;
    listItem.addEventListener("click", () => getPagination(i, query));
    paginationList.appendChild(listItem);
  }
};

const onNextClick = function () {
  nextPage(currentPage, currentQuery);
};

const onPrevClick = function () {
  prevPage(currentPage, currentQuery);
};

const nextPage = function (currentPage, query) {
  if (currentPage < totalPages) {
    getPagination(currentPage + 1, query);
  }
};

const prevPage = function (currentPage, query) {
  if (currentPage > 1) {
    getPagination(currentPage - 1, query);
  }
};

// Initial setup of event listeners
nextBtn.addEventListener("click", onNextClick);
prevBtn.addEventListener("click", onPrevClick);
