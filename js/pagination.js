import { refs } from "../main";
import { fetchPagination } from "./api";
import { renderMovieCard } from "./movie-card";

const pagination = document.querySelector(".pagination-container");
const pagesToShow = 5;

export const getPagination = async function (page = 1, query = "", type) {
  fetchPagination(page, query, type).then((data) => {
    console.log(data.results);
    let currentPage = data.page;
    let totalPages = data.total_pages;

    renderMovieCard(data);
    renderPaginationContainer();
    renderList(currentPage, totalPages, query);
  });
};

const renderPaginationContainer = function () {
  pagination.innerHTML = `<button class="pagination__left-btn on" type="button" >
      <svg>
      <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
    </svg>
    </button>
    <ul class="pagination__list"></ul>
    <button class="pagination__right-btn on" type="button" >
      <svg>
        <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
      </svg>
    </button>`;
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

export const nextPage = function (currentPage, totalPages, query) {
  if (currentPage < totalPages) {
    getPagination(currentPage + 1, query);
  }
};

export const prevPage = function (currentPage, query) {
  if (currentPage > 1) {
    getPagination(currentPage - 1, query);
  }
};
