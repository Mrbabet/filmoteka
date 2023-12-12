import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "f38e9284b51d1fffd633993a0543994f";

const fetchDefaultMovies = async function () {
  const res = await axios.get(`${URL}trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(res.data);
  return res.data;
};

const fetchOnMovie = async function (movieID) {
  const res = await axios.get(`${URL}movie/${movieID}/videos`, {
    params: {
      api_key: API_KEY,
      id: movieID,
    },
  });
  console.log(res.data);
  return res.data;
};

const fetchMovieByID = async function (movieID) {
  const res = await axios.get(`${URL}movie/${movieID}`, {
    params: {
      api_key: API_KEY,
      id: movieID,
    },
  });
  console.log(res.data);
  return res.data;
};

const fetchOnSearch = async function (searchQuery) {
  const res = await axios.get(`${URL}search/movie?${searchQuery}`, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  console.log(res.data);
  return res.data;
};
const fetchPagination = async function (page, searchQuery = "") {
  if (searchQuery !== "") {
    const res = await axios.get(
      `${URL}search/movie?${searchQuery}&page=${page}`,
      {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          page: page,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } else {
    const res = await axios.get(`${URL}trending/movie/week?page=${page}`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    console.log(res.data);
    return res.data;
  }
};

export {
  fetchOnMovie,
  fetchMovieByID,
  fetchOnSearch,
  fetchPagination,
  fetchDefaultMovies,
};
